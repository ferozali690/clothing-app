import React from "react";
import CollectionPreview from "../previewCollection/preview-collection";
import SHOP_DATA from "../../pages/shop/shopData";
import { useState } from "react";

const CollectionOverView = () => {
  const [shopData] = useState(SHOP_DATA);

  return (
    <div className="collections-overview">
      {shopData.map(({ id, ...other }) => {
        return <CollectionPreview key={id} {...other} />;
      })}
    </div>
  );
};

export default CollectionOverView;
