interface ProductCardProps {
  image: string;
  name: string;
  price: number;
}

function ProductCard({ image, name, price }: ProductCardProps) {
  return (
    <li className="min-w-[346px] border shadow-lg text-left w-[30%] rounded-xl hover:scale-[1.02] transition-all cursor-pointer">
      <img src={image} alt={name} className="rounded-t-xl" />
      <div className="p-2">
        <h1 className="font-extrabold">{name}</h1>
        <p className="font-extrabold text-2xl">
          {price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2,
          })}
        </p>
      </div>
    </li>
  );
}

export default ProductCard;
