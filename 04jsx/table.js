const student=[
    { name:"shubham",
    age:24,
    no:9960},
 {
    name:"sushant",
    age:25,
    no:8600
},
{
    name:"karan",
    age:23,
    no:7887

}];

function App(){
    return(<>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>age</th>
                <th>No</th>
            </tr>
        </thead>
        <tbody>
            {student.map((stu)=>(<tr>
                <td>{stu.name}</td>
                <td>{stu.age}</td>
                <td>{stu.no}</td>
            </tr>))}
        </tbody>
    </table>
    </>)
}


ReactDOM.createRoot(document.getElementById('root')).render(<App/>)