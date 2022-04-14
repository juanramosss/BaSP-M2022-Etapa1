/* 1-a. Crear dos variables numéricas y utilizar el operador 
suma para guardar el valor de la suma de ambos números en una 3er variable.
*/
var numero1 = 5;
var numero2 = 10;
var suma = numero1 + numero2;
console.log("La suma de los numeros resula en: " + suma);


/* 1-b. Crear dos variables de tipo String 
y concatenarlas guardando el resultado en una 3er variable.
*/
var nombre = 'Juan';
var apellido = 'Ramos';
var nombreCompleto = nombre + " " + apellido;
console.log ("Hola, es usted " + nombreCompleto + "?");
//o quizas deberia ser de esta otra forma 
var fullName = nombre + apellido;
console.log(fullName);


/*Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) 
guardando el resultado de la suma en una 3er variable (utilizar length).
*/
var nombre = 'Juan';
var apellido = 'Ramos';
var caracteres = nombre.length + apellido.length;
console.log("Cantidad de caracteres: " + caracteres);

