import React, { Component } from 'react';
import Letter from "./Letter";

class Solution extends Component {
    render() {
        return (<div>
            <div>
                {this.props.solution.word.split('').map(l => {
                    if (this.props.letterStatus[l]){
                        return <Letter letter={l} />
                    }
                    return <Letter letter={'_'} />
                })}
            </div>
            <div><em>{this.props.solution.hint}</em></div>
        </div>)
    }
}
export default Solution