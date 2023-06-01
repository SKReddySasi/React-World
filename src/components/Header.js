import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import store from "../utils/store";

const Header = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const { user } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  console.log(cartItems);

  return (
    <header className="shadow-md sticky top-0 bg-white z-[9999]">
      <div className="header flex justify-between py-4 items-center max-w-[1200] m-auto">
        <a href="https://www.swiggy.com/" target="_blank">
          <img className="w-36 cursor-pointer pl-" src={LOGO_URL} alt="Logo" />
        </a>
        <div>
          <ul className="flex items-center">
            <li className="px-2 mx-2 text-sm hover:text-[#fc8019]">
              <Link to="/">HOME</Link>
            </li>
            <li className="px-2 mx-2 text-sm hover:text-[#fc8019]">
              <Link to="/offers">OFFERS</Link>
            </li>
            <li className="px-2 mx-2 text-sm hover:text-[#fc8019]">
              <Link to="/help">HELP</Link>
            </li>
            <li className="px-2 mx-2 text-sm hover:text-[#fc8019]">
              <Link to="/Cart">
                <span className="bg-[#fc8019] text-white p-1 px-2 rounded">{cartItems.length}</span> CART
              </Link>
            </li>
            {isSignedIn ? (
              <>
                <li className="px-2 mx-2 text-sm">
                  <span className="text-[#fc8019] text-xl">
                    {user.user.name}
                  </span>
                </li>
                <li
                  className="px-2 mx-2 text-sm cursor-pointer hover:text-[#fc8019]"
                  onClick={() => setIsSignedIn(false)}
                >
                  SIGN OUT
                </li>
              </>
            ) : (
              <li
                className="px-2 mx-2 text-sm cursor-pointer hover:text-[#fc8019]"
                onClick={() => setIsSignedIn(true)}
              >
                SIGN IN
              </li>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
