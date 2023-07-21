import { useQuery } from 'react-query';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import ShoppingCart from './components/ShoppingCart';
import './styles/main.css';
import { api } from './api/axiosInstance';
import Loading from './components/Loading';
import { IProduct } from './context/Provider';

const getProducts = async () => {
  const { data } = await api.get('/products');
  return data;
};

function App() {
  const { data, isLoading } = useQuery({
    queryFn: getProducts,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 10,
  });

  return (
    <main className="flex justify-between bg-slate-100 min-h-screen">
      <Header />
      <section className="w-2/3 ml-10 mt-40">
        <ul className="flex flex-wrap gap-4 justify-center">
          {isLoading ? (
            <Loading />
          ) : (
            data?.map((item: IProduct, index: number) => {
              return <ProductCard {...item} key={index} />;
            })
          )}
        </ul>
      </section>
      <ShoppingCart />
    </main>
  );
}

export default App;
