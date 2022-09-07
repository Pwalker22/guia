import { validatedString,validatedAverage }  from "./validate.js";
import { pintarcard,agregarEstudiante } from "./pintar.js";

const btnAgregar = document.querySelector("#btn");
const btnmostrar = document.querySelector("#btnMostrar");

//propiedad y .addEventListener
btnAgregar.addEventListener("click",() =>{
    const nombre = document.querySelector("#nombre").value;
    const apellido = document.querySelector("#apellido").value;
    const promedio = document.querySelector("#promedio").value;
    const opcion = document.querySelector("#opcion").value;
    if (validatedString(nombre) && validatedString(apellido) && opcion != "0"){
        if  (isNaN(parseFloat(promedio)) && (validatedAverage(promedio))){
            console.log("validado");
            agregarEstudiante(nombre,apellido,promedio);
        }else{
            modaAlerta("error de promedio");
            console.log("error promedio");
        }
    }else{
        modaAlerta("error de datos");
        console.log("error de datos");
    }



});
btnMostrar.addEventListener("click", function (){
    pintarcard("ESTUDIANTE");
});

function modaAlerta(cadena){
    const alerta = document.createElement("div");
    const texto = document.createElement("p");
    texto.setAttribute("class","textAlerta");
    alerta.setAttribute("id","alerta");
    alerta.setAttribute("class","alerta");
    texto  .innerHTML =`<strong>${cadena}</strong>`;
    alerta.appendChild(texto);
    document.body.appendChild(alerta);
    alerta.onclick = function(){
        document.getElementById("alerta").remove();
    }

}
