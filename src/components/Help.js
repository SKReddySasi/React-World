import React, { useContext } from "react";
import { Help_Img } from "../utils/constants";
import UserContext from "../utils/UserContext";

const Help = () => {
  const user = useContext(UserContext);
  return (
    <div className="flex justify-center flex-col items-center px-8 h-[81vh]">
      <img className="w-[300]" src={Help_Img} alt="Cart Logo" />
      <h4 className="mt-6 text-xl font-semibold text-[#535665]">No Orders</h4>
      <h5 className="mt-2 text-[#7e808c]">
        You haven't placed any order yet,{" "}
        <span className="text-[#fc8019]">{user}</span>.
      </h5>
    </div>
  );
};

export default Help;
