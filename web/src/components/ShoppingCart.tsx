import { useState } from 'react';
import { BsCart3 } from 'react-icons/bs';

function ShoppingCart() {
  const [cartItens, setCartItens] = useState([]);

  return (
    <aside className="flex flex-col fixed right-0 w-1/4 bg-cart h-screen shadow-2xl z-20 text-center p-5 justify-between">
      <h1 className="text-4xl font-bold p-5">Seu carrinho</h1>
      <div className="flex flex-col gap-4 w-full justify-center items-center">
        {cartItens.length > 0 ? (
          <p>Itens</p>
        ) : (
          <>
            <BsCart3 size={150} />
            <p className="font-bold text-2xl">Seu carrinho está vazio!</p>
          </>
        )}
      </div>
      <div className="flex flex-col gap-4 w-full justify-center items-center">
        <p className="font-bold text-2xl">Subtotal:</p>
        <button className="bg-amber-900 hover:bg-amber-700 text-amber-100 p-4 font-bold uppercase tracking-wider text-2xl w-full">
          Finalizar Compra
        </button>
      </div>
    </aside>
  );
}

export default ShoppingCart;
