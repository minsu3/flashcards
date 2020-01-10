import React, { Component } from 'react';
import Header from './components/Header';
import FlashcardContainer from './components/FlashcardContainer';

// 1. App Component renders
// 2. FlashContainer renders (with an empty flashcards array in state)
// 3. Flashcard renders
		// displays the Loading ... message (because of the empty array above)
// 4. FlashcardContainer triggers componentDidMount
// 5. fetch() populates state object with data
// 6. setState rerenders all components but now we have data to work with!

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

export default App;
