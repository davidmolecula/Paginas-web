const newsGrande =document.querySelector('.news-grande');
const newsPunto =document.querySelectorAll('.news-punto');
const tituloArray=document.querySelector('.titulo-array');
const newsLink=document.getElementById('new-s-link');

const ArrayDeTitulos=["Renovamos el pasillo de la memoria", "¡Feliz comienzo de cursada para todos!"];

newsPunto.forEach((cadaPunto, i)=> {
    newsPunto[i].addEventListener('click', ()=>{
        let posicion= i;
        let operacion=posicion*(-50);
        newsGrande.style.transform=`translateX(${operacion}%)`;
        tituloArray.innerHTML=ArrayDeTitulos[i];
        newsLink.href=`noticias.html?id=${newsCardData.newsCards[posicion+3].id}`;
        newsPunto.forEach((cadaPunto,i)=>{
            newsPunto[i].classList.remove('activo');
        })
        newsPunto[i].classList.add('activo');
    })
})
    let posicionDep=0; 
    let operacionDep;
    let noEntiendoDep;
function carrouselAutoDep()
{   
    newsLink.href=`noticias.html?id=${newsCardData.newsCards[posicionDep+3].id}`;  
    
    newsPunto.forEach((cadaPunto, i)=> {
    newsPunto[i].addEventListener('click', ()=>{
        clearInterval(noEntiendoDep);
        noEntiendoDep=null;
    })
})
        if(!noEntiendoDep)
        {
            noEntiendoDep=setInterval(()=>{
                if(posicionDep===1)
                {
                    newsLink.href=`noticias.html?id=${newsCardData.newsCards[posicionDep+2].id}`; 
                    posicionDep=0;
                }else{
                    newsLink.href=`noticias.html?id=${newsCardData.newsCards[posicionDep+4].id}`;
        posicionDep++;
        }
        operacionDep=posicionDep*(-50);
        newsGrande.style.transform=`translateX(${operacionDep}%)`;
        tituloArray.innerHTML=ArrayDeTitulos[posicionDep];
        newsPunto.forEach((cadaPunto,j)=>{
            newsPunto[j].classList.remove('activo');
        })
        newsPunto[posicionDep].classList.add('activo');

            },4000)
        }
}


carrouselAutoDep();