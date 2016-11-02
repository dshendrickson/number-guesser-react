import React, { Component } from 'react';

export default class Reset extends Component {
  render() {
    return (
      <div className='reset'>
      <button className='reset__reset'
              onClick={this.props.resetGame}
              aria-label='reset the game'>reset game</button>
      </div>
    )
  }
}
