import React from 'react'
import Flight from './flight'
import {connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Grid , Container, Dropdown, Button, Menu} from 'semantic-ui-react'
import fetchFlights from '../actions/fetchFlights'
import {bindActionCreators} from 'redux'


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

  constructor(props) {
    super(props)
    this.state = {
      filter: '',
      dropdownValue: "Sort By"
    }
  }

  handleFilterClick = (event, data) => {
    console.log(this.props.flights.request)
    this.setState({dropdownValue: data.text, filter: 'data.name '})
    const requestWithSort = Object.assign({}, this.props.flights.request, {sort_by: data.name} )

    this.props.fetchFlights(requestWithSort)
  }

render() {

  const flights = this.props.flights.flights.map((flight, index) => <Flight key={index} flight={flight} /> )
  return (
    <div id='flights-list'>
    <InlineStyle />


      <Container   style={{fontSize: '18px', lineHeight: '200%'}}>
      <NavLink to='/'>Search Again</NavLink>

      <Dropdown  text={this.state.dropdownValue}  icon='filter' color='green' labeled button className='icon' >
        <Dropdown.Menu>
          <Dropdown.Item name='price' text='Price' onClick={this.handleFilterClick} />
          <Dropdown.Item name='arival_time' onClick={this.handleFilterClick} text='Arival Time'  />
          <Dropdown.Item name='departure_time' onClick={this.handleFilterClick} text='Departure Time' />
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

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchFlights }, dispatch)
}




export default connect(mapStateToProps, mapDispatchToProps)(flightsList)
