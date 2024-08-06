import React from "react";
import { useSelector } from "react-redux";
import CheckoutItem from "../../components/checkoutItem/checkoutItem.js";
import "./checkout.scss";

const Checkout = ({ match }) => {
  const getAddToCartData = useSelector(
    (state) => state.addToCartState.addCartData
  );

  const getCartItemsCount = getAddToCartData.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {getAddToCartData.map((item) => {
        return <CheckoutItem checkout={item} />;
      })}
      <div className="total">
        <span>Total:${getCartItemsCount}</span>
      </div>
    </div>
  );
};

export default Checkout;
