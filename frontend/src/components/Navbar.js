import React from 'react';
import '../styles.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">Plant Garden</h1>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#plants">Plants</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
