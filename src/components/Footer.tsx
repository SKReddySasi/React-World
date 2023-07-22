// Import statements
import { useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import UserContext, { UserContextValue } from "../utils/UserContext";

// Component definition
const Footer = () => {
  // Consume the UserContext using the useContext hook
  const user: UserContextValue = useContext<UserContextValue>(UserContext);

  return (
    <footer className="shadow-top">
      <div className="flex justify-between items-center py-4 max-w-[1200] m-auto">
        <img className="w-36" src={LOGO_URL} alt="footerLogo" />
        <p data-testid="userName">{user.user}</p>
        <p>© 2023 Swiggy</p>
      </div>
    </footer>
  );
};

export default Footer;
