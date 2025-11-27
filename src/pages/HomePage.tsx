import { useEffect, useState, useMemo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import Products from '../components/Products/Products';
import Filter from '../components/Filter/Filter';
import Pagination from '../components/Pagination/Pagination';
import { useGetProductsQuery } from '../services/productsApi';
import { HiFilter } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';

const LIMIT = 9;

const initialFilters = {
  q: '',
  minPrice: '',
  maxPrice: '',
  brand: '',
  deviceType: '',
  skip: 0,
  limit: LIMIT,
};

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState(() => ({
    q: searchParams.get('q') || '',
    minPrice: searchParams.get('minPrice') || '',
    maxPrice: searchParams.get('maxPrice') || '',
    brand: searchParams.get('brand') || '',
    deviceType: searchParams.get('deviceType') || '',
    skip: Number(searchParams.get('skip') || 0),
    limit: Number(searchParams.get('limit') || LIMIT),
  }));
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (typeof value === 'string' && value !== '') {
        params.set(key, value);
      }

      if (typeof value === 'number') {
        params.set(key, String(value));
      }
    });
    setSearchParams(params);
  }, [filters]);

  const { data, isLoading, isError } = useGetProductsQuery(filters);

  const page = useMemo(
    () => filters.skip / filters.limit + 1,
    [filters.skip, filters.limit]
  );
  const totalPages = useMemo(
    () => (data ? Math.ceil(data.total / filters.limit) : 1),
    [data, filters.limit]
  );

  const goToPage = useCallback(
    (p: number) => {
      setFilters((prev) => ({ ...prev, skip: prev.limit! * (p - 1) }));
    },
    [setFilters]
  );

  const toggleFilter = useCallback(() => {
    setIsFilterOpen((prev) => !prev);
  }, []);

  const resetFilters = useCallback(() => {
    setFilters(initialFilters);
  }, [setFilters]);

  return (
    <div>
      <div className="container">
        <button
          onClick={toggleFilter}
          className="laptop:hidden mb-4 px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center gap-2 hover:bg-blue-700"
        >
          <HiFilter size={20} />
          Фильтры
        </button>

        <>
          <div
            className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 laptop:hidden transition-opacity duration-300 ${
              isFilterOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            onClick={toggleFilter}
          />
          <div
            className={`fixed top-0 left-0 h-full w-80 bg-white dark:bg-gray-800 shadow-2xl z-50 overflow-y-auto laptop:hidden transform transition-transform duration-300 ${
              isFilterOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-bold">Фильтры</h2>
              <button
                onClick={toggleFilter}
                className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
              >
                <IoClose size={24} />
              </button>
            </div>
            <Filter
              filters={filters}
              setFilters={setFilters}
              resetFilters={resetFilters}
            />
          </div>
        </>

        <div className="flex laptop:flex-row gap-4 laptop:gap-6 items-start">
          <div className="hidden laptop:block laptop:w-[230px] laptop:shrink-0">
            <Filter
              filters={filters}
              setFilters={setFilters}
              resetFilters={resetFilters}
            />
          </div>

          <div className="w-full laptop:flex-1">
            <Products
              data={data}
              isLoading={isLoading}
              isError={isError}
              setFilters={setFilters}
            />
          </div>
        </div>
      </div>

      <div>
        {(data?.total as number) > 9 && (
          <Pagination
            page={page}
            totalPages={totalPages}
            onPageChange={goToPage}
          />
        )}
      </div>
    </div>
  );
};

export default HomePage;
