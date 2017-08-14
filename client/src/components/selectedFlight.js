import React from 'react'
import {Grid} from 'semantic-ui-react'

const SelectedFlight = props =>  ( <Grid.Row  verticalAlign='middle' >
  <Grid.Column textAlign='center'  width='14'>
    <span style={{fontSize: '13px'}}>Flight Number: {props.flight.flight_number}</span>
    <div className="timeInfo" style={{fontSize: '22px'}} >  {props.flight.departure_time}  >  {props.flight.arival_time}     Price: ${props.flight.price} <br /> Total Travel Time: {props.flight.total_fly_time}
    </div>
</Grid.Column>
</Grid.Row>
)

export default SelectedFlight
