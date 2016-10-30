import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { pick, map, extend, filter} from 'lodash';
import moment from 'moment';

export default class Application extends Component {

  constructor() {
    super();
    this.state = {
      numberToGuess: '',
      numberGuessed: '',
      numberRangeLow: '',
      numberRangeHigh: '',
      guessFeedbackMessage: ''
    }
  }

  render() {
    return (
      <TitleBar />
    )
  }
}

const TitleBar = () => {
  return (
    <div className='title-bar'>
      <h1>Number Guesser with React</h1>
    </div>
  )
}
