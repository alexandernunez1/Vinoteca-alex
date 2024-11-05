import { useEffect } from "react";
import "./ItemListContainer.css";
import { useState } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import { Skeleton } from "@mui/material";
import { db } from "../../../firebaseconfiguracion";
import { collection, getDocs } from "firebase/firestore";

export const ItemListContainer = () => {
  const { varietal } = useParams();

  const [misProductos, setMisProductos] = useState([]);

  useEffect(() => {
    const productsCollection = collection(db, "product");

    getDocs(productsCollection).then((res) => {
      let arrayEntendible = res.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });

      setMisProductos(arrayEntendible);
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

  return (
    <div>
      <h2>Lista de productos</h2>
      <ItemList misProductos={misProductos} />
    </div>
  );
};
