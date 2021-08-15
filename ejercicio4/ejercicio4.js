'use strict'
/*
12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
*/

//Ejercicio 12: Calcular número primo con un ciclo for

function numerosPrimos(numero = undefined) {
  if (numero === undefined) return console.warn("No escribió ningún número")

  if (typeof numero !== "number") return console.error(`El valor ${numero} debe ser un número`)

  if (numero === 0 || numero === 1 || numero === 4) return console.warn(`El ${numero} no es un número primo porque no puede ser por ${numero}`);

  for (let x = 2; x < numero / 2; x++) {
    if (numero % x === 0) return console.warn(`El ${numero} no es un número primo`);
  }
  return true;
}

//Ejercicio 13: Utilizamos el operador de módulo que nos presenta javascript (%)

function validarNumeros(numero = undefined) {
  if (numero === undefined) return console.warn("No escribió ningún número");

  if (typeof numero !== "number") return console.error(`El valor ${numero} debe ser un número`);

  let esPar = numero % 2;

  (esPar === 0)
  ? console.log(`El número ${numero} es par`)
  : console.log(`El número ${numero} es impar`);

}

//Ejercicio 14:

function calcularGradosFahrenheit(grados = undefined, unidad = undefined) {
  if (grados === undefined) return console.log("No has agregado ningún grado");
  if (unidad === undefined) return console.log("No has agregado ninguna unidad");
  if (typeof grados !== "number") return console.error(`El valor ${grados} no es válido`);
  if (typeof unidad !== "string") return console.error(`La unidad ${unidad} no es reconocida`);
  if(unidad.length > 1 || !/(C|F)/.test(unidad)) return console.warn(`La unidad ${unidad} no es una unidad válida`);

  if (unidad === "C") {
    return console.info(`${grados}°C = ${Math.round((grados * (9/5)) + 32)}°F`);
  } else if (unidad === "F"){
    return console.info(`${grados}°F = ${Math.round(((grados - 32) * (5/9)))}°C`);
  }
  // formula de grados Celsius a fahrenheit = ((grados * 9) / 5) + 32;

  // formula de grados Fahrenheit a Celcius = ((grados - 32) * (5/9));
}