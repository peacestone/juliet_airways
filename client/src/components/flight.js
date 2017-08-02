import React from 'react'
import { Grid, Container } from 'semantic-ui-react'

const flight = (props) => {

  const formatTime = time => {
    const timeObj = new Date(time)
    return (
    timeObj.getHours() + ":" + timeObj.getMinutes()
  )}

  return (
    <Grid.Row  verticalAlign='middle' >
      <Grid.Column   width='14'>
        <span style={{fontSize: '13px'}}>Flight Number: {props.flight.flight_number}</span>
        <div className="timeInfo" style={{fontSize: '22px'}} >  {formatTime(props.flight.departure_date_time)}  >  {formatTime(props.flight.arival_date_time)}
        </div>
      </Grid.Column>
      <Grid.Column width='2'>
        Price: ${props.flight.price}
      </Grid.Column>
    </Grid.Row>
  )
}

export default flight
