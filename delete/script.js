var App=()=>{
   var name="karan";
   var age=20;
   var arr=[10,20,30];
   var obj={name:"shubham",lname:"patil"};
   var islogin=true;
 return(
    <>
    <h1>hello {name} your age is {age}</h1>
    <h2>hello patil</h2>
    <h3>{arr}</h3>
    <h3>name from object is :{obj.name}</h3>
    {arr.map((e)=>(<h1 key={e*2}>{e}</h1>
    ))}

{islogin ? <h1>shubham</h1> :"user"}

    </>
 )
}

const root=document.getElementById('root');
ReactDOM.createRoot(root).render(<App/>);