import React from 'react'
import Flight from './flight'



const flightsList = (props) => {
  const flights = [{flightNumber: 443, departing: 'jfk', ariving: 'lax', totalFlyTime: '4H 30M', price: 444, departureTime: 440, arivalTime: 900 }].map((flight, index) => <Flight key={index} flight={flight} />)

  return (
    <div><div className='flights-header'>
    Header
        </div>
        {flights}
    </div> )
}

export default flightsList
