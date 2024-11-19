import { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { toast } from "sonner";
import { db } from "../../../firebaseconfiguracion";
import { collection, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const { addToCart, getTotalQuantity } = useContext(CartContext);

  let totalIncart = getTotalQuantity(id);

  const [item, setItem] = useState({});

  useEffect(() => {
    const productsBase = collection(db, "products");
    const docRef = doc(productsBase, id);
    getDoc(docRef).then((res) => {
      setItem({ ...res.data(), id: res.id });
    });
  }, [id]);

  const agregarAlCarrito = (cantidad) => {
    let objeto = { ...item, quantity: cantidad };
    addToCart(objeto);
    toast.success("Producto agregado a la caja", {
      position: "bottom-right",
      closeButton: true,
      style: {
        backgroundColor: "#8e48cf",
        color: "white",
      },
    });
  };

  return (
    <ItemDetail
      item={item}
      agregarAlCarrito={agregarAlCarrito}
      totalIncart={totalIncart}
    />
  );
};

export default ItemDetailContainer;
