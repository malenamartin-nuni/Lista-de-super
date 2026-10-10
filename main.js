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

 // PARTE III - Lista de Super

 // 1. Funcion para mostrar los productos numerados
 
function logItems(arreglo) {
    arreglo.forEach((producto, indice) => {
        console.log(`${indice}: ${producto}`);
    });
}

 // 2. Programa interactivo
 let comando = "";

 while (comando !== "salir") {
   comando = prompt(
     "Escribi un comando: nuevo, listar, borrar o salir"
   );

   if (comando === null) {
     comando = "salir";
   } else {
     comando = comando.toLowerCase().trim();
   }

   if (comando === "nuevo") {
     let producto = prompt("Que producto queres agregar?");

     if (producto !== null && producto.trim() !== "") {
       listaDeSuper.push(producto.trim());
       console.log("Producto agregado: " + producto.trim());
     }

   } else if (comando === "listar") {
     logItems(listaDeSuper);

   } else if (comando === "borrar") {
     logItems(listaDeSuper);

     let indice = prompt("Que indice queres borrar?");

     if (indice !== null && indice.trim() !== "" &&
         Number.isInteger(Number(indice)) &&
         Number(indice) >= 0 &&
         Number(indice) < listaDeSuper.length) {

       let eliminado = listaDeSuper.splice(Number(indice), 1);
       console.log("Producto eliminado: " + eliminado[0]);

     } else {
       console.log("Indice invalido");
     }

   } else if (comando === "salir") {
     console.log("Programa finalizado");

   } else {
     console.log("Comando no valido");
   }
 }
