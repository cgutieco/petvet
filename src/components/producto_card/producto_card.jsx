import "./producto_card.css";

export const ProductoCard = ({ producto }) => {
  const { nombre, marca, urlImagen, esNuevo } = producto;

  return (
    <div className="producto-card">
      {esNuevo ? <div className="producto-card__nuevo">Nuevo</div> : null}
      <img className="producto-card__img" src={urlImagen} alt="shampoo" />
      <div className="producto-card__body">
        <div className="producto-card__body-header">
          <h2 className="producto-card__titulo">{nombre}</h2>
          <h2 className="producto-card__subtitulo">{marca}</h2>
        </div>
        <div className="producto-card__separador"></div>
        <p className="producto-card__precio">{producto.precioFormateado()}</p>
        <button className="producto-card__button">
          <img
            className="producto-card__button-img"
            src="/assets/icons/shopping-cart.svg"
            alt="shopping cart"
          />
          Añadir al carrito
        </button>
      </div>
    </div>
  );
};
