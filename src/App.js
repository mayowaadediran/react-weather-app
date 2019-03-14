import React, { Component } from 'react';
import NavBar from './Components/NavBar/NavBar';
import CurrentWeather from './Components/CurrentWeather/CurrentWeather';
import LocationSelector from './Components/ForecastWeather/ForecastWeather';
import ForecastWeather from './Components/ForecastWeather/ForecastWeather'

import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <NavBar />
        <LocationSelector />
        <CurrentWeather />
        <ForecastWeather />
        <h1>Weather</h1>
      </div>
    );
  }
}

export default App;
