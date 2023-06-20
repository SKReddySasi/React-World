import React, { useContext } from "react";
import { OFFER_LOGO } from "../utils/constants";
import UserContext from "../utils/UserContext";
const Offers = () => {
  // const { user } = useContext(UserContext);
  // console.log(user.user.name);
  const user = useContext(UserContext);
  return (
    <div className="flex items-center justify-between text-white h-[81vh] py-0 px-[8%] bg-[#005062]">
      <div>
        <h1 className="text-5xl py-6">Hey <span className="text-[#fc8019]">{user}</span>,</h1>
        <h1 className="text-5xl">Offers for you</h1>
        <h4>Explore top deals and offers exclusively for you!</h4>
      </div>
      <div>
        <img className="w-[280]" src={OFFER_LOGO} alt="offer Logo" />
      </div>
    </div>
  );
};

export default Offers;
