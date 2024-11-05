import "./itemDetail.css";
import Contador from "../../common/contador/Contador";

const ItemDetail = ({ item, agregarAlCarrito, totalIncart }) => {
  return (
    <div className="detail-container">
      <h2 className="nombre-detail">{item.nombre}</h2>
      <h2 className="varietal-detail">{item.varietalproducto}</h2>
      <img className="imagen-detail" src={item.imagen} alt="" />
      <h2 className="detalle-detail">{item.detalles}</h2>
      <Contador
        stock={item.stock}
        agregarAlCarrito={agregarAlCarrito}
        totalIncart={totalIncart}
      />
    </div>
  );
};

export default ItemDetail;
