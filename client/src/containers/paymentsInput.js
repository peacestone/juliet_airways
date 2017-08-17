import React from 'react'
import {Table, Form, Header, Segment, Container, Divider} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
class paymentsInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div id='paymentsInput'>
    <Container style={{marginTop: '4%'}}>
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
                <Table.Cell>{this.props.traveler_info.firstName} {this.props.traveler_info.lastName}</Table.Cell>
              </Table.Row>
            </Table.Body>

          </Table>

        </Segment>

        <Divider section hidden />

        <Header  size='large'>Payment Details</Header>

        <Segment>
        <Form>

          <Form.Group inline>
            <Form.Input label='Card Number' width='5' placeholder='Enter Credit Card Number'  />
          </Form.Group>

          <Form.Group inline>
            <label>Expiration Date</label>
            <Form.Input placeholder='Month' width='2' />
            <Form.Input placeholder='Year' width='3' />
            <label>Security Code</label>
            <Form.Input placeholder='Enter Code' width='3' />
          </Form.Group>

          <Form.Group inline>
            <Form.Input label='Name On Card' placeholder='Enter Name' />
            <Form.Input label='Billing Postal Code' placeholder='Enter Postal Code' />
          </Form.Group>

          <Form.Button color='orange'>Complete Purchase</Form.Button>
        </Form>
        </Segment>

      </Container>


      </div>
    )
  }


}

const mapStateToProps = state => (
   {request: state.flights.request, selectedFlight: state.flights.selectedFlight, traveler_info: state.reservations.traveler_info}
 )




export default connect(mapStateToProps)(paymentsInput)
