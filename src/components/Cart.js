import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearItems } from "../utils/cartSlice";
import { CART_LOGO } from "../utils/constants";
import store from "../utils/store";
import UserContext from "../utils/UserContext";
import FoodItem from "./FoodItem";

const Cart = () => {
  const { user } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const clearCart = () => {
    dispatch(clearItems());
  };

  return (
    <>
      {cartItems.length > 0 ? (
        <div className="py-4 w-[800] m-auto">
          <div className="flex justify-between py-2">
            <h1 className="font-bold text-3xl">
              Cart Items - {cartItems.length}
            </h1>
            <button
              className="border font-normal text-lg px-4 py-1 text-white bg-red-400 rounded-md"
              onClick={() => {
                clearCart();
              }}
            >
              Clear Cart
            </button>
          </div>
          {cartItems.map((item) => {
            return <FoodItem key={item.id} {...item} />;
          })}
        </div>
      ) : (
        <div className="flex justify-center flex-col items-center px-8 h-[81vh]">
          <div>
            <img className="w-[300]" src={CART_LOGO} alt="Cart Logo" />
            <h4 className="mt-6 text-xl font-semibold text-[#535665]">
              Your cart is empty
            </h4>
            <h5 className="mt-2 text-[#7e808c]">
              <span className="text-[#fc8019]">{user.name}</span>, You can go to
              home page to view more restaurants
            </h5>
            <Link to="/">
              <button className="mt-8 px-5 py-3 uppercase bg-[#fc8019] text-white font-semibold cursor-pointer">
                See restaurants...
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
