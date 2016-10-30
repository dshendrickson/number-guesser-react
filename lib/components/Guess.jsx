import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Guess extends Component {
  render() {
    return (
      <div className='guess'>
        <input className='guess__input'
          name='numberGuessed' placeholder='Best Guess!'
          aria-label='enter your best guess' />
        <button className='guess__submit'>submit</button>
        <button className='guess__clear'>clear</button>
      </div>
    )
  }
}
