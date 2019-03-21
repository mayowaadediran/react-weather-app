import React from 'react';
import About from '../About/About';
import './NavBar.css'


const NavBar = () => {
  return (
    <nav>
      <h1>Weather Now Now</h1>
      <p>Weather conditions for locations in Nigeria</p>
      <About />
    </nav>
  );
}

export default NavBar

