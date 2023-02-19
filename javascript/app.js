const hamburguesa= document.querySelector(".hamburguesa");
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
const link4=document.getElementById("link-4");
const link5=document.getElementById("link-5");

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
      link4.classList.add("link");
      link5.classList.add("link");
    }else {
      nav.classList.remove("clase-js-nav");
      link1.classList.remove("link");
      link2.classList.remove("link");
      link3.classList.remove("link");
      link4.classList.remove("link");
      link5.classList.remove("link");
    }
  });
}, section1Options);

section1Observer.observe(section1);

const intersectionObserver=new IntersectionObserver(function(entries, intersectionObserver) 
{
  entries.forEach(entry =>{
    if(!entry.isIntersecting)
    {
      nav.classList.remove("clase-js-nav3");
    }else {
    nav.classList.add("clase-js-nav3");
    
    }
  });
}, intersectionOptions);

intersectionObserver.observe((intersection));
