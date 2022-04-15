/* 2-a. 
Crear una variable de tipo string con al menos 
10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
*/

var minuscula = 'ornitorrinco';
var mayuscula = minuscula.toUpperCase();
console.log(mayuscula);

/* 2-b. 
Crear una variable de tipo string con al menos 10 caracteres y 
generar un nuevo string con los primeros 5 caracteres 
guardando el resultado en una nueva variable (utilizar substring)
*/

var movie = 'interstellar';
var shortName = movie.substring(0,5);
console.log("The movie " + movie + " will appear as " + shortName);

/* 2-c. 
Crear una variable de tipo string con al menos 10 caracteres
y generar un nuevo string con los últimos 3 caracteres
guardando el resultado en una nueva variable (utilizar substring).
*/

var palabra = 'estereotipo';
var ultimasLetras = palabra.substring(8);
console.log("The last three letters of the word " + palabra + " are " + ultimasLetras);

/* 2-d. 
Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la
primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva
variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
*/

var raro = 'iRREALMENTE';
var primerLetra = raro.substring(0,1);
var agrandar = primerLetra.toUpperCase();
var restoDeRaro = raro.substring(1);
var achicar = restoDeRaro.toLowerCase();
var resultado = agrandar + achicar;
console.log("Por lo general escribimos asi: " + resultado + " y no asi: " + raro);

/* 2-e. 
Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. 
Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
*/

var estas = 'Hola, estas?';
var espacio = estas.indexOf(" ");
console.log("El espacio en blanco esta en el lugar numero: " + (espacio+1));

/* 2-f.
Crear una variable de tipo string con al menos 2 palabras largas 
(10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios 
anteriores para generar un nuevo string que tenga la primera letra de ambas palabras 
en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
*/

var jugador = 'aleXANDer arNOld';
var espacio = jugador.indexOf(" ");
var bienEscrito = jugador.substring(0,1).toUpperCase() + jugador.substring(1,espacio+1).toLowerCase() + jugador.substring(espacio+1,espacio+2).toUpperCase() + jugador.substring(espacio+2).toLowerCase();

console.log(bienEscrito);

