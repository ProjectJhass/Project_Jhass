import React, { useState } from 'react';

const Filter = ({ onFilterChange }) => {
  const [filter, setFilter] = useState('');

  const handleChange = (event) => {
    setFilter(event.target.value);
    onFilterChange(event.target.value);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        value={filter}
        onChange={handleChange}
        placeholder="Filtrar productos"
        className="p-2 border border-gray-300 rounded"
      />
    </div>
  );
}

export default Filter;
