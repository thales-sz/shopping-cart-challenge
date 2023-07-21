import { useContext } from 'react';
import { BsCart3 } from 'react-icons/bs';
import { Context } from '../context/Context';
import { IProduct } from '../context/Provider';
import { useMutation } from 'react-query';
import { api } from '../api/axiosInstance';
import CartList from './CartList';
import Loading from './Loading';

export interface ICartItem extends IProduct {
  quantity?: number;
}

interface RequestBody {
  products: IProduct[];
  totalPrice: number;
}

const postOrder = async (body: RequestBody) => {
  const requestBody = {
    products: body.products.map((item) => item._id),
    totalPrice: body.totalPrice,
  };
  const { data } = await api.post('/orders', requestBody);
  return data;
};

function ShoppingCart() {
  const { products } = useContext(Context);

  const { mutateAsync, isLoading, isSuccess } = useMutation({
    mutationFn: postOrder,
  });

  const listItens = products.reduce((acc: ICartItem[], item: ICartItem) => {
    if (acc.some((product) => product.name === item.name)) {
      return acc.map((product) => {
        if (product.name === item.name) {
          return {
            ...product,
            quantity: product.quantity ? product.quantity + 1 : 2,
          };
        }
        return product;
      });
    }
    return [...acc, item];
  }, []);

  const totalPrice = listItens.reduce((acc, item) => {
    if (item.quantity) {
      return acc + item.price * item.quantity;
    }
    return acc + item.price;
  }, 0);

  return (
    <aside className="flex flex-col fixed right-0 w-1/4 bg-cart max-h-screen min-h-screen shadow-2xl z-20 text-center p-5 justify-between items-center">
      <h1 className="text-4xl font-bold p-5">Seu carrinho</h1>
      {isLoading ? (
        <Loading />
      ) : isSuccess ? (
        <h1 className="text-4xl font-bold p-5 mb-60">Compra finalizada com sucesso!</h1>
      ) : (
        <>
          <div className="flex flex-col gap-4 w-full justify-center items-center">
            {products.length > 0 ? (
              <CartList listItens={listItens} />
            ) : (
              <>
                <BsCart3 size={150} />
                <p className="font-bold text-2xl">Seu carrinho está vazio!</p>
              </>
            )}
          </div>
          <div className="flex flex-col gap-4 w-full justify-center items-center">
            <p className="font-bold text-2xl">
              Total:{' '}
              {totalPrice.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 2,
              })}
            </p>
            <button
              className="bg-amber-900 hover:bg-amber-700 text-amber-100 p-4 font-bold uppercase tracking-wider text-2xl w-full"
              onClick={() => mutateAsync({ products, totalPrice: totalPrice })}
            >
              Finalizar Compra
            </button>
          </div>
        </>
      )}
    </aside>
  );
}

export default ShoppingCart;
