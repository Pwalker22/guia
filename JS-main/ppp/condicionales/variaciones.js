"use strict"
let calificacion;
calificacion = 3,0;
let mensaje;
mensaje ="";
switch (true){
case calificasion >= 0 && calificacion <= 2.9:
    //template string
    mensaje =`insuficiente la calificacion: ${calificacion}`;
    break;
case calificacion >= 3.0 && califiacion <= 3.5:
    //template string
    mensaje =`regular la calificacion: ${calificacion}`;
    break;
case calificacion >= 3.6 && califiacion <= 4.0:
    //template string  
    mensaje =`bien la calificacion: ${calificacion}`;
    break
case calificacion >=4.1 && califiacion <= 4.5 :
    //template string
    mensaje =`muy bien calificacion: ${calificacion}`;
    break
case calificacion >=4.6 && califiacion <= 5:
    //template string
    mensaje =`excelente calificacion: ${calificacion}`;
    break;
default:
    mensaje = `la calificacion no puede ser procesada: ${calificacion}`;
    break;
}
console.log(mensaje);