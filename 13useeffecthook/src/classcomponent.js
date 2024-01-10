import {Component} from 'react'
class Classcomponent extends Component{
    constructor(){
        super();
        this.state={
            title:"patil"
        }
    }
    handletitle=(e)=>{
            this.setState({title:e.target.value})
    }
    //for first time render
    componentDidMount(){
        document.title=this.state.title
    }
    componentDidUpdate(){
        document.title=this.state.title
    }
    render(){
        return(
            <>
       <input type="text" onChange={this.handletitle}/>
            </>
        )
    }
}
export default Classcomponent