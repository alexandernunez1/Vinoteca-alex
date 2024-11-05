import { FaCartShopping } from "react-icons/fa6";
import "./carrito.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const Carrito = () => {
  const { cart, totalCarrito } = useContext(CartContext);

  let totalBurbujaCarrito = totalCarrito();

  return (
    <Link to="/cart" style={{ color: "white" }}>
      <FaCartShopping />
      <span>{totalBurbujaCarrito}</span>
    </Link>
  );
};
