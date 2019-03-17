import React, { Component } from 'react';
import axios from 'axios';

import NavBar from './Components/NavBar/NavBar';
import CurrentWeather from './Components/CurrentWeather/CurrentWeather';
import LocationSelector from './Components/LocationSelector/LocationSelector';
import ForecastWeather from './Components/ForecastWeather/ForecastWeather';
import locationData from './locationData'


import './App.css';

class App extends Component {
  state = {
    locationData : locationData,
    selectedLocation: '',
    currentWeather: '',
  }

  handleChange = (e) => {
    this.setState({
      selectedLocation: e.target.value
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.getCurrentWeather()
  }

  getCurrentWeather() {
    const APIKEY = '320ecea5186519242dbb779eeba2757a';
    axios.get(`https://api.openweathermap.org/data/2.5/weather?id=${this.state.selectedLocation}&appid=${APIKEY}`)
      .then(res => {
        this.setState({
          currentWeather: res.data
        })
      })
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <LocationSelector 
          locationData = {this.state.locationData} 
          selectedLocation = {this.state.selectedLocation}
          handleChange = {this.handleChange}
          handleSubmit = {this.handleSubmit}/>
        <CurrentWeather />
        <ForecastWeather />
      </div>
    );
  }
}

export default App;
