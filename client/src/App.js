import React, { Component } from 'react';
import './App.css';
import FlightsInput from './containers/flightsInput'
import FlightsList from './components/flightsList'
import { BrowserRouter as Router, Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <h1 id='logo'>Juliet Airways</h1>
          <Route exact path='/' component={FlightsInput} />
          <Route exact path='/flights' component={FlightsList} />
        </div>
      </Router>
    );
  }
}

export default App;
