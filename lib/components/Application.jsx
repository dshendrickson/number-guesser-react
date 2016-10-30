import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { pick, map, extend, filter} from 'lodash';
import moment from 'moment';

import TitleBar from './TitleBar';
import RangeEntry from './RangeEntry';

export default class Application extends Component {

  constructor() {
    super();
    this.state = {
      numberToGuess: '',
      numberGuessed: '',
      numberRangeLow: '1',
      numberRangeHigh: '100',
      guessFeedbackMessage: 'Enter your guess below:',
      previousGuess: 'Waiting for your best guess!'
    };
  }

  // generateNumberToGuess(lowNumber, highNumber) = () => {
  //   let numberToGuess = Math.floor((Math.random() * (((lowNumber) - (highNumber) + 1))) + (lowNumber));
  // }
  //
  // updateRangeValue(v) {
  //   const {name, value}
  // }
//
  render() {
    return (
      <div>
        <TitleBar />
        <RangeEntry values={this.state}/>
      </div>
    )
  }
}
