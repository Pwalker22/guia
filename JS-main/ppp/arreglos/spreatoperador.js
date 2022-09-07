"use strict"
let miarreglo2=[];
for(let i=o; i<25; i++){
    miarreglo2[i]= i + 2;
}
console.log(miarreglo2);
// spread operator...
console.log(...miarreglo2);
//agregar elementos a un arreglo
miarreglo2.push(3,78,900,1200);
console.log(...miarreglo2);
 let miarreglo3 =[...miarreglo2, 34,88,3450]
 //console.log(...miarreglo2)
 let resultado = miarreglo2.concat(miarreglo3);
 //console.log(...resultado);
 let arreglofinal = [...miarreglo2,...miarreglo3,...resultado];
 //console.log(...arrglofinal);
 //propagacion en funciones

 let lenguajes = ["php","java", "js","ruby","c#", "c++"];
 const printlenguajes = (len1,len2,len3="assambler")
a => {
    console.log(...`***los lenguajes top***
                ${len1}- ${len2} - {len3} - {len4} ************`);
 }
 printlenguajes(...lenguajes,"cob1", `f#`);

