import ProductCard from './components/ProductCard';
import './styles/main.css';
import { mockData } from './utils/mockData';

function App() {
  return (
    <main className='flex justify-between bg-slate-100'>
      <header className='fixed top-0 w-full bg-header z-10 shadow-md'>
        <h1 className="text-4xl p-10">Fullstack Shopping Cart</h1>
      </header> 
      <section className='w-2/3 ml-10 mt-40'>
        <ul className="flex flex-wrap gap-4 justify-center">
          {mockData.map((item, index) => {
            return <ProductCard {...item} key={index} />;
          })}
        </ul>
      </section>
      <aside className='fixed right-0 w-1/4 bg-cart h-screen shadow-2xl z-20'>
        <h1 className="text-4xl font-bold">Seu carrinho</h1>
      </aside>
    </main>
  );
}

export default App;
