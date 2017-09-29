import React,  {Component } from 'react'
import axios from 'axios'

import { CLIENT_URL } from '../constants.js'
import FlashcardDetail from './FlashcardDetail'

const COLORS = ['#673ab7', '#2196f3', '#26a69a', '#e91e63']

class FlashcardContainer extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        flashcards: [],
        currentIndex: 0
      }
    }

    next () {
      if (this.state.show) 
        this.setState(currState => ({currentIndex: currState.currentIndex + 1}))
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
                <FlashcardDetail card={flashcard}/>}
              </div>
            </main>
        </div>
      )
    }
}

export default FlashcardContainer