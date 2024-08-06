import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cartIcon/cartIcon.js";
import { useDispatch, useSelector } from "react-redux";
import CartDropdown from "../cartDropdown/cartDropdown.js";
import { toggleCartIconAction } from "../../actions/index.js";

const Header = () => {
  const dispatch = useDispatch();
  const getToggleCartIconState = useSelector((state) => state.cartIcon.hidden);
  const handleToggleCartIcon = () => {
    dispatch(toggleCartIconAction());
  };
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        {/* <Link className="option" to="/contact">
          CONTACT
        </Link> */}
        <CartIcon onClick={handleToggleCartIcon} />
      </div>
      {getToggleCartIconState ? null : <CartDropdown />}
    </div>
  );
};

export default Header;
