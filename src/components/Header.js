import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector, useDispatch } from "react-redux";
import store from "../utils/store";
import { logout } from "../utils/authenticationSlice";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
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
      <div className="flex justify-between py-4 items-center lg:mx-28 md:mx-20 sm:mx-14 max-sm:mx-10">
        <a
          className="flex items-center"
          href="https://www.swiggy.com/"
          target="_blank"
        >
          <img
            data-testid="logo"
            className="w-12 cursor-pointer"
            src={LOGO_URL}
            alt="Logo"
          />
          <h1 className="text-[#fc8019] font-bold text-2xl">Namaste Food</h1>
        </a>
        <div className="hidden md:block">
          <ul className="flex items-center">
            <li
              className="activeColor px-2 mx-2 text-sm hover:text-[#fc8019] cursor-pointer"
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
              <Link data-testid="offers" to="/offers">
                OFFERS
              </Link>
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
                <span
                  data-testid="items-zero"
                  className="bg-[#fc8019] text-white ml-1 p-1 px-2 rounded"
                >
                  {cartItem.length}
                </span>
                CART
              </Link>
            </li>
          </ul>
        </div>
        <div className="cursor-pointer block md:hidden" onClick={handleNav}>
          {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
        </div>
        {nav && (
          <div className="fixed left-0 top-0 w-[60%] border-r-gray-900 h-full bg-[#000300] text-white ease-in-out duration-900">
            <a
              className="flex items-center m-4"
              href="https://www.swiggy.com/"
              target="_blank"
            >
              <img
                data-testid="logo"
                className="w-12 cursor-pointer"
                src={LOGO_URL}
                alt="Logo"
              />
              <h1 className="text-[#fc8019] font-bold text-2xl">
                Namaste Food
              </h1>
            </a>
            <ul className="pt-10 mx-4">
              <li
                className="activeColor p-2 border-b border-gray-600 mx-2 text-sm hover:text-[#fc8019] cursor-pointer"
                onClick={handleACtive}
              >
                <Link data-testid="home" to="/">
                  HOME
                </Link>
              </li>
              <li
                className="p-2 border-b border-gray-600 mx-2 text-sm hover:text-[#fc8019]"
                onClick={handleACtive}
              >
                <Link data-testid="offers" to="/offers">
                  OFFERS
                </Link>
              </li>
              <li
                className="p-2 border-b border-gray-600 mx-2 text-sm hover:text-[#fc8019]"
                onClick={handleACtive}
              >
                <Link to="/help">HELP</Link>
              </li>
              <li
                className="p-2 border-b border-gray-600 mx-2 text-sm hover:text-[#fc8019]"
                onClick={handleACtive}
              >
                <Link to="/Cart">
                  <span
                    data-testid="items-zero"
                    className="bg-[#fc8019] text-white ml-1 p-1 px-2 rounded"
                  >
                    {cartItem.length}
                  </span>
                  CART
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
