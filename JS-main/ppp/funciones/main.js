"use strict";
//funcion clasica en js
function nombrefuncion(/**recibo parametros */){
    /**cuerpo de la funcion */
    return 0;
}
//inovacion de la funcion
//nombre de la funcion();
function suma(num1,num2){
    return num1 + num2;
}
let result= 0;
result= suma(4,12);
console.log(result);

//funcion tipo flecha
const resta =(num1=1,num2=1) => {
    return num1 - num2;
}

console.log(resta(12));