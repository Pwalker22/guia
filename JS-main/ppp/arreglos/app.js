"use strict";
const miarreglo = [];
letmiarreglo = [2,4,2,5,45,true,`78`,"hola mundo"];
let miarreglo2=
miarreglo.push(56);
//miarreglo = [2,4,2,5,45,true,`78`,"hola mundo"];
for(let i=0;i<miarreglo.length;i++){
    console.log(miarreglo[i]);

}
//variaciones del for 
let j;
for(let j of miarreglo2){
   // console.log(j);
}

for(let j of miarreglo2){
    // console.log(j);
 }

 miarreglo2.foreach((e)=>{
    console.log(e);
 });

 miarreglo2.foreach(function(e){
    console.log(e);
 });