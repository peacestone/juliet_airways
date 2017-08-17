import React from 'react'
import {Segment, Divider,Header, Form, Button, Container, Grid} from 'semantic-ui-react'
import {connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import addTravelersDetails from '../actions/addTravelersDetails'

class TripSummary extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      middleName: '',
      frequentFlyerNumber: '',
      gender: '',
      month: '',
      day: '',
      year: '',
      email: '',
      confirmEmail: '',
      telephone: ''
    }
  }

  handleChange = (event, data) => {this.setState({[data.name]: data.value})}

  handleSubmit = (event, data) => {
    event.preventDefault();
    this.props.addTravelersDetails(this.state)
    this.props.history.push('/flights/payments')
  }

  render() {
    return (
    <div id='tripSummary'>
      <Segment   style={{width: '15%', position: 'fixed', right: '3.5%'}} raised>
        <Header>Flight Itinerary</Header>
        Departs:<strong> {this.props.request.departure_city}</strong> <br />
        <span> {this.props.request.departure_date}, {this.props.selectedFlight.departure_time} </span> <br /> <br />
        Arrives: <strong> {this.props.request.arival_city}</strong> <br />
        <span>{this.props.request.departure_date}, {this.props.selectedFlight.arival_time}</span><br /> <br />
        <span>Total:</span><strong>${this.props.selectedFlight.price}</strong>
      </Segment>
      <Header  textAlign='center'  as='h1'>Traveler Information</Header>
     <Container style={{width: '70%', float: 'left', paddingLeft: '10%'}}>
        <Form onSubmit={this.handleSubmit} >
        <Form.Group widths='equal' >
          <Form.Input value={this.state.firstName} required name='firstName' label='First Name' onChange={this.handleChange}/>
          <Form.Input required name='lastName' value={this.state.lastName}label='Last Name' onChange={this.handleChange}/>
          <Form.Input  name='middleName' value={this.state.middleName}label='Middle Name' onChange={this.handleChange} />
        </Form.Group>
        <Divider   />
        <Form.Group widths='4' >
          <Form.Input name='frequentFlyerNumber' value={this.state.frequentFlyerNumber} label='Frequent Flyer Number' onChange={this.handleChange}/>
        </Form.Group>

        <Divider  section />

        <Form.Group inline >
          <label htmlFor='gender' >Gender </label>
          <Form.Radio name='gender' id='gender' label='Male' value='male' checked={this.state.gender === 'male'} onChange={this.handleChange} />
          <Form.Radio id='gender' name='gender' label='Female' value='female' checked={this.state.gender === 'female'} onChange={this.handleChange} />
          <Form.Radio  name='gender' label='Other' value='other' checked={this.state.gender === 'other'} onChange={this.handleChange} />
        </Form.Group>

        <Form.Group inline>
          <label>Date of birth</label>
          <Form.Input name='month' value={this.state.month}placeholder='MM' width='2' onChange={this.handleChange} />
          <Form.Input name='day' placeholder='DD'value={this.state.day} width='2' onChange={this.handleChange} />
          <Form.Input name='year' placeholder='YYYY' value={this.state.year} width='3' onChange={this.handleChange} />
        </Form.Group>


        <Form.Group inline>
          <label>Email</label>
          <Form.Input type='text' name='email'  width='6' value={this.state.email} onChange={this.handleChange} />
        </Form.Group>

        <Form.Group inline>
          <label>Confirm Email</label>
          <Form.Input type='text' name='confirmEmail' value={this.state.confirmEmail}  width='6'  onChange={this.handleChange} />
        </Form.Group>

        <Form.Group inline>
          <label>Telphone Number</label>
          <Form.Input name='telephone'   width='6' value={this.state.telephone}  onChange={this.handleChange} />
        </Form.Group>

        <Form.Button color='orange'>Contiue</Form.Button>
        </Form>
       </Container>
       </div>
      )
    }
  }

const mapStateToProps = state => (
  {request: state.flights.request, selectedFlight: state.flights.selectedFlight}
)

const mapDispatchToProps = dispatch => (
  bindActionCreators({addTravelersDetails}, dispatch)
)


export default connect(mapStateToProps, mapDispatchToProps)(TripSummary)
