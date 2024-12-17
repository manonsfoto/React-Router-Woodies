import "./Footer.css";
import imgFooter from "../../../public/img/Footer.png";
import logo from "../../../public/img/Logo.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="flex footer">
      <div className="footer-textbox flex">
        <div className="footer-bar"></div>
        <Link to={"/"}>
          <img src={logo} alt="Logo-Woodies" />
        </Link>
        <p>(012) 8967453</p>
        <p>woodies@gmail.com</p>
        <p>Düsseldorf, Germany</p>
        <p className="last-text">© 2024 WOODIES</p>
      </div>

      <img src={imgFooter} alt="footer" />
    </footer>
  );
};

export default Footer;
