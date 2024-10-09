import "./navbar.css";
import logo from "../../../assets/img/logo.jpg";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Home } from "@mui/icons-material";

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
      <Home style={{ color: 'white', marginRight: '30px' }} />
      <AddShoppingCartIcon style={{ color: 'white' }} />
      <span style={{ color: 'white', fontSize: '1.2em', height: 'auto' }}>5</span>
    </div>
  );
};
