import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { toggleCartIconAction } from "../../actions";
import CartItem from "../cartItem/cartItem";
import CustomButton from "../custom-button/customButton";
import "./cartDropdown.scss";
const CartDropdown = ({ history }) => {
  const dispatch = useDispatch();
  const getAddToCartData = useSelector(
    (state) => state.addToCartState.addCartData
  );

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {getAddToCartData.length > 0 ? (
          getAddToCartData.map((item) => {
            return <CartItem {...item} />;
          })
        ) : (
          <p className="empty-message">Your Cart Is Empty</p>
        )}
      </div>
      {getAddToCartData.length > 0 && (
        <CustomButton
          onClick={() => {
            history.push("/checkout");
            dispatch(toggleCartIconAction());
          }}
        >
          Go To Checkout
        </CustomButton>
      )}
    </div>
  );
};

export default withRouter(CartDropdown);
