import React from "react";
//this example is created to show how component will unmount is working while component is unmounting
export default class TimerTwo extends React.Component {
  constructor() {
    super();
    console.log("Timer Constructor");
    this.state={
        time:0
    }
    this.timer=null;
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Timer getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("Timer ComponentDidMount");
    console.log("____________________________");
    this.timer=setInterval(()=>{
        this.setState((prevState)=>({time:prevState.time+1}));
    },1000)
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
    if(this.state.time==10){
      clearInterval(this.timer);
    }
  }
 componentWillUnmount(){
  console.log("Timer componentWillUnmount");
 }
 

  render() {
    console.log("Timer render");
    return (
      <div>
        <h2>Time spend</h2>
        {/* <h4>{this.state.time}</h4> */}
        <h4>{new Date(this.state.time*1000).toISOString().slice(11,19)}</h4>
      </div>
    );
  }
}