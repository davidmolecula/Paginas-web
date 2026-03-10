const $ = (el) => document.querySelector(el);
const $hamburguesa = $(".hamburguesa");
const $navLinks = $(".nav-links");
const $links = document.querySelectorAll(".nav-links li");

$hamburguesa.addEventListener("click", () => {
  $navLinks.classList.toggle("open");
});

const $nav = $("nav");
const $section1 = $(".section-landing");
const $section2 = $(".section-2");
const $intersection = $(".intersection");
const $link1 = $("#link-1");
const $link2 = $("#link-2");
const $link3 = $("#link-3");
const $link4 = $("#link-4");
const $link5 = $("#link-5");
const $link6 = $("#link-6");
const $svg = document.getElementsByTagName("svg");

const $carreraCol = $("#carreraColumna");
const $carreraCol2 = $("#carreraColumna2");
Array.from(carreras).map((carrera) => {
  if (carrera._id < 3) {
    $carreraCol.innerHTML += `
    <div class="cardcarrera">
    <a href="carrera.html?id=${carrera._id}">
          <img src=${carrera.url} alt="..." class="card-img-top">
    </a>
  </div>`;
  }
});

///*
Array.from(carreras).map((carrera) => {
  if (carrera._id > 2) {
    $carreraCol2.innerHTML += `
  <div class="cardcarrera">
  <a href="carrera.html?id=${carrera._id}">
        <img src=${carrera.url} alt="..." class="card-img-top">
  </a>
</div>`;
  }
});

const section1Observer = new IntersectionObserver(function (
  entries,
  section1Observer,
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      $nav.classList.add("clase-js-nav");
      $link1.classList.add("link");
      $link4.classList.add("link");
      $link3.classList.add("link");

      $link5.classList.add("link");
      $link6.classList.add("link");
    } else {
      $nav.classList.remove("clase-js-nav");
      $link1.classList.remove("link");
      $link4.classList.add("link");
      $link3.classList.remove("link");

      $link5.classList.remove("link");
      $link6.classList.remove("link");
      $svg[0].setAttribute("fill", "white");
    }
  });
});

section1Observer.observe($section1);

// "LINTERNA" de la seccion informacion general

let $s4Container = $("#informacion-container");
let informationCard = "";

$s4Container.onmousemove = (e) => {
  for (const section4Div of document.getElementsByClassName(
    "informacion-div",
  )) {
    const rect = section4Div.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    section4Div.style.setProperty("--mouse-x", `${x}px`);
    section4Div.style.setProperty("--mouse-y", `${y}px`);
  }
};

for (let card of informationCards.cards) {
  informationCard += `
<div onclick="location.href='${card.url}';"  class="informacion-div" id="informacion-div">
				
<h3 class="informacion-h3">${card.title}</h3>
<p class="informacion-p">${card.description}
</p>
<a href="${card.url}" class="informacion-a" target="_blank">${card.link}</a>

</div>`;
}
$s4Container.innerHTML = informationCard;

// Creacion de las tarjetas de noticias

let newsCards = "";
const $newsCard = $(".news-secundarias");

let newsCardBig = "";

for (let i = 0; i < 5; i++) {
  let randomIndex=Math.floor(Math.random()*newsCardData.newsCards.length)
  let ran=Math.floor(randomIndex*Math.random())
  newsCards += `<div class="new-s ${newsCardData.newsCards[ran].letter}">
  <div class="new-s-img"><img src="${newsCardData.newsCards[ran].urlImg}" alt=""></div>
  <div class="new-s-div">
    <h3>${newsCardData.newsCards[ran].title}</h3>
    <a href="noticias.html?id=${newsCardData.newsCards[ran].id}" class="new-s-link">Leer más</a>
  </div>
</div>`;
}
$newsCard.innerHTML = newsCards;
let click = 0;
const handleInscription = () => {
  const $inscripcion = $("#handleInscription");
  const $pHidden = $("#p-hidden");
  if (click % 2 == 0) {
    $inscripcion.style.setProperty("height", "auto");
    $pHidden.classList.remove("p-hidden");
    click++;
  } else {
    $inscripcion.style.setProperty("height", "auto");
    $pHidden.classList.add("p-hidden");
    click++;
  }
};
let click2 = 0;
const handleInscription2 = () => {
  const $inscripcion2 = $("#handleInscription2");
  const $pHidden2 = $("#p-hidden2");
  if (click % 2 == 0) {
    $inscripcion2.style.setProperty("height", "auto");
    $pHidden2.classList.remove("p-hidden");
    click++;
  } else {
    $inscripcion2.style.setProperty("height", "auto");
    $pHidden2.classList.add("p-hidden");
    click++;
  }
};

window.addEventListener("noticiasRenderizadas", (e) => {
  const newsImg=document.querySelectorAll('.img1')
  const sizeImg=e.detail.totalNoticias<=9?e.detail.totalNoticias:10
newsImg.forEach(img => {
    img.style.width = `calc(100% / ${sizeImg})`;
});
  const newsPunto = document.querySelectorAll(".news-punto");
  const newsGrande = document.querySelector(".news-grande");
  const newsTituloArray = document.querySelector(".news-titulo-array");
  const newsLink = document.getElementById("new-s-link");
  const total = e.detail.totalNoticias;
  const ArrayDeTitulos = newsCardData.newsCards.map((n) => n.title);

  let indice = 0;
  let posicionDeImagen;
  let intervalo;
  

  newsPunto.forEach((cadaPunto, i) => {
    cadaPunto.addEventListener("click", () => {
      indice = i;
      let posicion = i;
      let operacion = posicion * (-100 / newsCardData.newsCards.length);
      newsGrande.style.transform = `translateX(${operacion}%)`;
      newsTituloArray.innerHTML = ArrayDeTitulos[i];
      newsLink.href = `noticias.html?id=${newsCardData.newsCards[posicion].id}`;
      newsPunto.forEach((cadaPunto) => {
        cadaPunto.classList.remove("activo");
      });
      newsPunto[i].classList.add("activo");
      clearInterval(intervalo);
    });
  });

  function carrouselAutomatico() {
    newsLink.href = `noticias.html?id=0`;
    newsPunto.forEach((cadaPunto) => {
      cadaPunto.addEventListener("click", () => {
        clearInterval(intervalo);
        intervalo = null;
      });
    });

    if (!intervalo) {
      intervalo = setInterval(() => {
        if (indice === newsCardData.newsCards.length - 1 || indice>=9) {
          newsLink.href = `noticias.html?id=${newsCardData.newsCards[0].id}`;
          indice = 0;
        } else {
          newsLink.href = `noticias.html?id=${newsCardData.newsCards[indice +1].id}`;
          indice++;
        }
        posicionDeImagen = indice * (-100 / newsCardData.newsCards.length);
        newsGrande.style.transform = `translateX(${posicionDeImagen}%)`;
        newsTituloArray.innerHTML = ArrayDeTitulos[indice];
        newsPunto.forEach((cadaPunto) => {
          cadaPunto.classList.remove("activo");
        });
        newsPunto[indice].classList.add("activo");
      }, 2000);
    }
  }
  carrouselAutomatico();
});

