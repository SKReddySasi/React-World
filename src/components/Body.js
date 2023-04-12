import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";
const Body = () => {
  return (
    <div className="body">
      <div className="searchDiv">
        <input
          className="input-search"
          type="text"
          placeholder="Search for restaurants and food"
        />
      </div>
      <div className="res-container">
        {resList.map((restaurent) => {
          return (
            <RestaurentCard key={restaurent.data.id} resData={restaurent} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
