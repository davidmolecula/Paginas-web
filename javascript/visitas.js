
document.addEventListener("DOMContentLoaded", () => {
  const arrayImg=document.querySelectorAll(".galeria-imagen img")
  const galeria = document.querySelector(".galeria");
  const galeriaFondo = document.querySelector(".galeria-fondo");
  const galeriaFondoImg = document.querySelector(".galeria-fondo img");
  const trabajosImg = document.querySelectorAll(".galeria-imagen-after");
  const btnCerrar = document.querySelector(".btn-cerrar");
  let contador = 0;
  /*galeriaFondo.addEventListener('click', (event)=>{

})*/
  galeriaFondo.addEventListener("click", (event) => {
    let atras = galeriaFondo.querySelector(".btn-atras"),
      adelante = galeriaFondo.querySelector(".btn-adelante"),
      img = galeriaFondo.querySelector("img"),
      tgt = event.target;
    if (tgt == atras) {
      if (contador > 0) {
        img.src = arrayImg[contador - 1].src;
        galeria.style.backgroundImage=`url(${arrayImg[contador-1].src})`
        contador--;
      } else {
        img.src = arrayImg[arrayImg.length - 1].src;
        
        galeria.style.backgroundImage=`url(${arrayImg[arrayImg.length-1].src})`
        contador = arrayImg.length - 1;
      }
    } else if (tgt == adelante) {
      if (contador < arrayImg.length - 1) {
        img.src = arrayImg[contador + 1].src;
        galeria.style.backgroundImage=`url(${arrayImg[contador+1].src})`
        contador++;
      } else {
        img.src = arrayImg[0].src;
        galeria.style.backgroundImage=`url(${arrayImg[0].src})`
        contador = 0;
      }
    }
  });
  Array.from(trabajosImg).forEach((img) => {
    img.addEventListener("click", (event) => {
      const imagenSeleccionada = +event.target.dataset.galeriaImg;
      galeria.style.backgroundImage=`url(${arrayImg[imagenSeleccionada].src})`
      galeriaFondoImg.src = arrayImg[imagenSeleccionada].src;
      contador = imagenSeleccionada;
      galeria.style.opacity = 1;
      galeria.style.visibility = "visible";
    });
  });
  btnCerrar.addEventListener("click", () => {
    galeria.style.visibility = "hidden";
  });
});
