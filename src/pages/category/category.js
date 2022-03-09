import React, { useState } from "react";
import CollectionItem from "../../components/collection/collection-item";
import SHOP_DATA from "../shop/shopData";
import "./category.scss";
const CollectionPage = ({ match }) => {
  const [shopDataState] = useState(SHOP_DATA);
  const { collectionId } = match.params;
  const collectionIdMap = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5,
  };
  const filterCollection = shopDataState.find((item) => {
    return item.id === collectionIdMap[collectionId];
  });
  const { title, items } = filterCollection;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => {
          return <CollectionItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default CollectionPage;
