import React from 'react'
import { Grid, Container } from 'semantic-ui-react'

const flight = (props) => {
  return (

    <Grid.Row  verticalAlign='middle' >
      <Grid.Column   width='14'>
        <span style={{fontSize: '13px'}}>Flight Number: {props.flight.flight_number}</span>
        <div className="timeInfo" style={{fontSize: '22px'}} >  {props.flight.departure_time}  >  {props.flight.arival_time} <br /> Total Travel Time: {props.flight.total_fly_time}
        </div>
      </Grid.Column>
      <Grid.Column id='price' width='2'>
        Price: ${props.flight.price}
        <Container className='hiddenText'text >Select</Container>

      </Grid.Column>
    </Grid.Row>
  )
}

export default flight
//hours = ((hours + 11) % 12 + 1);
