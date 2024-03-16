const carrito = document.querySelector("#carrito");
const template = document.querySelector("#template");
const fragment = document.createDocumentFragment();
const agregar = document.querySelectorAll(".card button");

const carritoArray = [];

const agregarCarrito = (e) => {
  const producto = {
    titulo: e.target.dataset.fruta,
    id: e.target.dataset.fruta,
    cantidad: 1,
  };

  // buscamos el indice
  const index = carritoArray.findIndex((item) => item.id === producto.id);

  // si no existe empujamos el nuevo elemento
  if (index === -1) {
    carritoArray.push(producto);
  } else {
    // en caso contrario aumentamos su cantidad
    carritoArray[index].cantidad++;
  }

  console.log(carritoArray);

  pintarCarrito();
};

agregar.forEach((boton) => boton.addEventListener("click", agregarCarrito));

const pintarCarrito = () => {
  carrito.textContent = "";

  // recorremos el carrito y pintamos elementos:
  carritoArray.forEach((item) => {
    const clone = template.content.cloneNode(true);
    clone.querySelector(".lead").textContent = item.titulo;
    clone.querySelector(".rounded-pill").textContent = item.cantidad;
    fragment.appendChild(clone);
  });
  carrito.appendChild(fragment);
};
