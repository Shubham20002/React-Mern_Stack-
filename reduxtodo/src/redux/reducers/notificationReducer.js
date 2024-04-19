
import { createSlice } from "@reduxjs/toolkit";
import { actions } from "./todoReducer";

const initialState={
    message:""
}

export const notificationSlice=createSlice({
    name:"notification",
    initialState,
    reducers:{
          reset:(state,action)=>{
            state.message=""
          }
    },
    // extraReducers:{
    //     'todo/add':(state,action)=>{
    //         console.log("notification extrareducers");
    //         state.message="new todo added"
    //     }
    // }

    // extraReducers:(builder)=>{
    //     builder.addCase(actions.add,(state,action)=>{
    //         state.message="new todo added"
    //     })
    // }

    extraReducers:{
        //using map objects [key]:value
        [actions.add]:(state,action)=>{
              state.message="todo added"
        }

    }

});

export const notificationReducer=notificationSlice.reducer;
export const resetnotification=notificationSlice.actions.reset;
export const notificationSelecter=(state)=>state.notificationReducer.message;