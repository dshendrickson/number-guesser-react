import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Reset extends Component {
  render() {
    return (
      <div className='reset'>
      <button className='reset__reset'
              aria-label='reset the game'>clear</button>
      </div>
    )
  }
}
