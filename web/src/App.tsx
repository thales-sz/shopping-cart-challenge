import ProductCard from './components/ProductCard';
import './styles/main.css';
import { mockData } from './utils/mockData';

function App() {
  return (
    <main>
      <ul className="flex flex-wrap gap-5 justify-center">
        {mockData.map((item, index) => {
          return <ProductCard {...item} key={index} />;
        })}
      </ul>
    </main>
  );
}

export default App;
