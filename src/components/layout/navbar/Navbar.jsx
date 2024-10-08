import "./navbar.css";
import { FiShoppingCart } from "react-icons/fi";
import logo from "../../../assets/img/logo.jpg";

export const Navbar = () => {
  return (
    <div className="containernavbar">
      <img src={logo} alt="logo-vinoteca" className="logo-vinoteca" />
      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#">EL CLUB</a>
          </li>
          <li className="nav-item">
            <a href="#">EXPERIENCIA</a>
          </li>
          <li className="nav-item">
            <a href="#">TIENDA</a>
          </li>
          <li className="nav-item">
            <a href="#">QUIENES SOMOS</a>
          </li>
        </ul>
        <div className="menu-icon"></div>
      </nav>
      <FiShoppingCart />
    </div>
  );
};