import { useState,useEffect } from "react";
import useLocalstorage from "./Localstorage";
export default function Forgot(){

    // const [email,setemail]=useState("");
   
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
  <><h3>Forgot password</h3>
  <form action="">
    <input type="email" value={email} onChange={(e)=>{setemail(e.target.value)}} />
    <button>continue</button>
  </form>
  </>
    )
}