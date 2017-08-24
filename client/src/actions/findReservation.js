export default (reservation_query) => {
  return (dispatch) => {
    dispatch({type: 'FETCHING_RESERVATION'})

    fetch('http://localhost:3001/api/reservations/find', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({reservation: reservation_query})
    })

    .then(response => response.json())
    .then(reservation => dispatch({type: 'RECIEVE_RESERVATION', payload: {reservation}}))
    .then( data => console.log(data))
  }
}
