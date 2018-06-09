import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card';
import getData from './data/Repo'

const Data = getData();

class App extends Component {
  constructor(){
    super()

    this.state = {
      index: 0
    }

  }

  onButtonClick = ()=>{
    if(this.state.index < Data.length-1){
      this.setState({
        index: this.state.index + 1
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Card question = {Data[this.state.index].Question}
        choices = {Data[this.state.index].Choices} 
        onClick = {this.onButtonClick}/>
      </div>
    );
  }
}

export default App;
