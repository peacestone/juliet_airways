import React from 'react'
import Flight from './flight'
import {connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Grid , Container, Dropdown, Button, Header, Menu} from 'semantic-ui-react'
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

  handleFilterChange = (event, data) => {
    this.setState({dropdownValue: data.value, filter: 'data.name '})
    const requestWithSort = Object.assign({}, this.props.flights.request, {sort_by: data.value} )

    this.props.fetchFlights(requestWithSort)
  }

render() {
 const sortOptions = [ {text: 'Departure Time', value: 'departure_time'}, {  text: 'Arival Time', value: 'arival_time'}, {text: 'Price', value: 'price'}]
 const flights = this.props.flights.flights.map((flight, index) => <Flight key={index} flight={flight} /> )
  return (
    <div id='flights-list'>
    <InlineStyle />


      <Container   style={{fontSize: '18px', lineHeight: '200%'}}>
      <Container textAlign='right' style={{ width: '70%'}}>
      <Link to='/'>Search Again</Link>
      </Container >

        <Grid  celled style={{width: '70%', margin: 'auto', marginBottom: '4%'}} >
          <Grid.Row >

          <Header color='violet'  >  {this.props.flights.request.departure_city} > {this.props.flights.request.arival_city}    <br /> {this.props.flights.request.departure_date}</Header >

            <span style={{marginRight: '70%',  color: '#6f51b0'}}><strong>Sorted By</strong> {' '}

               <Dropdown inline onChange={this.handleFilterChange} options={sortOptions} defaultValue={sortOptions[0].value} />
            </span>
          </Grid.Row>



        {flights}
        </Grid>
      </Container>

    </div> )
  }
}



const mapStateToProps = (state) => {
  return {flights: state.flights}
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchFlights }, dispatch)
}







export default connect(mapStateToProps, mapDispatchToProps)(flightsList)
