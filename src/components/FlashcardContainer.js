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
        currentIndex: 0,
      }
      this.handleKeyUp = this.handleKeyUp.bind(this)
    }

    next () {
      let nextIndex = (this.state.currentIndex + 1) === this.state.flashcards.length
        ? this.flashcards.length - 1 
        : this.state.currentIndex + 1
      this.setState({currentIndex: nextIndex})
    }

    prev () {
      let prevIndex = (this.state.currentIndex - 1) < 0 ? 0:  (this.state.currentIndex - 1)
      this.setState({currentIndex: prevIndex})
    }

    handleKeyUp (event) {
      if (event.keyCode === 39) this.next()
      if (event.keyCode === 37) this.prev() 
    }

    componentDidMount () {
      window.addEventListener('keyup', this.handleKeyUp)

      axios
        .get(`${CLIENT_URL}/api/words`)
        .then(response => this.setState({flashcards: response.data}))
        .catch(err => console.log(err))
    }

    componentWillUnmount () {
      window.removeEventListener('keyup', this.handleKeyUp)
    }
    
    componentWillUpdate () {
    }
    render () {
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