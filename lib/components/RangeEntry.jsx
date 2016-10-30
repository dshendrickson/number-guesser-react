import React from 'react';

const RangeEntry = () => {

  return (
    <div className='range-entry'>
      <h2>Enter a Number Range:</h2>
      <input className='number-range-low'
            name='numberRangeLow' placeholder='1'
            value='1'
            aria-label='low number for guess range' />
      <input className='number-range-high'
            name='numberRangeHigh' placeholder='100'
            value='100'
            aria-label='high number for guess range' />
    </div>
  )
}

module.exports = RangeEntry
