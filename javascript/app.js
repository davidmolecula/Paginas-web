const hamburguesa=document.querySelector(".hamburguesa");
const navLinks= document.querySelector(".nav-links");
const links= document.querySelectorAll(".nav-links li");


hamburguesa.addEventListener("click",() =>
{
  navLinks.classList.toggle("open");
});


const nav=document.querySelector("nav");
const section1=document.querySelector(".section-landing");
const section2=document.querySelector(".section-2");
const intersection=document.querySelector(".intersection");
const link1=document.getElementById("link-1");
const link2=document.getElementById("link-2");
const link3=document.getElementById("link-3");

const link5=document.getElementById("link-5");
const link6=document.getElementById("link-6");
const svg=document.getElementsByTagName('svg');



const carreraCol=document.getElementById("carreraColumna")
const carreraCol2=document.getElementById("carreraColumna2")
Array.from(carreras).map((carrera)=>{
  if(carrera._id<3)
  {
      carreraCol.innerHTML+=`
    <div class="cardcarrera">
    <a href="carrera.html?id=${carrera._id}">
          <img src=${carrera.url} alt="..." class="card-img-top">
    </a>
  </div>`
}
})


///*
Array.from(carreras).map((carrera)=>{
  if (carrera._id>2)
  { 
  carreraCol2.innerHTML+=`
  <div class="cardcarrera">
  <a href="carrera.html?id=${carrera._id}">
        <img src=${carrera.url} alt="..." class="card-img-top">
  </a>
</div>`
}
})











const section1Observer=new IntersectionObserver(function(entries, section1Observer) 
{
  entries.forEach(entry =>{
    if(!entry.isIntersecting)
    {
      nav.classList.add("clase-js-nav");
      link1.classList.add("link");

      link3.classList.add("link");

      link5.classList.add("link");
      link6.classList.add("link");
    }else {
      nav.classList.remove("clase-js-nav");
      link1.classList.remove("link");

      link3.classList.remove("link");

      link5.classList.remove("link");
      link6.classList.remove("link");
      svg[0].setAttribute('fill','white');
    }
  });
});

section1Observer.observe(section1);




// "LINTERNA" de la seccion informacion general

let s4Container=document.getElementById('informacion-container');
let informationCard="";

s4Container.onmousemove=e=> {
    for(const section4Div of document.getElementsByClassName('informacion-div'))
    {
        const rect=section4Div.getBoundingClientRect(),
        x=e.clientX-rect.left,
        y=e.clientY-rect.top;
    
        section4Div.style.setProperty("--mouse-x",`${x}px`);
        section4Div.style.setProperty("--mouse-y",`${y}px`);
    
    }
}

for(let card of informationCards.cards)
{
informationCard+=`
<div onclick="location.href='${card.url}';"  class="informacion-div" id="informacion-div">
				
<h3 class="informacion-h3">${card.title}</h3>
<p class="informacion-p">${card.description}
</p>
<a href="${card.url}" class="informacion-a" target="_blank">${card.link}</a>

</div>`;
}
s4Container.innerHTML=informationCard;


// Creacion de las tarjetas de noticias

let newsCards='';
const newsCard=document.querySelector(".news-secundarias");

let newsCardBig='';

for(let i=0;i<3;i++)
{
  newsCards+=`<div class="new-s ${newsCardData.newsCards[i].letter}">
  <div class="new-s-img"><img src="${newsCardData.newsCards[i].urlImg}" alt=""></div>
  <div class="new-s-div">
    <h3>${newsCardData.newsCards[i].title}</h3>
    <a href="noticias.html?id=${newsCardData.newsCards[i].id}" class="new-s-link">Leer más</a>
  </div>
</div>`
};
newsCard.innerHTML=newsCards;
let click=0;
const handleInscription=()=>{
  const inscripcion=document.getElementById('handleInscription');
  const pHidden=document.getElementById('p-hidden')
  if(click%2==0){
    inscripcion.style.setProperty('height','auto')
    pHidden.classList.remove('p-hidden')
    click++;
  }else{
    inscripcion.style.setProperty('height','auto')
    pHidden.classList.add('p-hidden')
    click++;
  }
  
}

