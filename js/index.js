//seccion 19 JAVASCRIPT (Intro a DOM)

//github\CursoDeJsHtmlCssNodeJsUdemy\js


// console.log('Hola Mundo');


//var miPrimeraVariable= 'lala'

let miPrimeraVariable = 'Mi Primera Variable!'
// console.log(miPrimeraVariable);

//cambiamo el valor de la variable
miPrimeraVariable = 'Esto ha cambiado'
// console.log(miPrimeraVariable);

//boolean
let miBoolean = true
let miOtroBoolean = false

let miNumero = 0
let miNumero2 = 12
let miNumero3 = -123

// console.log(miBoolean, miOtroBoolean, miNumero, miNumero2, miNumero3);

let undef
// console.log(undef);

let nulo = null
// console.log(nulo);



//objeto vacio
const miPrimerObjeto = {}

//obajeto
const miObjeto = {
  unNumero: 12,
  unString: 'Esta cadena de caracteres',
  unaCondicion: true,
}


//Arreglo
const arrVacio = []
const arr = [1, 2, 'hola', 'mundo', miObjeto]


arrVacio.push(1);
arrVacio.push(2);
arrVacio.push(3);
arrVacio.push('hola');
arrVacio.push(miPrimeraVariable);
// console.log(arrVacio);

//Operadores matematicos
// const suma = 1 + 2
// const resta = 1 - 2
// const multiplicar = 1 * 2
// const division = 9 / 3

// console.log(suma, resta, multiplicar, division);

//const modulo = 10 % 3 //nos deviuelve el valor que sobra de la division
// console.log(modulo);

let num = 5
// num++
// num--
// num += 5
// num -= 5
//num *= 5
//num /=5
//console.log(num);


//Operadores de comparacion

//igualdad estricta
const resultado1 = 5 === num // evalua si el numero es exactamente igual al otro.
//igualdad no estricta, strings pueden ser iguales a numero si el valor es el mismo.
const resultado2 = 5 == '5' // esto resulta true a pesar de ser un string, no toma en cuenta en el tipo de dato.

const resultado3 = 5 < 6
const resultado4 = 5 < 5
const resultado5 = 5 > 6
const resultado6 = 5 > 5

const resultado7 = 5 <= 6
const resultado8 = 5 <= 5
const resultado9 = 5 >= 6
const resultado10 = 5 >= 5

const resultado11 = 5 !== 6 //estrictamente desigual
const resultado12 = 5 != '5' // no estrictamente desigual
// console.log(resultado2);

//operadores logicos

//or = ||, and &&, not !

//Or
// un resultado true pueden ser strings, numeros y objetos son evaluados como true, a excepcion de 0.
const resultadoOr = false || true // es igual a true / tomara al primer elemento que considere verdadero / siempre que haya un true retornara verdadero, si no hay true retornara false.


// And
const resultadoAnd = false && true // retorna false / siempre y cuando haya un resultado false, va a retornar false/ solo retorna true cuando todos los valores son true.

// Not
const resultadoNot = !true // retorna false / retorna el opuesto del valor.


//Control de flujo

//control de flujo if

// const edad= 5
//
// if (edad > 5 && edad < 18) {
//   console.log('Puedes jugar');
// }else {
//   console.log('No puedes jugar');
// }
// console.log('Fin programa');

//Control del flujo while

// let x=0
// while (x <= 5) {
//   console.log(x);
//   x++
// }
// console.log('Termino el loop');

//Control de flujo switch

// let y=1
//
// switch (y) {
//   case 1:
//   console.log('soy el caso 1');
//     break;
//   case 2:
//   console.log('soy el caso 2');
//     break;
//   case 3:
//   console.log('soy el caso 3');
//     break;
//   default:
//   console.log('no hay ningun caso');
// }

//Control de flujo for
// let j= 10
// for (let i = 0; i < j; i++) {
//   console.log(i);
// }

//Accediendo a los elementos de un arreglo
// const numeros=[1,2,'hola',4,5]
// //console.log(numeros[0]);
//
// for (let i = 0; i < numeros.length; i++) {
//   console.log(numeros[i]);
// }

//Funciones

// function iterar(arg1) {//el recive un argumento
//
//   for (let i = 0; i < arg1.length; i++) {
//     console.log(arg1[i]);
//   }
// }

// const numeros=[1,2,'hola',4,5]
// const nombres=['pedro','juan','felipe','maria','michel']
// iterar(numeros);//lo que enviamos es un parametro
// iterar(nombres);

// function suma(a,b){
//   return a+b;
// }
//
// let resultadoSuma1 = suma(1,2)
// let resultadoSuma2 = suma(5,6)
// let resultadoSuma3 = suma(resultadoSuma1,resultadoSuma2)
// console.log('Resultado=', resultadoSuma3);

//uso de callback en una funcion
function sumar(a,b,cb){
  const r= a+b
  cb(r)
}
function callback(result){
  console.log('Resultado=', result);
}

//usar funciones como valores

// callback(6)

//sumar(2,3,callback )

//fat arrrow function

const miFatArrowFunction= (a,b) => a + b

const otraFAF= (a,b ) => {
  return a+b
}
const r = otraFAF(3,4)
// console.log(r);

//funciones anonimas
//anonima es que no tiene nombre

sumar(2,3, function(r){
  console.log('Soy una funcion anonima y mi resulatado es ',r);
})

// fin de la seccion 18
