const select = document.querySelector('select');
const html = document.querySelector('html');
const contenedora= document.querySelector('.contenedora_total');
const buttons=document.querySelectorAll('[data-carrousel-button]');
const navPrimaria=document.querySelector('.navegacion-primaria');
const navPalanca=document.querySelector('.nav-mobil-palanca');


function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
  bodi.style.backgroundColor=bgColor;
  h1.style.color=textColor;
  contenedora.style.backgroundColor=bgColor;
}

select.addEventListener('change', () => ( select.value === 'black' ) ? update('black','white') : update('white','black'));





buttons.forEach(button => {
  button.addEventListener('click', () => {

    const offset= button.dataset.carrouselButton === "sig" ? 1 : -1;

    const slide=button.closest('[data-carrousel]').querySelector('[data-slide]');

    const activeSlide=slide.querySelector('[data-active]');

    let newIndex=[...slide.children].indexOf(activeSlide)+ offset;


    if(newIndex<0) newIndex= slide.children.length -1;

    if(newIndex >= slide.children.length) newIndex=0;

    slide.children[newIndex].dataset.active=true;

    delete activeSlide.dataset.active;

  })
});



navPalanca.addEventListener('click', () => {

  const visibilidad= navPrimaria.getAttribute('data-visible');


  if(visibilidad==='false')
  {
    navPrimaria.setAttribute('data-visible', true);
  }else if(visibilidad==='true')
  {
    navPrimaria.setAttribute('data-visible', false);
  }
});