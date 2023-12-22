//rendering array and object from jsx
const array=[10,20,30,40];

const obj={
    name:"shubham",
    company:"wipro"
}
const cars=["maruti","bmw","baleno"];
function App(){
    return(
        <>
        <h1>Array in jsx:{array}</h1>
        {/* directly whole object cant be render in jsx */}
        <h5>Object in jsx:{obj.name}</h5>
        {array.map((x,index)=><h1 key={index}>{x}</h1>)}
        <h1>List Of Cars</h1>
        <ul>
            {cars.map((car,index)=>(<li key={index}>{car}</li>))}
        </ul>

       

        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)