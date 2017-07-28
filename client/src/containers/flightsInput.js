import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

 class FlightsInput extends Component {

   constructor(props){
     super(props)
     this.state = {
       from: '',
       to: '',
       departDate: '',
     }
   }

 handleChange = event => {this.setState({[event.target.id]: event.target.value})}
 handleClick = event => {
   console.log('clicked', 'FlightsInput')
   console.log(this.props)
   //this.params.router.replace('/flights')
   this.props.history.push('/flights')

}

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
      <button onClick={this.handleClick} type='button'>Find Flights</button>
      </div>
    )
  }
}

export default FlightsInput
