import React from 'react'
import {Redirect} from 'react-router'
import {connect} from 'react-redux'
import ReservationSuccess from './reservationSuccess'
const reservationResults = (props) => {

if (!props.errors.error) {
  return <ReservationSuccess />
}
//props.history.goBack()
return <Redirect to='/' />
}

const mapStateToProps = state => (
  {errors: state.reservations}
)

export default connect(mapStateToProps)(reservationResults)
