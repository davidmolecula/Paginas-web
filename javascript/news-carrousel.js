const newsGrande = document.querySelector(".news-grande");
const newsPunto = document.querySelectorAll(".news-punto");
const tituloArray = document.querySelector(".titulo-array");
const newsLink = document.getElementById("new-s-link");

const ArrayDeTitulos = [
  "Renovamos el pasillo de la memoria",
  "Explorando la industria nacional",
  "pepito3",
  "pepito4",
  "pepito5",
  "pepito6",
];

newsPunto.forEach((cadaPunto, i) => {
  newsPunto[i].addEventListener("click", () => {
    let posicion = i;
    let operacion = posicion * (-100 / 6);
    newsGrande.style.transform = `translateX(${operacion}%)`;
    tituloArray.innerHTML = ArrayDeTitulos[i];
    newsLink.href = `noticias.html?id=${newsCardData.newsCards[posicion].id}`;
    newsPunto.forEach((cadaPunto, j) => {
      newsPunto[j].classList.remove("activo");
    });
    newsPunto[i].classList.add("activo");
  });
});




let indice = 0;
let posicionDeImagen;
let intervalo;

function carrouselAutomatico() {
  newsLink.href = `noticias.html?id=${newsCardData.newsCards[indice + 6].id}`;
  newsPunto.forEach((cadaPunto, i) => {
    newsPunto[i].addEventListener("click", () => {
      clearInterval(intervalo);
      intervalo = null;
    });
  });

  if (!intervalo) {
    intervalo = setInterval(() => {
      console.log(indice);
      if (indice === 5) {
        newsLink.href = `noticias.html?id=${newsCardData.newsCards[indice - 5].id}`;
        indice = 0;
      } else {
        newsLink.href = `noticias.html?id=${newsCardData.newsCards[indice + 1].id}`;
        indice++;
      }
      posicionDeImagen = indice * (-100 / 6);
      newsGrande.style.transform = `translateX(${posicionDeImagen}%)`;
      tituloArray.innerHTML = ArrayDeTitulos[indice];
      newsPunto.forEach((cadaPunto, j) => {
        newsPunto[j].classList.remove("activo");
      });
      newsPunto[indice].classList.add("activo");
    }, 4000);
  }
}

carrouselAutomatico();
