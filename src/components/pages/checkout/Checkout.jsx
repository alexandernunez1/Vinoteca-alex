import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../../firebaseconfiguracion";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import "./Checkout.css";

const Checkout = () => {
  const { cart, getTotalAmount, resetCart } = useContext(CartContext);

  const [orderId, setOrderId] = useState(null);

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const funcionDelFormulario = (evento) => {
    evento.preventDefault();
    const total = getTotalAmount();

    const order = {
      buyer: userInfo,
      items: cart,
      total: total,
    };
    let refCollection = collection(db, "orders");
    addDoc(refCollection, order).then((res) => {
      setOrderId(res.id);
      resetCart();
    });

    let refCol = collection(db, "products");
    order.items.forEach((item) => {
      let refDoc = doc(refCol, item.id);
      updateDoc(refDoc, { stock: item.stock - item.quantity });
    });
  };

  const capturarInfo = (evento) => {
    const { name, value } = evento.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  if (orderId) {
    return (
      <h2 className="order-css">
        gracias por tu compra tu numero de caja es:<br></br> {orderId}
      </h2>
    );
  }

  return (
    <div className="Checkout-css">
      <h1 className="formulario-envio">FORMULARIO DE ENVIO</h1>
      <form className="Formulario-check" onSubmit={funcionDelFormulario}>
        <input
          type="text"
          placeholder="alexander nuñez"
          name="name"
          onChange={capturarInfo}
        />
        <input
          type="email"
          placeholder="alexandernuñez@gmail.com"
          name="email"
          onChange={capturarInfo}
        />
        <input
          type="text"
          placeholder="1188997711"
          name="phoneNumber"
          onChange={capturarInfo}
        />
        <button className="comprar-check">comprar</button>
        <button className="cancelar-check" type="button">Cancelar</button>
      </form>
    </div>
  );
};

export default Checkout;
