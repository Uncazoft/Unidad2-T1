// ------------------- EJERCICIO 3 ------------------------

let a = { propiedad: 'valor' };
let b = { ...a };

a.propiedad = 'nuevo valor';

console.log(a);
console.log(b); 

