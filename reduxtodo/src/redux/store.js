
// const redux = require("redux");

// import * as redux from "redux";
// import {combineReducers} from 'redux';
import {todoReducer} from "./reducers/todoReducer";
import { noteReducer } from "./reducers/notereducer";
import { configureStore } from "@reduxjs/toolkit";
import { notificationReducer } from "./reducers/notificationReducer";

// const result=combineReducers({
//     todo:todoReducer,
//     note:noteReducer
// })

// export const store = redux.createStore(result);

export const store=configureStore({
    reducer:{
        todoReducer,
        noteReducer,
        notificationReducer
    }
})