import React from 'react';

const FilterTracking = ({ onFilterChange, placeholder, options }) => {
  const handleChange = (event) => {
    const value = event.target.value;
    onFilterChange(value);
  };

  return (
    <div className="mb-4 ">
      {options ? (
        <select
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded mr-[39px] ml-[10px]"
          defaultValue=""
        >
          <option value="">{placeholder}</option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          type="text"
          onChange={handleChange}
          placeholder={placeholder}
          className="p-2 border border-gray-300 rounded"
        />
      )}
    </div>
  );
};

export default FilterTracking;
