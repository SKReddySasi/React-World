import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [restaurentList, setRestaurentList] = useState(resList);
  return (
    <div className="body">
      <div className="searchDiv">
        <input
          className="input-search"
          type="text"
          placeholder="Search for restaurants and food"
        />
        <button
          className="rated-Btn"
          onClick={() => {
            const filteredRestaurent = restaurentList.filter(
              (res) => res.data.avgRating > 4.1
            );
            setRestaurentList(filteredRestaurent);
          }}
        >
          Top Rated Restaurents
        </button>
      </div>
      <div className="res-container">
        {restaurentList.map((restaurent) => {
          return (
            <RestaurentCard key={restaurent.data.id} resData={restaurent} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
