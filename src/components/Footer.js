import { useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const user = useContext(UserContext);

  return (
    <footer className="shadow-top">
      <div className="flex justify-between items-center py-4 lg:mx-28 md:mx-20 sm:mx-14 max-sm:mx-10">
        <img className="w-36" src={LOGO_URL} alt="footerLogo" />
        <p data-testid="userName">{user} - © 2023 Swiggy</p>
      </div>
    </footer>
  );
};

export default Footer;
