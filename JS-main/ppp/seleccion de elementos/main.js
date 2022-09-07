"use strict";
//seleccionar por id
const parrafo1 = document.getElementById("parrafo1");
console.log("parrafo1");
//seleccion por atributo name
let nameparrafo = document.getElementById("parrafo2");
//console.log(nameparrafo);
//seleccion por class
let elemento = document.getElementsByClassName("parra2");
//console.log(elemento);
//query selector por id #
const parrafo = document.querySelector("#parrafo1");
const elementetiqueta = document.querySelector("h1");
const elemetclass = document.querySelector(".ejemplo");

//seleccionando todos los elmentos p
const todosp = document.querySelectorAll("P");
//console.log(todosp);
/*

function print(){
    const valor = document.getElementById("edad").Value;
    alert("la edad es:"+valor);
}*/

const print =() =>{
    const valor = document.getElementById("edad").Value;
    alert("la edad  es:"+valor)
}
