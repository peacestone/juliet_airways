import React, {Component} from 'react'
import {Form, Button, Message} from 'semantic-ui-react'
import {withRouter} from 'react-router'
import findReservation from '../actions/findReservation'
import clearReservation from '../actions/clearReservation'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class MyTrips extends Component {
  constructor(props) {
    super(props)
    this.state = {
      confirmation_number: '',
      first_name: '',
      last_name: ''
    }
  }

  handleChange = (e, {name, value}) => {
    this.setState({[name]: value})}

  handleClick = event => {
    this.props.clearReservation()
    this.props.findReservation(this.state)
    this.props.history.push('/reservations/trips')
 }




  render(){
    return(
      <Form error={!!this.props.errors} autoComplete="on" size='large' >
      {console.log(this.props)}
      { this.props.errors && <Message error header={this.props.errors}  />}

      <Form.Input focus fluid size='large' onChange={this.handleChange} name='confirmation_number' placeholder='Confirmation Number' />
      <Form.Input focus size='large' fluid onChange={this.handleChange}  name='first_name' placeholder='First Name' />
      <Form.Input  focus size='large' fluid onChange={this.handleChange} name='last_name' placeholder='Last Name'  />
      <Button color='green' onClick={this.handleClick} fluid size='large'>FIND MY TRIP</Button>
      </Form>
    )
  }
}

const mapStateToProps = state => (
  {errors: state.reservations.error}
)

const mapDispatchToProps = dispatch => (
  bindActionCreators({findReservation: findReservation, clearReservation: clearReservation}, dispatch)
)



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MyTrips))
