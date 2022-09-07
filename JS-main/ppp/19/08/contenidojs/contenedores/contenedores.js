"use strict";
/*
contenedores 
*/
/*var var1 = 23; //ambito global
let var2 = 12;// amibto local
const IVA_1 = 19; // ambito constante

var var1 = "hola mundo";

console.log(var1);
if(true){
    var var1 = false;
}
console.log(var1);*/

let num1;
let num2;
let suma;
suma = 0;

num1=parseFloat (prompt("introduzca un mumero")); //cambiar la cadena a numero
num2= prompt("introduzca un mumero");

suma = num1+ parseFloat(num2);
console.info("La suma es: "+suma);
alert("La suma es:"+suma);