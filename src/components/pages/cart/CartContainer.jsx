import { CartContext } from "../../context/CartContext";
import "./cart.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import "./carContainer.css";

const CartContainer = () => {
  const { cart, limpiarCarrito, removeById, getTotalAmount } =
    useContext(CartContext);

  let totalEnElCarrito = getTotalAmount();

  return (
    <div className="pagina-carrito">
      {cart.length < 1 && (
        <h1 className="tipografia-carrito">
          Tu carrito de compras está vacío. Explorá la tienda y descubrí
          nuestros productos.
        </h1>
      )}
      {cart.map((product) => {
        return (
          <div className="contenedorT" key={product.id}>
            <h2>{product.nombre}</h2>
            <h3>{product.quantity}</h3>
            <img src={`imagen`} alt="" />
            <h5>{product.varietalproducto}</h5>
            <button className="boton-contenedorT" onClick={() => removeById(product.id)}>Eliminar</button>
          </div>
        );
      })}

{cart.length < 1 && (
        <Link to="/" className="boton-carrito">
          TIENDA
        </Link>
      )}

      <div className="botones-cartcontainer">
      {cart.length > 0 && (
        <h2 className="total-carrito-car" style={{ color: cart.length > 0 ? "black" : "blueviolet" }}>
          El total a pagar es: {totalEnElCarrito}
        </h2>
      )}

      {cart.length > 0 && (
        <button className="limpiar-carrito-cartcontainer" onClick={limpiarCarrito}> Limpiar Carrito </button>
      )}



      {cart.length > 0 && (
        <Link className="finalizar-carrito-carcontainer" to="/checkout" style={{ color: "black" }}>
          Finalizar compra
        </Link>
      )}
      </div>
    </div>
  );
};

export default CartContainer;
