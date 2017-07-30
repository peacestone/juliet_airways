import fetch from 'isomorphic-fetch'


const fetchFlights = () => {

  return (
    (dispatch) => {
     dispatch({type: 'LOADING_FLIGHTS'})
     return fetch('http://localhost:3001/api/find-flights', {method: 'POST'} )
       .then(response => JSON.parse(response) )
       .then((flights) => dispatch({type: 'FETCH_FLIGHTS', payload: flights })
       .then(flights => flights)
     )
   }  )
}

export default fetchFlights
