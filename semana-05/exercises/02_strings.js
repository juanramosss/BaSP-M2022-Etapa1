/*Crear una variable de tipo string con al menos 
10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).*/

var minuscula = 'ornitorrinco';
var mayuscula = minuscula.toUpperCase();
console.log(mayuscula);

/*Crear una variable de tipo string con al menos 10 caracteres y 
generar un nuevo string con los primeros 5 caracteres 
guardando el resultado en una nueva variable (utilizar substring)*/

var movie = 'interstellar';
var shortName = movie.substring(0,5);
console.log("The movie " + movie + " will appear as " + shortName);

/*Crear una variable de tipo string con al menos 10 caracteres
 y generar un nuevo string con los últimos 3 caracteres
  guardando el resultado en una nueva variable (utilizar substring).
*/

var palabra = 'estereotipo';
var ultimasLetras = palabra.substring(8);
console.log("The last three letters of the word " + palabra + " are " + ultimasLetras);
