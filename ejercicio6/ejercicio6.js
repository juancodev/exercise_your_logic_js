'use strict'

/*
18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
*/

//Ejercicio 18: método match() para buscar en las expresiones regulares similitud;

const calcularVocalesConsonates = (texto = "") => {
 if(!texto) return console.warn("No ingresaste ningún valor");
 if(typeof texto !== "string") return console.error(`El valor ${texto} no es válido`);
 let numerosVocales = texto.match(/[áéíóúaeiouü]/gi).length;
 let numerosConsonantes = texto.match(/[bcdfghjklmnñpqrstvwxyz]/ig).length;
 return console.log(`El número de las vocales son: ${numerosVocales} y el número de consonantes son: ${numerosConsonantes}`);
}

//Ejercicio 19:

const validarNombre = (nombre = "")=>{
  if (!nombre) return console.warn("No ingresaste ningún valor");
  if(typeof nombre !== "string") return console.error(`El valor ${nombre} no es válido`);
  let expReg = /^[A-Za-zÑñÁáÉéÍíÓóÚúü\s]+$/g.test(nombre);
  /*^: no puede haber nada antes de la expresión
  $: no puede haber nada después de la expresión
  []: agrupadores
  +: Evalúe por cada caracter que tiene la cadena de texto.
  [A-Z]: Evalúa las mayúsculas.
  [a-z]: minúsculas.
  \s: para que contemple espacios en blancos
  test(): va a evaluar si se cumple la confición o no.
  */
 return (expReg)
 ? console.info(`"${nombre}", es un nombre válido`)
 : console.warn(`"${nombre}", NO es un nombre válido`);
}