

const flightReducer = (state = {isLoading: false, flights: { flights: [], request: {departure_city: '', arival_city: '', departure_date: ''} }, selectedFlight: {} }, action) => {
  switch (action.type) {
    case 'LOADING_FLIGHTS':
      return Object.assign({}, state, {isLoading: 'true'})
     case 'FETCH_FLIGHTS':
    return Object.assign({}, {isLoading: 'false', flights: action.payload})
    case 'SELECT_FLIGHT':
      return Object.assign({}, state, {selectedFlight: action.payload})
      default:
        return state
      }

  }

  export default flightReducer
