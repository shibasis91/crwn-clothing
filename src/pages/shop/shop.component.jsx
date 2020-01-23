import React, { Component } from "react";
import SHOP_DATA from "./shop.data";

import "./shop.styles.scss";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

class ShopPage extends Component {
  constructor() {
    super();
    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...itemProps }) => (
          <CollectionPreview key={id} {...itemProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
