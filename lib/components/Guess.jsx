import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Guess extends Component {
  render() {
    return (
      <div className='guess'>
        <input className='guess-value'
          name='numberGuessed' placeholder='Best Guess!'
          aria-label='enter your best guess' />
      </div>
    )
  }
}
