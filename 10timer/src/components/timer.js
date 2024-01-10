import React from "react";

export default class Timer extends React.Component {
  constructor() {
    super();
    // console.log("Timer Constructor");
    this.state={
        time:0
    }
    this.timer=null;
  }

 

  shouldComponentUpdate(nextProps, nextState) {
    // console.log("Timer shouldComponentUpdate");
    if(nextState.time%5==0){
        return true;
    }
    else{
        return false;
    }
    
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // console.log("Timer componentDidUpdate");
    // console.log("____________________________");
    if(prevProps.istimeron != this.props.istimeron){
        if(this.props.istimeron){
            this.timer=setInterval(()=>{
                this.setState((prevState)=>({time:prevState.time+1}));
            },1000)
        }
        else{
            clearInterval(this.timer)
        }
    }

   
   
    console.log("pervprops",prevProps);
    console.log("pervprops",this.props);
    console.log("pervstate",prevState);
    console.log("snapshoot",snapshot);
  }
 componentWillUnmount(){
//   console.log("Timer componentWillUnmount");
 }
 

  render() {
    // console.log("Timer render");
    return (
      <div>
        <h2>Time spend</h2>
        {/* <h4>{this.state.time}</h4> */}
        <h4>{new Date(this.state.time*1000).toISOString().slice(11,19)}</h4>
      </div>
    );
  }
}