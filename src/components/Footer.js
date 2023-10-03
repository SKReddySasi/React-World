import { useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const user = useContext(UserContext);

  return (
    <footer className="shadow-top">
      <div className="flex justify-between items-center py-4 lg:mx-28 md:mx-20 sm:mx-14 max-sm:mx-10">
        <a
          className="flex items-center"
          href="https://www.swiggy.com/"
          target="_blank"
        >
          <img
            data-testid="logo"
            className="w-12 cursor-pointer"
            src={LOGO_URL}
            alt="footerLogo"
          />
          <h1 className="text-[#fc8019] font-bold text-2xl">Namaste Food</h1>
        </a>
        <p data-testid="userName">{user} - © 2023 Namaste Food</p>
      </div>
    </footer>
  );
};

export default Footer;
