/* 1-a. Crear dos variables numéricas y utilizar el operador 
suma para guardar el valor de la suma de ambos números en una 3er variable.
*/
var num1 = 5;
var num2 = 10;
var sum = num1 + num2;
console.log("The addition of these numbers results in: " + sum);


/* 1-b. Crear dos variables de tipo String 
y concatenarlas guardando el resultado en una 3er variable.
*/
var myName  = 'Juan';
var mySrname = 'Ramos';
var myFullName = myName + " " + mySrname;
console.log ("Hello, are you " + myFullName + "?");
//o quizas deberia ser de esta otra forma 
var myFullName2 = myName + mySrname;
console.log(myFullName2);


/* 1-c. Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) 
guardando el resultado de la suma en una 3er variable (utilizar length).
*/
var nombre = 'Juan';
var apellido = 'Ramos';
var caracteres = nombre.length + apellido.length;
console.log("Quantity of caracters is " + caracteres);

