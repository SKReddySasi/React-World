import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { removeFromCart } from "../utils/cartSlice";

const FoodItem = (item) => {
  const { name, price, imageId, id } = item.card.info;

  // const itemsInCart = useSelector(state => state.cart.cartItems);
  // console.log("FoodItem : " + itemsInCart);

  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
    console.log("item id for remove - : ", id);
  };

  return (
    <div className="border m-3 pt-4 px-4">
      <div className="flex items-center justify-between">
        <div className="p-5">
          <h2 className="font-bold text-xl">{name}</h2>
          <h4>₹ {price / 100}</h4>
        </div>
        <div className="text-center">
          <div>
            <img className="w-[200]" src={CDN_URL + imageId} alt="menu-img" />
          </div>
          <div className="relative bottom-6">
            <button
              className="px-6 py-2 text-sm border font-bold bg-white text-green-700 rounded-md"
              onClick={() => handleRemoveFromCart(id)}
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
