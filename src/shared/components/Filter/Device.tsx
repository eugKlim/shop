import React from 'react';
import type { IFilter, IFilterItem } from '../../types/Products';
import type { Dispatch, SetStateAction } from 'react';

interface Props {
  data: IFilterItem[];
  setFilters: Dispatch<SetStateAction<IFilter>>;
  filters: IFilter;
}

const Device: React.FC<Props> = ({ data, setFilters, filters }) => {
  return (
    <div className="my-6">
      <h3 className="font-bold uppercase text-center mb-4">Device type</h3>
      {data.map(({ count, key }) => (
        <button
          key={key}
          className={`block mb-3 first-letter:uppercase hover:text-red-600  ${
            filters.deviceType === key && 'text-red-700'
          }`}
          onClick={() =>
            setFilters((prev) => ({ ...prev, skip: 0, deviceType: key }))
          }
        >
          {key} ({count})
        </button>
      ))}
    </div>
  );
};

export default Device;
