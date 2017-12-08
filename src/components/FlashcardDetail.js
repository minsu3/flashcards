import React, { Component } from 'react'
import Definition from './Definition'

class FlashcardDetail extends Component {
    constructor (props) {
        super(props)
        this.state = {
            timer: 10,
            show: false
        }

        this.toggleShow = this.toggleShow.bind(this)
        this.decrementTimer = this.decrementTimer.bind(this)
    }

    componentDidMount () {
        window.setTimeout(this.decrementTimer, 1000)
    }

    toggleShow () {
        this.setState(prevState => ({
            show: !prevState.show
        }))
    }

    decrementTimer () {
        if (this.state.timer === 0) {
            this.props.onTimerEnd()
        } else {
            this.setState(prevState => ({ timer: prevState.timer - 1 }))
            window.setTimeout(this.decrementTimer, 1000)
        }
    }

    componentWillReceiveProps () {
        this.setState({ timer: 10 })
        window.setTimeout(this.decrementTimer, 1000)
    }

    componentDidUpdate() {
    }

    render () {
        let flashcard = this.props.card
        return (
            <div>
                <h3>{this.state.timer}</h3>
                <h1>{flashcard.word}</h1>
                {this.state.show && flashcard.definitions.map((def, idx) => <Definition def={def} key={def._id} idx={idx}/>)}
                <button
                    onClick={this.toggleShow}
                    className="waves-effect waves-light btn">
                    {this.state.show ? "Hide Definition" : "Show Definition"}
                </button>
            </div>
        )
    }
}


export default FlashcardDetail
