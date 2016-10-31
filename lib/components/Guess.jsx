import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export default class Guess extends Component {
  render() {
    return (
      <div className='guess'>
        <input className='guess__input'
          name='numberGuessed' placeholder='Best Guess!'
          aria-label='enter your best guess' />
        <button className='guess__submit'
                aria-label='submit your guess button'>submit</button>
        <button className='guess__clear'
                aria-label='clear your guess button'>clear</button>
      </div>
    )
  }
}
