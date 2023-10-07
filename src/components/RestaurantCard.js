import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    cloudinaryImageId,
    aggregatedDiscountInfoV3,
    sla,
  } = resData?.info;
  return (
    <div className="mx-5 my-3 px-3 py-5 hover:shadow-lg hover:scale-105 hover:rounded-2xl">
      {aggregatedDiscountInfoV3?.header &&
      aggregatedDiscountInfoV3?.subHeader ? (
        <h2 className="absolute z-10 rounded-ss-xl rounded-ee-xl text-white px-3 font-bold bg-gradient-to-br from-red-950 to-black">
          {aggregatedDiscountInfoV3?.header +
            " " +
            aggregatedDiscountInfoV3?.subHeader}
        </h2>
      ) : null}
      <img
        className="relative w-full rounded-2xl"
        src={CDN_URL + cloudinaryImageId}
        alt="res-img"
      />
      <div className="px-3">
        <h2 className="font-medium break-words text-lg overflow-hidden text-ellipsis whitespace-nowrap mt-1">
          {name}
        </h2>
        <h4 className="color-[#686b78] text-sm mt-1 overflow-hidden text-ellipsis whitespace-nowrap">
          {cuisines.join(", ")}
        </h4>
        <div className="text-xs flex justify-between items-center color-[#535665] mt-4">
          <h4>{avgRating} Star</h4>
          <h4>{sla?.deliveryTime} MINS</h4>
          <h4>{costForTwo}</h4>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
