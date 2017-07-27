import React from 'react'

const flight = (props) => {
  return (
    <div className='flight' >
      <div>Flight Number: {props.flight.flightNumber} Departing: {props.flight.departing} Ariving: {props.flight.ariving} Total amount of flying time: {props.flight.totalFlyTime} Price: {props.flight.price}  </div>
      <div className='flightTime'> <span>Departure Time: {props.flight.departureTime}</span><span>Arival Time: {props.flight.arivalTime}</span> </div>
    </div>


  )
}

export default flight
