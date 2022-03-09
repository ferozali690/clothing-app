import { toggleCartIcon } from "../constants";
const intialState = {
  hidden: true,
};

const CartIconReducer = (state = intialState, action) => {
  switch (action.type) {
    case toggleCartIcon:
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return {
        ...state,
      };
  }
};

export default CartIconReducer;
