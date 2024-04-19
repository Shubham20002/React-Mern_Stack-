// import ComponentA from './ComponentA';
import TimerOne from "./components/timer/TimerOne";
import TimerTwo from "./components/timer/TimerTwo";
import ComponentA from "./ComponentA"
import React from "react";
class App extends React.Component {
  constructor(){
    super();
    this.state={
      mount:false
    }
  }
  handlemount=()=>{
    this.setState((prevstate)=>({mount:!prevstate.mount}))
  }
  render(){
    return (
      <>
        <h1>hello</h1>
      {/* <ComponentA/> */}
      <TimerOne/>

      {/* <button onClick={this.handlemount}>{this.state.mount? "Un-Mount":"Mount"}</button>
      {this.state.mount? <TimerTwo/> :null } */}
      
      </>
    
    );
  }
 
}

export default App;
