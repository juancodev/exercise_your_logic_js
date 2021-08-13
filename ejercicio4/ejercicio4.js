'use strict'
/*
12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
*/

//Ejercicio 12

function numerosPrimos(numero = undefined) {
  if (numero === undefined) return console.warn("No escribió ningún número")

  if (typeof numero !== "number") return console.error(`El valor ${numero} debe ser un número`)

  if (numero === 0 || numero === 1 || numero === 4) return console.warn(`El ${numero} no es un número primo porque no puede ser por ${numero}`);

  for (let x = 2; x < numero / 2; x++) {
    if (numero % x === 0) return console.warn(`El ${numero} no es un número primo`);
  }
  return true;
}