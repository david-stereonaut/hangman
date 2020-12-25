import React, { Component } from 'react';

class Solution extends Component {

    select = () => {
        if (this.props.className === "checked") { return }
        this.props.selectLetter(this.props.letter)
    }

    render() {
        return <span className={this.props.className} onClick={this.select}>{this.props.letter} </span>
    }
}
export default Solution