const reservations = (state={}, action) => {
  switch (action.type) {
    case 'ADD_TRAVELERS_INFO':
      return Object.assign({}, {traveler_info: action.payload})
    default:
      return state
  }
}

export default reservations
