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
      numberGuessed: 'Best Guess!',
      numberRangeLow: 1,
      numberRangeHigh: 100,
      guessFeedbackMessage: 'Enter your guess below:',
      previousGuessMessage: 'Waiting for your best guess!',
      numberOfWins: 0
    };
    this.generateNumberToGuess();
  }

  generateNumberToGuess() {
    this.state.numberToGuess = Math.floor((Math.random() * (((this.state.numberRangeHigh) - (this.state.numberRangeLow) + 1))) + (this.state.numberRangeLow));
  }

  updateRangeValueHigh(entered) {
    this.setState({numberRangeHigh: entered.target.value})
  }

  updateRangeValueLow(entered) {
    this.setState({numberRangeLow: entered.target.value})
  }

  updateNumberGuessed(entered) {
    this.setState({numberGuessed: entered.target.value})
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
              updateNumberGuessed={this.updateNumberGuessed.bind(this)}/>
        <Reset />
      </div>
    )
  }
}
