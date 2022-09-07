//HTML
function notaspromedio(){
    promedio();
};
//mediante propiedad
const btnPropiedad = document.getElementById("btn2");
btnPropiedad.onclick = function(){
    promedio();
}
//metodo .addEventListener

const bntAdd = document.getElementById("btn3");
bntAdd.addEventListener("click", function(){
    promedio();

});

//metodo para el calculo del promedio

const promedio = () =>{
    let cantNotas = prompt("introduzca la cantidad de notas");
    if (!isNaN(parseInt(cantNotas))){
        let nota = 0;
        let sumaNotas = 0;
        for (let i=1; i <= cantNotas; i++) {
            nota = prompt("introduzca la nota no:"+i);
            sumaNotas += (parseFloat(nota));
        }
        let promedio = sumaNotas/cantNotas;
        alert("el promedio es:" + promedio.toFixed(1));
    }else{
        alert("el valor es invalido");
    }
    
}