import "./card.css";

export const Card = ({h3,h4}) => {
  return (
    <div className="contenedor-saludos">
      <h3 className="saludoDeBienvenida">
        BIENVENIDOS
        <br />A LA VINOTECA MAS COMPLETA EN VARIETALES DE ARGENTINA QUEDATE Y
        MIRA TODO LO QUE TENEMOS PARA OFRECERTE EN NUESTRO SITIO.{h3}
      </h3>
      <h4 className="mantenimiento">
        ESTE SITIO ESTA EN MANTENIMIENTO, DISCULPA LAS MOLESTIAS.{h4}
      </h4>
    </div>
  );
};
