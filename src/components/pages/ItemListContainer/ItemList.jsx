import { Card } from "../../common/card/Card";

export const ItemList = ({ misProductos }) => {
  return misProductos.map(
    ({ id, nombre, stock, imagen, varietalproducto, precio, detalles }) => (
      <Card
        key={id}
        nombre={nombre}
        stock={stock}
        varietalProducto={varietalproducto}
        imagen={imagen}
        precio={precio}
        detalles={detalles}
        id={id}
      />
    )
  );
};
