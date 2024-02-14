const redux=require('redux');

// actions
const ADD_TODO="Add Todo";
const TOGGLE_TODO="Toggle Todo";

//action creaters
const AddTodo=(text)=>({text,type:ADD_TODO});
const ToggleTodo=(index)=>({index,type:TOGGLE_TODO});

//initial State
const initialstate={
    todos:[]
}

//Reducers
// must return updated state
const todoReducer=(state=initialstate,action)=>{
    switch(action.type){
        case ADD_TODO:
            return{
                ...state,
                todos:[
                    ...state.todos,
                    {
                        text:action.text,
                        completed:false
                    }
                ]
            }
        case TOGGLE_TODO:
            return{
                ...state,
                todos:state.todos.map((todo,i)=>{
                    if(i==action.index){
                        todo.completed=!todo.completed;
                    }
                    return todo;
                })
            }
        default:
            return state;        
    }
}

//creating store

const store=redux.createStore(todoReducer);

//dispatch action
store.dispatch(AddTodo("study at 8.15"))
store.dispatch(AddTodo("office at 10.30"));
store.dispatch(ToggleTodo(0));

//read data from store
console.log(store.getState());