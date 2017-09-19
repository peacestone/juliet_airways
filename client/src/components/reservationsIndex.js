import React from "react"
import getReservations from '../actions/getReservations'
import {bindActionCreators} from 'redux'
import {connect } from 'react-redux'
import Reservation from './reservation'



class reservationsIndex extends React.Component {

  componentDidMount() {
    this.props.getReservations()
  }




  render(){
    console.log(this.props.reservations)
    const reservationsList = this.props.reservations.map((reservation, index) => < Reservation key={index} reservation={reservation}  /> )
    return (
      <div>
        {reservationsList}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({getReservations}, dispatch)
)

const mapStateToProps = state => (
  {reservations: state.reservations.reservations.reservations}
)

export default connect(mapStateToProps, mapDispatchToProps)(reservationsIndex)
