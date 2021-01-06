//seccion 16 JAVASCRIPT (Operadores matematicos/ comparacion/ logicos)

// la direccion de la carpeta es C:\Users\Gerardo Sarmiento\github\CursoDeJsHtmlCssNodeJsUdemy\js>
// console.log('Hola Mundo');


//var miPrimeraVariable= 'lala'

let miPrimeraVariable= 'Mi Primera Variable!'
// console.log(miPrimeraVariable);

//cambiamo el valor de la variable
miPrimeraVariable= 'Esto ha cambiado'
// console.log(miPrimeraVariable);

//boolean
let miBoolean= true
let miOtroBoolean= false

let miNumero= 0
let miNumero2= 12
let miNumero3= -123

// console.log(miBoolean, miOtroBoolean, miNumero, miNumero2, miNumero3);

let undef
// console.log(undef);

let nulo= null
// console.log(nulo);



//objeto vacio
const miPrimerObjeto= {}

//obajeto
const miObjeto= {
  unNumero:12,
  unString: 'Esta cadena de caracteres',
  unaCondicion: true,
}


//Arreglo
const arrVacio = []
const arr= [1, 2, 'hola', 'mundo', miObjeto]


arrVacio.push(1);
arrVacio.push(2);
arrVacio.push(3);
arrVacio.push('hola');
arrVacio.push(miPrimeraVariable);
// console.log(arrVacio);

//Operadores matematicos
const suma= 1+2
const resta= 1-2
const multiplicar= 1*2
const division= 9/3

// console.log(suma, resta, multiplicar, division);

const modulo= 10%3 //nos deviuelve el valor que sobra de la division
// console.log(modulo);

let num= 5
// num++
// num--
// num += 5
// num -= 5
//num *= 5
//num /=5
//console.log(num);


//Operadores de comparacion

//igualdad estricta
const resultado1= 5 === num // evalua si el numero es exactamente igual al otro.
//igualdad no estricta, strings pueden ser iguales a numero si el valor es el mismo.
const resultado2= 5 == '5' // esto resulta true a pesar de ser un string, no toma en cuenta en el tipo de dato.

const resultado3= 5 < 6
const resultado4= 5 < 5
const resultado5= 5 > 6
const resultado6= 5 > 5

const resultado7= 5 <= 6
const resultado8= 5 <= 5
const resultado9= 5 >= 6
const resultado10= 5 >= 5

const resultado11= 5 !== 6 //estrictamente desigual
const resultado12= 5 != '5' // no estrictamente desigual
// console.log(resultado2);

//operadores logicos

//or = ||, and &&, not !

//Or
// un resultado true pueden ser strings, numeros y objetos son evaluados como true, a excepcion de 0.
const resultadoOr= false || true // es igual a true / tomara al primer elemento que considere verdadero / siempre que haya un true retornara verdadero, si no hay true retornara false.


// And
const resultadoAnd= false && true // retorna false / siempre y cuando haya un resultado false, va a retornar false/ solo retorna true cuando todos los valores son true.

// Not
const resultadoNot= !true // retorna false / retorna el opuesto del valor.
