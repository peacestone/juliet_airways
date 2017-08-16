import React from 'react'
import {Segment, Divider,Header, Form, Button, Container, Grid} from 'semantic-ui-react'
import {connect } from 'react-redux'

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
      address1: '',
      address2: '',
      city: '',
      country: '',
      state: '',
      zip: '',
      email: '',
      confirmEmail: '',
      telphone: ''
    }
  }

  handleChange = (event, data) => {this.setState({[data.name]: data.value})}

  render() {
    const {value} = this.state
    return (
    <div id='tripSummary'>
      <Segment  floated='right' style={{width: '15%'}} raised>
        <Header>Flight Itinerary</Header>
        Departs:<strong> {this.props.request.departure_city}</strong> <br />
        <span> {this.props.request.departure_date}, {this.props.selectedFlight.departure_time} </span> <br /> <br />
        Arrives: <strong> {this.props.request.arival_city}</strong> <br />
        <span>{this.props.request.departure_date}, {this.props.selectedFlight.arival_time}</span><br /> <br />
        <span>Total:</span><strong>${this.props.selectedFlight.price}</strong>
      </Segment>

     <Container style={{width: '70%', float: 'left', paddingLeft: '10%'}}>
     <Header as='h1'>Traveler Information</Header>
        <Form >
        <Form.Group widths='equal' >
          <Form.Input required name='firstName' label='First Name' onChange={this.handleChange}/>
          <Form.Input required name='lastName' label='Last Name' onChange={this.handleChange}/>
          <Form.Input  name='middleName' label='Middle Name' onChange={this.handleChange} />
        </Form.Group>
        <Divider   />
        <Form.Group widths='4' >
          <Form.Input name='frequentFlyerNumber' label='Frequent Flyer Number' onChange={this.handleChange}/>
        </Form.Group>

        <Divider  section />

        <Form.Group inline >
          <label htmlFor='gender' >Gender *</label>
          <Form.Radio name='gender' id='gender' label='Male' value='male' checked={this.state.gender === 'male'} onChange={this.handleChange} />
          <Form.Radio id='gender' name='gender' label='Female' value='female' checked={this.state.gender === 'female'} onChange={this.handleChange} />
          <Form.Radio  name='gender' label='Other' value='other' checked={this.state.gender === 'other'} onChange={this.handleChange} />
        </Form.Group>
        <Form.Group inline>
          <label>Date of birth</label>
          <Form.Input name='month' placeholder='MM' width='2' onChange={this.handleChange} />
          <Form.Input name='day' placeholder='DD' width='2' onChange={this.handleChange} />
          <Form.Input name='year' placeholder='YYYY' width='3' onChange={this.handleChange} />

        </Form.Group>
        <Form.Group inline>
          <label>Address line 1</label>
          <Form.Input name='address1'  width='6' onChange={this.handleChange} />
        </Form.Group>

        <Form.Group inline>
          <label>Address line 2</label>
          <Form.Input name='address2'  width='6'  onChange={this.handleChange} />
        </Form.Group>

        <Form.Group inline>
          <label>City</label>
          <Form.Input name='city'  width='6'  onChange={this.handleChange} />
        </Form.Group>

        <Form.Group inline>
          <label>Country</label>
          <Form.Input name='country'  width='6'  onChange={this.handleChange} />
        </Form.Group>

        <Form.Group inline>
          <label>state</label>
          <Form.Input name='state'  width='6'  onChange={this.handleChange} />
        </Form.Group>

        <Form.Group inline>
          <label>Zip</label>
          <Form.Input name='zip'  width='6'  onChange={this.handleChange} />
        </Form.Group>

        <Form.Group inline>
          <label>Email</label>
          <Form.Input type='email' name='email'  width='6'  onChange={this.handleChange} />
        </Form.Group>

        <Form.Group inline>
          <label>Confirm Email</label>
          <Form.Input type='email' name='confirmEmail'  width='6'  onChange={this.handleChange} />
        </Form.Group>

        <Form.Group inline>
          <label>Telphone Number</label>
          <Form.Input name='telphone'   width='6'  onChange={this.handleChange} />
        </Form.Group>

        <Form.Button>Contiue</Form.Button>
        </Form>
       </Container>
       </div>
      )
    }
  }

const mapStateToProps = state => (
  {request: state.flights.request, selectedFlight: state.selectedFlight}
)


export default connect(mapStateToProps)(TripSummary)
