// src/components/PlantCard.js
import React from 'react';
import '../styles.css';

function PlantCard({ plant }) {
  return (
    <div className="plant-card">
      <img src={plant.default_image.thumbnail} alt={plant.common_name} />
      <h3>{plant.common_name}</h3>
      <p>Type: {plant.type}</p>
      <p>Sunlight: {plant.sunlight.join(', ')}</p>
      <p>Watering: {plant.watering}</p>
      <p>Family: {plant.family || 'Unknown Family'}</p>
      <p>Origin: {plant.origin.join(', ')}</p>
    </div>
  );
}

export default PlantCard;
