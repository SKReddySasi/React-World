import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import UserContext from "../utils/UserContext";
import axios from "axios";

function filterData(searchText, allRestaurants) {
  const filteredData = allRestaurants.filter((restaurant) =>
    restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filteredData;
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchText, SearchText] = useState("");
  const [loading, setLoading] = useState(true);
  // const [buttonMode, setButtonMode] = useState(false);

  const { user } = useContext(UserContext);

  useEffect(() => {
    const getRestaurants = async () => {
      try {
        const response = await axios.get(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.908046&lng=80.209098&page_type=DESKTOP_WEB_LISTING"
        );
        const arrayOfCards = response.data.data.cards;
        console.log("response.data = ", arrayOfCards);
        const restaurant_list = "top_brands_for_you"; // having 20 restaurents

        for (const cardObj of arrayOfCards) {
          if (
            cardObj?.card?.card &&
            cardObj?.card?.card?.id === restaurant_list
          ) {
            const resData =
              cardObj.card?.card?.gridElements?.infoWithStyle?.restaurants;
            console.log("resData : ", resData);
            setAllRestaurants(resData);
            setFilteredRestaurantList(resData);
          }
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getRestaurants();
  }, []);

  useEffect(() => {
    // if (!buttonMode) {
    console.log("buttonMode");
    const debounceTimeout = setTimeout(() => {
      const data = filterData(searchText, allRestaurants);
      setFilteredRestaurantList(data);
      console.log("debounce useEffect");
    }, 300);
    return () => {
      clearTimeout(debounceTimeout);
    };
    // }
  }, [searchText, allRestaurants]);

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
    (a, b) =>
      a.info.sla.deliveryTime.valueOf() - b.info.sla.deliveryTime.valueOf()
  );

  const handleRating = sortRestaurants(
    (a, b) => b.info.avgRating.valueOf() - a.info.avgRating.valueOf()
  );
  const handleLowToHigh = sortRestaurants((a, b) => {
    const matchA = a.info.costForTwo.match(/₹(\d+)/);
    const matchB = b.info.costForTwo.match(/₹(\d+)/);

    const extractedValueA = matchA ? parseInt(matchA[1], 10) : null;
    const extractedValueB = matchB ? parseInt(matchB[1], 10) : null;

    return extractedValueA - extractedValueB;
  });
  const handleHighToLow = sortRestaurants((a, b) => {
    const matchA = a.info.costForTwo.match(/₹(\d+)/);
    const matchB = b.info.costForTwo.match(/₹(\d+)/);
    const extractedValueA = matchA ? parseInt(matchA[1], 10) : null;
    const extractedValueB = matchB ? parseInt(matchB[1], 10) : null;
    return extractedValueB - extractedValueA;
  });

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
    <div className="lg:mx-28 sm:mx-14 max-sm:mx-10 m-auto">
      {/* <button
        className="border px-4 py-2 bg-blue-200 rounded-lg flex text-right"
        onClick={() => {
          setButtonMode(!buttonMode);
        }}
      >
        {buttonMode ? "Search Button - OFF" : "Search Button - ON"}
      </button> */}
      <div className="pt-10 py-5 text-center flex items-center justify-center">
        <input
          name="search" // name or id is Needed
          className="w-[70%] h-12 border p-2 focus:outline-none  rounded-lg"
          type="text"
          placeholder="Search for restaurants and food"
          value={searchText}
          autoComplete="off"
          onChange={(e) => {
            SearchText(e.target.value);
          }}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5 ml-[-30px]"
        >
          <path
            fillRule="evenodd"
            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
            clipRule="evenodd"
          />
        </svg>
        {/* {buttonMode ? (
          <button
            data-testid="search-btn"
            className="border p-0 mx-3 px-3 py-3 cursor-pointer rounded-e-lg"
            onClick={() => {
              const data = filterData(searchText, allRestaurants);
              setFilteredRestaurantList(data);
            }}
          >
            Search
          </button>
        ) : null} */}
      </div>
      <div className="flex items-center justify-between border-b">
        <h2 className="font-semibold text-3xl">
          {filteredRestaurantList && filteredRestaurantList.length > 0 ? (
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
          </ul>
        </div>
      </div>

      {loading ? (
        <Shimmer />
      ) : filteredRestaurantList.length === 0 ? (
        <h1 className="flex text-center items-center justify-center h-[67vh]">
          No match found for the restaurent - "{searchText}"
        </h1>
      ) : (
        <div
          className="flex flex-wrap my-5 mx-0 min-h-[62vh]"
          data-testid="res-list"
        >
          {filteredRestaurantList.map((restaurant) => {
            return (
              <Link
                key={restaurant?.info.id}
                to={"/restaurant/" + restaurant?.info?.id}
                className="xl:3/12 lg:w-3/12 md:w-6/12 sm:w-full"
              >
                <RestaurantCard resData={restaurant} />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Body;
