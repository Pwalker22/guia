"use strict";
//1.cadena a arreglo
let cadenadias = "lunes_martes_miercoles_jueves_viernes_sabado_domingo"
let miarreglo = cadenadias.split("_");
//console.log(miarreglo);
//2.buscar si no lom encuentra el valor devueleve un undefined
//funcion anonima()=>{} clasica function(){}
const result = miarreglo.find((e)=>e === "martes");
const index = miarreglo.findIndex((e)=> e ==="domingo")
console.log(index);

//3.comprueba si existe un elemento dentro de un array true o false
console.log(miarreglo.includes("vierenes"));
//4.filtrar elementos
miarreglo=[];
for(let i=0; i<25; i++){
    miarreglo[i]= i + 3;
}
console.log(miarreglo2);
const response = miarreglo2.filter((e) => e > 15);
console.log(response);

//map, some, every, reduce

