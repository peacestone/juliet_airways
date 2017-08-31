import React from 'react'
import {connect} from 'react-redux'

import { Dimmer, Loader} from 'semantic-ui-react'

const loader = (props) => {
return (
  <Dimmer page  active={props.isLoading === 'true'}>

    <Loader size='large' >Loading</Loader>
  </Dimmer>
)}

const mapStateToProps = state => (
  {isLoading: state.flights.isLoading}
)

export default connect(mapStateToProps)(loader)
