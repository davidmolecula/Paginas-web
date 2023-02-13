const hamburguesa= document.querySelector(".hamburguesa");
const navLinks= document.querySelector(".nav-links");
const links= document.querySelectorAll(".nav-links li");

hamburguesa.addEventListener("click",() =>
{
  navLinks.classList.toggle("open");
});