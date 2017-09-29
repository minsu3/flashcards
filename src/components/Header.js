import React, { Component } from 'react'

class Header extends Component {
    render () {
        return (
            <nav>
                <div className="nav-wrapper red lighten-1">
                    <a href="/" className="brand-logo left">Study</a>
                </div >
            </nav>
        )
    }
}

export default Header