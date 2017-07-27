import React, { Component } from 'react';
import './App.css';
import FlightsInput from './containers/flightsInput'

class App extends Component {
  render() {
    return (
      <div className="App">
        <FlightsInput />
        <test />
      </div>
    );
  }
}

export default App;
