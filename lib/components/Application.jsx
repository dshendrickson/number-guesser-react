import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { pick, map, extend, filter} from 'lodash';
import moment from 'moment';

import TitleBar from './TitleBar';
import RangeEntry from './RangeEntry';
import GuessResult from './GuessResult';
import Guess from './Guess';
import Reset from './Reset'

export default class Application extends Component {

  constructor() {
    super();
    this.state = {
      numberToGuess: '',
      numberGuessed: '',
      numberRangeLow: 1,
      numberRangeHigh: 100,
      guessFeedbackMessage: 'Enter your guess below:',
      previousGuessMessage: 'Waiting for your best guess!',
      numberOfWins: 0
    };
  }

  generateNumberToGuess() {
    this.state.numberToGuess = Math.floor((Math.random() * (((this.state.numberRangeHigh) - (this.state.numberRangeLow) + 1))) + (this.state.numberRangeLow));
  }
  //
  // updateRangeValue(v) {
  //   const {name, value}
  // }
//
  render() {

    this.generateNumberToGuess();

    return (
      <div>
        <TitleBar />
        <RangeEntry value={this.state} />
        <GuessResult value={this.state} />
        <Guess />
        <Reset />
      </div>
    )
  }
}
