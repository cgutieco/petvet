import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ProductoCard } from "./components/producto_card/producto_card.jsx";
import { Producto } from "./entities/producto.js";

const shampooPeluchin = new Producto({
  nombre: "Shampoo sachetón perros",
  marca: "Peluchín",
  precio: 25.99,
  esNuevo: true,
  urlImagen: "assets/productos/shampoo-peluchin.png",
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductoCard producto={shampooPeluchin} />
  </StrictMode>,
);
