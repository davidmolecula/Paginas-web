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