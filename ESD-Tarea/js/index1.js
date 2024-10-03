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


