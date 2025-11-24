import React from 'react';
import type { Dispatch, SetStateAction } from 'react';

interface Props {
  price: {
    min: string;
    max: string;
  };
  setPrice: Dispatch<SetStateAction<{ min: string; max: string }>>;
}

const Price: React.FC<Props> = ({ price, setPrice }) => {
  return (
    <div className="mt-6 mb-9">
      <h3 className="font-bold text-center mb-2 uppercase">Price</h3>

      <div>
        <label htmlFor="minPrice">Min price:</label>
        <input
          type="number"
          min={0}
          id="minPrice"
          value={price.min}
          onChange={(e) =>
            setPrice((prev) => ({ ...prev, skip: 0, min: e.target.value }))
          }
        />
      </div>

      <div className="mt-3">
        <label htmlFor="maxPrice">Max price:</label>
        <input
          type="number"
          min={0}
          id="maxPrice"
          value={price.max}
          onChange={(e) =>
            setPrice((prev) => ({ ...prev, skip: 0, max: e.target.value }))
          }
        />
      </div>
    </div>
  );
};

export default Price;
