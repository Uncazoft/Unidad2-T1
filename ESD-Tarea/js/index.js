// ------------------- EJERCICIO 1 ------------------------

let bolsaDeLoteria = [];

for (let i = 0; i < 10; i++) {
    bolsaDeLoteria.push(Math.floor(Math.random() * 100) + 1);
}

console.log("Bolsa de números de lotería original:", bolsaDeLoteria);

bolsaDeLoteria.sort((a, b) => a - b);

console.log("Bolsa de números de lotería ordenada:", bolsaDeLoteria);

bolsaDeLoteria.splice(0, 2);

for (let i = 0; i < 5; i++) {
    bolsaDeLoteria.push(Math.floor(Math.random() * 100) + 1);
}

console.log("Bolsa de números de lotería final:", bolsaDeLoteria);




// ------------------- EJERCICIO 2 ------------------------

const persona = {
    nombre: 'Kevin Arellano',
    edad: 21,
    ciudad: 'Bermejillo'
  };
  
  persona.hobbies = ['Jugar', 'Musica', 'Correr'];
  
  Object.keys(persona).forEach((key) => {
    if (key === 'edad') {
      delete persona.edad;
    }
  });
  
  function incrementarEdad(persona) {
    const nuevoObjeto = { ...persona };
    nuevoObjeto.edad = (persona.edad || 0) + 1;
    return nuevoObjeto;
  }
  
  const personaConEdadIncrementada = incrementarEdad(persona);
  
  console.log(persona);
  console.log(personaConEdadIncrementada);
  


// ------------------- EJERCICIO 3 ------------------------

let a = { propiedad: 'valor' };
let b = { ...a };

a.propiedad = 'nuevo valor';

console.log(a);
console.log(b); 



// ------------------- EJERCICIO 4 ------------------------

class Nodo {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.back = null;
    }
}

const nodo1 = new Nodo("Primer nodo");
const nodo2 = new Nodo("Segundo nodo");
const nodo3 = new Nodo("Tercer nodo");

nodo1.data = "Primer nodo";
nodo2.data = "Segundo nodo";
nodo3.data = "Tercer nodo";

nodo1.next = nodo2;
nodo2.next = nodo3;
nodo3.next = null;

nodo1.back = null;
nodo2.back = nodo1;
nodo3.back = nodo2;

console.log(nodo1);
console.log(nodo2);
console.log(nodo3);


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

// ------------------- EJERCICIO 6 ------------------------
function dividir(numerador, denominador) {
    if (denominador === 0) {
        console.error("No se puede dividir por cero.");
        return null;
    }
    return numerador / denominador;
}

const resultado1 = dividir(10, 2);
const resultado2 = dividir(10, 0);

console.log(resultado1);
console.log(resultado2);

