import React from 'react'
import {Segment, Container, Header } from 'semantic-ui-react'
import {connect} from 'react-redux'
import Loader from './loader'

const Success = ({reservation, isFetching}) => (
  <Container  >
    {isFetching === 'true' ? <Loader /> : null}
    <Header block size='huge'>Your Reservation Details</Header>
    <Container style={{width: '59%' , float: 'left'}}>
      <Segment >
        <Header>Flight Resevation<div style={{float: 'right', border: 'dashed 2px grey', paddingRight: '4%', paddingLeft: '4%', textAlign: 'center'}}>Flight Confirmation #<br /> {reservation.confirmation_number}</div> </Header>
          <strong>Juliet Airlines</strong> JL {reservation.flight.flight_number}  <br /> <br />
          <span><strong>Departs:</strong> {reservation.flight.departure_city}  <br />
          {reservation.flight.departure_date}, {reservation.flight.departure_time} </span> <br /> <br />
          <span><strong>Arives:</strong> {reservation.flight.arival_city}<br /> {reservation.flight.departure_date}, {reservation.flight.arival_time} </span>
          <Header dividing>Passenger Info</Header>
          <strong>Name: </strong> <span> {reservation.first_name} {reservation.middle_name} {reservation.last_name} </span> <br />
          <strong>Seat:</strong> <span>16D</span>
      </Segment>
    </Container>

    <Container style={{width: '39%', float: 'right' }} >
      <Segment >
        <Header dividing size='large'>Payment Summary</Header>
        {reservation.payment_info && (<div><strong style={{marginRight: '4%'}}>Method of Payment:</strong><span> VI {reservation.payment_info.card_number}</span></div>)} <br />
        <strong style={{marginRight: '4%'}}>Total Price:</strong>
        <span>${reservation.flight.price}</span>
      </Segment>
    </Container  >


  </Container>
)

const mapStateToProps = state => {
  return {reservation: state.reservations.reservation, isFetching: state.reservations.isFetching}
}

export default connect(mapStateToProps)(Success)
