const grande =document.querySelector('.grande');
const punto =document.querySelectorAll('.punto');
const title=document.querySelector('.intersection-h2');
const text=document.querySelector('.intersection-text');
const tarjetaLink1=document.getElementById('tarjeta-link-1');
const tarjetaLink2=document.getElementById('tarjeta-link-2');
let screen=window.innerWidth;

const titles=["Beca Manuel Belgrano", "Beca Bienestar","Beca Ceit","Beca progresar"];
const texts=[`Inscripción para los inscriptos en 2022: Desde el <span class="resaltar">1 de febrero hasta el 22 de febrero</span>. Inscripción por primera vez: Desde el <span class="resaltar"> 22 de febrero hasta el 31 de marzo</span>.`, "Las becas de bienestar consisten en: Becas de servicio, Becas de ayuda economica y becas de investigacion, para mas informacion sobre como anotarse click en el link de abajo", "Las becas del ceit son una ayuda que brinda el centro de estudiantes para comprar los apuntes que los estudiantes necesitan", "Ya están abiertas las inscripciones para el Progresar. Les compartimos las fechas, requisitos y como hacer para inscribirse."];
const tarjetaLinks1=["https://becasmanuelbelgrano.educacion.gob.ar/ingreso_postulantes.php","https://www.instagram.com/bienestar.utn/","#","https://becasprogresar.educacion.gob.ar/inicio_nivel_superior.php"];
const tarjetaLinks2=["https://www.argentina.gob.ar/educacion/becas/becas-manuel-belgrano","#","https://www.instagram.com/ceitutn/","https://www.argentina.gob.ar/educaci%C3%B3n/progresar"];

punto.forEach((cadaPunto, i)=> {
    punto[i].addEventListener('click', ()=>{
        let posicion= i;
        let operacion=posicion*(-25);
        grande.style.transform=`translateX(${operacion}%)`;
        title.innerHTML=titles[i];
        text.innerHTML=texts[i];
        tarjetaLink1.setAttribute('href',tarjetaLinks1[i]);
        tarjetaLink2.setAttribute('href', tarjetaLinks2[i]);
        

        punto.forEach((cadaPunto,i)=>{
            punto[i].classList.remove('activo');
        })
        punto[i].classList.add('activo');
    })
})

let j=0;
let posicion=j;
let operacion;
let noEntiendo;

function carrouselAuto()
{
        
    punto.forEach((cadaPunto, i)=> {
    punto[i].addEventListener('click', ()=>{
        clearInterval(noEntiendo);
        noEntiendo=null;
    })
})
        if(!noEntiendo)
        {
            noEntiendo=setInterval(()=>{
                if(posicion===3)
                {
                    posicion=0;
                }else{
        posicion++;
        }
        operacion=posicion*(-25);
        grande.style.transform=`translateX(${operacion}%)`;
        title.innerHTML=titles[posicion];
        text.innerHTML=texts[posicion];
        tarjetaLink1.setAttribute('href',tarjetaLinks1[posicion]);
        tarjetaLink2.setAttribute('href', tarjetaLinks2[posicion]);
        

        punto.forEach((cadaPunto,j)=>{
            punto[j].classList.remove('activo');
        })
        punto[posicion].classList.add('activo');

            },3000)
        }
}

if(screen>1000)
{
carrouselAuto();
}


let startingX, startingY, endingX, endingY;
let k=0;
operacion=0;
function touchstart(evt) {
    startingX = evt.touches[0].clientX;
    startingY = evt.touches[0].clientY;
}
function touchmove(evt) {

    endingX = evt.touches[0].clientX;
    endingY = evt.touches[0].clientY;
}
function touchend() {

    let touchDirection;
    if ( Math.abs(endingX - startingX) > Math.abs(endingY - startingY) ) {
        if ( endingX > startingX ){
            touchDirection = "ArrowRight";
            console.log(touchDirection);
            console.log(operacion);
        if(operacion<0) 
    {
        operacion+=25;
        console.log(operacion);
        k-=1;
        grande.style.transform=`translateX(${operacion}%)`;
        title.innerHTML=titles[k];
        text.innerHTML=texts[k];
        tarjetaLink1.setAttribute('href',tarjetaLinks1[k]);
        tarjetaLink2.setAttribute('href', tarjetaLinks2[k]);
            console.log(touchDirection);
            punto.forEach((cadaPunto, j)=> {
            punto.forEach((cadaPunto,j)=>{
                punto[j].classList.remove('activo');
            })
            j=k;
            console.log(j);
            punto[j].classList.add('activo');
        }
    )
}

            }
        else {
            touchDirection = "ArrowLeft";
            console.log(touchDirection);
    if(operacion>-75) 
    {
        operacion-=25;
        console.log(operacion);
        k+=1;
        grande.style.transform=`translateX(${operacion}%)`;
        title.innerHTML=titles[k];
        text.innerHTML=texts[k];
        tarjetaLink1.setAttribute('href',tarjetaLinks1[k]);
        tarjetaLink2.setAttribute('href', tarjetaLinks2[k]);
            console.log(touchDirection);
            punto.forEach((cadaPunto, j)=> {
                punto.forEach((cadaPunto,j)=>{
                    punto[j].classList.remove('activo');
                })
                j=k;
                console.log(j);
                punto[j].classList.add('activo');
            }
        )  
        }
        }

    } else {
        if ( endingY > startingY ) 
        {
            touchDirection = "ArrowDown";
            console.log(touchDirection);
        }
        else 
        {
            touchDirection = "ArrowUp";
            console.log(touchDirection);
        }
    }
}