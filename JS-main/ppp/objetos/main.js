"use strict";
//1. objeto literal de javascript
let cristian = {
    nombres: "cristian",
    apellidos: "guasca",
    edad: 17,
    altura: 1.63,
    peso: 65.2,
    caminar: function (){
        return "yo camino";
    },
    hablar: function (){
        return "yo hablo";
    }
}


//console.log(cristian);
//console.log(cristian.nombres,cristian.apellidos);
//console.log(cristian.caminar());
/* no se puede
for (i of cristian){
    console.log(i);
}*/
Object.values(cristian).forEach((e) => console.log(e));
/**
 * tarea iterar el objeto for
 */