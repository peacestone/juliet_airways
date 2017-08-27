import React, {Component} from 'react'
import {Form, Button} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import fetchFlights from '../actions/fetchFlights'
import { withRouter } from 'react-router'


class BookAFlight extends Component {
  constructor(props) {
    super(props)
    this.state = {
      departure_city: '',
      arival_city: '',
      departure_date: ''
    }
  }

  handleChange = event => {this.setState({[event.target.id]: event.target.value})}

  handleClick = event => {
    this.props.fetchFlights(this.state)
    this.props.history.push('/flights')
 }

  render(){
    return(
      <Form autoComplete="on" size='large' >
      <Form.Input focus fluid size='large' onChange={this.handleChange} id='departure_city' placeholder='From' />
      <Form.Input focus size='large' fluid onChange={this.handleChange}  id='arival_city' placeholder='To' />
      <Form.Input  focus type='date' size='large' fluid onChange={this.handleChange} id='departure_date' placeholder='Departure Date'  />
      <Button color='green' onClick={this.handleClick} fluid size='large'>FIND FLIGHTS</Button>
      </Form>
    )
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({fetchFlights: fetchFlights}, dispatch)
)



export default withRouter(connect(null, mapDispatchToProps)(BookAFlight))
