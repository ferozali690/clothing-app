import { combineReducers } from "redux";
import addToCartReducer from "../reducers/addtoCartReducer";
import CartIconReducer from "../reducers/cartIconReducer";

const allReducers = combineReducers({
  cartIcon: CartIconReducer,
  addToCartState: addToCartReducer,
});

export default allReducers;
