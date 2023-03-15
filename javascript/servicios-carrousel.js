const serviciosGrande =document.querySelector('.servicios-grande');
const serviciosPunto =document.querySelectorAll('.servicios-punto');

serviciosPunto.forEach((cadaPunto, i)=> {
    serviciosPunto[i].addEventListener('click', ()=>{
        let posicion= i;
        let operacion=posicion*(-25);
        serviciosGrande.style.transform=`translateX(${operacion}%)`;
        serviciosPunto.forEach((cadaPunto,i)=>{
            serviciosPunto[i].classList.remove('activo');
        })
        serviciosPunto[i].classList.add('activo');
    })
})