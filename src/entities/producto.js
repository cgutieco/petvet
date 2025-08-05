export class Producto {
  idProducto;
  nombre;
  marca;
  precio;
  urlImagen;
  esNuevo;
  cantidad;

  constructor({ idProducto, nombre, marca, precio, urlImagen, esNuevo, cantidad }) {
    this.idProducto = idProducto;
    this.nombre = nombre;
    this.marca = marca;
    this.precio = precio;
    this.urlImagen = urlImagen;
    this.esNuevo = esNuevo;
    this.cantidad = cantidad;
  }

  enStock() {
    return this.cantidad > 0;
  }

  precioFormateado() {
    return `$${this.precio.toFixed(2)}`;
  }
}
