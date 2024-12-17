import { Link, NavLink } from "react-router-dom";
import "./Nav.css";
import logo from "/public/img/Logo.png";

const Nav = () => {
  return (
    <nav className="flex nav-bar">
      <Link to={"/"}>
        <img src={logo} alt="Logo-Woodies" />
      </Link>
      <ul className="flex link-box">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to={"/about"}>About Us</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to={"/products"}>Products</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
