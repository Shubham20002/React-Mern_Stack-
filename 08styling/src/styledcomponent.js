//npm install styled components

import styled from 'styled-components'
import { Component } from 'react'

const Nav=styled.div`
display: flex;
height:80px;
width:100%;
background-color:red;
justify-content:space-between;
`
class Stylecomponent extends Component {
    render(){
        return(
            <>
            <Nav>
                <div>
                    <h1>title</h1>
                </div>
                <div>
                    <img src="" alt="icon" />
                    <span>2</span>
                </div>
            </Nav>
            </>
        )
    }
}

export default Stylecomponent;