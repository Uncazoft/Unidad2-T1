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

