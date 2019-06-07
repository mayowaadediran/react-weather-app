import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
      </div>
    );
  }
}

export default App;
