import React from 'react'
import {Table, Form, Header, Segment, Container, Divider} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import createReservation from '../actions/createReservation'

class paymentsInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cardNumber: '',
      month: '',
      year: '',
      securityCode: '',
      nameOnCard: '',
      billingPostalCode: ''
    }
  }

  handleSubmit = (event, data) => {
    console.log(this.props.traveler_info)
    console.log(this.props.request.departure_date )
    console.log(this.props.selectedFlight.flight_number)

    this.props.createReservation(Object.assign({},  this.props.traveler_info, {departure_date: this.props.request.departure_date} , {flight_number: this.props.selectedFlight.flight_number}, {payment_info: this.state}))
  }

  handleChange = (event, data) => {
    this.setState({[data.name]: data.value})
  }

  render() {
    console.log(this.state)
    return (
      <div id='paymentsInput'>
    <Container style={{marginTop: '4%', marginBottom: '4%'}}>
    <Header size='large'>Your Flight</Header>
        <Segment>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Date</Table.HeaderCell>
                <Table.HeaderCell>Departs/Arrives</Table.HeaderCell>
                <Table.HeaderCell>Route</Table.HeaderCell>
                <Table.HeaderCell>Flight Number</Table.HeaderCell>
                <Table.HeaderCell>Traveler</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>{this.props.request.departure_date}</Table.Cell>
                <Table.Cell>{this.props.selectedFlight.departure_time} to {' '}{this.props.selectedFlight.arival_time}</Table.Cell>
                <Table.Cell>{this.props.request.departure_city} to {this.props.request.arival_city} </Table.Cell>
                <Table.Cell>{this.props.selectedFlight.flight_number}</Table.Cell>
                <Table.Cell>George Fresh</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Segment>

        <Divider section  />

        <Header  size='large'>Payment Details</Header>
        <Header >Total: ${this.props.selectedFlight.price}</Header>

        <Divider section hidden />

        <Header block attached='top' >Enter Payment Information</Header>
        <Form onSubmit={this.handleSubmit}>
        <Segment attached >
          <Form.Group inline>
            <Form.Input  name='cardNumber' value={this.state.cardNumber} onChange={this.handleChange} label='Card Number' width='5' placeholder='Enter Credit Card Number'  />
          </Form.Group>

          <Form.Group inline>
            <label>Expiration Date</label>
            <Form.Input name='month' value={this.state.month} onChange={this.handleChange} placeholder='Month' width='2' />
            <Form.Input name='year' value={this.state.year} onChange={this.handleChange} placeholder='Year' width='3' />
            <label>Security Code</label>
            <Form.Input name='securityCode' value={this.state.securityCode} onChange={this.handleChange} placeholder='Enter Code' width='3' />
          </Form.Group>

          <Form.Group inline>
            <Form.Input  name='nameOnCard' value={this.state.nameOnCard} onChange={this.handleChange} label='Name On Card' placeholder='Enter Name' />
            <Form.Input  name='billingPostalCode' value={this.state.nameOnCard} onChange={this.handleChange} value={this.state.billingPostalCode} label='Billing Postal Code' placeholder='Enter Postal Code' />
          </Form.Group>
        </Segment> <br />
        <Form.Button size='large' color='orange'>Complete Purchase</Form.Button>
      </Form>


      </Container>


      </div>
    )
  }


}

const mapStateToProps = state => (
   {request: state.flights.request, selectedFlight: state.flights.selectedFlight, traveler_info: state.reservations.traveler_info}
 )

 const mapDispatchToProps = dispatch => (
   bindActionCreators({createReservation: createReservation}, dispatch)
 )




export default connect(mapStateToProps, mapDispatchToProps)(paymentsInput)
