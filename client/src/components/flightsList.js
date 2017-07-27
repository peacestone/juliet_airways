import React from 'react'
import Flight from './flight'



const flightsList = (props) => {
  const flight = [].map((flight, index) => <Flight key={index} flight={flight} />)
  return {flights}
}

export default flightsList
