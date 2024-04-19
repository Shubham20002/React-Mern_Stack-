import { ADD_TODO,TOGGLE_TODO } from "../Actions/todoActions";

// initialstate
const initialstate={
    todos:[{text:"hello shubham",completed:true}]
}

export function todoReducer(state=initialstate,action){
  switch(action.type){
    case ADD_TODO:
        return{
         ...state,
         todos:[
            ...state.todos,
            {
                text:action.text,
                completed :false
            }
         ]
        };
    case TOGGLE_TODO:
        console.log("hi");
        console.log(state.todos);
        return{
            
            ...state,
            todos: state.todos.map((todo,i)=>{
                if(i==action.index){
                    todo.completed=!todo.completed;
                }
                return todo;
            }
            )

        } ;   
    default:
        return state    
  }
}