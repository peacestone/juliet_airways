import React, {Component} from 'react'
import {Form, Button} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { withRouter } from 'react-router'


class FlightStatus extends Component {
  constructor(props) {
    super(props)
    this.state = {
      flight_date: 'today',
      flight_number: ''
    }
  }

  handleChange = (event, data) => {
    this.setState({[event.target.id]: event.target.value})}

  handleClick = event => {
    this.props.fetchFlights(this.state)
    this.props.history.push('/flights')
 }

handleChange = (e, {name, value}) => {
  this.setState({[name]: value  })
}

  render(){
    const options = [
      {key: 'tod', text: `Today`, value: 'today'},
      {key: 'tom', text: `Tomorrow`, value: 'tomorrow'},
      {key: 'yes', text: `Yeseterday`, value: 'yesterday'}
    ]
    return(
      <Form autoComplete="on" size='large' >
      <Form.Select  label='Flight Date' name='flight_date' options={options} onChange={this.handleChange} defaultValue={this.state.flight_date} />
      <Form.Input focus fluid size='large' onChange={this.handleChange} name='flight_number' placeholder='Flight Number' />
      <Button color='green' onClick={this.handleClick} fluid size='large'>VIEW STATUS</Button>
      </Form>
    )
  }
}

//const mapDispatchToProps = dispatch => (
//)



export default withRouter(connect(null, null)(FlightStatus))
