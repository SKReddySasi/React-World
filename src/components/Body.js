import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(resList);
  const [searchText, SearchText] = useState("Sasi");
  const [text, setText] = useState("All Restaurants");
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
            setText("Filtered Restaurants");
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="filters-div">
        <h2 className="res-count">{restaurantList.length} restaurants</h2>
        <div className="filters">
          <ul>
            <li>Relevance</li>
            <li>Delivery Time</li>
            <li>Rating</li>
            <li>Cost: Low to High</li>
            <li>Cost: High to Low</li>
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
