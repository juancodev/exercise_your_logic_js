'use strict'

/* 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120. */

//Ejercicio 9  Math.random
function ObtenerNumeroAleatorio(min, max){
  (!min)
  ? console.warn("no ingresó el primer parámetro que es el minimo numero")
  : (!max)
  ? console.warn("no ingresó el segundo parámetro que es el máximo numero")
  : console.info(Math.floor(Math.random() * (max - min) + min));
}

//Ejercicio 10  toString().split('').reverse().join('')
function numeroCapicua(numero = 0) {
  let obtenerNumero = numero.toString().split('').reverse().join('');
  let numeroEntero = parseInt(obtenerNumero);
  (numeroEntero === numero)
  ? console.info(`El número ${numero} es capicúa`)
  : console.warn(`El número ${numero} no es capicúa`);
}

//Ejercicio 10 Factorial Javascript