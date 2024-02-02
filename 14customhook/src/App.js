import { useState } from "react";
import Forgot from "./Forgot";
import Login from "./Login";

function App() {
  const[form,setform]=useState("login");
  return (
   
   <>
   {form ==="login"? <Login/> :<Forgot/>}
   <button onClick={()=>setform(form ==="login"? "forgot" :"login")}>{form ==="login"? "forgot password": "Back to login"}</button>
   
   </>
  );
}

export default App;
