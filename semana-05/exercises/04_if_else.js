/* 4-a. Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es 
mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”.
*/
randomNumber = Math.random();
if (randomNumber >= 0.5){
    alert("4-a: Greater than 0,5");

}else{
    alert("4-a: Lower than 0,5");
}

/* 4-b. Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
“Bebe” si la edad es menor a 2 años;
“Niño” si la edad es entre 2 y 12 años;
“Adolescente” entre 13 y 19 años;
“Joven” entre 20 y 30 años;
“Adulto” entre 31 y 60 años;
“Adulto mayor” entre 61 y 75 años;
“Anciano” si es mayor a 75 años.
*/

var age = Math.random() * 100;
if (age<2){
    alert("4-b: Baby");
}else if(age>1 && age<13){
    alert("4-b: Kid");
}else if(age>12 && age<20){
    alert("4-b: Teen");
}else if(age>19 && age<31){
    alert("4-b: Young adult");
}else if(age>30 && age<61){
    alert("4-b: Adult");
}else if(age>60 && age<76){
    alert("4-b: Grown Adult");
}else{
    alert("4-b: Elder");
}
