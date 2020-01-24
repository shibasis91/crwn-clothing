import React from "react";

import "./checkout-item.styles.scss";
import { connect } from "react-redux";
import {
  clearCartItem,
  addCartItem,
  removeCartItem
} from "../../redux/cart/cart.actions";

const CheckOutItem = ({ cartItem, addItem, removeItem, clearItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addCartItem(item)),
  removeItem: item => dispatch(removeCartItem(item)),
  clearItem: item => dispatch(clearCartItem(item))
});

export default connect(null, mapDispatchToProps)(CheckOutItem);
