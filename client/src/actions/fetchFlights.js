import fetch from 'isomorphic-fetch'
var myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

const fetchFlights = (flightInput) => {
  return (
    (dispatch) => {
     dispatch({type: 'LOADING_FLIGHTS'})
     return fetch('http://localhost:3001/api/find-flights', {
      headers: myHeaders,
       method: 'POST',
       //body: JSON.stringify({flights: flightInput})
       body: JSON.stringify({flights: {departure_city: 'JFK', arival_city: "FLL", departure_date: '2018-03-22'}})

        }
      )
       .then(response => response.json() )
       .then((flights) => {return dispatch({type: 'FETCH_FLIGHTS', payload: flights })})
       .then(flights => console.log(flights.payload))
     }
   )
 }

export default fetchFlights
