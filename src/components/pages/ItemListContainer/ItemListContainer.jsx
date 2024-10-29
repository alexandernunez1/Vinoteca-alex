import { useEffect } from "react";
import { products } from "../../../../productos";
import "./ItemListContainer.css";
import { useState } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const { varietal } = useParams();

  const [misProductos, setMisProductos] = useState([]);

  useEffect(() => {
    const unaFraccion = products.filter(
      (producto) => producto.varietalproducto === varietal
    );
    const getProducts = new Promise((resolve) => {
      resolve(varietal ? unaFraccion : products);
    });
    getProducts.then((res) => {
      setMisProductos(res);
    });
  }, [varietal]);
  return <ItemList misProductos={misProductos} />;
};
