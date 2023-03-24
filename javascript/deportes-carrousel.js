const deportesGrande =document.querySelector('.deportes-grande');
const deportesPunto =document.querySelectorAll('.deportes-punto');

deportesPunto.forEach((cadaPunto, i)=> {
    deportesPunto[i].addEventListener('click', ()=>{
        let posicion= i;
        let operacion=posicion*(-25);
        deportesGrande.style.transform=`translateX(${operacion}%)`;
        deportesPunto.forEach((cadaPunto,i)=>{
            deportesPunto[i].classList.remove('activo');
        })
        deportesPunto[i].classList.add('activo');
    })
})
    let jD=0;
    let posicionDep=jD; 
    let operacionDep;
    let noEntiendoDep;
function carrouselAutoDep()
{
    deportesPunto.forEach((cadaPunto, i)=> {
    deportesPunto[i].addEventListener('click', ()=>{
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
        deportesGrande.style.transform=`translateX(${operacionDep}%)`;
        deportesPunto.forEach((cadaPunto,j)=>{
            deportesPunto[j].classList.remove('activo');
        })
        deportesPunto[posicionDep].classList.add('activo');

            },3000)
        }
}


carrouselAutoDep();