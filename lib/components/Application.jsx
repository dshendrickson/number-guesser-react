import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { pick, map, extend, filter} from 'lodash';
import moment from 'moment';

import TitleBar from './TitleBar';
import RangeEntry from './RangeEntry';
import GuessResult from './GuessResult';
import Guess from './Guess';
import Reset from './Reset';

export default class Application extends Component {

  constructor() {
    super();
    this.state = {
      numberToGuess: '',
      numberGuessed: 0,
      numberRangeLow: 1,
      numberRangeHigh: 100,
      guessFeedbackMessage: 'Your guess will diplay below:',
      previousGuessMessage: 'Waiting for your best guess!',
      numberOfWins: 0,
      numberOfGuesses: 0
    };
    this.generateNumberToGuess();
  }

  compareGuessNumber() {
    if (this.state.numberGuessed < this.state.numberToGuess) {
      this.lowGuess()
    } else if (this.state.numberGuessed > this.state.numberToGuess) {
      this.highGuess()
    } else {
      this.correctGuess()
    }
  }

  correctGuess() {
    this.setFeedbackMessage("You Win!")
    this.incrementNumberOfGuesses()
    this.incrementNumberOfWins()
    this.expandRange()
    this.generateNumberToGuess()
  }

  expandRange() {
    let increment = 10 * this.state.numberOfWins
    this.setState({numberRangeLow: this.state.numberRangeLow - increment,
                  numberRangeHigh: this.state.numberRangeHigh + increment})
  }

  generateNumberToGuess() {
    this.state.numberToGuess = Math.floor((Math.random() * (((this.state.numberRangeHigh) - (this.state.numberRangeLow) + 1))) + (this.state.numberRangeLow));
  }

  highGuess() {
    this.incrementNumberOfGuesses()
    this.setFeedbackMessage("You're guess was to high. Try again!")
  }

  incrementNumberOfGuesses() {
    let increment = this.state.numberOfGuesses + 1
    this.setState({numberOfGuesses: increment})
  }

  incrementNumberOfWins() {
    let increment = this.state.numberOfWins + 1
    this.setState({numberOfGuesses: increment})
    }

  lowGuess() {
    this.incrementNumberOfGuesses()
    this.setFeedbackMessage("You're guess was to low. Try again!")
  }

  setFeedbackMessage(message) {
    this.setState({guessFeedbackMessage: message})
  }

  updateRangeValueHigh(entered) {
    this.setState({numberRangeHigh: parseInt(entered.target.value)}, () => {
      this.generateNumberToGuess()
    })
  }

  updateRangeValueLow(entered) {
    this.setState({numberRangeLow: parseInt(entered.target.value)}, () => {
      this.generateNumberToGuess()
    })
  }

  updateNumberGuessed(entered) {
    this.setState({numberGuessed: parseInt(entered.target.value)})
  }

  render() {
    return (
      <div>
        <TitleBar />
        <RangeEntry numberRangeLow={this.state.numberRangeLow}
                    numberRangeHigh={this.state.numberRangeHigh}
                    updateRangeValueLow={this.updateRangeValueLow.bind(this)}
                    updateRangeValueHigh={this.updateRangeValueHigh.bind(this)} />
        <GuessResult value={this.state} />
        <Guess numberGuessed={this.state.numberGuessed}
              updateNumberGuessed={this.updateNumberGuessed.bind(this)}
              compareGuessNumber={this.compareGuessNumber.bind(this)} />
        <Reset />
      </div>
    )
  }
}
