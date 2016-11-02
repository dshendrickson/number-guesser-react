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
      guessFeedbackMessage: 'Your guess will diplay below:',
      numberGuessed: '',
      numberLastGuessed: '',
      numberOfGuesses: 0,
      numberOfWins: 0,
      numberRangeLow: 1,
      numberRangeHigh: 100,
      numberToGuess: '',
      previousGuessMessage: 'Waiting for your best guess!'
    };
    this.generateNumberToGuess();
  }

  clearGuess() {
    var lastNumber = this.state.numberGuessed
    this.setState({numberLastGuessed: lastNumber, numberGuessed: ''})
  }

  compareGuessNumber() {
    if (this.state.numberGuessed < this.state.numberToGuess) {
      this.lowGuess()
    } else if (this.state.numberGuessed > this.state.numberToGuess) {
      this.highGuess()
    } else {
      this.correctGuess()
    }
    this.clearGuess()
  }

  correctGuess() {
    this.setFeedbackMessage("You Win!")
    this.setPreviousFeedbackMessage("Enter a number to keep playing!")
    this.incrementNumberOfGuesses()
    this.incrementNumberOfWins()
    this.expandRange()
    this.generateNumberToGuess()
  }

  enterKeyPress(key) {
    if (key.charCode === 13) {
      this.compareGuessNumber()
    }
  }

  expandRange() {
    let increment = 10
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

  resetGame() {
    this.setState({
      numberGuessed: '',
      numberRangeLow: 1,
      numberRangeHigh: 100,
      guessFeedbackMessage: 'Your guess will diplay below:',
      previousGuessMessage: 'Waiting for your best guess!',
      numberOfWins: 0,
      numberOfGuesses: 0
      }, () => {
        this.generateNumberToGuess()
    })
  }

  setPreviousFeedbackMessage(message) {
    this.setState({previousGuessMessage: message})
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
                    updateRangeValueHigh={this.updateRangeValueHigh.bind(this)}
                    updateRangeValueLow={this.updateRangeValueLow.bind(this)} />
        <GuessResult value={this.state} />
        <Guess clearGuess={this.clearGuess.bind(this)}
              compareGuessNumber={this.compareGuessNumber.bind(this)}
              enterKeyPress={this.enterKeyPress.bind(this)}
              numberGuessed={this.state.numberGuessed}
              updateNumberGuessed={this.updateNumberGuessed.bind(this)}
               />
        <Reset resetGame={this.resetGame.bind(this)}/>
      </div>
    )
  }
}
