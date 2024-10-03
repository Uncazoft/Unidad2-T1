// ------------------- EJERCICIO 5 ------------------------
const productos = [
    { nombre: "Camiseta", precio: 50, categoria: "Ropa" },
    { nombre: "Pantalones", precio: 120, categoria: "Ropa" },
    { nombre: "Zapatillas", precio: 200, categoria: "Calzado" },
    { nombre: "Gafas de sol", precio: 150, categoria: "Accesorios" },
    { nombre: "Reloj", precio: 250, categoria: "Accesorios" },
    { nombre: "Chaqueta", precio: 300, categoria: "Ropa" },
    { nombre: "Bicicleta", precio: 500, categoria: "Deportes" },
    { nombre: "Pelota", precio: 30, categoria: "Deportes" },
    { nombre: "Laptop", precio: 900, categoria: "Electrónica" },
    { nombre: "Teléfono", precio: 600, categoria: "Electrónica" }
];
const categoriaEspecifica = "Ropa";
const productosFiltrados = productos
    .filter(producto => producto.categoria === categoriaEspecifica && producto.precio > 100)
    .map(producto => ({ nombre: producto.nombre, precio: producto.precio }));
console.log(productosFiltrados);


