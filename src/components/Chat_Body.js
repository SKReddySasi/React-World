import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect, useCallback, useMemo } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function filterData(searchText, allRestaurants) {
  const filteredData = new Map();
  for (const restaurant of allRestaurants) {
    const name = restaurant?.data?.name?.toLowerCase();
    if (name && name.includes(searchText.toLowerCase())) {
      filteredData.set(restaurant.data.id, restaurant);
    }
  }
  return filteredData;
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState(
    new Map()
  );
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.908046&lng=80.209098&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurantList(
      new Map(
        json?.data?.cards[2]?.data?.data?.cards.map((restaurant) => [
          restaurant.data.id,
          restaurant,
        ])
      )
    );
  }

  const handleInitialRestaurants = useCallback(
    (event) => {
      setFilteredRestaurantList(
        new Map(
          allRestaurants.map((restaurant) => [restaurant.data.id, restaurant])
        )
      );
      const liElements = event.currentTarget.parentNode.querySelectorAll("li");
      liElements.forEach((li) => {
        li.classList.remove("underlineActive");
      });
      event.currentTarget.classList.add("underlineActive");
    },
    [allRestaurants]
  );

  return (
    <div className="body">
      <div className="searchDiv">
        <input
          className="input-search"
          type="text"
          placeholder="Search for restaurants and food"
          value={searchText}
          onChange={(e) => {
            SearchText(e.target.value);
          }}
        />
        <button
          className="rated-Btn"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurantList(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="filters-div">
        <h2 className="res-count">
          {filteredRestaurantList.length > 0 ? (
            <>{filteredRestaurantList.length} restaurants</>
          ) : (
            <>Finding restaurants...</>
          )}
        </h2>

        <div className="filters">
          <ul>
            <li className="underlineActive" onClick={handleInitialRestaurants}>
              Relevance
            </li>
            <li onClick={handleSortClick}>Delivery Time</li>
            <li onClick={handleRating}>Rating</li>
            <li onClick={handleLowToHigh}>Cost: Low to High</li>
            <li onClick={handleHighToLow}>Cost: High to Low</li>
            <li onClick={handleOffers}>Offers</li>
          </ul>
        </div>
      </div>
      {filteredRestaurantList.length > 0 ? (
        <div className="res-container">
          {filteredRestaurantList.map((restaurant) => {
            return (
              <Link
                className="linkStylesNone"
                key={restaurant.data.id}
                to={"/restaurant/" + restaurant?.data?.id}
              >
                <RestaurantCard resData={restaurant} />
              </Link>
            );
          })}
        </div>
      ) : (
        // <h1 className="noMatch">No match found for "{searchText}"</h1>
        <Shimmer />
      )}
    </div>
  );
};

export default Body;
