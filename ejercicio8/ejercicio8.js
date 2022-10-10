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

  // Ordenar Ascendente.
  // function comparar(a, b) {
  //   return a - b;
  // };

  // Ordenar Descendente.
  // function comparar(a, b) {
  //   return b - a;
  // };

  let ascendente = arreglo.map(el => el).sort();
  let descendente = arreglo.map(el => el).sort().reverse();


  return console.info(`El array original:${arreglo}\nDe forma ascendente: ${ascendente}\nDe forma descendente: ${descendente}`);


  // return console.info({
  //   ascendente: ascendente,
  //   descendente: descendente
  // });

}

//Ejercicio 25: Utilizamos el método filter para poder generar un nuevo arreglo que cumpla la condición puesta.

const eliminarDuplicados = (arreglo = undefined) =>{
  if (arreglo === undefined) return console.warn("No ingresaste un valor");

  if (!(arreglo instanceof Array)) return console.error(`El ${arreglo} no es un array`);

  if (arreglo.length === 0) return console.error("No puedes pasar un array vacío");

  if (arreglo.length === 1) return console.warn("Mínimo debe contener 2 elementos");

  const eliminarValoresDuplicados = arreglo.filter((el, index, self)=> self.indexOf(el) === index)

  /*Otra forma de hacerlo
  const eliminarValoresDuplicados = [... new Set(arreglo)]
  ["x", 10, 2, "10", true]*/

  return console.info(`El array original: [${arreglo}]\nEl array sin duplicados: [${eliminarValoresDuplicados}]`);
}

//Ejercicio 26: utilizamos el método reduce(), el cual, nos permite reducir los valores en un único valor

const calcularPromedio = (arreglo = undefined) =>{
  if (arreglo === undefined) return console.warn("No ingresaste un valor");

  if (!(arreglo instanceof Array)) return console.error(`El ${arreglo} no es un array`);

  if (arreglo.length === 0) return console.error("No puedes pasar un array vacío");

  if (arreglo.length === 1) return console.warn("Mínimo debe contener 2 elementos");

  for (const num of arreglo) {
    if (typeof num !== "number") return console.error(`No puedes pasar un ${num} como valor para este ejercicio`);
  }

  let suma = arreglo.reduce((acumulador, numeros)=> acumulador += numeros);
  let promedio = suma / arreglo.length;

  console.info(`El promedio del arreglo es: ${promedio}`);
}