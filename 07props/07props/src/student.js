import {Component} from 'react';

// class Student extends Component{
    
//  render(){
//     const {name,mark}=this.props;
//     return(
//         <>
//         <h1>hello {this.props.name}</h1>
//         <h5>your makr is {mark}</h5>
//         </>
//     )
//  }
// }


//props in function component
function Student(props){
    const {name,mark}=props;
    return(
        <>
        <h1>hello {name}</h1>
        <h5>your makr is {mark}</h5>
        </>
    )
}

export default Student;