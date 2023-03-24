const noticiasGrande =document.querySelector('.noticias-grande');
const noticiasPunto =document.querySelectorAll('.noticias-punto');

noticiasPunto.forEach((cadaPunto, i)=> {
    noticiasPunto[i].addEventListener('click', ()=>{
        let posicion= i;
        let operacion=posicion*(-25);
        noticiasGrande.style.transform=`translateX(${operacion}%)`;
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
                if(posicionDep===3)
                {
                    posicionDep=0;
                }else{
        posicionDep++;
        }
        
        operacionDep=posicionDep*(-25);
        noticiasGrande.style.transform=`translateX(${operacionDep}%)`;
        noticiasPunto.forEach((cadaPunto,j)=>{
            noticiasPunto[j].classList.remove('activo');
        })
        noticiasPunto[posicionDep].classList.add('activo');

            },3000)
        }
}


carrouselAutoDep();