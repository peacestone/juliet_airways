const reservations = (state={isFetching: false}, action) => {
  switch (action.type) {
    case 'ADD_TRAVELERS_DETAILS':
      return Object.assign({}, {traveler_info: action.payload})
      case 'FETCHING_RESERVATION':
        return Object.assign({}, state, {isFetching: 'true'})
      case 'RECIEVE_RESERVATION':
        return Object.assign({}, state, {isFetching: 'false'}, {reservation: action.payload})
    default:
      return state
  }
}

export default reservations
