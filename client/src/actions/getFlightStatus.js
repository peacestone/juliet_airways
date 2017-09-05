export default (flightInfo) => {
  return (dispatch) => {
    dispatch({type: 'LOADING_FLIGHTS'})

    fetch('http://localhost:3001/api/flights/status', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({flights: flightInfo})
    })
    .then(
      response => response.json()
    .then(
        flight => { console.log(flight)
           dispatch({type: 'RECEIVE_FLIGHT_STATUS', payload: flight})}
      )
    )
  }
}
