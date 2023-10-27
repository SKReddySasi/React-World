import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addToCart, removeFromCart } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [count, setCount] = useState(0);

  const params = useParams();
  const { resId } = params; // destructure

  const cartItems = useSelector((store) => store.cart.cartItems);
  const cartTotal = useSelector((store) => store.cart.cartTotal);

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
      console.log("json data: ", json.data);
    } catch (error) {
      // console.log("error while fetching menu data : ", error);
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
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const handleAdd = (e) => {
    setCount((prevCount) => prevCount + 1);
    // console.log("add : ", e.target.value);
  };

  const handleRemove = () => {
    setCount((prevCount) => prevCount - 1);
  };

  // dispatch

  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

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
          <p className="font-bold text-2xl">
            Recommended ( {itemCards?.length} )
          </p>
        ) : (
          <p className="font-bold text-4xl">
            No Items found for this Restaurant
          </p>
        )}

        {itemCards?.map((item) => {
          return (
            <div key={item?.card?.info?.id} className="border-b my-3 pt-4">
              <div className="flex items-center justify-between space-x-1">
                <div className="w-10/12 py-5">
                  <h2 className="font-semibold text-sm">
                    {item?.card?.info?.name}
                  </h2>
                  {/* <h4>Category : {item?.card?.info?.category}</h4> */}
                  <h4 className="text-sm">
                    ₹{" "}
                    {item?.card?.info?.price / 100 ||
                      item?.card?.info?.defaultPrice / 100}
                  </h4>
                  <p className="text-sm text-[#282c3f73] mt-2">
                    {item?.card?.info?.description}
                  </p>
                </div>
                <div className="w-2/12 text-center">
                  <div>
                    {item?.card?.info?.imageId ? (
                      <img
                        className="w-[200]"
                        src={CDN_URL + item?.card?.info?.imageId}
                        alt="menu-img"
                      />
                    ) : (
                      <div className="bg-slate-200 w-[100%] h-[90px]"></div> // In the Absense of Item Image
                    )}
                  </div>
                  {count <= 0 ? (
                    <div className="relative bottom-6">
                      <button
                        className="px-8 py-2 text-sm border font-bold bg-white text-green-700 rounded-md"
                        // onClick={handleAdd}
                        onClick={() => handleAddToCart(item)}
                      >
                        ADD
                      </button>
                    </div>
                  ) : (
                    <div className="relative bottom-6">
                      <div className="w-[70%] m-auto flex justify-between items-center px-3 py-2 text-sm border font-bold bg-white text-green-700 rounded-md">
                        <button
                          className="text-sm text-[#bebfc5]"
                          onClick={handleRemove}
                          // onClick={() => handleRemove()}
                        >
                          -
                        </button>
                        <span>{count}</span>
                        <button
                          className="text-sm"
                          onClick={handleAdd}
                          // onClick={() => addFoodItem(item)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {cartItems.length > 0 ? (
        <Link to="/cart">
          <div className="bg-[#60b246] text-white flex justify-between p-4 sticky bottom-0">
            <div className="text-sm font-semibold">
              <span>{cartItems.length} Item</span> |{" "}
              <span>₹{cartTotal.toFixed(2)}</span>
            </div>
            <div className="font-bold text-sm">VIEW CART</div>
          </div>
        </Link>
      ) : null}
    </div>
  );
};

export default RestaurantMenu;
