import { useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const user = useContext(UserContext);

  return (
    <footer className="shadow-top">
      <div className="flex justify-between items-center py-4 max-w-[1200] m-auto">
        <img className="w-36" src={LOGO_URL} alt="footerLogo" />
        <p>{user}</p>
        <p>© 2023 Swiggy</p>
      </div>
    </footer>
  );
};

export default Footer;
