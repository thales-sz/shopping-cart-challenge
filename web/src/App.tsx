import Header from './components/Header';
import ProductCard from './components/ProductCard';
import ShoppingCart from './components/ShoppingCart';
import './styles/main.css';
import { mockData } from './utils/mockData';

function App() {
  return (
    <main className='flex justify-between bg-slate-100'>
      <Header />
      <body className='w-2/3 ml-10 mt-40'>
        <ul className="flex flex-wrap gap-4 justify-center">
          {mockData.map((item, index) => {
            return <ProductCard {...item} key={index} />;
          })}
        </ul>
      </body>
      <ShoppingCart />
    </main>
  );
}

export default App;
