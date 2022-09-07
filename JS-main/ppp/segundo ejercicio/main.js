"use strict"

let num1;
let num2;
let suma = 0;

num1 = parsefloat(prompt("Introduzca un número: "));
num2 = parsefloat(prompt("Introduzca un número: "));

if (num1>=0 && num2>=0){
    suma = num1 + num2;
        alert("la suma de los dos numero es: " + suma);        
}
    else{
        alert("has insertado unn número negativo.");
    }