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

