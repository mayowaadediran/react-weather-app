import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import About from './Pages/About';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About} />
        </Switch>
      </div>
    );
  }
}

export default App;
