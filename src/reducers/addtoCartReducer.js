import {
  addToCartIcon,
  decreaseQuantityChkout,
  deleteCheckoutItem,
} from "../constants/index.js";
import { removeDuplicates, decreaseQuantity } from "../utils/index.js";

const initialState = {
  addCartData: [],
};
const addToCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case addToCartIcon:
      return {
        ...state,
        addCartData: removeDuplicates(state.addCartData, action.payload),
      };
    case deleteCheckoutItem:
      return {
        ...state,
        addCartData: [
          ...state.addCartData.filter((item) => item.id !== action.payload),
        ],
      };
    case decreaseQuantityChkout:
      return {
        ...state,
        addCartData: decreaseQuantity(state.addCartData, action.payload),
      };
    default:
      return { ...state };
  }
};
export default addToCartReducer;
