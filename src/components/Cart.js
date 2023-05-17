import React from "react";
import { CART_LOGO } from "../utils/constants";

const Cart = () => {
  return (
    <div className="flex justify-center flex-col items-center px-8 h-[77vh]">
      <img className="w-[300]" src={CART_LOGO} alt="Cart Logo" />
      <h4 className="mt-6 text-xl font-semibold text-[#535665]">Your cart is empty</h4>
      <h5 className="mt-2 text-[#7e808c]">
        You can go to home page to view more restaurants
      </h5>
      <button className="mt-8 px-5 py-3 uppercase bg-[#fc8019] text-white font-semibold cursor-pointer">See restaurants near you</button>
    </div>
  );
};

export default Cart;
