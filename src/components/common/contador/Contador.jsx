import { useState } from "react";
import "./contador.css";

const Contador = ({ stock, agregarAlCarrito, totalIncart }) => {
  const [counter, setCounter] = useState(1);

  const sumar = () => {
    stock - totalIncart > counter
      ? setCounter(counter + 1)
      : alert("stock maximo");
  };
  const restar = () => {
    counter > 1 && setCounter(counter - 1);
  };

  return (
    <div className="contador-css">
      <button className="button-contador" onClick={restar}>-</button>
      <h2 className="contador-css">{counter}</h2>
      <button className="button-contador" onClick={sumar}>+</button>

      <button className="buttoncarrito-css" onClick={() => agregarAlCarrito(counter)}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default Contador;
