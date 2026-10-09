let listaDeSuper = [];

listaDeSuper.push("Manzana");
listaDeSuper.push("Pan");
listaDeSuper.push("Carne");
listaDeSuper.push("Cereal");
listaDeSuper.push("Yogurt");

let primerElemento = listaDeSuper[0];
let ultimoElemento = listaDeSuper.length - 1;

console.log(listaDeSuper[ultimoElemento]);

 // PARTE II - Lista de Super

// 1. Agregar dos productos al final
listaDeSuper.push("Leche", "Huevos");

// 2. Agregar dos productos al principio
listaDeSuper.unshift("Arroz", "Queso");

// 3. Determinar el largo del arreglo
console.log(listaDeSuper.length);

// 4. Sacar el último producto y guardarlo
let noHabia = listaDeSuper.pop();

// 5. Sacar el primer producto y guardarlo
let comprado = listaDeSuper.shift();

// 6. Determinar el nuevo largo del arreglo
console.log(listaDeSuper.length);
