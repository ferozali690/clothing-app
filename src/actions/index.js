import {
  toggleCartIcon,
  addToCartIcon,
  deleteCheckoutItem,
} from "../constants";
export const toggleCartIconAction = () => {
  return {
    type: toggleCartIcon,
  };
};
export const addToCartAction = (item) => {
  return {
    type: addToCartIcon,
    payload: item,
  };
};
export const deleteCheckoutItemAction = (item) => {
  return {
    type: deleteCheckoutItem,
    payload: item,
  };
};
