import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import fetchFlights from '../actions/fetchFlights'
import {connect} from 'react-redux'
import { Button, Form, Input, Grid, Header, Segment } from 'semantic-ui-react'
import img from "../mt.jpeg"


 class FlightsInput extends Component {

   constructor(props){
     super(props)
     this.state = {
       departure_city: '',
       arival_city: '',
       departure_date: '',
     }



   }

 handleChange = event => {this.setState({[event.target.id]: event.target.value})}
 handleClick = event => {
   this.props.fetchFlights(this.state)
   this.props.history.push('/flights')
}






  render() {
    return (
      <div style={{backgroundImage: "url(" + img  + ")", backgroundSize: 'cover', minHeight: '100%'}}>
          <Grid
           textAlign='center'
            style={{height: '100%'}}
            verticalAlign='middle'
            >
            <Grid.Column style={{maxWidth: 450}}>
            <Header as='h2' color='green' textAlign='center'>
              Book a Flight </Header>
              <Form size='large' >
              <Segment stacked>
              <Form.Input focus fluid size='large' onChange={this.handleChange} id='departure_city' placeholder='From' />
              <Form.Input focus size='large' fluid onChange={this.handleChange}  id='arival_city' placeholder='To' />
              <Form.Input  focus type='date' size='large' fluid onChange={this.handleChange} id='departure_date' placeholder='Departure Date'  />
              <Button color='green' onClick={this.handleClick} fluid size='large'>Search</Button>
              </Segment>
              </Form>

            </Grid.Column>
          </Grid>



      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) =>{
  return bindActionCreators({fetchFlights: fetchFlights}, dispatch)
}

export default connect(null, mapDispatchToProps)(FlightsInput)
