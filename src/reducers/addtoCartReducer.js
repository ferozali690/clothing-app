import { addToCartIcon, deleteCheckoutItem } from "../constants";
import { removeDuplicates } from "../utils";

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
    default:
      return { ...state };
  }
};
export default addToCartReducer;
