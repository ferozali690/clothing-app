import React from "react";
import { useSelector } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cartIcon.scss";

const CartIcon = ({ onClick }) => {
  const getAddToCartData = useSelector(
    (state) => state.addToCartState.addCartData
  );
  const getCartItemsCount = getAddToCartData.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
  console.log(getCartItemsCount);
  return (
    <div className="cart-icon" onClick={onClick}>
      <ShoppingIcon className="shopping-icon" />
      <div className="item-count">{getCartItemsCount}</div>
    </div>
  );
};

export default CartIcon;
