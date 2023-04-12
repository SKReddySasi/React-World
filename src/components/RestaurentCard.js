import { CDN_URL } from "../utils/constants";
const RestaurentCard = (props) => {
  const { resData } = props;
  const {
    name,
    cuisines,
    avgRating,
    deliveryTime,
    costForTwo,
    cloudinaryImageId,
    aggregatedDiscountInfo,
    ribbon,
  } = resData?.data;
  return (
    <div className="res-card">
      <img
        className="res-img"
        src={CDN_URL + cloudinaryImageId}
        alt="res-img"
      />
      {ribbon ? <div className="res-promoted">{ribbon[0]?.type}</div> : null}

      <h2 className="res-name">{name}</h2>
      <h4 className="res-cuisines">{cuisines.join(", ")}</h4>
      <div className="res-stars-div">
        <h4>{avgRating} Star</h4>
        <h4>{deliveryTime} MINS</h4>
        <h4>₹{costForTwo / 100} FOR TWO</h4>
      </div>
      {aggregatedDiscountInfo?.shortDescriptionList[0]?.meta ? (
        <p className="res-offers">
          {aggregatedDiscountInfo?.shortDescriptionList[0]?.meta}
        </p>
      ) : null}
    </div>
  );
};

export default RestaurentCard;
