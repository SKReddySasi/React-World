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
    sla: { deliveryTime }, // We can Destructure like this, if nested objects are there.
  } = resData?.info;
  return (
    <div className="max-sm:flex max-sm:w-full mx-5 my-3 px-3 py-5 hover:shadow-lg hover:scale-105 hover:rounded-2xl">
      {aggregatedDiscountInfoV3?.header &&
      aggregatedDiscountInfoV3?.subHeader ? (
        <>
          <h2 className="hidden md:block absolute z-10 rounded-ss-xl rounded-ee-xl text-white px-3 font-bold bg-gradient-to-br from-red-950 to-black">
            {aggregatedDiscountInfoV3?.header +
              aggregatedDiscountInfoV3?.subHeader}
          </h2>

          <div className="block md:hidden absolute z-10 rounded-ss-xl rounded-ee-xl text-white px-3 font-bold bg-gradient-to-br from-red-950 to-black">
            <p>{aggregatedDiscountInfoV3?.header}</p>
            <p>{aggregatedDiscountInfoV3?.subHeader}</p>
          </div>
        </>
      ) : null}
      <img
        className="relative w-full max-sm:w-[50%] rounded-2xl"
        src={CDN_URL + cloudinaryImageId}
        alt="res-img"
      />
      <div className="px-3 max-sm:w-[50%]">
        <h2 className="break-words text-lg overflow-hidden text-ellipsis whitespace-nowrap mt-2 font-bold">
          {name}
        </h2>
        <h4>
          <span className="text-green-600">&#9733;</span> {avgRating}
        </h4>
        <h4 className="text-sm mt-2 overflow-hidden text-ellipsis whitespace-nowrap">
          {cuisines.join(", ")}
        </h4>
        <div className="flex text-xs space-x-4 color-[#535665] mt-2">
          <h4>{deliveryTime} MINS</h4>
          <h4>{costForTwo}</h4>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
