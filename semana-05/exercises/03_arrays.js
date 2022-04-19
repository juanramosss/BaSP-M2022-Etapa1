/* 3-a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
 "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
 mostrar por consola los meses 5 y 11 (utilizar console.log).
 */
var months = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];
console.log ("3-a: "+months[4]);
console.log (months[10]);

/* 3-b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).*/

 console.log("3-b: "+months.sort());

/* 3-c. Agregar un elemento al principio y al final del array (utilizar unshift y push).*/

var monthsNewArray = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];
monthsNewArray.unshift("Meses");
monthsNewArray.push("2022");
console.log("3-c: "+monthsNewArray);

/* 3-d. Quitar un elemento del principio y del final del array (utilizar shift y pop).*/

monthsNewArray.shift();
monthsNewArray.pop();
console.log("3-d: "+monthsNewArray);

/* 3-e. Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
*/
var stringMonths = monthsNewArray.join("-");
console.log("3-e: "+stringMonths);

/* 3-f. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).*/

var season = monthsNewArray.slice(4, 11);
console.log("3-f: "+season);

