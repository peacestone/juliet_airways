import fetch from 'isomorphic-fetch'

const createReservation = (travelerAndFlightInfo) => (
   (dispatch) => {
    dispatch({type: 'FETCHING_RESERVATION'})

    fetch('http://localhost:3001/api/reservation', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({reservation: travelerAndFlightInfo})
    })
    .then(response => response.json())
    .then(json => dispatch({action: 'RECIEVE_RESERVATION' , json}))
    .then(json => console.log(json))


  }

)

export default createReservation
