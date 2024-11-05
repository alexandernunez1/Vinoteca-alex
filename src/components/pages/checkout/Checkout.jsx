import { useState } from "react";

const Checkout = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const funcionDelFormulario = (evento) => {
    evento.preventDefault();
    console.log("se envia");
    console.log(userInfo);
  };

  const capturarInfo = (evento) => {
    const { name, value } = evento.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <div>
      <form onSubmit={funcionDelFormulario}>
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
        <button>comprar</button>
        <button type="button">Cancelar</button>
      </form>
    </div>
  );
};

export default Checkout;
