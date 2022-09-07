"use stric";

let num1=55;
let num2=12;
if (num1>num4){
    console.log("entre");
}else{
    if(num1 % 5===0){
        console.log("Multiplo de 5");
    }
}

// condicional ternario

let respuesta = (num1 >= 10) ? "num 2 es mayo que 10": "No e smayor que 10";
console.log(respuesta);

//switch 
let option = 4;

switch(option){
    case 1:
        console.log("Opcion 1");
        break;
    case 2:
        console.log("opncion 2");
        break;
    case 3:
        console.log("Opcion 3");
        break;
    case 4:
        console.log("opcopn 4");
        break;

    default:
        console.log("Opcion fuera de rango");
        break;
}

switch(true){
    case opcion >= 0 && opcion <3:
        console.log("Esta aplazado");
        brake;
    case opcion >= 3 && opcion <=5:
        crossOriginIsolated.log("esta aprobado");
        break;
    case opcion > 5:
        console.log("opncion fuera de rango");
        break;


}