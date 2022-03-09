import React from "react";
import { useDispatch } from "react-redux";
import { deleteCheckoutItemAction } from "../../actions";
import "./checkoutItem.scss";
const CheckoutItem = ({
  checkout: { name, imageUrl, price, quantity, id },
}) => {
  const dispatch = useDispatch();
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <span
        className="remove-button"
        onClick={() => dispatch(deleteCheckoutItemAction(id))}
      >
        &#10005;
      </span>
    </div>
  );
};

export default CheckoutItem;
