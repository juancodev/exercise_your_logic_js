'use strict'
/*1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.*/

// Ejercicio 1
function conteoNumerosPorCaracter(texto) {
  if (typeof(texto) !== "string") {
    console.error("No se acepta otro tipo de datos que no sea string, ya que no cuentan con longitud.")
  } else {
    let longitud = texto.length;
    console.log(longitud);
  }
}

//Ejercicio 2 METODO SLICE
function textoRecortado(texto, posicionRecorte){
  if (typeof(texto) !== "string" && typeof(posicionRecorte) !== "number"){
    console.error("No se acepta otro tipo de datos que no sea string o la cadena de texto esta vacía.")
  } else {
    let cadenaDeTexto = texto;
    let textoSalida = cadenaDeTexto.slice(0, posicionRecorte);
    console.log(textoSalida);
  }
}

//Ejercicio 3 METODO STRING.SPLIT("")
function destructurarCadena(texto) {
  if (typeof(texto) !== "string") {
    console.error('No se acepta otro tipo de datos que no sea string, ya que no cuentan con longitud.')
  } else {
    let textoSeparado = texto.split(" ");
    console.log(textoSeparado);
  }
}

//Ejercicio 4 METODO REPEAT
function repetirTextos(texto, repeticiones){
  if (typeof(texto) !== "string" && typeof(posicionRecorte) !== "number"){
    console.error("No se acepta otro tipo de datos que no sea string o la cadena de texto esta vacía.")
  } else {
    let mensajeFinal = agregarEspacio.repeat(repeticiones);
    console.log(mensajeFinal);
  }
}