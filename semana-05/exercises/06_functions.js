/* 6-a. Crear una función suma que reciba dos valores numéricos y retorne el resultado.
 Ejecutar la función y guardar el resultado en una variable, 
 mostrando el valor de dicha variable en la consola del navegador.
*/

function suma(num1, num2){
    return (num1+num2);
}
var total = suma(5, 25);
console.log("6-a: "+ total);

/* 6-b. A la función suma anterior, agregarle una validación para controlar si alguno de los 
parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene
 error y retornar el valor NaN como resultado.
*/

function sumaValidation(num1, num2){
    if(isNaN(num1) || isNaN(num2)){
        alert("6-b: Please insert only numbers.")
        return NaN;
    }else{
        return (num1+num2);
    }
}
var totalValidated= sumaValidation('b',20);
console.log("6-b: "+ totalValidated);

/* 6-c. Crear una función validate integer que reciba un número como parámetro y 
devuelva verdadero si es un número entero.
*/

function validate(number){
    return Number.isInteger(number);
}
console.log("6-c. "+ validate(53));

/* 6-d. A la función suma del ejercicio 6b) agregarle una llamada que valide que 
los números sean enteros. En caso que haya decimales mostrar un alerta con el error 
y retorna el número convertido a entero (redondeado).
*/

function sumaDoubleValidation(num1, num2){
    if(isNaN(num1) || isNaN(num2)){
        alert("6-d: Please insert only numbers.");
        return NaN;
    }
    if(!Number.isInteger(num1) || !Number.isInteger(num2)){
        alert("6-d: Decimals not accepted.");
        return (Math.round(num1)+Math.round(num2));
    }
    
    return (num1+num2);
    
}
console.log('6-d: '+ sumaDoubleValidation(2.5, 10));

/* 6-e. Convertir la validación del ejercicio 6d) en una función separada y 
llamarla dentro de la función suma probando que todo siga funcionando igual.
*/

function noDecimal(number){
    if(!Number.isInteger(number)){
        alert("6-e: Decimals not accepted.");
        number = Math.round(number);
    }
    return number;
    
}
function ultimaSuma(num1, num2){
    if(isNaN(num1) || isNaN(num2)){
        alert("6-e: Please insert only numbers.");
        return NaN;
    }
    num1=noDecimal(num1);
    num2= noDecimal(num2);
    
    return (num1+num2);
    
}
console.log('6-e: ' + ultimaSuma(2.4, 10));


