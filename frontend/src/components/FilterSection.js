import React, { useState } from 'react';
import '../styles.css';

function FilterSection({ onFilter }) {
  const [watering, setWatering] = useState('');
  const [sunlight, setSunlight] = useState('');

  const handleFilter = () => {
    onFilter({ watering, sunlight });
  };

  return (
    <div className="filter-section">
      <h2>Filter Plants</h2>
      <div className="filter-option">
        <label>Watering Level:</label>
        <select onChange={(e) => setWatering(e.target.value)}>
          <option value="">All</option>
          <option value="Frequent">Frequent</option>
          <option value="Average">Average</option>
          <option value="Minimum">Minimum</option>
          <option value="None">None</option>
        </select>
      </div>
      <div className="filter-option">
        <label>Sunlight:</label>
        <select onChange={(e) => setSunlight(e.target.value)}>
          <option value="">All</option>
          <option value="full sun">Full Sun</option>
          <option value="part shade">Part Shade</option>
          <option value="full shade">Full Shade</option>
        </select>
      </div>
      <button onClick={handleFilter}>Apply Filters</button>
    </div>
  );
}

export default FilterSection;
