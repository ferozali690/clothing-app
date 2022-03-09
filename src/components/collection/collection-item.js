import React from "react";
import { useDispatch } from "react-redux";
import { addToCartAction } from "../../actions";
import CustomButton from "../custom-button/customButton";
import "./collection-item.scss";

const CollectionItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${item.imageUrl})` }}
      ></div>
      <div className="collection-footer">
        <span className="name">{item.name}</span>
        <span className="price">{item.price}</span>
      </div>
      <CustomButton onClick={() => dispatch(addToCartAction(item))}>
        Add To Cart
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
