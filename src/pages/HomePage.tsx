import Products from '../shared/components/Products/Products';
import Filter from '../shared/components/Filter/Filter';

const HomePage = () => {
  return (
    <div className="container grid grid-cols-[300px_1fr] justify-between items-start">
      <Filter />
      <Products />
    </div>
  );
};

export default HomePage;
