import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

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
    setFilteredRestaurantList(resList);
    const liElements = event.currentTarget.parentNode.querySelectorAll("li");
    liElements.forEach((li) => {
      li.classList.remove("underlineActive");
    });
    event.currentTarget.classList.add("underlineActive");
  };

  const handleSortClick = (event) => {
    const sorted = [...allRestaurants];
    sorted.sort(
      (a, b) => a.data.deliveryTime.valueOf() - b.data.deliveryTime.valueOf()
    );
    setFilteredRestaurantList(sorted);
    const liElements = event.currentTarget.parentNode.querySelectorAll("li");
    liElements.forEach((li) => {
      li.classList.remove("underlineActive");
    });
    event.currentTarget.classList.add("underlineActive");
  };

  const handleRating = (event) => {
    const sortedRatings = [...allRestaurants];
    sortedRatings.sort(
      (a, b) => b.data.avgRating.valueOf() - a.data.avgRating.valueOf()
    );
    setFilteredRestaurantList(sortedRatings);
    const liElements = event.currentTarget.parentNode.querySelectorAll("li");
    liElements.forEach((li) => {
      li.classList.remove("underlineActive");
    });
    event.currentTarget.classList.add("underlineActive");
  };

  const handleLowToHigh = (event) => {
    const lowToHigh = [...allRestaurants];
    lowToHigh.sort(
      (a, b) => a.data.costForTwo.valueOf() - b.data.costForTwo.valueOf()
    );
    setFilteredRestaurantList(lowToHigh);
    const liElements = event.currentTarget.parentNode.querySelectorAll("li");
    liElements.forEach((li) => {
      li.classList.remove("underlineActive");
    });
    event.currentTarget.classList.add("underlineActive");
  };

  const handleHighToLow = (event) => {
    const highToLow = [...allRestaurants];
    highToLow.sort(
      (a, b) => b.data.costForTwo.valueOf() - a.data.costForTwo.valueOf()
    );
    setFilteredRestaurantList(highToLow);
    const liElements = event.currentTarget.parentNode.querySelectorAll("li");
    liElements.forEach((li) => {
      li.classList.remove("underlineActive");
    });
    event.currentTarget.classList.add("underlineActive");
  };

  const handleOffers = (event) => {
    const offer = allRestaurants.filter(
      (offer) =>
        offer?.data?.aggregatedDiscountInfo?.shortDescriptionList[0]?.meta
    );
    setFilteredRestaurantList(offer);
    const liElements = event.currentTarget.parentNode.querySelectorAll("li");
    liElements.forEach((li) => {
      li.classList.remove("underlineActive");
    });
    event.currentTarget.classList.add("underlineActive");
  };

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
