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

//EJERCICIO 16: Utilizamos una formula (precio - (precio*(porcentaje / 100)))

const calcularDescuento = (precio = undefined, porcentaje = 0)=> {
  if (precio === undefined) return console.warn("No escribió ningún precio");
  if (precio === 0) return console.error("El monto no puede ser 0");
  if (Math.sign(precio) === -1) return console.error("No puede validar números negativos");
  if (typeof precio !== "number") return console.error(`El precio ${precio} no es válido`);
  if (typeof porcentaje !== "number") return console.error(`El porcentaje ${porcentaje} no es válido`);
  if (Math.sign(porcentaje) === -1) return console.error("No puede validar números negativos");

  let descuento = porcentaje / 100;
  let precioConDescuento = precio - (precio * descuento);

  console.info(`El precio ${precio} con descuento del ${porcentaje}% es ${precioConDescuento}`);
}

//Ejercicio 17 : Forma de cómo calcular el año transcurrido

const calcularAnios = (fecha = undefined) =>{
 if (fecha === undefined) return console.log("No ingresaste una fecha");
 if(!(fecha instanceof Date)) return console.error(`No ingresaste una fecha válida`);

 let hoyMenosFecha = new Date().getTime() - fecha.getTime()
 let aniosEnMS = 1000 * 60 * 60 * 24 * 365 // Para saber cuántos MS = 1año
 let aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMS);

 return (Math.sign(aniosHumanos) === -1)
 ? console.info(`Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}`)
 : (Math.sign(aniosHumanos) === 1)
  ? console.info(`Han pasado ${aniosHumanos} años, desde ${fecha.getFullYear()}`)
  : console.info(`Estamos en el año actual ${fecha.getFullYear()}`);
}