export default (flightInfo) => {
  return (dispatch) => {
    dispatch({type: 'LOADING_FLIGHTS'})

    fetch('http://localhost:3001/api/flights')
  }
}
