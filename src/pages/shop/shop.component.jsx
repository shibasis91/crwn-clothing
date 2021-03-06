import React from "react";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";

import "./shop.styles.scss";
import { Route } from "react-router-dom";
import Collection from "../collection/collection.component";

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={Collection} />
  </div>
);

export default ShopPage;
