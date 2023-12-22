//embeding javascript inside jsx
function sum(){
var a=5+3;
     return a;
}

//jsx expression(jsx expression can be stored in js variable)
const header=<h1>this is jsx expression</h1>
function App(){
    
    //embeding string and number
    var name="shubham";
    var age=24;
    //embeding null(null,undefined,boolean will not print o screen)
    let demo=null;
    return(
        <>
        <h1>hello {name}!</h1>
        <p>your age is {age}</p>
        <h3>null value:{null}</h3>
        <h5>calling a function:{sum()}</h5>
        <h1>{header}</h1>
        </>
    )
}

//jsx render only valid javascript expression that resolved to value

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)