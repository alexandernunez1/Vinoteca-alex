import { useEffect } from "react";
import "./ItemListContainer.css";
import { useState } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import { Skeleton } from "@mui/material";
import { db } from "../../../firebaseconfiguracion";
import { collection, getDocs, query, where, addDoc } from "firebase/firestore";
import { products } from "../../../../productos";

export const ItemListContainer = () => {
  const { varietal } = useParams();

  const [misProductos, setMisProductos] = useState([]);

  useEffect(() => {
    const productsBase = collection(db, "products");

    let docsRef = productsBase;
    if (varietal) {
      docsRef = query(productsBase, where("varietalproducto", "==", varietal));
    }
    getDocs(docsRef).then((res) => {
      let arrayDocumentos = res.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });

      setMisProductos(arrayDocumentos);
    });
  }, [varietal]);

  if (misProductos.length === 0) {
    return (
      <>
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        <Skeleton variant="rectangular" width={210} height={60} />
        <Skeleton variant="rounded" width={210} height={60} />
      </>
    );
  }

  const cargarProductos = () => {
    const productsBase = collection(db, "products");
    products.forEach((products) => {
      addDoc(productsBase, products);
    });
  };

  return (
    <div>
      <h2 className="Lista-de-productos">Tienda de productos</h2>
      <ItemList misProductos={misProductos} />
    </div>
  );
};
