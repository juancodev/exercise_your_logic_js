'use strict'

/*
21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
*/

//Ejercicio 21: utilizando el método map para interactuar el arreglo principal y muta otro arreglo con unos nuevos valores.

const numerosElevadoAlCuadrado = (arreglo = undefined) => {
  if (arreglo === undefined) return console.warn("No ingresaste ningún dato");

  if (!(arreglo instanceof Array)) return console.error(`El ${arr} no es válido`);

  if (arreglo.length === 0) return console.error(`No se puede pasar un arreglo vacío`);

  for (const num of arreglo) {
    if (typeof num !== "number") return console.error("No puedes pasar otro tipo de dato que no sea número");
  };

  const numeros = arreglo;
  const numerosElevados = numeros.map((number)=>{
    return number * number;
  })
  console.info(`Arreglo original ${arreglo}; arreglo elevado al cuadrado ${numerosElevados}`);
}

//Ejercicio 22: Utilizamos Math.max.apply() para hallar el valor mayor de un array numérico. Y Math.min.apply() para hallar el valor menor de un array numérico.

const hallarMayorYMenor = (arreglo = undefined) =>{
  if (arreglo === undefined) return console.warn("No ingresaste un valor");

  if (!(arreglo instanceof Array)) return console.error(`El ${arreglo} no es un array valido`);

  if (arreglo.length === 0) return console.error("No puedes pasar un array vacío");

  for (const num of arreglo) {
    if (typeof num !== "number") return console.error(`No puedes pasar un ${num} como valor para este ejercicio.`);
  }

  let valorMayor = Math.max.apply(null, arreglo);
  let valorMenor = Math.min.apply(null, arreglo);

  return console.info(`Del array ${arreglo}, el número mayor es: ${valorMayor} y el número menor es: ${valorMenor}. [${valorMayor}, ${valorMenor}]`);
}

const valoresParesEImpares = (arreglo = undefined) => {
  if (arreglo === undefined) return console.warn("No ingresaste un valor");

  if (!(arreglo instanceof Array)) return console.error(`El ${arreglo} no es un array`);

  if (arreglo.length === 0) return console.error("No puedes pasar un array vacío");

  for (const num of arreglo) {
    if (typeof num !== "number") return console.error(`No puedes pasar un ${num} como valor para este ejercicio`);
  }

  const pares = [];
  const impares = [];

  for (let i = 0; i < arreglo.length; i++) {
    if (i % 2 === 0) {
      impares.push(arreglo[i]);
    } else {
      pares.push(arreglo[i]);
    }
  }

  return console.info(`El array original: [${arreglo}]\nPares: {${pares}}\nImpares: {${impares}}`);

  /*
  Otra forma de resolverlo.

  return console.info({
    pares: arr.filter(num => num % 2 === 0),
    impares: arr.filter(num => num % 2 === 1)
  })
  */
}