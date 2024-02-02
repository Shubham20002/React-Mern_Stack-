import { useEffect, useState } from "react"
import useLocalstorage from "./Localstorage";

export default function Login(){
    // const [email,setemail]=useState("");
    const [password,setpassword]=useState("");
    const {email,setemail}=useLocalstorage();
    
    // useEffect(()=>{
    //    const email= localStorage.getItem("email");
    //    if(email){
    //     setemail(email);
    //    }
    // },[]);

    // useEffect(()=>{
    //     localStorage.setItem("email",email);
    // },[email])
    return(
        <>
        <h3>Login Page</h3>
        <form action="">
            <input type="email" name="" id="" value={email} onChange={(e)=>{setemail(e.target.value)}}/>
            <input type="password" name="" id="" onChange={(e)=>{setpassword(e.target.value)}} />
            <button>login</button>
            
        </form>

        </>
    )
}