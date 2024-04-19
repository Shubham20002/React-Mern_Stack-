import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
// import {addTodo} from "../../redux/actions/todoActions";
import { actions } from "../../redux/reducers/todoReducer";
import { notificationSelecter,resetnotification } from "../../redux/reducers/notificationReducer";

import "./ToDoForm.css";

function ToDoForm() {
  const [todoText, setTodoText] = useState("");
  const disptach = useDispatch();
  const message=useSelector(notificationSelecter);

  if(message){
    setTimeout(() => {
      disptach(resetnotification());
    }, 3000);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoText("");
    disptach(actions.add(todoText));
  };

  return (
    <div className="container">
      
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control mb-3"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button className="btn btn-success float-end" type="submit">Create Todo</button>
    </form>
    {message && <div class="alert alert-success" role="alert">
  {message}
</div>}
    
    </div>
  );
}

export default ToDoForm;