import { Link } from "react-router-dom";
import "./card.css";

export const Card = ({ nombre, imagen, varietalProducto, precio, id }) => {
  return (
    <div className="card-container">
      <h2 className="nombre-container">{nombre}</h2>
      <h2 className="varietal-tamaño">{varietalProducto}</h2>
      <img className="imagen-tamaño" src={imagen} alt="" />
      <h2>${precio}</h2>
      <Link to={`/itemDetail/${id}`}>
        <button className="detalles-card">Ver detalles</button>
      </Link>
    </div>
  );
};
