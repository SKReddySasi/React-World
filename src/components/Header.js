import { LOGO_URL } from "../utils/constants";
const Header = () => {
  return (
    <header>
      <div className="header">
        <img className="Logo" src={LOGO_URL} alt="Logo" />
        <div className="nav-items">
          <ul>
            <li>HOME</li>
            <li>OFFERS</li>
            <li>HELP</li>
            <li>SIGN IN</li>
            <li>CART</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
