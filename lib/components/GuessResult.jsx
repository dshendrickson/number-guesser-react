import React, { Component } from 'react';

export default class GuessResult extends Component {
  render() {

    let numberToGuess = this.props.value.numberToGuess

    return (
      <div id='guess-result'>
        <h3>{this.props.value.guessFeedbackMessage}</h3>
        <h2 id='guess-result__value'>{parseInt(numberToGuess)}</h2>
        <h3>{this.props.value.previousGuessMessage}</h3>
      </div>
    )
  }
}
