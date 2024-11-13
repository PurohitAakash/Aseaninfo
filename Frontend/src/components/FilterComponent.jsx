
import React from "react";

const FilterComponent = ({ filterValue, setFilterValue }) => {
  const handleChange = (e) => {
    setFilterValue(e.target.value);
  };

  return (
    <div className="flex items-center justify-center space-x-4 mb-4">
      <label htmlFor="filter" className="text-lg font-semibold">
        Search by Name:
      </label>
      <input
        id="filter"
        type="text"
        value={filterValue}
        onChange={handleChange}
        className="border border-gray-300 rounded-md px-3 py-2"
        placeholder="Enter name..."
      />
    </div>
  );
};

export default FilterComponent;
