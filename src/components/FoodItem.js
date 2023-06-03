import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { removeItem } from "../utils/cartSlice";

const FoodItem = ({ name, price, cloudinaryImageId }) => {
//   const dispatch = useDispatch();

//   const handleRemove = () => {
//     dispatch(removeItem());
//   };

  return (
    <div className="border m-3 pt-4 px-4">
      <div className="flex items-center justify-between">
        <div className="p-5">
          <h2 className="font-bold text-xl">{name}</h2>
          <h4>₹ {price / 100}</h4>
        </div>
        <div className="text-center">
          <div>
            <img
              className="w-[200]"
              src={CDN_URL + cloudinaryImageId}
              alt="menu-img"
            />
          </div>
          <div className="relative bottom-6">
            <button
              className="px-6 py-2 text-sm border font-bold bg-white text-green-700 rounded-md"
            //   onClick={() => {
            //     handleRemove();
            //   }}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
