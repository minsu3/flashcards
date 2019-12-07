import React, { Component } from "react";
import Flashcard from "./Flashcard";
import { CLIENT_URL } from "../constants.js";

class FlashcardContainer extends Component {
	state = {
		flashcards: [],
		currentIndex: 0,
		timer: 3,
		maxTime: 5
	}

	next = () => {
		let nextIndex = this.state.currentIndex + 1;
		if (nextIndex < this.state.flashcards.length) {
			this.setState({ currentIndex: nextIndex })
		}
	}

	prev = () => {
		let prevIndex = this.state.currentIndex - 1;
		this.setState({ currentIndex: prevIndex})
	}

	setTimer = () => {
		setInterval(()=> { 
			if(this.state.timer > 0) {
				let newTime = this.state.timer - 1
				this.setState({ timer: newTime })
			} 
			 else {
				this.next()
				this.setState({ timer: this.state.maxTime })
			}
		}, 1000);
	}
// 
// 	resetTimer = () => {
// 		if(this.state.timer === 0) {
// 			setTimer()
// 		} 
// 	}

	// callback to be used in the event listener below 
	handleKeyUp = (event) => {
		console.log(event.keyCode); //check to see what keyUp is
		if (event.keyCode === 39) {
			this.next()
		}
		if (event.keyCode === 37) {
			this.prev()
		}
	}
	
	componentDidMount() {
		window.addEventListener('keyup', this.handleKeyUp)
		fetch(CLIENT_URL)
			.then(response => response.json())
			.then(data => {
				this.setState({ flashcards: data })
			})
			.catch(err => console.log(err))
		this.setTimer()
	}

	//Render is run first 
	render() {
    return(
      <div>
        {
        	this.state.flashcards.length === 0
        		? "Loading..."
        		: <Flashcard 
        		detail={ this.state.flashcards[this.state.currentIndex] }
        		timer={ this.state.timer}
        		//resetTimer={ this.state.resetTimer}
  					/>
        }
      </div>
    )
  }

}

export default FlashcardContainer;

// 1. App Component renders
// 2. FlashContainer renders (with an empty flashcards array in state)
// 3. Flashcard renders
		// displays the Loading ... message (because of the empty array above)
// 4. FlashContainer triggers componentDidMount
// 5. fetch() populates state object with data
// 6. setState rerenders all components but now we have data to work with!


