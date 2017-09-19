import React from 'react'
import {Segment} from 'semantic-ui-react'
export default ({reservation}) => (
  <Segment  style={{width: '30%', marginLeft: '2%'}}>

    {reservation.first_name} {reservation.last_name}  <strong>confirmation number:</strong> {reservation.confirmation_number} </Segment>
  )
