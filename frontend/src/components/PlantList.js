import React, { useState, useEffect } from 'react';
import './PlantList.css';  // Make sure to add some CSS for styling

function PlantList() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    // Fetch the plants data from the API
    const fetchPlants = async () => {
      try {
        const response = await fetch('/api/plants', {
          headers: {
            'x-api-key': 'yourGeneratedAPIKey12345'
          }
        });
        const data = await response.json();
        setPlants(data);
      } catch (err) {
        console.error('Failed to fetch plants:', err);
      }
    };

    fetchPlants();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div className="plant-list">
      {plants.length > 0 ? (
        plants.map(plant => (
          <div key={plant._id} className="plant-card">
            <img src={plant.default_image.thumbnail} alt={plant.common_name} />
            <h3>{plant.common_name}</h3>
            <p>Scientific Name: {plant.scientific_name.join(', ')}</p>
            <p>Watering: {plant.watering}</p>
            <p>Sunlight: {plant.sunlight.join(', ')}</p>
          </div>
        ))
      ) : (
        <p>Loading plants...</p>
      )}
    </div>
  );
}

export default PlantList;
