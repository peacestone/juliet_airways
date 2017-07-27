import React, { Component } from 'react';

 class FlightsInput extends Component {

   constructor(){
     super()
     this.state = {
       from: '',
       to: '',
       departDate: '',
     }
   }

  render() {
    return (
      <div>
      <h1>BOOK A TRIP</h1>
      <label htmlFor='from'>FROM: </label>
      <input type='text' id='from' />
      <label htmlFor='to'> TO: </label>
      <input type='text' id='to' />
      <label htmlFor='date'> DEPART DATE: </label>
      <input type='date' id='date' />
      <button type='button'>Find Flights</button>
      </div>
    )
  }
}

export default FlightsInput
