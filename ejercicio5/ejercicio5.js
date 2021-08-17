'use strict'

/*
15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
*/

//DE AQUÍ EN ADELANTE COMENZARÉ A UTILIZAR FUNCIONES EXPRESADAS.

//Ejercicio 15: Utilizando parseInt() para pasar de binario, octal o hexadecimal a Decimal. Y utilizamos toString() para pasar de decimal a otra unidad: binario, octal o hexadecimal.

const obtenerBaseDecimal = (numero = undefined, base = undefined) => {
  if (numero === undefined) return console.warn("No escribió ningún número");
  if (numero === 0) return console.warn(`El número ${numero} no puede ser cero`);
  if (base === undefined) return console.warn("No agregó ninguna base a convertir");
  if (typeof base !== "number") return console.error(`La base ${base} no es válido`);
  if (typeof numero !== "number") return console.error(`El valor ${numero} no es válido`);
  if (Math.sign(numero) === -1) return console.error("No puede validar números negativos");
  if (base.length > 1 || !/(2|8|16)/.test(base)) return console.warn(`El ${base} no es una base válida`);

  if(base === 2) {
    let binarioABaseDecimal = parseInt(numero, base);
    console.info(`El número ${numero} binario tiene como base decimal ${binarioABaseDecimal}`);
  } else if (base === 8) {
    let octalABaseDecimal = parseInt(numero, base);
    console.info(`El número ${numero} octal tiene como base decimal ${octalABaseDecimal}`);
  } else if (base === 16) {
    let hexadecimalABaseDecimal = parseInt(numero, base);
    console.info(`El número ${numero} hexadecimal tiene como base decimal ${hexadecimalABaseDecimal}`);
  }
}

//EJERCICIO 16: Como sacar el porcentaje de descuento de un producto.

const calcularDescuento = (precio = undefined, porcentaje = undefined)=> {
  if (precio === undefined) return console.warn("No escribió ningún precio");
  if(porcentaje === undefined) return console.warn("No agregó ningún porcentaje");
  if (typeof precio !== "number") return console.error(`El precio ${precio} no es válido`);
  if (typeof porcentaje !== "number") return console.error(`El porcentaje ${porcentaje} no es válido`);

  let descuento = porcentaje / 100;
  let precioConDescuento = precio - (precio * descuento);

  console.info(`El precio ${precio} con descuento del ${porcentaje}% es ${precioConDescuento}`);
}