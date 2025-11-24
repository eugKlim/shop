import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Products from '../components/Products/Products';
import Filter from '../components/Filter/Filter';
import Pagination from '../components/Pagination/Pagination';
import { useGetProductsQuery } from '../services/productsApi';

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
  const page = filters.skip / filters.limit + 1;
  const totalPages = data ? Math.ceil(data.total / filters.limit) : 1;

  const goToPage = (p: number) => {
    setFilters((prev) => ({ ...prev, skip: prev.limit! * (p - 1) }));
  };

  return (
    <div className="container grid grid-cols-[300px_1fr] justify-between items-start">
      <Filter
        filters={filters}
        setFilters={setFilters}
        resetFilters={() => setFilters(initialFilters)}
      />

      <Products
        data={data}
        isLoading={isLoading}
        isError={isError}
        setFilters={setFilters}
      />

      {data?.total !== 0 && (
        <Pagination
          page={page}
          totalPages={totalPages}
          onPageChange={goToPage}
        />
      )}
    </div>
  );
};

export default HomePage;
