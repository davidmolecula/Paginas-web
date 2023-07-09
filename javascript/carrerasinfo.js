//<h1>$ {titulo}</h1>
const carrerasInfo=document.getElementById('CarrerasInfo');

let titulos= ["civil", "electrica", "electronica", "quimica", "industrial", "mecanica"];

let var2='';

let carreras=[{
    carrera:"civil",
    duracion:6,
    tituloIntermedio:"no tiene"
} , {
    carrera:"electrica",
    duracion:5,
    tituloIntermedio:"Tecnico Electrico"
},{
    carrera:"electronica",
    duracion:6,
    tituloIntermedio:"Tecnico Electronico"
},{
    carrera:"quimica",
    duracion:5,
    tituloIntermedio:"Tecnico Quimico"
},{
    carrera:"industrial",
    duracion:5,
    tituloIntermedio:"Tecnico en Gestion Industrial"
},{
    carrera:"mecanica",
    duracion:5,
    tituloIntermedio:"Tecnico Mecanico"
}]




for(let titulo of titulos) {
    var2+=`<h1>${titulo}</h1>`;
}
carrerasInfo.innerHTML=var2;