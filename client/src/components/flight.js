import React from 'react'
import { Grid } from 'semantic-ui-react'

const flight = (props) => {
  return (
    <Grid.Row verticalAlign='middle' >
      <Grid.Column verticalAlign='middle' width='13'>
        Flight Number: {props.flight.flight_number} Departing: {props.flight.departure_city} Ariving: {props.flight.arival_city} Total amount of flying time: {props.flight.totalFlyTime}
        <span>Departure Time: {props.flight.departure_date_time}</span><span>Arival Time: {props.flight.arival_date_time}</span>
      </Grid.Column>
      <Grid.Column width='1'>
        Price: {props.flight.price}
      </Grid.Column>
    </Grid.Row>
  )
}

export default flight
