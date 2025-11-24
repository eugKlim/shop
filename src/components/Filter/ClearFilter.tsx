import React from 'react';
import { FcClearFilters } from 'react-icons/fc';

interface IProps {
  handleClearFilter: () => void;
}

const ClearFilter: React.FC<IProps> = ({ handleClearFilter }) => {
  return (
    <button
      className="my-5 row-center border border-gray-500 rounded-md py-1 pr-4 pl-2 hover:text-white hover:bg-gray-600"
      onClick={handleClearFilter}
    >
      <FcClearFilters className="mr-2" /> Сlear the filter
    </button>
  );
};

export default ClearFilter;
