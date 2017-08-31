import React from 'react'
import {connect} from 'react-redux'

import { Dimmer, Loader} from 'semantic-ui-react'

const loader = () => {
return (
  <Dimmer page  active>

    <Loader size='large' >Loading</Loader>
  </Dimmer>
)}



export default loader
