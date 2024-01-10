import {useEffect} from 'react'
import {useState} from 'react'
 const Functioncomponent=()=>{
    const [title,settitle]=useState("title");
     useEffect(()=>{
        document.title=title
     },)

     useEffect(()=>{
        let timer=setInterval(()=>{
            console.log("width",window.innerWidth);
        },1000)
        console.log("width",window.innerWidth);
        return(clearInterval(timer))
     })


    const handletitle=(e)=>{
        settitle(e.target.value)
    }
    return(
        <>
        <input type="text" onChange={handletitle} />
        </>
    )
 
}

export default Functioncomponent;