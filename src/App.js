import React, { Component } from 'react';
import './App.css';
import Card from './Card';
import getData from './data/Repo'

const Data = getData();

class App extends Component {
  constructor(){
    super()

    this.state = {
      index: 0,
      score: 0,
      showResult: false
    }

  }

  onButtonClick = ()=>{
    if(this.state.index < Data.length-1){
      this.setState({
        index: this.state.index + 1
      })
    }
    else{
      this.setState({
        showResult: true
      })
    }
  }

  verifyAnswer = (id) => {
    if(Data[this.state.index].CorrectAnswerId == id){
      this.setState({
        score: this.state.score + 1
      })
    }
  }

  render() {
    return (
      
      <div className="App">
      {!this.state.showResult &&
        <Card question = {Data[this.state.index].Question}
        choices = {Data[this.state.index].Choices} 
        onClick = {this.onButtonClick}
        selected = {null}
        verifyAnswer = {this.verifyAnswer}/>
      }
      {this.state.showResult &&
        <div>
          <h1> Your Score is {this.state.score} </h1>
        </div>
      }
      </div>
    );
  }
}

export default App;
