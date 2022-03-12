import {
  toggleCartIcon,
  addToCartIcon,
  deleteCheckoutItem,
  decreaseQuantityChkout,
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
export const decreaseQuantityInCheckoutPage = (item) => {
  return {
    type: decreaseQuantityChkout,
    payload: item,
  };
};
