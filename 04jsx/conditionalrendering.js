
const logdin=false;
//to render data inside jsx based on condition we use ternary operator(outside jsx we can use if statement)
function App(){
    return(
        <>
        <h1>Hello {logdin ? "shubham" :"user"}</h1>
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>)