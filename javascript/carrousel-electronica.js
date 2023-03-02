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


const mecanicaGrande =document.querySelector('.mecanica-grande');
const mecanicaPunto =document.querySelectorAll('.mecanica-punto');
const mecanicaTitle=document.querySelector('.mecanica-info-h2');
const mecanicaText=document.querySelector('.mecanica-info-text');


const mecanicaTitles=["Beca Manuel Belgrano", "Beca Bienestar","Beca Ceit","Beca progresar"];
const mecanicaTexts=[`Estas becas tienen como objetivo promover el ingreso, la continuidad y la graduación de estudiantes en estas disciplinas centrales para el desarrollo económico y social de nuestro país. Inscripción para los inscriptos en 2022: Desde el <span class="resaltar">1 de febrero hasta el 22 de febrero</span>. Inscripción por primera vez: Desde el <span class="resaltar"> 22 de febrero hasta el 31 de marzo</span>.`, "Las becas de bienestar consisten en: Becas de servicio, Becas de ayuda economica y becas de ----", "Las becas del ceit son una ayuda que brinca el centro de estudiantes para comprar los apuntes que los estudiantes necesitan", "La beca random es la beca random"];


mecanicaPunto.forEach((cadaPunto, i)=> {
    mecanicaPunto[i].addEventListener('click', ()=>{
        let posicion= i;
        let operacion=posicion*(-100/5);
        mecanicaGrande.style.transform=`translateX(${operacion}%)`;
        mecanicaTitle.innerHTML=mecanicaTitles[i];
        mecanicaText.innerHTML=mecanicaTexts[i];


        mecanicaPunto.forEach((cadaPunto,i)=>{
            mecanicaPunto[i].classList.remove('activo');
        })
        mecanicaPunto[i].classList.add('activo');
    })
})



const industrialGrande =document.querySelector('.industrial-grande');
const industrialPunto =document.querySelectorAll('.industrial-punto');
const industrialTitle=document.querySelector('.industrial-info-h2');
const industrialText=document.querySelector('.industrial-info-text');


const industrialTitles=["Beca Manuel Belgrano", "Beca Bienestar","Beca Ceit","Beca progresar"];
const industrialTexts=[`Estas becas tienen como objetivo promover el ingreso, la continuidad y la graduación de estudiantes en estas disciplinas centrales para el desarrollo económico y social de nuestro país. Inscripción para los inscriptos en 2022: Desde el <span class="resaltar">1 de febrero hasta el 22 de febrero</span>. Inscripción por primera vez: Desde el <span class="resaltar"> 22 de febrero hasta el 31 de marzo</span>.`, "Las becas de bienestar consisten en: Becas de servicio, Becas de ayuda economica y becas de ----", "Las becas del ceit son una ayuda que brinca el centro de estudiantes para comprar los apuntes que los estudiantes necesitan", "La beca random es la beca random"];


industrialPunto.forEach((cadaPunto, i)=> {
    industrialPunto[i].addEventListener('click', ()=>{
        let posicion= i;
        let operacion=posicion*(-100/5);
        industrialGrande.style.transform=`translateX(${operacion}%)`;
        industrialTitle.innerHTML=industrialTitles[i];
        industrialText.innerHTML=industrialTexts[i];



        industrialPunto.forEach((cadaPunto,i)=>{
            industrialPunto[i].classList.remove('activo');
        })
        industrialPunto[i].classList.add('activo');
    })
})



const quimicaGrande =document.querySelector('.quimica-grande');
const quimicaPunto =document.querySelectorAll('.quimica-punto');
const quimicaTitle=document.querySelector('.quimica-info-h2');
const quimicaText=document.querySelector('.quimica-info-text');


const quimicaTitles=["Beca Manuel Belgrano", "Beca Bienestar","Beca Ceit","Beca progresar"];
const quimicaTexts=[`Estas becas tienen como objetivo promover el ingreso, la continuidad y la graduación de estudiantes en estas disciplinas centrales para el desarrollo económico y social de nuestro país. Inscripción para los inscriptos en 2022: Desde el <span class="resaltar">1 de febrero hasta el 22 de febrero</span>. Inscripción por primera vez: Desde el <span class="resaltar"> 22 de febrero hasta el 31 de marzo</span>.`, "Las becas de bienestar consisten en: Becas de servicio, Becas de ayuda economica y becas de ----", "Las becas del ceit son una ayuda que brinca el centro de estudiantes para comprar los apuntes que los estudiantes necesitan", "La beca random es la beca random"];

quimicaPunto.forEach((cadaPunto, i)=> {
    quimicaPunto[i].addEventListener('click', ()=>{
        let posicion= i;
        let operacion=posicion*(-100/6);
        quimicaGrande.style.transform=`translateX(${operacion}%)`;
        quimicaTitle.innerHTML=quimicaTitles[i];
        quimicaText.innerHTML=quimicaTexts[i];

       

        quimicaPunto.forEach((cadaPunto,i)=>{
            quimicaPunto[i].classList.remove('activo');
        })
        quimicaPunto[i].classList.add('activo');
    })
})

const civilGrande =document.querySelector('.civil-grande');
const civilPunto =document.querySelectorAll('.civil-punto');
const civilTitle=document.querySelector('.civil-info-h2');
const civilText=document.querySelector('.civil-info-text');


const civilTitles=["Beca Manuel Belgrano", "Beca Bienestar","Beca Ceit","Beca progresar"];
const civilTexts=[`Estas becas tienen como objetivo promover el ingreso, la continuidad y la graduación de estudiantes en estas disciplinas centrales para el desarrollo económico y social de nuestro país. Inscripción para los inscriptos en 2022: Desde el <span class="resaltar">1 de febrero hasta el 22 de febrero</span>. Inscripción por primera vez: Desde el <span class="resaltar"> 22 de febrero hasta el 31 de marzo</span>.`, "Las becas de bienestar consisten en: Becas de servicio, Becas de ayuda economica y becas de ----", "Las becas del ceit son una ayuda que brinca el centro de estudiantes para comprar los apuntes que los estudiantes necesitan", "La beca random es la beca random"];


civilPunto.forEach((cadaPunto, i)=> {
    civilPunto[i].addEventListener('click', ()=>{
        let posicion= i;
        let operacion=posicion*(-100/6);
        civilGrande.style.transform=`translateX(${operacion}%)`;
        civilTitle.innerHTML=civilTitles[i];
        civilText.innerHTML=civilTexts[i];

        

        civilPunto.forEach((cadaPunto,i)=>{
            civilPunto[i].classList.remove('activo');
        })
        civilPunto[i].classList.add('activo');
    })
})

const electricaGrande =document.querySelector('.electrica-grande');
const electricaPunto =document.querySelectorAll('.electrica-punto');
const electricaTitle=document.querySelector('.electrica-info-h2');
const electricaText=document.querySelector('.electrica-info-text');


const electricaTitles=["Beca Manuel Belgrano", "Beca Bienestar","Beca Ceit","Beca progresar"];
const electricaTexts=[`Estas becas tienen como objetivo promover el ingreso, la continuidad y la graduación de estudiantes en estas disciplinas centrales para el desarrollo económico y social de nuestro país. Inscripción para los inscriptos en 2022: Desde el <span class="resaltar">1 de febrero hasta el 22 de febrero</span>. Inscripción por primera vez: Desde el <span class="resaltar"> 22 de febrero hasta el 31 de marzo</span>.`, "Las becas de bienestar consisten en: Becas de servicio, Becas de ayuda economica y becas de ----", "Las becas del ceit son una ayuda que brinca el centro de estudiantes para comprar los apuntes que los estudiantes necesitan", "La beca random es la beca random"];
const tarjetaLinks2=["https://becasmanuelbelgrano.educacion.gob.ar/ingreso_postulantes.php","https://www.instagram.com/bienestar.utn/","https://www.instagram.com/ceitutn/","#"];
const tarjetaLinks1=[];

electricaPunto.forEach((cadaPunto, i)=> {
    electricaPunto[i].addEventListener('click', ()=>{
        let posicion= i;
        let operacion=posicion*(-100/5);
        electricaGrande.style.transform=`translateX(${operacion}%)`;
        electricaTitle.innerHTML=electricaTitles[i];
        electricaText.innerHTML=electricaTexts[i];

     

        electricaPunto.forEach((cadaPunto,i)=>{
            electricaPunto[i].classList.remove('activo');
        })
        electricaPunto[i].classList.add('activo');
    })
})