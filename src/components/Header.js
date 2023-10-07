import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector, useDispatch } from "react-redux";
import store from "../utils/store";
import { logout } from "../utils/authenticationSlice";

const Header = () => {
  // const [isSignedIn, setIsSignedIn] = useState(false);

  // const { user } = useContext(UserContext);
  const user = useContext(UserContext);

  const cartItem = useSelector((store) => store.cart.cartItems);

  // console.log("Header :", cartItem);

  const handleACtive = (event) => {
    const liElements = event.currentTarget.parentNode.querySelectorAll("li");
    liElements.forEach((li) => {
      li.classList.remove("activeColor");
    });
    event.currentTarget.classList.add("activeColor");
  };

  // SignOut function call
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(logout());
  };

  return (
    <header className="shadow-md sticky top-0 bg-white z-[9999]">
      <div className="header flex justify-between py-4 items-center lg:mx-28 md:mx-20 sm:mx-14 max-sm:mx-10">
        <a className="flex items-center" href="https://www.swiggy.com/" target="_blank">
          <img
            data-testid="logo"
            className="w-12 cursor-pointer"
            src={LOGO_URL}
            alt="Logo"
          />
          <h1 className="text-[#fc8019] font-bold text-2xl">Namaste Food</h1>
        </a>
        <div>
          <ul className="flex items-center">
            <li
              className="activeColor px-2 mx-2 text-sm hover:text-[#fc8019]"
              onClick={handleACtive}
            >
              <Link data-testid="home" to="/">
                HOME
              </Link>
            </li>
            <li
              className="px-2 mx-2 text-sm hover:text-[#fc8019]"
              onClick={handleACtive}
            >
              <Link data-testid="offers" to="/offers">OFFERS</Link>
            </li>
            <li
              className="px-2 mx-2 text-sm hover:text-[#fc8019]"
              onClick={handleACtive}
            >
              <Link to="/help">HELP</Link>
            </li>
            <li
              className="px-2 mx-2 text-sm hover:text-[#fc8019]"
              onClick={handleACtive}
            >
              <Link to="/Cart">
                CART
                <span data-testid="items-zero" className="bg-[#fc8019] text-white ml-1 p-1 px-2 rounded">
                  {cartItem.length}
                </span>
              </Link>
            </li>
            <li
              className="px-2 mx-2 text-sm cursor-pointer hover:text-[#fc8019]"
              onClick={handleSignOut}
            >
              SIGN OUT
            </li>

            {/* {isSignedIn ? (
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
            )} */}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
