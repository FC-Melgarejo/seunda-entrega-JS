class Productos {
  constructor(nombre, precio, stock, categoria, disponibilidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.categoria = categoria;
    this.disponibilidad = disponibilidad;
  }
  cambiarStock() {
    this.stock = --this.stock;
  }
  configurarStock(stock) {
    this.stock = stock;
  }
}

const producto1 = new Productos("Iphone 14", 1000, 200, "celulares", true);
const producto2 = new Productos("Xiaomi Redmi8", 200, 200, "celulares", true);
const producto3 = new Productos("Samsung S22", 900, 200, "celulares", true);
const producto4 = new Productos("Moto G10", 300, 150, "celulares", true);
const producto5 = new Productos("notebook lenovo", 500, 100, "notebook", true);
const producto6 = new Productos("notebook HP", 600, 300, "notebook", true);

const productos = [
  producto1,
  producto2,
  producto3,
  producto4,
  producto5,
  producto6,
];

// Metodo de filtrado de Celulares

const celulares = productos.filter((celular) => {
  return celular.categoria === "celulares";
});

console.log(celulares);

//

let total = 0;
const carrito = [];
let barrera = true;
let seguirComprando = true;

function keepShopping() {
  if (seguirComprando === false) {
    alert(`El total de tu compra es de $${total}.`);
    alert(`Gracias por tu compra.`);

    barrera = false;
  }
}

function alerta(celular, total, carrito) {
  alert(
    `Compraste: ${Productos.nombre} x $${Productos.precio}. El total de tu compra es de: $${total}. 
          
          
    Lista de productos comprados: ${carrito}`
  );
}

while (barrera === true) {
  let producto = parseInt(
    prompt(`Ingresa el producto que vas a comprar:
      1. Iphone
      2. Xiaomi
      3. Samgung
      4. Moto G10
      5. notebook lenovo
      6. notebook HP`)
  );
  if (producto === 1) {
    carrito.push(celular1.nombre);
    total = total + celular1.precio;

    alerta(celular1, total, carrito);

    seguirComprando = confirm("Queres seguir comprando?");
    keepShopping();
  } else if (producto === 2) {
    carrito.push(celular2.nombre);
    total = total + celular2.precio;

    alerta(celular2, total, carrito);

    seguirComprando = confirm("Queres seguir comprando?");
    keepShopping();
  } else if (producto === 3) {
    carrito.push(celular3.nombre);
    total = total + celular3.precio;

    alerta(celular3, total, carrito);

    seguirComprando = confirm("Queres seguir comprando?");
    keepShopping();
  } else if (producto === 4) {
    carrito.push(celular4.nombre);
    total = total + celular4.precio;

    alerta(celular4, total, carrito);

    seguirComprando = confirm("Queres seguir comprando?");
    keepShopping();
  } else if (producto === 5) {
    carrito.push(notebook1.nombre);
    total = total + notebook1.precio;

    alerta(notebook1, total, carrito);

    seguirComprando = confirm("Queres seguir comprando?");
    keepShopping();
  } else if (producto === 6) {
    carrito.push(notebook2.nombre);
    total = total + notebook2.precio;

    alerta(notebook2, total, carrito);

    seguirComprando = confirm("Queres seguir comprando?");
    keepShopping();
  }
}