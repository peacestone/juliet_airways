import React, { Component } from 'react';
import FlightsInput from './containers/flightsInput'
import FlightsList from './components/flightsList'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { Segment, Header } from 'semantic-ui-react'
import TravelersDetailsInput from './containers/travelersDetailsInput'
import PaymentsInput from './containers/paymentsInput'
import ReservationSuccess from './components/reservationSuccess'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Segment inverted color='violet' > <Header style={{letterSpacing: '0.3em'}} size='huge'  id='logo'><Link to='/' style={{color: '#fff'}} >Juliet Airways</Link></Header>  </Segment>
          <Route exact path='/' component={FlightsInput} />
          <Route exact path='/flights/travelersDetails' component={TravelersDetailsInput} />
          <Route exact path='/flights/payments' component={PaymentsInput} />
          <Route exact path='/reservations/success' component={ReservationSuccess} />
          <Route exact path='/flights' component={FlightsList} />
        </div>
      </Router>
    );
  }
}

export default App;
