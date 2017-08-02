import React, { Component } from 'react';
import FlightsInput from './containers/flightsInput'
import FlightsList from './components/flightsList'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { Segment, Header } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Segment>         <h1 id='logo'>Juliet Airways</h1> </Segment>
          <Route exact path='/' component={FlightsInput} />
          <Route exact path='/flights' component={FlightsList} />
        </div>
      </Router>
    );
  }
}

export default App;
