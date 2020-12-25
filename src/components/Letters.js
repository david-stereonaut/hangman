import React, { Component } from 'react';
import Letter from "./Letter";

class Letters extends Component {

    render() {
        return (<div>
            <div>Available Letters</div>
            {Object.keys(this.props.letterStatus).map(l => {
                if (this.props.letterStatus[l]) {
                    return <Letter letter={l} className="checked" />
                }
                return <Letter letter={l} selectLetter={this.props.selectLetter} />
            })}
        </div>)
    }
}
export default Letters