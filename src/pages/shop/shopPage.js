import React from "react";
import CollectionOverView from "../../components/collectionOverView/collectionOverView";
import { Route } from "react-router-dom";
import CollectionPage from "../category/category";

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverView} />
      <Route
        exact
        path={`${match.path}/:collectionId`}
        component={CollectionPage}
      />
    </div>
  );
};

export default ShopPage;
