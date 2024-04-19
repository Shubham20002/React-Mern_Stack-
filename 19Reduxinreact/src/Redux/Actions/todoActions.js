// action constants
export const ADD_TODO="Add Todo";
export const TOGGLE_TODO="Toggle todo";

//action creaters
// action creaters taking the payload and returning the object
export const Addtodo=(text)=>({text,type:ADD_TODO});
export const Toggletodo=(index)=>({index,type:TOGGLE_TODO});


