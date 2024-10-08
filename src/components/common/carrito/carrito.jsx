import { FaCartShopping } from "react-icons/fa6";
import "./carrito.css";

export const Carrito = () => {
  return (
    <div className="carrito">
      <FaCartShopping />
      <span>0</span>
    </div>
  );
};
