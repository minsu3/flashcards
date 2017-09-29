import React, {Component} from 'react'

const COLORS = ['#673ab7', '#2196f3', '#26a69a', '#e91e63']

let Definition = props => {
    let def = props.def
    let idx = props.idx

    let styles = {
        color: 'white',
        padding: '10px',
        backgroundColor: COLORS[idx]
    }

    return (
        <div 
            className="card text-center"
            style={styles}>
            <h5>Definition {idx + 1}</h5>
            <p>{ def.definitions[0] }</p>
        </div>
    )
}

class FlashcardDetail extends Component {
    constructor (props) {
        super(props)
        this.state = {
            timer: 10
        }

        this.decrementTimer = this.decrementTimer.bind(this)
    }

    componentDidMount () {
        window.setTimeout(this.decrementTimer, 1000)
    }

    decrementTimer () {
        this.setState(prevState => ({ timer: prevState.timer - 1}))
        window.setTimeout(this.decrementTimer, 1000)
    }

    componentWillReceiveProps () {
        this.setState({ timer: 10 })
    }

    render () {
        let flashcard = this.props.card
        let show = this.props.show
        return (
            <div>
                { !show && <h5>{this.state.timer} Seconds!</h5> }
                <h1>{ flashcard.word }</h1>
                { show && flashcard.definitions.map(
                    (def, idx) => <Definition def={def} key={def._id} idx={idx}/>)
                }
            </div>
        )
    }
}


export default FlashcardDetail