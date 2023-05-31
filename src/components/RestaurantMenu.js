import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const params = useParams();
  const { resId } = params;

  const [restaurantMenu, setRestaurantMenu] = useState(null);

  useEffect(() => {
    getRestaurentMenu();
  }, []);

  async function getRestaurentMenu() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/quick?menuId=" + resId
    );
    const json = await data.json();
    setRestaurantMenu(json?.data?.menu?.items);
  }

  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItem("Avocado"));
  };

  return !restaurantMenu ? (
    <Shimmer />
  ) : (
    <div className="w-[800] m-auto">
      <h1 className="text-center font-semibold text-4xl">Menu Items</h1>
      <div className="w-full">
        {Object.values(restaurantMenu).map((item) => {
          return (
            <div key={item?.id} className="border m-3 py-4 px-4">
              <div className="flex items-center justify-between">
                <div className="p-5">
                  <h2 className="font-bold text-xl">{item?.name}</h2>
                  <h4>Category : {item?.category}</h4>
                  <h4>₹ {item?.price / 100}</h4>
                </div>
                <div className="text-center">
                  <div>
                    <img
                      className="w-[200]"
                      src={CDN_URL + item?.cloudinaryImageId}
                      alt="menu-img"
                    />
                  </div>
                  <div className="relative bottom-6">
                    <button
                      className="px-8 py-2 text-sm border font-bold bg-white text-green-700 rounded-md"
                      onClick={() => handleAddItem()}
                    >
                      ADD
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
