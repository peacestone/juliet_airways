import React from 'react'
import {Segment, Header} from 'semantic-ui-react'
import {connect } from 'react-redux'

const tripSummary = (props) => (
  <Segment  floated='right' style={{width: '15%'}} raised>
  {console.log(props)}
    <Header>Flight Itinerary</Header>

    <strong>{props.request.departure_city}</strong> <br />
    <span>Departs: {props.request.departure_date}, {props.selectedFlight.departure_time} </span> <br /> <br />
    <strong>{props.request.arival_city}</strong> <br />
    <span>Arives: {props.request.departure_date}, {props.selectedFlight.arival_time}</span><br /> <br />
    <span>Total:</span><strong>${props.selectedFlight.price}</strong>

  </Segment>
)

const mapStateToProps = state => (
  {request: state.flights.request, selectedFlight: state.selectedFlight}
)


export default connect(mapStateToProps)(tripSummary)
