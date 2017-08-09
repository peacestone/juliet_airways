

const flightReducer = (state = {isLoading: false, flights: { flights: [], request: {departure_city: '', arival_city: '', departure_date: ''} } }, action) => {
  switch (action.type) {
    case 'LOADING_FLIGHTS':
      return Object.assign({}, state, {isLoading: 'true'})
     case 'FETCH_FLIGHTS':
    return Object.assign({}, {isLoading: 'false', flights: action.payload})
    case 'SORT':



     const sortedFlights = Object.assign({}, state).flights.flights.sort((firstElement, secondElement) => {
         if ( firstElement[action.sortAttr] > secondElement[action.sortAttr]) {
           return 1}
         if ( firstElement[action.sortAttr] < secondElement[action.sortAttr] ) {
           return -1
         }
         else {
           return 0
         }
       })

     const newFlightsObj = Object.assign({}, state.flights, {flights: sortedFlights})

      return Object.assign({}, state, {flights: newFlightsObj})
      default:
        return state
      }

  }

  export default flightReducer
