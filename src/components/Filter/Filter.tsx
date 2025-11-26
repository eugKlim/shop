import {
  useEffect,
  useState,
  useRef,
  type Dispatch,
  type SetStateAction,
} from 'react';
import type { IFilter } from '../../types/Products';
import useDebounce from '../../hooks/useDebounce';
import { useGetFacetsQuery } from '../../services/productsApi';
import Search from './Search';
import Price from './Price';
import Brands from './Brands';
import Device from './Device';
import ClearFilter from './ClearFilter';
import FilterSkeleton from './FilterSkeleton';

interface Props {
  filters: IFilter;
  setFilters: Dispatch<SetStateAction<IFilter>>;
  resetFilters: () => void;
}

const Filter: React.FC<Props> = ({ filters, setFilters, resetFilters }) => {
  const { data, isLoading, isError } = useGetFacetsQuery(null);

  const isFirstRender = useRef(true);
  const prevDebounceValues = useRef({
    search: filters.q,
    minPrice: filters.minPrice,
    maxPrice: filters.maxPrice,
  });

  const [localSearch, setLocalSearch] = useState(filters.q);
  const debounceSearch = useDebounce(localSearch);

  const [price, setPrice] = useState({
    min: filters.minPrice,
    max: filters.maxPrice,
  });
  const debounceMinPrice = useDebounce(price.min);
  const debounceMaxPrice = useDebounce(price.max);

  const handleClearFilter = () => {
    setLocalSearch('');
    resetFilters();
    setPrice({
      min: '',
      max: '',
    });
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      prevDebounceValues.current = {
        search: debounceSearch,
        minPrice: debounceMinPrice,
        maxPrice: debounceMaxPrice,
      };
      return;
    }

    const searchChanged = prevDebounceValues.current.search !== debounceSearch;
    const minPriceChanged =
      prevDebounceValues.current.minPrice !== debounceMinPrice;
    const maxPriceChanged =
      prevDebounceValues.current.maxPrice !== debounceMaxPrice;

    prevDebounceValues.current = {
      search: debounceSearch,
      minPrice: debounceMinPrice,
      maxPrice: debounceMaxPrice,
    };

    if (searchChanged || minPriceChanged || maxPriceChanged) {
      setFilters((prev) => ({
        ...prev,
        q: debounceSearch,
        minPrice: debounceMinPrice,
        maxPrice: debounceMaxPrice,
        skip: 0,
      }));
    }
  }, [debounceSearch, debounceMinPrice, debounceMaxPrice, setFilters]);

  if (isLoading) return <FilterSkeleton />;
  if (isError) return <div>Error loading filter</div>;

  return (
    <section className="w-full laptop:w-[230px] laptop:max-w-[230px] laptop:min-w-[230px] laptop:flex-shrink-0 laptop:flex-none filter-section p-4 pt-4 laptop:pt-10 bg-gray-200 rounded-3xl shadow-[0px_0px_8px_0px_rgba(0,0,0,0.35)] dark:bg-gray-800 dark:text-white">
      <Search localSearch={localSearch} setLocalSearch={setLocalSearch} />
      <Price price={price} setPrice={setPrice} />
      <hr className="text-gray-400" />
      <ClearFilter handleClearFilter={handleClearFilter} />
      <hr className="text-gray-400" />
      <Brands data={data?.brands} setFilters={setFilters} filters={filters} />
      <hr className="text-gray-400" />
      <Device
        data={data?.deviceTypes}
        setFilters={setFilters}
        filters={filters}
      />
    </section>
  );
};

export default Filter;
