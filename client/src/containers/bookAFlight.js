import React, {Component} from 'react'
import {Form, Button, Message} from 'semantic-ui-react'
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
        departure_date: '',

        formErrors: {

        },
        departureCityIsInvalid: false ,
        arivalCityIsInvalid: false,
        departureDateIsInvalid: false,
        isValidForm: true,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  validateForm = (formInput) => {
    const validCitys = ['ATL', 'JFK']
    let errors = {}
    let isValid = true
    if (!validCitys.includes(this.state.arival_city)) {
      isValid = false
      this.setState({arivalCityIsInvalid: true})
     errors.arival_city = 'Please enter a valid destination city to continue'
    }

    if (!validCitys.includes(formInput.departure_city)) {
      isValid = false
      errors.departure_city = 'Please enter a valid departure city to continue'
    this.setState({departureCityIsInvalid: true})
  }

    if (!formInput['departure_date']) {
      isValid = false
      this.setState({departureDateIsInvalid: true})
      errors.departure_date =  'Please enter a departure date'
    }
    return {isValid: isValid, errors: errors}
  }

  handleChange = event => {this.setState({[event.target.id]: event.target.value})}

  handleClick = function(event) {

    const isValid = this.validateForm(this.state)
    if (isValid.isValid){
      const {arival_city, departure_city, departure_date} = this.state
      this.props.fetchFlights({arival_city, departure_city, departure_date})
      this.props.history.push('/flights')
    }
    else {
      this.setState({isValidForm: false, formErrors: isValid.errors})
    }

 }



  render(){

    return(
      <Form error={!this.state.isValidForm} autoComplete="on" size='large' >
      {!this.state.isValidForm && <Message error header={`Please Fix the ${Object.values(this.state.formErrors).length} fields indicated`}  list={Object.values(this.state.formErrors) } />}
      <Form.Input error={!!this.state.departureCityIsInvalid} focus fluid size='large' onChange={this.handleChange} id='departure_city' placeholder='From'  />
      <Form.Input error={!!this.state.arivalCityIsInvalid} focus size='large' fluid onChange={this.handleChange}  id='arival_city' placeholder='To' />
      <Form.Input error={!!this.state.departureDateIsInvalid}  focus type='date' size='large' fluid onChange={this.handleChange} id='departure_date' placeholder='Departure Date'  />
      <Button color='green' onClick={this.handleClick} fluid size='large'>FIND FLIGHTS</Button>
      {console.log(this.state)}
      </Form>
    )
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({fetchFlights: fetchFlights}, dispatch)
)



export default withRouter(connect(null, mapDispatchToProps)(BookAFlight))
