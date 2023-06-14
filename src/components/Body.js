import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

function filterData(searchText, allRestaurants) {
  const filteredData = allRestaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return filteredData;
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchText, SearchText] = useState("");

  const { user } = useContext(UserContext);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.908046&lng=80.209098&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurantList(json?.data?.cards[2]?.data?.data?.cards);
  }

  const handleInitialRestaurants = (event) => {
    setFilteredRestaurantList(allRestaurants);
    const liElements = event.currentTarget.parentNode.querySelectorAll("li");
    liElements.forEach((li) => {
      li.classList.remove("underlineActive");
      li.classList.remove("activeColor");
    });
    event.currentTarget.classList.add("underlineActive");
    event.currentTarget.classList.add("activeColor");
  };

  // Sorting functions Start

  const sortRestaurants = (sortFunction) => (event) => {
    const sorted = [...allRestaurants];
    sorted.sort(sortFunction);
    setFilteredRestaurantList(sorted);

    const liElements = event.currentTarget.parentNode.querySelectorAll("li");
    liElements.forEach((li) => {
      li.classList.remove("underlineActive");
      li.classList.remove("activeColor");
    });
    event.currentTarget.classList.add("underlineActive");
    event.currentTarget.classList.add("activeColor");
  };

  const handleSortClick = sortRestaurants(
    (a, b) => a.data.deliveryTime.valueOf() - b.data.deliveryTime.valueOf()
  );

  const handleRating = sortRestaurants(
    (a, b) => b.data.avgRating.valueOf() - a.data.avgRating.valueOf()
  );
  const handleLowToHigh = sortRestaurants(
    (a, b) => a.data.costForTwo.valueOf() - b.data.costForTwo.valueOf()
  );
  const handleHighToLow = sortRestaurants(
    (a, b) => b.data.costForTwo.valueOf() - a.data.costForTwo.valueOf()
  );

  // Sorting functions Ends

  const handleOffers = (event) => {
    const offer = allRestaurants.filter((offer) => offer?.data?.ribbon);
    setFilteredRestaurantList(offer);
    const liElements = event.currentTarget.parentNode.querySelectorAll("li");
    liElements.forEach((li) => {
      li.classList.remove("underlineActive");
      li.classList.remove("activeColor");
    });
    event.currentTarget.classList.add("underlineActive");
    event.currentTarget.classList.add("activeColor");
  };

  return (
    <div className="max-w-[1200] m-auto">
      <div className="p-5 text-center">
        <input
          name="search" // name or id is Needed
          className="h-7 w-[30%] border p-2 focus:outline-none  rounded-s-2xl"
          type="text"
          placeholder="Search for restaurants and food"
          value={searchText}
          onChange={(e) => {
            SearchText(e.target.value);
          }}
        />
        <button
          className="border p-0 px-3 cursor-pointer rounded-e-2xl"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurantList(data);
            console.log(data);
          }}
        >
          Search
        </button>
        {/* <input className="border p-2" type="text" value={user.name} onChange={(e)=>{e.target.value}} /> */}
      </div>
      <div className="flex items-center justify-between border-b">
        <h2 className="font-semibold text-3xl">
          {filteredRestaurantList.length > 0 ? (
            <>{filteredRestaurantList.length} restaurants</>
          ) : (
            <>Finding restaurants...</>
          )}
        </h2>

        <div>
          <ul className="flex">
            <li
              className="activeColor underlineActive mx-3 py-2 text-[#686b78] hover:text-[#fc8019] cursor-pointer hover:scale-105"
              onClick={handleInitialRestaurants}
            >
              Relevance
            </li>
            <li
              className="mx-3 py-2 text-[#686b78] hover:text-[#fc8019] cursor-pointer hover:scale-105"
              onClick={handleSortClick}
            >
              Delivery Time
            </li>
            <li
              className="mx-3 py-2 text-[#686b78] hover:text-[#fc8019] cursor-pointer hover:scale-105"
              onClick={handleRating}
            >
              Rating
            </li>
            <li
              className="mx-3 py-2 text-[#686b78] hover:text-[#fc8019] cursor-pointer hover:scale-105"
              onClick={handleLowToHigh}
            >
              Cost: Low to High
            </li>
            <li
              className="mx-3 py-2 text-[#686b78] hover:text-[#fc8019] cursor-pointer hover:scale-105"
              onClick={handleHighToLow}
            >
              Cost: High to Low
            </li>
            <li
              className="mx-3 py-2 text-[#686b78] hover:text-[#fc8019] cursor-pointer hover:scale-105"
              onClick={handleOffers}
            >
              Offers
            </li>
          </ul>
        </div>
      </div>
      {filteredRestaurantList.length > 0 ? (
        <div className="flex flex-wrap my-5 mx-0 min-h-[62vh]">
          {filteredRestaurantList.map((restaurant) => {
            return (
              <Link
                key={restaurant.data.id}
                to={"/restaurant/" + restaurant?.data?.id}
              >
                <RestaurantCard resData={restaurant} />
              </Link>
            );
          })}
        </div>
      ) : (
        // <h1 className="flex text-center items-center justify-center h-[67vh]">No match found for "{searchText}"</h1>
        <Shimmer />
      )}
    </div>
  );
};

export default Body;
