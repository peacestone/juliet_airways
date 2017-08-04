const flightReducer = (state = {isLoading: false, flights: { flights: [] } }, action) => {
  switch (action.type) {
    case 'LOADING_FLIGHTS':
      return Object.assign({}, state, {isLoading: 'true'})
    case 'FETCH_FLIGHTS':
    return Object.assign({}, {isLoading: 'false', flights: action.payload})
      default:
        return state
      }
  }

  export default flightReducer
