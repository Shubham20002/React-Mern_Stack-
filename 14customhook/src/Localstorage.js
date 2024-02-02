
import { useState,useEffect } from "react";
export default function useLocalstorage(){
    const [email,setemail]=useState("");
   
    
    useEffect(()=>{
       const email= localStorage.getItem("email");
       if(email){
        setemail(email);
       }
    },[]);

    useEffect(()=>{
        localStorage.setItem("email",email);
    },[email])

    return{email,setemail}
}