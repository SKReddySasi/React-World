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
    <div>
      <h1>Menu</h1>
      <div className="flex flex-wrap">
        {Object.values(restaurantMenu).map((item) => {
          return (
            <div key={item?.id} className="res-card">
              <img
                className="res-img"
                src={CDN_URL + item?.cloudinaryImageId}
                alt="menu-img"
              />

              <h2 className="res-name">{item?.name}</h2>
              <div className="res-stars-div">
                <h4>Category : {item?.category}</h4>
                <h4>{item?.price / 100}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
