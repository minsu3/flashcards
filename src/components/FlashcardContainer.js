import React, {Component} from 'react'
import axios from 'axios'

import {CLIENT_URL} from '../constants.js'
import FlashcardDetail from './FlashcardDetail'

class FlashcardContainer extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        flashcards: [],
        show: false,
        currentIndex: 0
      }
    }

    next () {
      if (this.state.show) 
        this.setState(currState => ({currentIndex: currState.currentIndex + 1}))
      this.setState(currState => ({show: !currState.show}))
    }

    componentDidMount () {
      window.addEventListener('keyup', (event) => {
        // move to next card on right arrow
        if (event.keyCode === 39) 
          this.next()
      })

      axios
        .get(`${CLIENT_URL}/api/words`)
        .then(response => this.setState({flashcards: response.data}))
        .catch(err => console.log(err))
    }
    
    render() {
      let flashcard = this.state.flashcards[this.state.currentIndex]
      return (
        <div>
            <main>
              <div className="container">
                {flashcard && 
                <FlashcardDetail
                  card={flashcard}
                  show={this.state.show}/>}
              </div>
            </main>
        </div>
      )
    }
}

export default FlashcardContainer