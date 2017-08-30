import React, {Component} from 'react'
import {Form, Button,Dropdown, Message,Label, Icon} from 'semantic-ui-react'
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
    if (formInput.arival_city === '') {
      isValid = false
      this.setState({arivalCityIsInvalid: true})
     errors.arival_city = 'Please enter a valid arival city city to continue'
    }

    if (formInput.departure_city === '') {
      isValid = false
      errors.departure_city = 'Please enter a departure city to continue'
      this.setState({departureCityIsInvalid: true})
  }

    if (!formInput['departure_date']) {
      isValid = false
      this.setState({departureDateIsInvalid: true})
      errors.departure_date =  'Please enter a departure date'
    }
    return {isValid: isValid, errors: errors}
  }

  handleChange = (e, data) => { this.setState({[data.name]: data.value})}

  handleClick = function(e, data) {
    debugger
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
    const cityOptions = [{key: 'JFK', text: 'New York- Kennedy, NY (JFK)', value: 'JFK'}, {key: 'ATL', text: 'Atlanta, GA (ATL)', value: "ATL"}]

    return(
      <Form error={!this.state.isValidForm} autoComplete="on" size='large' >

      {!this.state.isValidForm && <Message error header={`Please Fix the ${Object.values(this.state.formErrors).length} fields indicated`}  list={Object.values(this.state.formErrors) } />}

      <Form.Dropdown placeholder='From' onChange={this.handleChange} name='departure_city' error={!!this.state.departureCityIsInvalid} noResultsMessage="Sorry, we don't fly there yet" minCharacters={3} search selection options={cityOptions} />

      <Form.Dropdown onChange={this.handleChange} placeholder='To' name='arival_city' error={!!this.state.arivalCityIsInvalid} noResultsMessage="Sorry, we don't fly there yet" minCharacters={3} search selection options={cityOptions} />

      <Form.Input error={!!this.state.departureDateIsInvalid} name='departure_date' focus type='date' size='large' fluid onChange={this.handleChange} placeholder='Departure Date'  />
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
