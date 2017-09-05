import React from 'react'
import {Table, Segment, Header} from 'semantic-ui-react'
import {connect} from 'react-redux'

<<<<<<< HEAD


const flightStatusTable = (props) => {
  return (
      <Segment  >
       <Header size='large'><span>Flight {props.flightStatus.flight.flight_number} on {props.flightStatus.meta.flight_date}</span></Header>
=======
const flightStatusTable = (props) => (
      <Segment>
       <Header size='large'><span>Flight {props.flightStatus.flight_number} on {props.flightStatus.meta.flight_date}</span></Header>
>>>>>>> db66ebf7480e82ef1263e6f6f1a6150521a098e3
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Status</Table.HeaderCell>
              <Table.HeaderCell>Departure City</Table.HeaderCell>
              <Table.HeaderCell>Scheduled</Table.HeaderCell>
              <Table.HeaderCell>Actual</Table.HeaderCell>
              <Table.HeaderCell>Arival City</Table.HeaderCell>
              <Table.HeaderCell>Scheduled</Table.HeaderCell>
              <Table.HeaderCell>Actual</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
             <Table.Cell>ON TIME</Table.Cell>
              <Table.Cell>{props.flightStatus.flight.departure_city}</Table.Cell>
              <Table.Cell>{props.flightStatus.flight.departure_time}</Table.Cell>
              <Table.Cell>{props.flightStatus.flight.departure_time}</Table.Cell>
              <Table.Cell>{props.flightStatus.flight.arival_city}</Table.Cell>
              <Table.Cell>{props.flightStatus.flight.arival_time}</Table.Cell>
              <Table.Cell>{props.flightStatus.flight.arival_time}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
<<<<<<< HEAD
      </Segment>

)}
=======
        {console.log(props)}
      </Segment>

)
>>>>>>> db66ebf7480e82ef1263e6f6f1a6150521a098e3

const mapStateToProps = state => (
  {flightStatus: state.flightStatus}
)


export default connect(mapStateToProps)(flightStatusTable)
