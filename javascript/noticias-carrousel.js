const noticiasGrande =document.querySelector('.noticias-grande');
const noticiasPunto =document.querySelectorAll('.noticias-punto');
const tituloArray=document.querySelector('.titulo-array');

const ArrayDeTitulos=["Renovamos el pasillo de la memoria", "¡Feliz comienzo de cursada para todos!"];

noticiasPunto.forEach((cadaPunto, i)=> {
    noticiasPunto[i].addEventListener('click', ()=>{
        let posicion= i;
        let operacion=posicion*(-50);
        noticiasGrande.style.transform=`translateX(${operacion}%)`;
        tituloArray.innerHTML=ArrayDeTitulos[i];
        noticiasPunto.forEach((cadaPunto,i)=>{
            noticiasPunto[i].classList.remove('activo');
        })
        noticiasPunto[i].classList.add('activo');
    })
})
    let jD=0;
    let posicionDep=jD; 
    let operacionDep;
    let noEntiendoDep;
function carrouselAutoDep()
{
    noticiasPunto.forEach((cadaPunto, i)=> {
    noticiasPunto[i].addEventListener('click', ()=>{
        clearInterval(noEntiendoDep);
        noEntiendoDep=null;
    })
})
        if(!noEntiendoDep)
        {
            noEntiendoDep=setInterval(()=>{
                if(posicionDep===1)
                {
                    posicionDep=0;
                }else{
        posicionDep++;
        }
        
        operacionDep=posicionDep*(-50);
        noticiasGrande.style.transform=`translateX(${operacionDep}%)`;
        tituloArray.innerHTML=ArrayDeTitulos[posicionDep];
        noticiasPunto.forEach((cadaPunto,j)=>{
            noticiasPunto[j].classList.remove('activo');
        })
        noticiasPunto[posicionDep].classList.add('activo');

            },5000)
        }
}


carrouselAutoDep();