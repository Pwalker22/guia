"use strict"
let num1;
let num2;
num1 = 9;
num2 ="9";

if  (num1 < 0){

}else if(num1 > 0){
    if  ((num1 % 3 === 0) && (parseint(num2))>0){
        console.log("num1 es un multiplo de 3 y num2 > 0");
    }else{
        if(num1 % 2 ===0) console.log("num1 es multiplo de 2");
        

    }
}
//swicth
let opcion;
opcion = prompt("introdusca una opcion 1-4");

switch(opcion){
    case "1":
        alert("seleciono la opcion 1");
        break;
    case"2":
        alert("seleciono la opcion 2");
        break;
    case "3":
        alert("seleciono la opcion 3");
        break;
    case"4":
        alert("seleciono la opcion 4");
        break;
    default:
        alert("seleciono una opcion invalida");
        break;
}
