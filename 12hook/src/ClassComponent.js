import {Component} from 'react'

class ClassComponent extends Component{

    constructor(){
        super();
        this.state={
            fname:"",
            lname:""
        }
    }

    handlefname=(e)=>{
        this.setState({
            fname:e.target.value
        })
    }

    handlelname=(e)=>{
        this.setState({
            lname:e.target.value
        })
    }

    render(){
        return(
            <>
            <input type="text" placeholder='fname' onChange={this.handlefname} />
            <input type="text" placeholder='lname'  onChange={this.handlelname} />
            <hr />
            <h3>Hello,{this.state.fname}+{this.state.lname}</h3>

            </>
        )
    }

}

export default ClassComponent;