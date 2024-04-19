// import {redux }from 'redux'
const redux =require('redux')
import { todoReducer } from './reducer/todoReducer';

export  const store=redux.createStore(todoReducer);