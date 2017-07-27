import React, { Component } from 'react';
import './App.css';
import FlightsInput from './containers/flightsInput'
import FlightsList from './components/flightsList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <FlightsInput />
        <FlightsList />

        <test />
      </div>
    );
  }
}

export default App;
