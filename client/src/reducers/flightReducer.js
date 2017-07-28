const flightReducer = (state = {isLoading: false, flights: []}, action) {
  switch (action.type) {
    case 'LOADING_FLIGHTS':
      return Object.assign({}, state, {isLoading: 'true'})
    case 'FETCH_FLIGHTS':
    return Object.assign({}, {isLoading: 'true', flights: action.payload})
      default:
        return state
      }
  }

  export default flightReducer
