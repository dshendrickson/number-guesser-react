import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Guess extends Component {

  render() {
    return (
      <div id='guess'>
        <input id='guess__input'
              name='numberGuessed'
              onChange={this.props.updateNumberGuessed}
              onKeyPress={this.props.enterKeyPress}
              placeholder='Your guess...'
              value={this.props.numberGuessed}
              aria-label='enter your guess' />
        <button id='guess__submit'
                onClick={this.props.compareGuessNumber}
                aria-label='submit your guess button'>submit</button>
        <button id='guess__clear'
                aria-label='clear your guess button'
                onClick={this.props.clearGuess}>clear</button>
      </div>
    )
  }
}
