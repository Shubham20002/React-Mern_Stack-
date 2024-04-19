import React from "react";

export default class TimerOne extends React.Component {
  constructor() {
    super();
    console.log("Timer Constructor");
    this.state={
        count:0
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Timer getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("Timer ComponentDidMount");
    console.log("____________________________");
  }

  getSnapshotBeforeUpdate(prevProp, prevState) {
    console.log("Timer getSnapshotBeforeUpdate");
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Timer shouldComponentUpdate");
    return true;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Timer componentDidUpdate");
    console.log("____________________________");
    document.title="shubham";
  }

  handlecounter=()=>{
    this.setState({count:this.state.count+1})
  }

  render() {
    console.log("Timer render");
    return (
      <div>
        <h2>Timer</h2>
        <h3>count:{this.state.count}</h3>
        <button onClick={this.handlecounter}>Increase Count</button>
      </div>
    );
  }
}