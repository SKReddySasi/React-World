import { LOGO_URL } from "../utils/constants";
const Footer = () => {
  return (
    <footer>
      <div className="flex justify-between items-center py-4 max-w-[1200] m-auto">
        <img className="w-36" src={LOGO_URL} alt="footerLogo" />
        <p>© 2023 Swiggy</p>
      </div>
    </footer>
  );
};

export default Footer;
