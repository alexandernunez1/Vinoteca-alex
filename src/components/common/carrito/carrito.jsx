import { FaCartShopping } from "react-icons/fa6";
import "./carrito.css";
import { Link } from "react-router-dom";

export const Carrito = () => {
  return (
    <Link to="/cart" style={{ color: 'white' }}>
      <FaCartShopping />
      <span> 0 </span>
    </Link>
  );
};
