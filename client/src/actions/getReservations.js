export default () => {

  return (dispatch) => {
    fetch('http://localhost:3001/api/reservations')
      .then((json) => (
        json.json()
      ).then((reservations) => {
      dispatch({type: "GET_RESERVATIONS", payload: reservations})}
      )

  )

}

}
