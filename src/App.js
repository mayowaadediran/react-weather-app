import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import About from './Pages/About';



import './App.css';

class App extends Component {
  // state = {
  //   locationData : locationData,
  //   selectedLocation: '',
  //   currentWeather: '',
  //   isLoading: false,
  // }

  // handleChange = (e) => {
  //   this.setState({
  //     selectedLocation: e.target.value
  //   })
  // };

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   this.getCurrentWeather();
  // }

  // // componentDidUpdate = (prevState) => {
  // //   if (this.state.currentWeather !== prevState.currentWeather) {
  // //     this.getCurrentWeather()
  // //   }
  // // }

  // getCurrentWeather() {
  //   const APIKEY = '320ecea5186519242dbb779eeba2757a';
  //   axios.get(`https://api.openweathermap.org/data/2.5/weather?id=${this.state.selectedLocation}&appid=${APIKEY}&units=metric`)
  //     .then(res => {
  //       this.setState({
  //         currentWeather: res.data
  //       })
  //     }) 
  //     .catch(error => {
  //       alert("Sorry", error.message)
  //     })
  // }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About} />
        </Switch>
        {/* <div className="Weather">
          <LocationSelector 
          locationData = {this.state.locationData} 
          selectedLocation = {this.state.selectedLocation}
          handleChange = {this.handleChange}
          handleSubmit = {this.handleSubmit}/>
          
        <div className="Weather-results">
          {!this.state.currentWeather ? 
          <div>
            <h1>
              Your result will be displayed here
            </h1>
          </div> : 
          <CurrentWeather 
          currentWeather = {this.state.currentWeather}/> }

          <ForecastWeather />
        </div>
        </div> */}
         
      </div>
    );
  }
}

export default App;
