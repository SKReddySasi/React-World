import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
  return !restaurantMenu ? (
    <Shimmer />
  ) : (
    <div className="w-[800] m-auto">
      <h1 className="text-center font-semibold text-4xl">Menu Items</h1>
      <div className="w-full">
        {Object.values(restaurantMenu).map((item) => {
          return (
            <div key={item?.id} className="flex items-center justify-between my-4 border-spacing-1">
              <div>
                <h2 className="res-name">{item?.name}</h2>
                <div className="res-stars-div">
                  <h4>Category : {item?.category}</h4>
                  <h4>{item?.price / 100}</h4>
                </div>
              </div>
              <div>
                <img
                  className="w-[200]"
                  src={CDN_URL + item?.cloudinaryImageId}
                  alt="menu-img"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
