import React from 'react'
import Flight from './flight'
import {connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Grid , Container, Dropdown, Button, Menu} from 'semantic-ui-react'

const InlineStyle = () => (
<style>{`
  #dropdown {

  }
  #price:hover {
    background-color: blue;
    color: #fff;
  }
  #price:hover .hiddenText {
    visibility: visible;
    font-weight: bold
  }
  .hiddenText {
    visibility: hidden
  }

  #figureOUtflights-list {
    background-color: #c6bbff
  }


  `}</style>
)

class flightsList extends React.Component {

  constructor() {
    super()
    this.state = {

    }
  }

  handleFilterChange = (event, data) => {console.log(event, data)}

render() {

  const flights = this.props.flights.flights.map((flight, index) => <Flight key={index} flight={flight} /> )
  return (
    <div id='flights-list'>
    <InlineStyle />



      <Container   style={{fontSize: '18px', lineHeight: '200%'}}>
      <NavLink to='/'><Button  color='green' style={{marginLeft: '64.1%'}}>Search Again</Button></NavLink>

      <Dropdown  text='filter'  icon='filter' color='green' labeled button className='icon' >
        <Dropdown.Menu>
          <Dropdown.Item onClick={this.handleFilterChange} >Price</Dropdown.Item>
          <Dropdown.Item onClick={this.handleFilterChange} >Arival Time</Dropdown.Item>
          <Dropdown.Item onClick={this.handleFilterChange} >Departure Time</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
        <Grid  celled style={{width: '70%', margin: 'auto'}} >
          <Grid.Row >
            {this.props.flights.request.departure_city} > {this.props.flights.request.arival_city} <br /> {this.props.flights.request.departure_date}


          </Grid.Row>



        {flights}
        </Grid>
      </Container>

    </div> )
  }
}

const mapStateToProps = state => {
  return {flights: state.flights}
}




export default connect(mapStateToProps)(flightsList)
