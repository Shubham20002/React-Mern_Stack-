import { useState } from "react";


function ComponentA(){
   const [fname,setfname]=useState('');
   const [lname,setlname]=useState('');
   const handlefname=(e)=>{
      setfname(e.target.value);
   }
  const handlelname=(e)=>{
      setlname(e.target.value);
   }
 return(
    <>
      <input type="text" placeholder='fname' onChange={handlefname} />
            <input type="text" placeholder='lname'  onChange={handlelname} />
            <hr />
            <h3>Hello,{fname}{" "}{lname}</h3>
    </>
 )
}

export default ComponentA;