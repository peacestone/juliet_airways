import React, {Component} from 'react'
import {Form, Button} from 'semantic-ui-react'

export default class MyTrips extends Component {
  constructor(props) {
    super(props)
    this.state = {
      confimation_number: '',
      first_name: '',
      last_name: ''
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
      <Form.Input focus fluid size='large' onChange={this.handleChange} name='confimation_number' placeholder='Confimation Number' />
      <Form.Input focus size='large' fluid onChange={this.handleChange}  name='first_name' placeholder='First Name' />
      <Form.Input  focus size='large' fluid onChange={this.handleChange} name='last_name' placeholder='Last Name'  />
      <Button color='green' onClick={this.handleClick} fluid size='large'>FIND MY TRIP</Button>
      </Form>
    )
  }
}
