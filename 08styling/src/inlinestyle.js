import { Component } from "react";

class Inlinestyle extends Component{

    render(){
        return(
            <>
            <h1 style={{color:"red"}}>inline styling for react component</h1>
            <h1 style={style.headingstyle}>another method for inline styling in react</h1>
            </>
        )
    }
}

export default Inlinestyle;

const style={
    headingstyle:{
        color:"blue"
    }
}