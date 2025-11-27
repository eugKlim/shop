import React, { useCallback, memo, type SetStateAction, type Dispatch } from 'react';
import type { IFilter } from '../../../types/Products';

interface Props {
  setFilters: Dispatch<SetStateAction<IFilter>>;
  title: string;
  brand: string;
  price: number;
}

const BrandItem: React.FC<Props> = ({ title, setFilters, brand, price }) => {
  const handleBrandClick = useCallback(() => {
    setFilters((prev) => ({
      ...prev,
      brand: brand,
      skip: 0,
    }));
  }, [setFilters, brand]);

  return (
    <div className="space-y-2 px-1 flex-1">
      <h3 className="font-semibold leading-5 line-clamp-2">{title}</h3>
      <div className="flex justify-between text-sm">
        <p>
          <span className="font-semibold">Brand:</span>{' '}
          <button
            className="text-blue-700"
            onClick={handleBrandClick}
          >
            {brand}
          </button>
        </p>
        <span className="text-green-600 font-semibold">{price}$</span>
      </div>
    </div>
  );
};

export default memo(BrandItem);
