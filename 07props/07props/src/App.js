import Student from "./student";

function App() {
  return (
    <><h1>props</h1>
    <Student name="shubham" mark="99"/>
    <hr />
    <Student name="onakr" mark="98"/>
    <hr />
    <Student  mark="98"/>
    </>
    
  );
}

Student.defaultProps={
  name:"Alexa",
  mark:"idk"
}

export default App;
