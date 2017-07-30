import React from 'react'

const flight = (props) => {
  return (
    <div className='flight' >
      <div>Flight Number: {props.flight.flight_number} Departing: {props.flight.departure_city} Ariving: {props.flight.arival_city} Total amount of flying time: {props.flight.totalFlyTime} Price: {props.flight.price}  </div>
      <div className='flightTime'> <span>Departure Time: {props.flight.departure_date_time}</span><span>Arival Time: {props.flight.arival_date_time}</span> </div>
    </div>


  )
}

export default flight
