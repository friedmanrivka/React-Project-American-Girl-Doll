import { combineReducers } from "redux";
import { CartReducer }  from "./cartReducer";
import ProductReducer from "./ProductReducer";

const allReducers = combineReducers({
   products: ProductReducer,
   cart: CartReducer
})                                                                                             


export default allReducers