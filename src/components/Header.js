import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const Header = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  return (
    <header>
      <div className="header">
        <a href="https://www.swiggy.com/" target="_blank">
          <img className="Logo" src={LOGO_URL} alt="Logo" />
        </a>
        <div className="nav-items">
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/offers">OFFERS</Link>
            </li>
            <li>HELP</li>
            {isSignedIn ? (
              <li onClick={() => setIsSignedIn(false)}>SIGN OUT</li>
            ) : (
              <li onClick={() => setIsSignedIn(true)}>SIGN IN</li>
            )}
            <li>
              <Link to="/Cart">CART</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
