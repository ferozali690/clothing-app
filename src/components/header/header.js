import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cartIcon/cartIcon";
import { useDispatch, useSelector } from "react-redux";
import CartDropdown from "../cartDropdown/cartDropdown";
import { toggleCartIconAction } from "../../actions";

const Header = () => {
  const dispatch = useDispatch();
  const getToggleCartIconState = useSelector((state) => state.cartIcon.hidden);
  console.log("toggelcarticon", getToggleCartIconState);
  const handleToggleCartIcon = () => {
    console.log("i clicked");
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
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        <CartIcon onClick={handleToggleCartIcon} />
      </div>
      {getToggleCartIconState ? null : <CartDropdown />}
    </div>
  );
};

export default Header;
