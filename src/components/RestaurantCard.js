import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    cuisines,
    avgRating,
    deliveryTime,
    costForTwo,
    cloudinaryImageId,
    ribbon,
  } = resData?.data;
  return (
    <div className="w-[260] mx-5 my-3 px-5 pt-5 pb-12 relative hover:shadow-lg hover:scale-105">
      <img className="w-full" src={CDN_URL + cloudinaryImageId} alt="res-img" />
      {ribbon ? (
        <div className="absolute top-5 left-3 text-sm font-medium py-1 px-2 max-w-[50%] uppercase text-white bg-[rgb(58,60,65)] inline before:absolute before:content-[''] before:bg-red-500 before:border-[9px 0 0 9px] before:top-3 before:bottom-3">
          {ribbon[0]?.type}
        </div>
      ) : null}
      <h2 className="font-medium break-words text-lg">{name}</h2>
      <h4 className="color-[#686b78] text-sm mt-1">{cuisines.join(", ")}</h4>
      <div className="text-xs flex justify-between items-center color-[#535665] mt-5">
        <h4>{avgRating} Star</h4>
        <h4>{deliveryTime} MINS</h4>
        <h4>₹{costForTwo / 100} FOR TWO</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
