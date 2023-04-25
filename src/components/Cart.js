import React from "react";
import { CART_LOGO } from "../utils/constants";

const Cart = () => {
  return (
    <div className="cartComponent">
      <img width="300" src={CART_LOGO} alt="Cart Logo" />
      <h4 className="cartEmpty">Your cart is empty</h4>
      <h5 className="goToHome">
        You can go to home page to view more restaurants
      </h5>
      <button className="resBtn">See restaurants near you</button>
    </div>
  );
};

export default Cart;
