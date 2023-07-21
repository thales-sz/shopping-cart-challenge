import { useContext } from "react";
import { Context } from "../context/Context";

interface ProductCardProps {
  image: string;
  name: string;
  price: number;
}

function ProductCard({ image, name, price }: ProductCardProps) {
  const { toggleProducts } = useContext(Context)

  return (
    <li className="flex flex-col text-center cursor-pointer w-1/5 items-center bg-white border hover:shadow-lg transition-all">
      <img src={image} alt={name} className="w-full p-3" />
      <div className="flex flex-col justify-around p-2 h-full border-t gap-4">
        <h1 className="font-extrabold">{name}</h1>
        <p className="font-extrabold text-3xl">
          {price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2,
          })}
        </p>
        <button
        className="bg-amber-200 hover:bg-amber-300 w-fit self-center p-2 hover:bg- rounded-xl shadow font-bold"
        onClick={() => toggleProducts({ name, image, price })}>
          Adicionar ao carrinho
        </button>
      </div>
    </li>
  );
}

export default ProductCard;
