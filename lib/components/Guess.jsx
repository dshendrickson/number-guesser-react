import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export default class Guess extends Component {
  render() {
    return (
      <div id='guess'>
        <input id='guess__input'
              name='numberGuessed'
              placeholder='Best Guess!'
              aria-label='enter your best guess' />
        <button id='guess__submit'
                aria-label='submit your guess button'>submit</button>
        <button id='guess__clear'
                aria-label='clear your guess button'>clear</button>
      </div>
    )
  }
}
