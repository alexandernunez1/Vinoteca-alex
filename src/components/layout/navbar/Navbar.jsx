import "./navbar.css";
import logo from "../../../assets/img/logo.jpg";
import { Carrito } from "../../common/carrito/carrito";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="containernavbar">
      <Link to="/">
        <img src={logo} alt="logo-vinoteca" className="logo-vinoteca" />
      </Link>
      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/varietalproducto/Malbec"> Malbec </Link>
          </li>
          <li className="nav-item">
            <Link to="/varietalproducto/Cabernet Sauvignon"> Cabernet </Link>
          </li>
          <li className="nav-item">
            <Link to="/varietalproducto/Pinot Noir"> Pinot Noir </Link>
          </li>
          <li className="nav-item">
            <Link to="/varietalproducto/Syrah"> Syrah </Link>
          </li>
          <li className="nav-item">
            <Link to="/varietalproducto/Bonarda"> Bonarda </Link>
          </li>
        </ul>
        <div className="menu-icon"></div>
      </nav>
      <Carrito />
    </div>
  );
};
