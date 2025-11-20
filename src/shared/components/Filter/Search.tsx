import React, { type SetStateAction } from 'react';

interface Props {
  localSearch: string;
  setLocalSearch: React.Dispatch<SetStateAction<string>>;
}

const Search: React.FC<Props> = ({ localSearch, setLocalSearch }) => {
  return (
    <div>
      <input
        type="search"
        value={localSearch}
        onChange={(e) => setLocalSearch(e.target.value)}
        placeholder="Search"
        className="w-full"
      />
    </div>
  );
};

export default Search;
