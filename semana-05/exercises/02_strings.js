/* 2-a. 
Crear una variable de tipo string con al menos 
10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
*/

var lower = 'ornitorrinco';
var upper = lower.toUpperCase();
console.log("2-a: "+upper);

/* 2-b. 
Crear una variable de tipo string con al menos 10 caracteres y 
generar un nuevo string con los primeros 5 caracteres 
guardando el resultado en una nueva variable (utilizar substring)
*/

var movie = 'interstellar';
var shortName = movie.substring(0,5);
console.log("2-b: The movie " + movie + " will appear as " + shortName);

/* 2-c. 
Crear una variable de tipo string con al menos 10 caracteres
y generar un nuevo string con los últimos 3 caracteres
guardando el resultado en una nueva variable (utilizar substring).
*/

var word = 'estereotipo';
var lastLetters = word.substring(8);
console.log("2-c: The last three letters of the word " + word + " are " + lastLetters);

/* 2-d. 
Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la
primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva
variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
*/

var weird = 'iRREALMENTE';
var firstLetter = weird.substring(0,1);
var reSize = firstLetter.toUpperCase();
var notWeird = weird.substring(1);
var downSize = notWeird.toLowerCase();
var newWord = reSize + downSize;
console.log("2-d: In general, we write like this '" + newWord + "' and not like this '" + weird + "'");

/* 2-e. 
Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. 
Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
*/

var youThere = 'Hello, you there?';
var spaceBar = youThere.indexOf(" ");
console.log("2-e: The white space in the string '" + youThere + "' is in the position number: " + (spaceBar+1));

/* 2-f.
Crear una variable de tipo string con al menos 2 palabras largas 
(10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios 
anteriores para generar un nuevo string que tenga la primera letra de ambas palabras 
en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
*/

var playerName = 'aleXANDer arNOld';
var space = playerName.indexOf(" ");
var wellWritten = playerName.substring(0,1).toUpperCase() + playerName.substring(1,space+1).toLowerCase();
wellWritten = wellWritten + playerName.substring(space+1,space+2).toUpperCase() + playerName.substring(space+2).toLowerCase(); 

console.log("2-f: "+wellWritten);

