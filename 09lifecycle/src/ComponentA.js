import React from "react"
class ComponentA extends React.Component{
    //we cannot use setstate and sideeffect in constructor,getDerivedStateFromProps,render
    //we can do setstate and sideeffect inside componentdidount only
    constructor(){
        super();

        this.state={
            name:"ComponentA",
            data:[]
        }
        console.log("componentA constructor");
    }

   static getDerivedStateFromProps() {
    console.log("componentA  getDerivedStateFromProps ");
    return null;
   }

   componentDidMount(){
    console.log("compoentA componentdidmount");
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({data}))
   }

    render(){
        console.log("componentA render");
        console.log(this.state.data);
        return(
            <>
            <h1>{this.state.name}</h1>
            <ul>
                {this.state.data.map((d)=><li>{d.username}</li>)}
            </ul>
            </>
        )
    }
}

export default ComponentA;