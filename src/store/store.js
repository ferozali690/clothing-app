import { combineReducers } from "redux";
import addToCartReducer from "../reducers/addtoCartReducer.js";
import CartIconReducer from "../reducers/cartIconReducer.js";

const allReducers = combineReducers({
  cartIcon: CartIconReducer,
  addToCartState: addToCartReducer,
});

export default allReducers;
