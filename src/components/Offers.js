import React from "react";
import { OFFER_LOGO } from "../utils/constants";
const Offers = () => {
  return (
    <div className="offersComponent">
      <div>
        <h1 className="offersText">Offers for you</h1>
        <h4>Explore top deals and offers exclusively for you!</h4>
      </div>
      <div>
        <img width="280" src={OFFER_LOGO} alt="offer Logo" />
      </div>
    </div>
  );
};

export default Offers;
