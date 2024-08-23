import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FilterSection from './components/FilterSection';
import PlantList from './components/PlantList';

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FilterSection />
      <PlantList />
    </div>
  );
}

export default App;
