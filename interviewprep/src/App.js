import React from 'react'

export default function App() {
  var arr=["shubham","onkar","sushant"];
  var isloggedin=false;
  return (
    <>
    {isloggedin ? <h1>shubham</h1> :<h1>user</h1>}
    {arr.map((name)=>(<li>{name}</li>))}
    </>
  )
}
