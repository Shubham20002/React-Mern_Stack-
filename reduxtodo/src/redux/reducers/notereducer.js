// import { ADD_NOTE,DELETE_NOTE } from "../actions/noteActions"
import {createSlice} from '@reduxjs/toolkit';
const initialstate={
    notes:[{text:"shubham sanjaykumar patil"}]
}
//reducer with reduxtoolkit
const noteslice=createSlice({
    name:"note",
    initialState:initialstate,
    reducers:{
        //this is add action
        add:(state,action)=>{
            state.notes.push({
                text:action.payload
            })
        },
        delete:(state,action)=>{
            state.notes.splice(action.payload,1);
        }
    }
});
 export const noteReducer=noteslice.reducer;
 export const actions=noteslice.actions;

 //selecters
 export const noteSelecter=(state)=>state.noteReducer.notes;
//reducer with redux
//  export function noteReducer(state=initialstate,action){

//     switch(action.type){
//         case ADD_NOTE:
//             console.log("note",action.note)
//             return{
//                  ...state,
//                  notes:[...state.notes,
//                 {
//                     text:action.note,
                    
//                 }]
//             }
//         case DELETE_NOTE:
//             console.log("delete notes");
//             state.notes.splice(action.index,1);
//             return {
//                  ...state,
//                  notes:[...state.notes]
//             }  
//         default:
//             return state;      
//     }
// }