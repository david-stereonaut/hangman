import React, { Component } from 'react';

class EndGame extends Component {

    render() {
        if (this.props.end === 'win') {
            return (
                <div>
                    <p>Congratulations!</p>
                    <button onClick={this.props.restart}>Restart</button>
                </div>
            
            )
        }
        if (this.props.end === 'lose') {
            return (
                <div>
                    <p>You lost! the word was {this.props.solution}</p>
                    <button onClick={this.props.restart}>Restart</button>
                </div>
            )
        }
    }
}
export default EndGame