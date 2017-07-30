import React from 'react'
import Flight from './flight'
import {connect } from 'react-redux'



const flightsList = (props) => {
  console.log(props.flights)
  const flights = props.flights.map((flight, index) => <Flight key={index} flight={flight} />)

  return (
    <div><div className='flights-header'>
    Header
        </div>
        {flights}
    </div> )
}

const mapStateToProps = state => {
  return {flights: state.flights}
}



export default connect(mapStateToProps)(flightsList)
