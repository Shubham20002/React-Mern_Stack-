import React from "react";
import Timer from "./components/timer"

class App extends React.Component {
  constructor(){
    super();
    this.state={
      istimeron:false
    }
  }
  handletiomeron=()=>{
    this.setState({
      istimeron: !this.state.istimeron
    }

    )
  }
  render(){
    return (
      <>
      <Timer istimeron={this.state.istimeron}/>
      <button onClick={this.handletiomeron}>{this.state.istimeron?"STOP":"START"}</button>
      </>
    );
  }
 
}

export default App;
