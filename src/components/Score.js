import React, { Component } from 'react';

class Score extends Component {
    render() {
        let rank = this.props.score >= 80 ? "high-score" : (this.props.score >= 50 ? "medium-score" : "low-score")
        return <div className={rank}>{this.props.score}</div>
    }
}
export default Score