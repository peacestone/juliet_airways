import React from 'react'
import {Table, Segment, Header} from 'semantic-ui-react'

const flightStatus = () => (
  <Header size='large'>Your Flight</Header>
      <Segment>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Status</Table.HeaderCell>
              <Table.HeaderCell>Date</Table.HeaderCell>
              <Table.HeaderCell>Departs/Arrives</Table.HeaderCell>
              <Table.HeaderCell>Route</Table.HeaderCell>
              <Table.HeaderCell>Flight Number</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
             <Table.Cell>ON TIME</Table.Cell>
              <Table.Cell>{this.props.request.departure_date}</Table.Cell>
              <Table.Cell>{this.props.selectedFlight.departure_time} to {' '}{this.props.selectedFlight.arival_time}</Table.Cell>
              <Table.Cell>{this.props.request.departure_city} to {this.props.request.arival_city} </Table.Cell>
              <Table.Cell>{this.props.selectedFlight.flight_number}</Table.Cell>
              <Table.Cell>{this.props.traveler_info.first_name} {this.props.traveler_info.middle_name} {this.props.traveler_info.last_name} </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Segment>

)
