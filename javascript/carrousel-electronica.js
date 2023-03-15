const electronicaGrande =document.querySelector('.electronica-grande');
const electronicaPunto =document.querySelectorAll('.electronica-punto');
const electronicaTitle=document.querySelector('.electronica-info-h2');
const electronicaText=document.querySelector('.electronica-info-text');


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


let stringCarreras=`<h1 class="titulo-planes">Planes de estudio y sus principales cambios</h1>

<div class="electronica-container">
    <div class="electronica-carrousel">
        <div class="electronica-grande">
            <img src="Img/ING. ELECTRONICA/1.jpg" alt="Imagen 1" class="img">
            <img src="Img/ING. ELECTRONICA/2.jpg" alt="Imagen 2" class="img">
            <img src="Img/ING. ELECTRONICA/3.jpg" alt="Imagen 2" class="img">
            <img src="Img/ING. ELECTRONICA/4.jpg" alt="Imagen 2" class="img">
            <img src="Img/ING. ELECTRONICA/5.jpg" alt="Imagen 2" class="img">
        </div>

        <ul class="electronica-puntos">
            <li class="electronica-punto activo"></li>
            <li class="electronica-punto"></li>
            <li class="electronica-punto"></li>
            <li class="electronica-punto"></li>
            <li class="electronica-punto"></li>
        </ul>
    </div>
    <div class="electronica-info">
        <h2 class="electronica-info-h2">Becas Estratégicas Manuel Belgrano</h2>
        <h3 class="electronica-info-h3">Convocatoria 2023</h3>
        <p class="electronica-info-text">
            Estas becas tienen como objetivo promover el ingreso, la continuidad y la graduación de
            estudiantes en estas disciplinas centrales para el desarrollo económico y social de nuestro
            país. Inscripción para los inscriptos en 2022: Desde el <span class="resaltar">1 de febrero
                hasta el 22 de febrero</span>.
            Inscripción por primera vez: Desde el<span class="resaltar"> 22 de febrero hasta el 31 de
                marzo</span>.

        </p>
    

    </div>
</div>";`