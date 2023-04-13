import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(resList);
  const [searchText, SearchText] = useState("Biryani");

  const handleInitialRestaurants = () => {
    setRestaurantList(resList);
  };

  const handleSortClick = () => {
    const sorted = [...restaurantList];
    sorted.sort(
      (a, b) => a.data.deliveryTime.valueOf() - b.data.deliveryTime.valueOf()
    );
    setRestaurantList(sorted);
  };

  const handleRating = () => {
    const sortedRatings = [...restaurantList];
    sortedRatings.sort(
      (a, b) => b.data.avgRating.valueOf() - a.data.avgRating.valueOf()
    );
    setRestaurantList(sortedRatings);
  };

  const handleLowToHigh = () => {
    const lowToHigh = [...restaurantList];
    lowToHigh.sort(
      (a, b) => a.data.costForTwo.valueOf() - b.data.costForTwo.valueOf()
    );
    setRestaurantList(lowToHigh);
  };

  const handleHighToLow = () => {
    const highToLow = [...restaurantList];
    highToLow.sort(
      (a, b) => b.data.costForTwo.valueOf() - a.data.costForTwo.valueOf()
    );
    setRestaurantList(highToLow);
  };

  const handleOffers = () => {
    const offer = restaurantList.filter(
      (offer) =>
        offer?.data?.aggregatedDiscountInfo?.shortDescriptionList[0]?.meta
    );
    setRestaurantList(offer);
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
            const filteredRestaurant = restaurantList.filter(
              (res) => res.data.avgRating > 4.1
            );
            setRestaurantList(filteredRestaurant);
          }}
        >
          Top Rated Restaurants
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
