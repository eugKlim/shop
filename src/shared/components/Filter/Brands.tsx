import React from 'react';
import type { Dispatch, SetStateAction } from 'react';
import type { IFilter, IFilterItem } from '../../types/Products';

interface Props {
  data: IFilterItem[];
  setFilters: Dispatch<SetStateAction<IFilter>>;
  filters: IFilter;
}
const Brands: React.FC<Props> = ({ data, setFilters, filters }) => {
  return (
    <div className="my-6">
      <h3 className="font-bold uppercase text-center mb-4">Brands</h3>
      {data.map(({ count, key }) => (
        <button
          key={key}
          className={`block mb-3 hover:text-red-600 ${
            filters.brand === key && 'text-red-700'
          }`}
          onClick={() =>
            setFilters((prev) => ({ ...prev, skip: 0, brand: key }))
          }
        >
          {key} ({count})
        </button>
      ))}
    </div>
  );
};

export default Brands;
