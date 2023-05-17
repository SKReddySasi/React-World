import React from "react";
import { OFFER_LOGO } from "../utils/constants";
const Offers = () => {
  return (
    <div className="flex items-center justify-between text-white h-[77vh] py-0 px-[8%] bg-[#005062]">
      <div>
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
