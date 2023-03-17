const electronicaGrande =document.querySelector('.electronica-grande');
const electronicaPunto =document.querySelectorAll('.electronica-punto');
const electronicaTitle=document.querySelector('.electronica-info-h2');
const electronicaText=document.querySelector('.electronica-info-text');
const carrerasContainer=document.getElementById('carreras');
const electronicaTitles=["Beca Manuel Belgrano", "Beca Bienestar","Beca Ceit","Beca progresar"];
const electronicaTexts=[`Estas becas tienen como objetivo promover el ingreso, la continuidad y la graduación de estudiantes en estas disciplinas centrales para el desarrollo económico y social de nuestro país. Inscripción para los inscriptos en 2022: Desde el <span class="resaltar">1 de febrero hasta el 22 de febrero</span>. Inscripción por primera vez: Desde el <span class="resaltar"> 22 de febrero hasta el 31 de marzo</span>.`, "Las becas de bienestar consisten en: Becas de servicio, Becas de ayuda economica y becas de ----", "Las becas del ceit son una ayuda que brinca el centro de estudiantes para comprar los apuntes que los estudiantes necesitan", "La beca random es la beca random"];


electronicaPunto.forEach((cadaPunto, i)=> {
    electronicaPunto[i].addEventListener('click', ()=>{
        let posicion= i;
        let operacion=posicion*(-100/5);
        electronicaGrande.style.transform=`translateX(${operacion}%)`;
        electronicaTitle.innerHTML=electronicaTitles[i];
        electronicaText.innerHTML=electronicaTexts[i];


        electronicaPunto.forEach((cadaPunto,i)=>{
            electronicaPunto[i].classList.remove('activo');
        })
        electronicaPunto[i].classList.add('activo');
    })
})
let stringCarreras='';

for(carrera of datosCarreras.carreras)
{
stringCarreras+=`<h1 class="titulo-planes">Planes de estudio y sus principales cambios</h1>

<div class="${carrera.carrera}-container">
    <div class="${carrera.carrera}-carrousel">
        <div class="${carrera.carrera}-grande">
            <img src="Img/ing. ${carrera.carrera}/1.jpg" alt="Imagen informativa 1" class="img">
            <img src="Img/ing. ${carrera.carrera}/2.jpg" alt="Imagen informativa 2" class="img">
            <img src="Img/ing. ${carrera.carrera}/3.jpg" alt="Imagen informativa 3" class="img">
            <img src="Img/ing. ${carrera.carrera}/4.jpg" alt="Imagen informativa 4" class="img">
            <img src="Img/ing. ${carrera.carrera}/5.jpg" alt="Imagen informativa 5" class="img">
        </div>

        <ul class="${carrera.carrera}-puntos">
            <li class="${carrera.carrera}-punto activo"></li>
            <li class="${carrera.carrera}-punto"></li>
            <li class="${carrera.carrera}-punto"></li>
            <li class="${carrera.carrera}-punto"></li>
            <li class="${carrera.carrera}-punto"></li>
        </ul>
    </div>
    <div class="${carrera.carrera}-info">
        <h2 class="${carrera.carrera}-info-h2">${carrera.titulo}</h2>
        <h3 class="${carrera.carrera}-info-h3">${carrera.subtitulo}</h3>
        <p class="${carrera.carrera}-info-text">${carrera.descripcion}
        </p>
    </div>
</div>";`
}
console.log(stringCarreras);
carrerasContainer.innerHTML=stringCarreras;