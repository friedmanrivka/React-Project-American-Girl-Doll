import {createStore}from "redux";
import allReducers from './reducers';
// import { middlewareExample } from "./middleware/customMiddleware";

const store = createStore(
    allReducers// ,applyMiddleware(middlewareExample) 
);

store.getState();
export default store;



