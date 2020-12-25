import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Score from './components/Score'
import Solution from './components/Solution'
import Letters from './components/Letters'
import EndGame from './components/EndGame';

class App extends Component {
  constructor(){
    super()
    this.state = {
      letterStatus: this.generateLetterStatuses(),
      solution: {
        word: 'YES',
        hint: 'A prog rock band'
      },
      score: 100,
      end: null,
      words: [{
        word: 'YES',
        hint: 'A prog rock band'
        },
        {
          word: 'NICE',
          hint: 'Not bad'
        },
        {
          word: 'NO',
          hint: 'NOT a prog rock band'
        }
      ]
    }
  }

  selectLetter = (letter) => {
    let newStatus = { ...this.state.letterStatus }
    newStatus[letter] = true
    let gotIt = false
    let score = 0
    let end = null
    let letterCounter = 0
    this.state.solution.word.split('').forEach(l => {
      if(l === letter) {
        gotIt = true
        score += 5
      }
      if(newStatus[l]) {
        letterCounter++
      }
    })
    if (letterCounter ===  this.state.solution.word.length) { end = 'win'}
    if (!gotIt) { score -= 20 }
    if (this.state.score + score <= 0) { end = 'lose'}
    this.setState({
      score: this.state.score + score,
      letterStatus: newStatus,
      end
    })
  }

  generateLetterStatuses() {
    let letter = 'A'
    let letters = {}
    for (let i=0;i<26;i++){
      letters[letter] = false
      letter = String.fromCharCode(letter.charCodeAt(0) + 1)
    }
    return letters
  }

  restart = () => {
    this.setState({
      letterStatus: this.generateLetterStatuses(),
      solution: this.state.words[Math.floor(Math.random() * (this.state.words.length))],
      score: 100,
      end: null,
      words: [...this.state.words]
    })
  }

  render() {
    if (this.state.end === null) {
      return (
        <div className="App">
          <Score score={this.state.score} />
          <Solution letterStatus={this.state.letterStatus} solution={this.state.solution}  />
          <Letters letterStatus={this.state.letterStatus} selectLetter={this.selectLetter} />
        </div>
      )
    } else {
      return (
      <div className="App">
        <EndGame end={this.state.end} solution={this.state.solution.word} restart={this.restart} />
      </div>
      )
    }
  }
}

export default App;
