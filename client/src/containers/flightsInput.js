import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

 class FlightsInput extends Component {

   constructor(){
     super()
     this.state = {
       from: '',
       to: '',
       departDate: '',
     }
   }

 handleChange = event => {this.setState({[event.target.id]: event.target.value})}
 handleClick = event => {console.log('clicked')}

  render() {
    return (
      <div>
      <h1>Juliet Airways</h1>
      <h3>BOOK A TRIP</h3>
      <label htmlFor='from'>FROM: </label>
      <input type='text' onChange={this.handleChange} id='from' />
      <label htmlFor='to'> TO: </label>
      <input type='text' onChange={this.handleChange}  id='to' />
      <label htmlFor='departDate'> DEPART DATE: </label>
      <input type='date' onChange={this.handleChange} id='departDate' />
      <Link to='/flights'><button onClick={this.handleClick} type='button'>Find Flights</button></Link>
      </div>
    )
  }
}

export default FlightsInput
