'use strict'

/*
18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
*/

//Ejercicio 18: método match();

const calcularVocalesConsonates = (texto = "") => {
 if(!texto) return console.warn("No ingresaste ningún valor");
 if(typeof texto !== "string") return console.error(`El valor ${texto} no es válido`);
 let numerosVocales = texto.match(/[aeiou]/gi).length;
 return console.log(`El número de las vocales son: ${numerosVocales}`);
}