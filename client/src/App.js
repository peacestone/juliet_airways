import React, { Component } from 'react';
import FlightsInput from './containers/flightsInput'
import FlightsList from './components/flightsList'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { Segment, Header } from 'semantic-ui-react'
import TravelersDetailsInput from './containers/travelersDetailsInput'
import PaymentsInput from './containers/paymentsInput'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Segment inverted color='violet' > <Header style={{letterSpacing: '0.3em'}} size='huge'  id='logo'>Juliet Airways</Header> </Segment>
          <Route exact path='/' component={FlightsInput} />
          <Route exact path='/flights/travelersDetails' component={TravelersDetailsInput} />
          <Route exact path='/flights/payments' component={PaymentsInput} />
          <Route exact path='/flights' component={FlightsList} />
        </div>
      </Router>
    );
  }
}

export default App;
