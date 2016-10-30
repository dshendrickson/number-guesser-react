import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class GuessResult extends Component {
  render() {
    return (
      <div className='guess-result'>
        <h3>{this.props.value.guessFeedbackMessage}</h3>
        <p>0</p>
        <h3>{this.props.value.previousGuessMessage}</h3>
      </div>
    )
  }
}
