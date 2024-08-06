import React from "react";
import { useDispatch } from "react-redux";
import {
  deleteCheckoutItemAction,
  addToCartAction,
  decreaseQuantityInCheckoutPage,
} from "../../actions/index.js";
import "./checkoutItem.scss";
const CheckoutItem = ({ checkout }) => {
  const dispatch = useDispatch();
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={checkout.imageUrl} alt="" />
      </div>
      <span className="name">{checkout.name}</span>
      <span className="quantity">
        <div
          className="arrow"
          onClick={() => dispatch(decreaseQuantityInCheckoutPage(checkout))}
        >
          &#10094;
        </div>
        <span className="value"> {checkout.quantity}</span>

        <div
          className="arrow"
          onClick={() => dispatch(addToCartAction(checkout))}
        >
          &#10095;
        </div>
      </span>
      <span className="price">{checkout.price}</span>
      <span
        className="remove-button"
        onClick={() => dispatch(deleteCheckoutItemAction(checkout.id))}
      >
        &#10005;
      </span>
    </div>
  );
};

export default CheckoutItem;
