import React from 'react'
import Flight from './flight'
import {connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Grid , Segment, Row, Container} from 'semantic-ui-react'



const flightsList = (props) => {
  console.log(props.flights)
  //const flights = props.flights.map((flight, index) => <Flight key={index} flight={flight} /> )
  const flights = [{flight_number: 510, departure_city: "JFK", arival_city: "LAX", departure_date_time: '2018-03-22 11:18:00', arival_date_time: '2018-03-22 14:19:00', price: 350},{flight_number: 111, departure_city: "JFK", arival_city: "FLL", departure_date_time: '2018-03-22 08:30:00', arival_date_time: '2018-03-22 10:50:00', price: 200 }].map((flight, index) => <Flight key={index} flight={flight} /> )
  return (
    <div id='flights-list'><div className='flights-header'>
    <NavLink to='/'>Search Again</NavLink>
        </div>
      <Container  style={{fontSize: '18px', lineHeight: '200%'}}>
        <Grid  celled style={{maxWidth: '800px', margin: 'auto'}} >
        <Grid.Row > FLL > JFK <br /> Friday, September 1, 2017</Grid.Row> 
        {flights}
        </Grid>
      </Container>

    </div> )
}

const mapStateToProps = state => {
  return {flights: state.flights}
}



export default connect(mapStateToProps)(flightsList)
