import React from "react";
import { Help_Img } from "../utils/constants";

const Help = () => {
  return (
    <div className="flex justify-center flex-col items-center px-8 h-[77vh]">
      <img className="w-[300]" src={Help_Img} alt="Cart Logo" />
      <h4 className="mt-6 text-xl font-semibold text-[#535665]">No Orders</h4>
      <h5 className="mt-2 text-[#7e808c]">You haven't placed any order yet.</h5>
    </div>
  );
};

export default Help;
