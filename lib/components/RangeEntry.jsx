import React from 'react';
import ReactDOM from 'react-dom';

export default class RangeEntry extends Component {
  // debugger;
  render () {
    return (
      <div className='range-entry'>
        <h2>Enter a Number Range:</h2>
        <input className='range-entry__low'
              name='numberRangeLow'
              value={this.props.numberRangeLow}
              onChange={this.props.updateRangeValueLow}
              aria-label='low number for guess range' />
        <input className='range-entry__high'
              name='numberRangeHigh'
              value={this.props.numberRangeHigh}
              onChange={this.props.updateRangeValueHigh}
              aria-label='high number for guess range' />
      </div>
    )
  }
}
