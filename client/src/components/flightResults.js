import React from 'react'
import FlightsList from './flightsList'
import {connect} from 'react-redux'
import {Message} from 'semantic-ui-react'

const flightResults = (props) => {

  let list = <FlightsList />
  if (props.flights.length === 0) {
    list = <Message warning  size='huge' header='There are no flights on the selected day.' />
  }
  return list

}

const mapStateToProps = (state) => {
  return {flights: state.flights.flights}
}

export default connect(mapStateToProps)(flightResults)
