const cardsEstudiantes = document.querySelector
("#cardsEstudiantes");
const estudiantes = [];

const pintarcard = (tipo) =>{
    tipo = tipo.toUpperCase();
    const fragmento = document.createDocumentFragment();
    const templateEstudiante = document.querySelector("#templateEstudiante").Content;
    if (tipo ==="ESTUDIANTES"){
        for (let i of estudiantes){
           const cloneTemp = templateEstudiante.cloneNode(true);
           cloneTemp.querySelector("title-card").innerHTML = " <strong> DATOS DEL ESTUDIANTE </strong>"
           cloneTemp.querySelector("data-card").innerHTML  = `NOMBRES: ${i.nombre.toUppercase()}APELLIDOS: ${i.apellido.toUppercase()}`;
           cloneTemp.querySelector("text-promedio").innerHTML = `${i.promedio}`;
           cloneTemp.querySelector("text-aprobado").innerHTML = `${aprobar(i.promedio)}`;
           fragmento.appendChild(cloneTemp);
        }
    }
    cardsEstudiantes.appendChild(fragmento);
}
const aprobar = (nota) =>{
    let result = (nota >=3 && nota <=5) ? "APROBADO" : "REPROBADO";
    return result;
}

const agregarEstudiante = (name,lastname,avg)=>{
    let persona = { 
        nombre: name,
        apellido: lastname,
        promedio: avg
    };
    estudiantes.push(persona);

}

export { pintarcard,agregarEstudiante };