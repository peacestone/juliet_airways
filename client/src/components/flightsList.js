import React from 'react'
import Flight from './flight'
import {connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Grid , Container, Button} from 'semantic-ui-react'

const InlineStyle = () => (
<style>{`
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

const flightsList = (props) => {
  const flights = props.flights.flights.map((flight, index) => <Flight key={index} flight={flight} /> )

  return (
    <div id='flights-list'>
    <InlineStyle />

      <Container   style={{fontSize: '18px', lineHeight: '200%'}}>
      <NavLink to='/'><Button  style={{  marginLeft: '74.1%'}}   >Search Again</Button></NavLink>
        <Grid  celled style={{maxWidth: '70%', margin: 'auto'}} >
        <Grid.Row > {props.flights.request.departure_city} > {props.flights.request.arival_city} <br /> {props.flights.request.departure_date}</Grid.Row>
        {flights}
        </Grid>
      </Container>

    </div> )
}

const mapStateToProps = state => {
  return {flights: state.flights}
}




export default connect(mapStateToProps)(flightsList)
