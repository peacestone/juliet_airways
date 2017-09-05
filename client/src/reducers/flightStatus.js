export default (state = {toggleStatusTable: false, flight: {} }, action) => {
  switch (action.type) {
<<<<<<< HEAD
    case 'DISABLE_STATUS_TABLE':
=======
    case 'TOGGLE_OFF_STATUS_TABLE':
>>>>>>> db66ebf7480e82ef1263e6f6f1a6150521a098e3
      //const isNotOn = state.toogleStatusTable != true
      return Object.assign({}, state, {toggleStatusTable: false });
    case 'RECEIVE_FLIGHT_STATUS':
      return Object.assign({}, state, {toggleStatusTable: true }, action.payload)
    default:
      return state
  }
}
