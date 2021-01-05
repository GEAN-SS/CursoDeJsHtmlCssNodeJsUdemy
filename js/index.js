//seccion 15 JAVASCRIPT (Mas tipos de variables / Objetos / arreglos)

// la direccion de la carpeta es C:\Users\Gerardo Sarmiento\github\CursoDeJsHtmlCssNodeJsUdemy\js>
console.log('Hola Mundo');
//tipos de datos
//String: cadena de caracteres. 'a' 'hola' 'hola mundo 34' "a" "hola" "hola mundo 34"
//Boolean: solo da true o false.
//Null: es nulo, la variable esta vacia.
//Number: cualquier numero en JAVASCRIPT 1, 23, 234.
//Undefined: una variable que no ha sido definida.
//Object; un objeto.

//definicion de variables
//var: es algo que se define al inicio de las definiciones de avriables, pero no es aconsejable usarla ya que no es tan util como en otros lengiajes, hay que evitar de usarla lo mas posible
//let : es una variables que vamos a poder definir y usarla mas adelante sin saber que valor contien esta
//const: definimos variables de sólo lectura (no confundir con inmutables), esto quiere decir que, cuando asignamos una variable, el nombre de esta va estar asignada a un puntero en memoria, el cual no puede ser sobreescrito o reasignado.


//var miPrimeraVariable= 'lala'

let miPrimeraVariable= 'Mi Primera Variable!'
// console.log(miPrimeraVariable);

//cambiamo el valor de la variable
miPrimeraVariable= 'Esto ha cambiado'
// console.log(miPrimeraVariable);
//el cambiar el valor de una variables se conoce como Mutabilidad

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

//Objeto
//es una agrupacion de datos y estos datos hacen sentido entre si

//objeto vacio
const miPrimerObjeto= {}

//obajeto
//los objetos no tienen variables, tienen propiedades
const miObjeto= {
  unNumero:12,
  unString: 'Esta cadena de caracteres',
  unaCondicion: true,
}
// console.log(miObjeto);
//en caso de que queramos escribir una propiedad y no un objeto completo, escribimos un punto seguido del nombre de la propiedad
// console.log(miObjeto.unNumero);

//Arreglo
//Nota, una lista es un subconjunto de los arrays, ya que almacenan datos pero estos deben ser de un mismo tipos
//asi que si los datos son iguales una lista, si son diferentes es un arreglo
const arrVacio = []
const arr= [1, 2, 'hola', 'mundo', miObjeto]
// console.log(arrVacio);

//push agraga un elemneto al arreglo
// arr.push(5)

arrVacio.push(1);
arrVacio.push(2);
arrVacio.push(3);
arrVacio.push('hola');
//No solo acepta valores primitivos, tambien acepta variables ya definidas
arrVacio.push(miPrimeraVariable);
console.log(arrVacio);
