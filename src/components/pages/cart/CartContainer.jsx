import "./cart.css";
import { Link } from "react-router-dom";

const CartContainer = () => {
  return (
    <div className="pagina-carrito">
      <h1 className="tipografia-carrito">
        Tu carrito de compras está vacío. Explorá la tienda y descubrí nuestros
        productos.
      </h1>
      <Link to="/" className="boton-carrito">
        TIENDA
      </Link>
    </div>
  );
};

export default CartContainer;
