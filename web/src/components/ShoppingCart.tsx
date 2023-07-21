import { useContext } from 'react';
import { BsCart3 } from 'react-icons/bs';
import { RxCross2 } from 'react-icons/rx';
import { Context } from '../context/Context';
import { IProduct } from '../context/Provider';

interface ICartItem extends IProduct {
  quantity?: number;
}

function ShoppingCart() {
  const { products, toggleRemoveProducts } = useContext(Context);

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

  const finalPrice = listItens.reduce((acc, item) => {
    if (item.quantity) {
      return acc + item.price * item.quantity;
    }
    return acc + item.price;
  }, 0);

  return (
    <aside className="flex flex-col fixed right-0 w-1/4 bg-cart max-h-screen min-h-screen shadow-2xl z-20 text-center p-5 justify-between">
      <h1 className="text-4xl font-bold p-5">Seu carrinho</h1>
      <div className="flex flex-col gap-4 w-full justify-center items-center">
        {products.length > 0 ? (
          <ul className="flex flex-col overflow-y-auto max-h-[500px] gap-2 scrollCart">
            {listItens.map((item, index) => {
              return (
                <li
                  className="flex flex-row w-full gap-2 bg-amber-100 justify-around max-h-28 items-center p-1 rounded-md shadow-lg"
                  key={index}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="rounded-full shadow"
                  />
                  <p className="w-1/2">{item.name}</p>
                  <span>Qntd: {item.quantity ? item.quantity : '1'}</span>
                  <p>
                    Subtotal:{' '}
                    {item.quantity
                      ? (item.quantity * item.price).toLocaleString('pt-BR', {
                          style: 'currency',
                          currency: 'BRL',
                          minimumFractionDigits: 2,
                        })
                      : item.price.toLocaleString('pt-BR', {
                          style: 'currency',
                          currency: 'BRL',
                          minimumFractionDigits: 2,
                        })}
                  </p>
                  <button onClick={() => toggleRemoveProducts({ ...item })}>
                    <RxCross2
                      size={30}
                      className="text-red-500 font-extrabold hover:scale-110"
                    />
                  </button>
                </li>
              );
            })}
          </ul>
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
          {finalPrice.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2,
          })}
        </p>
        <button className="bg-amber-900 hover:bg-amber-700 text-amber-100 p-4 font-bold uppercase tracking-wider text-2xl w-full">
          Finalizar Compra
        </button>
      </div>
    </aside>
  );
}

export default ShoppingCart;
