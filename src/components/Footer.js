import { LOGO_URL } from "../utils/constants";
const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <img className="Logo" src={LOGO_URL} alt="footerLogo" />
        <p>© 2023 Swiggy</p>
      </div>
    </footer>
  );
};

export default Footer;
