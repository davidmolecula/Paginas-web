const grande =document.querySelector('.grande');
const punto =document.querySelectorAll('.punto');
const title=document.querySelector('.intersection-h2');
const text=document.querySelector('.intersection-text');
const tarjetaLink1=document.getElementById('tarjeta-link-1');
const tarjetaLink2=document.getElementById('tarjeta-link-2');

const titles=["Beca Manuel Belgrano", "Beca Bienestar","Beca Ceit","Beca progresar"];
const texts=[`Estas becas tienen como objetivo promover el ingreso, la continuidad y la graduación de estudiantes en estas disciplinas centrales para el desarrollo económico y social de nuestro país. Inscripción para los inscriptos en 2022: Desde el <span class="resaltar">1 de febrero hasta el 22 de febrero</span>. Inscripción por primera vez: Desde el <span class="resaltar"> 22 de febrero hasta el 31 de marzo</span>.`, "Las becas de bienestar consisten en: Becas de servicio, Becas de ayuda economica y becas de ----", "Las becas del ceit son una ayuda que brinca el centro de estudiantes para comprar los apuntes que los estudiantes necesitan", "La beca random es la beca random"];
const tarjetaLinks2=["https://becasmanuelbelgrano.educacion.gob.ar/ingreso_postulantes.php","https://www.instagram.com/bienestar.utn/","https://www.instagram.com/ceitutn/","#"];
const tarjetaLinks1=[];

punto.forEach((cadaPunto, i)=> {
    punto[i].addEventListener('click', ()=>{
        let posicion= i;
        let operacion=posicion*(-25);
        grande.style.transform=`translateX(${operacion}%)`;
        title.innerHTML=titles[i];
        text.innerHTML=texts[i];
        tarjetaLink2.setAttribute('href',tarjetaLinks2[i]);
        console.log(tarjetaLink1);

        punto.forEach((cadaPunto,i)=>{
            punto[i].classList.remove('activo');
        })
        punto[i].classList.add('activo');
    })
})