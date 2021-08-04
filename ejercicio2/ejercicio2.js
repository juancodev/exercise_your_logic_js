'use strict'

/*5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.*/

// Ejercicio 5 METODO split("") sirve para convertir un string en un array y permite separarlo dependiendo de lo que se pase por parámetro, .reverse() nos permite revertir el valor de cualquier array y .join("") nos permite unir cualquier valor de un array quitándole las comas generadas por la separación

function invertirPalabras(texto) {
  if(typeof(texto) !== "string") {
    console.log("Solamente funciona con un tipo de datos tipo string");
  }else {
    let datoAConvertir = texto.split("").reverse().join("");
    return datoAConvertir;
  }
}

invertirPalabras("Hola Mundo");

//OPERADOR TERNARIO (otra solución)

const invertirCaracter = (texto = "") =>
  (!texto)
    ? console.warn("No ingresaste una cadena de texto")
    : console.info(texto.split("").reverse().join(""));

invertirCaracter(); // warning
invertirCaracter("Hola Mundo"); // odnuM aloH

function encontrarPalabraRepetida(texto, palabraRepetida){
  let obtenerArreglo = texto.split(" ");
  let compararPalabrasRepetidas = obtenerArreglo.indexOf(palabraRepetida);
  while (compararPalabrasRepetidas != -1) {
    compararPalabrasRepetidas = obtenerArreglo.indexOf(palabraRepetida, compararPalabrasRepetidas + 1);
  }

  return compararPalabrasRepetidas;
}
// let obtenerValor = texto.split(" ").filter((text, i, texto) => texto.indexOf(text) !== i).length;
//console.log(obtenerValor);