import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

function filterData(searchText, restaurantList) {
  const filteredData = restaurantList.filter((restaurant) =>
    restaurant.data.name.includes(searchText)
  );
  return filteredData;
}

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(resList);
  const [searchText, SearchText] = useState("");

  const handleInitialRestaurants = (event) => {
    setRestaurantList(resList);
    const liElements = event.currentTarget.parentNode.querySelectorAll("li");
    liElements.forEach((li) => {
      li.classList.remove("underlineActive");
    });
    event.currentTarget.classList.add("underlineActive");
  };

  const handleSortClick = (event) => {
    const sorted = [...restaurantList];
    sorted.sort(
      (a, b) => a.data.deliveryTime.valueOf() - b.data.deliveryTime.valueOf()
    );
    setRestaurantList(sorted);
    const liElements = event.currentTarget.parentNode.querySelectorAll("li");
    liElements.forEach((li) => {
      li.classList.remove("underlineActive");
    });
    event.currentTarget.classList.add("underlineActive");
  };

  const handleRating = (event) => {
    const sortedRatings = [...restaurantList];
    sortedRatings.sort(
      (a, b) => b.data.avgRating.valueOf() - a.data.avgRating.valueOf()
    );
    setRestaurantList(sortedRatings);
    const liElements = event.currentTarget.parentNode.querySelectorAll("li");
    liElements.forEach((li) => {
      li.classList.remove("underlineActive");
    });
    event.currentTarget.classList.add("underlineActive");
  };

  const handleLowToHigh = (event) => {
    const lowToHigh = [...restaurantList];
    lowToHigh.sort(
      (a, b) => a.data.costForTwo.valueOf() - b.data.costForTwo.valueOf()
    );
    setRestaurantList(lowToHigh);
    const liElements = event.currentTarget.parentNode.querySelectorAll("li");
    liElements.forEach((li) => {
      li.classList.remove("underlineActive");
    });
    event.currentTarget.classList.add("underlineActive");
  };

  const handleHighToLow = (event) => {
    const highToLow = [...restaurantList];
    highToLow.sort(
      (a, b) => b.data.costForTwo.valueOf() - a.data.costForTwo.valueOf()
    );
    setRestaurantList(highToLow);
    const liElements = event.currentTarget.parentNode.querySelectorAll("li");
    liElements.forEach((li) => {
      li.classList.remove("underlineActive");
    });
    event.currentTarget.classList.add("underlineActive");
  };

  const handleOffers = (event) => {
    const offer = restaurantList.filter(
      (offer) =>
        offer?.data?.aggregatedDiscountInfo?.shortDescriptionList[0]?.meta
    );
    setRestaurantList(offer);
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
            const data = filterData(searchText, restaurantList);
            setRestaurantList(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="filters-div">
        <h2 className="res-count">{restaurantList.length} restaurants</h2>
        <div className="filters">
          <ul>
            <li onClick={handleInitialRestaurants}>Relevance</li>
            <li onClick={handleSortClick}>Delivery Time</li>
            <li onClick={handleRating}>Rating</li>
            <li onClick={handleLowToHigh}>Cost: Low to High</li>
            <li onClick={handleHighToLow}>Cost: High to Low</li>
            <li onClick={handleOffers}>Offers</li>
          </ul>
        </div>
      </div>
      <div className="res-container">
        {restaurantList.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
