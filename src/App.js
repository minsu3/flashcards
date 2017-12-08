import React, { Component } from 'react'

import Header from './components/Header'
import FlashcardContainer from './components/FlashcardContainer'

class App extends Component {
  render () {
    return (
      <div>
        <Header/>
        <FlashcardContainer/>
      </div>
    )
  }
}

export default App
