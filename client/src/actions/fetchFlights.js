const fetchFlights = (dispatch) => {
  return (
    return (dispatch) => {
      dispatch({type: 'LOADING_FLIGHTS'})
      return fetch('http://localhost:3000/shopFlights')
        .then(response => JSON.parse(response) )
        .then((flights) => dispatch({type: 'FETCH_FLIGHTS', payload: flights })
  )
}

export default fetchFlights
