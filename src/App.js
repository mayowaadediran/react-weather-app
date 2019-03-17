import React, { Component } from 'react';
import NavBar from './Components/NavBar/NavBar';
import CurrentWeather from './Components/CurrentWeather/CurrentWeather';
import LocationSelector from './Components/LocationSelector/LocationSelector';
import ForecastWeather from './Components/ForecastWeather/ForecastWeather';
import locationData from './locationData'

import './App.css';

class App extends Component {
  state = {
    locationData : locationData,
    selectedLocation: ''
  }

  handleChange = (e) => {
    this.setState({
      selectedLocation: e.target.value
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert("you selected" + this.state.selectedLocation);
    console.log(this.state.LocationData)
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
