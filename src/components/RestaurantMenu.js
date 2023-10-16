import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart, removeFromCart } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const params = useParams();
  const { resId } = params; // destructure

  useEffect(() => {
    getRestaurentMenu();
  }, []);

  const getRestaurentMenu = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.908046&lng=80.209098&restaurantId=" +
          resId
      );
      const json = await data.json();
      setResInfo(json.data);
      console.log("json data: ", json.data)
    } catch (error) {
      console.log("error while fetching menu data : ", error);
    }
  };

  if (resInfo === null) return <Shimmer />; // Until Data fetches the data Load Shimmer!

  const {
    name,
    cuisines,
    areaName,
    city,
    totalRatingsString,
    avgRatingString,
    costForTwoMessage,
    sla: { deliveryTime },
  } = resInfo?.cards[0].card.card.info;
  console.log("res details : ", resInfo?.cards[0]?.card?.card?.info);
  console.log("name : ", name);
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log("itemCards", itemCards);

  return (
    <div className="w-[800] m-auto my-8 min-h-[71vh]">
      {/* RestairantName, Ratings */}
      <p className="text-xs text-[#93959f]">
        Home / {city} / <span className="text-[#535665]">{name}</span>
      </p>
      <div className="flex justify-between items-center py-4 border-b-2 border-dashed border-[#d3d3d3]">
        <div>
          <h1 className="font-semibold text-lg pb-1">{name}</h1>
          <p className="text-[#7e808c] text-xs pb-1">{cuisines.join(", ")}</p>
          <p className="text-[#7e808c] text-xs">{areaName}</p>
        </div>
        <div className="text-center border p-2 rounded-md">
          <p className="text-green-600 font-bold text-sm pb-2 border-b">
            &#9733; {avgRatingString}
          </p>
          <p className="text-xs text-[#8b8d97] pt-2">{totalRatingsString}</p>
        </div>
      </div>
      <div className="flex my-4 font-extrabold space-x-4">
        <p>{deliveryTime} MINS</p>
        <p>{costForTwoMessage}</p>
      </div>

      {/* Items data */}
      <div className="w-full">
        {itemCards ? (
          <p className="font-bold text-4xl">Items - ( {itemCards?.length} )</p>
        ) : (
          <p className="font-bold text-4xl">
            No Items found for this Restaurant
          </p>
        )}

        {itemCards?.map((item) => {
          return (
            <div key={item?.card?.info?.id} className="border m-3 pt-4 px-4">
              <div className="flex items-center justify-between">
                <div className="p-5">
                  <h2 className="font-bold text-xl">
                    {item?.card?.info?.name}
                  </h2>
                  <h4>Category : {item?.card?.info?.category}</h4>
                  <h4>₹ {item?.card?.info?.price / 100}</h4>
                </div>
                <div className="text-center">
                  <div>
                    <img
                      className="w-[200]"
                      src={CDN_URL + item?.card?.info?.imageId}
                      alt="menu-img"
                    />
                  </div>
                  <div className="relative bottom-6">
                    <button
                      className="px-8 py-2 text-sm border font-bold bg-white text-green-700 rounded-md"
                      onClick={() => handleAddToCart(item)}
                    >
                      ADD
                    </button>
                  </div>
                  <div className="relative bottom-6">
                    <div className="w-[48%] m-auto flex justify-between items-center px-3 py-2 text-sm border font-bold bg-white text-green-700 rounded-md">
                      <button
                        className="text-sm text-[#bebfc5]"
                        onClick={() => handleRemove()}
                      >
                        -
                      </button>
                      <span>1</span>
                      <button
                        className="text-sm"
                        onClick={() => addFoodItem(item)}
                      >
                        +
                      </button>
                    </div>
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
