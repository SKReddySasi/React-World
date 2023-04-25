import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const params = useParams();
  const { resId } = params;

//   const [restaurants, setRestaurants] = useState(null);

//   useEffect(() => {
//     getRestaurents();
//   }, []);

//   async function getRestaurents() {
//     const data = await fetch(
//       "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9181997&lng=77.61852859999999&restaurantId=59593"
//     );
//     const json = await data.json();
//     console.log(json);
//     setRestaurants(json.data)
//   }

  return (
    <div>
      <h1>RestaurantMenu : {resId}</h1>
      <p>Namaste</p>
      {/* <p>{restaurants?.data?.cards[0]?.card?.card?.info?.name}</p> */}
    </div>
  );
};

export default RestaurantMenu;
