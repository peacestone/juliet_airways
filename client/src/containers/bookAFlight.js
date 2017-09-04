import React, {Component} from 'react'
import {Form, Button, Message} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import fetchFlights from '../actions/fetchFlights'
import { withRouter } from 'react-router'
import {  SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment'


class BookAFlight extends Component {
  constructor(props) {
    super(props)
    this.state = {
        departure_city: '',
        arival_city: '',
        departure_date: null,

        formErrors: {

        },
        departureCityIsInvalid: false ,
        arivalCityIsInvalid: false,
        departureDateIsInvalid: false,
        isValidForm: true,
    }
    this.today = moment()
    this.handleClick = this.handleClick.bind(this)
  }




  validateForm = (formInput) => {
    let errors = {}
    let isValid = true
    if (formInput.arival_city === '') {
      isValid = false
      this.setState({arivalCityIsInvalid: true})
     errors.arival_city = 'Please enter a valid arival city to continue'
    }

    if (formInput.departure_city === '') {
      isValid = false
      errors.departure_city = 'Please enter a departure city to continue'
      this.setState({departureCityIsInvalid: true})
  }

    if (!formInput['departure_date'] || !formInput['departure_date']._isAMomentObject) {
      isValid = false
      this.setState({departureDateIsInvalid: true})
      errors.departure_date =  'Please enter a valid departure date'
    }
    return {isValid: isValid, errors: errors}
  }

  handleChange = (e, data) => {
    this.setState({[data.name]: data.value})}


  handleClick = function(e, data) {
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
    const cityOptions = [{key: 'JFK', text: 'New York- Kennedy, NY (JFK)', value: 'JFK'}, {key: 'ATL', text: 'Atlanta, GA (ATL)', value: "ATL"}, {key: 'IAD', text: 'Washington-Dulles, DC (IAD)', value: 'IAD'}, {key: 'ORD', text: 'Chicago-Ohare, IL (ORD)', value: 'ORD'}]

    return(
      <Form error={!this.state.isValidForm} autoComplete="on" size='large' >
      {!this.state.isValidForm && <Message error header={`Please Fix the ${Object.values(this.state.formErrors).length} fields indicated`}  list={Object.values(this.state.formErrors) } />}

      <Form.Dropdown  placeholder='From' onChange={this.handleChange} name='departure_city' error={!!this.state.departureCityIsInvalid} noResultsMessage="Sorry, we don't fly there yet" minCharacters={3} search selection options={cityOptions} />

      <Form.Dropdown onChange={this.handleChange} placeholder='To' name='arival_city' error={!!this.state.arivalCityIsInvalid} noResultsMessage="Sorry, we don't fly there yet" minCharacters={3} search selection options={cityOptions} />


      <Form.Input  fluid>
      <SingleDatePicker
      showDefaultInputIcon
      daySize={45}
      //showInput
        isOutsideRange={
          date => !moment(date).isBetween(this.today, this.today.clone().add(6, 'months'), null, [])
        }
        //anchorDirection='center'
        //orientation="vertical"
        placeholder='mm/dd/yyyy'
        date={this.state.departure_date} // momentPropTypes.momentObj or null
        onDateChange={date => this.setState({departure_date: date})} // PropTypes.func.isRequired
        focused={this.state.focused} // PropTypes.bool
        onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
        hideKeyboardShortcutsPanel={true}
      />
      </Form.Input>



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
