import fetch from 'isomorphic-fetch'
var myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

const fetchFlights = (flightInput) => {
  return (
    (dispatch) => {
     dispatch({type: 'LOADING_FLIGHTS'})
      fetch('http://localhost:3001/api/find-flights', {
      headers: myHeaders,
       method: 'POST',
       //body: JSON.stringify({flights: flightInput})
       body: JSON.stringify(
         {flights: {departure_city: 'ATL', arival_city: "JFK", departure_date: '2017-10-22'}})

        }
      )
       .then(response => response.json() )

       .then((flights) => {return dispatch({type: 'RECEIVE_FLIGHTS', payload: flights })})
     }
   )
 }

export default fetchFlights
