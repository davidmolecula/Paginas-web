const hamburguesa=document.querySelector(".hamburguesa");
const navLinks= document.querySelector(".nav-links");
const links= document.querySelectorAll(".nav-links li");

hamburguesa.addEventListener("click",() =>
{
  navLinks.classList.toggle("open");
});


const nav=document.querySelector("nav");
const section1=document.querySelector(".section-1");
const section2=document.querySelector(".section-2");
const intersection=document.querySelector(".intersection");
const link1=document.getElementById("link-1");
const link2=document.getElementById("link-2");
const link3=document.getElementById("link-3");

const link5=document.getElementById("link-5");
/*const link6=document.getElementById("link-6");*/
const svg=document.getElementsByTagName('svg');

const section1Options={};
const section2Options={};
const intersectionOptions={};

const section1Observer=new IntersectionObserver(function(entries, section1Observer) 
{
  entries.forEach(entry =>{
    if(!entry.isIntersecting)
    {
      nav.classList.add("clase-js-nav");
      link1.classList.add("link");
      link2.classList.add("link");
      link3.classList.add("link");

      link5.classList.add("link");
      /*link6.classList.add("link");*/
      svg[0].setAttribute('fill','black');
    }else {
      nav.classList.remove("clase-js-nav");
      link1.classList.remove("link");
      link2.classList.remove("link");
      link3.classList.remove("link");

      link5.classList.remove("link");
      /*link6.classList.remove("link");*/
      svg[0].setAttribute('fill','white');
    }
  });
}, section1Options);

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
informationCard+=`<div class="informacion-div" id="informacion-div">
				
<h3 class="informacion-h3">${card.title}</h3>
<p class="informacion-p">${card.description}
</p>
<a href="${card.url}" class="informacion-a">${card.link}</a>

</div>`;
}
s4Container.innerHTML=informationCard;

