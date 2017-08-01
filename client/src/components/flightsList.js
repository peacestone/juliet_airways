import React from 'react'
import Flight from './flight'
import {connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'



const flightsList = (props) => {
  console.log(props.flights)
  const flights = props.flights.map((flight, index) => <Flight key={index} flight={flight} /> )

  return (
    <div id='flights-list'><div className='flights-header'>
    <NavLink to='/'>Search Again</NavLink>
        </div>
        <Grid celled verticalAlign='middle' >
        {flights}
        </Grid>
    </div> )
}

const mapStateToProps = state => {
  return {flights: state.flights}
}



export default connect(mapStateToProps)(flightsList)
