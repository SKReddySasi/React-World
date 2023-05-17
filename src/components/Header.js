import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  return (
    <header className="shadow-md">
      <div className="header flex justify-between py-4 items-center max-w-[1200] m-auto">
        <a href="https://www.swiggy.com/" target="_blank">
          <img className="w-36 cursor-pointer pl-" src={LOGO_URL} alt="Logo" />
        </a>
        <div>
          <ul className="flex">
            <li className="px-2 mx-2 text-sm hover:text-[#fc8019]">
              <Link to="/">HOME</Link>
            </li>
            <li className="px-2 mx-2 text-sm hover:text-[#fc8019]">
              <Link to="/offers">OFFERS</Link>
            </li>
            <li className="px-2 mx-2 text-sm hover:text-[#fc8019]">
              <Link to="/help">HELP</Link>
            </li>
            {isSignedIn ? (
              <li
                className="px-2 mx-2 text-sm cursor-pointer hover:text-[#fc8019]"
                onClick={() => setIsSignedIn(false)}
              >
                SIGN OUT
              </li>
            ) : (
              <li
                className="px-2 mx-2 text-sm cursor-pointer hover:text-[#fc8019]"
                onClick={() => setIsSignedIn(true)}
              >
                SIGN IN
              </li>
            )}
            <li className="px-2 mx-2 text-sm hover:text-[#fc8019]">
              <Link to="/Cart">CART</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
