import "./itemDetail.css";

const ItemDetail = ({ item }) => {
  return (
    <div className="detail-container">
      <h2 className="nombre-detail">{item.nombre}</h2>
      <h2 className="varietal-detail">{item.varietalproducto}</h2>
      <img className="imagen-detail" src={item.imagen} alt="" />
      <h2 className="detalle-detail">{item.detalles}</h2>
    </div>
  );
};

export default ItemDetail;
