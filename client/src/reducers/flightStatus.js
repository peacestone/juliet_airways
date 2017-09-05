export default (state = {toggleStatusTable: false, flight: {} }, action) => {
  switch (action.type) {
    case 'TOGGLE_OFF_STATUS_TABLE':
      //const isNotOn = state.toogleStatusTable != true
      return Object.assign({}, state, {toggleStatusTable: false });
    case 'RECEIVE_FLIGHT_STATUS':
      return Object.assign({}, state, {toggleStatusTable: true }, action.payload)
    default:
      return state
  }
}
