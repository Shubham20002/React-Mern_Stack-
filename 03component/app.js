
//this is function based compoent 
//we konw one function acn return only one thing so we use react fragment to return multiple element
// function App(){
//     return(
//         <>
//         <h1>hello</h1>
//         <p>this is paragraph</p>
//         </>
//     )
// }

//Arrow function
var App=()=>{
   return (
    <>
    <h1>hello</h1>
    <p>this is paragraph</p>
    </>)
}
ReactDOM.createRoot(document.getElementById('root')).render(<App/>);