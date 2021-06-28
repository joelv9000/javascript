/*1. Programa que pida dos numeros y nos diga cual es el mayor, el menor y si son iguales
2. PLUS: Si los numeros no son un número o son menores o iguales a cero, nos vuelva a pedir*/

var num1=parseInt(prompt("dame  un numero"));
var num2=parseInt(prompt("dame un numero"));

if(num1==num2){
    document.write(`<h1> el ${num1} es igual al ${num2}</h1>`);
} else if (num1>num2){
    document.write(`<h1>el ${num1} es mayor que ${num2}</h1>`);
} else {
    document.write(`<h1>El ${num1} es menor que${num2}</h1>`);
}







