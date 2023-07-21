import { useContext } from 'react'
import { Context } from '../context/Context';
import { ICartItem } from './ShoppingCart';
import { RxCross2 } from 'react-icons/rx';

interface IProps {
  listItens: ICartItem[];
}

function CartList({ listItens }: IProps) {
  const { toggleRemoveProducts } = useContext(Context);
  return (
    <ul className="flex flex-col overflow-y-auto max-h-[500px] gap-2 scrollCart">
            {listItens.map((item) => {
              return (
                <li
                  className="flex flex-row w-full gap-2 bg-amber-100 justify-around max-h-28 items-center p-1 rounded-md shadow-lg"
                  key={item._id}
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
  )
}

export default CartList