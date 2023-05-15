import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const Header = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  return (
    <header>
      <div className="header flex justify-between shadow-md py-4 px-4 items-center">
        <a href="https://www.swiggy.com/" target="_blank">
          <img className="w-36 cursor-pointer pl-" src={LOGO_URL} alt="Logo" />
        </a>
        <div className="nav-items">
          <ul className="flex">
            <li className="px-2">
              <Link to="/">HOME</Link>
            </li>
            <li className="px-2">
              <Link to="/offers">OFFERS</Link>
            </li>
            <li className="px-2">HELP</li>
            {isSignedIn ? (
              <li className="px-2" onClick={() => setIsSignedIn(false)}>SIGN OUT</li>
            ) : (
              <li className="px-2" onClick={() => setIsSignedIn(true)}>SIGN IN</li>
            )}
            <li className="px-2">
              <Link to="/Cart">CART</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
