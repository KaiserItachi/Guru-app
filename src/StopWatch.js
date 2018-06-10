import React from 'react'

const formattedSeconds = (sec) =>
  Math.floor(sec / 60) +
    ':' +
  ('0' + sec % 60).slice(-2)
  

export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      secondsElapsed: 0,
    };
    
    this.incrementer = setInterval( () =>
      this.setState({
        secondsElapsed: this.state.secondsElapsed + 1
      })
    , 1000);
  }

  componentWillUpdate(){
      if(this.state.secondsElapsed === 300){
          this.props.submitAnswer();
      }
  }
  
  render() {
    return (
      <div>
        <h1>{formattedSeconds(this.state.secondsElapsed)}</h1>
      </div>
    );
  }
}