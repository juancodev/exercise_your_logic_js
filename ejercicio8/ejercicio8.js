'use strict'

/*
24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
*/

//Ejercicio 24: Método sort() para ordenar de forma ascendente y método reverse() para su forma descendente.

const ordenarArray = (arreglo = undefined) => {
  if (arreglo === undefined) return console.warn("No ingresaste un valor");

  if (!(arreglo instanceof Array)) return console.error(`El ${arreglo} no es un array`);

  if (arreglo.length === 0) return console.error("No puedes pasar un array vacío");

  for (const num of arreglo) {
    if (typeof num !== "number") return console.error(`No puedes pasar un ${num} como valor para este ejercicio`);
  }

  // function comparar(a, b) {
  //   return a - b;
  // };

  // return console.info(`El array original:${arreglo}\n${arreglo.sort((a,b)=> a - b)}`);

  TODO:TERMINAR_EL_EJERCICIO

  return console.info({
    ascendente: arreglo.sort((a, b)=> a - b),
    descendente: arreglo.sort((a, b) => a - b).reverse()
    //me muestra los valores revertidos y no de forma descendente.
  });
}