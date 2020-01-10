import React, { Component } from 'react';
import Definition from './Definition';

class Flashcard extends Component {
  render() {
  	let definitions = this.props.detail.definitions[0].definitions
    
    return (
      <div className="card">
        { this.props.detail.word }
        { definitions.map(def => <Definition def={def} />) }
      </div>
    )
  }
}

export default Flashcard;
