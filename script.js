const select = document.querySelector('select');
const html = document.querySelector('html');
const contenedora= document.querySelector('.contenedora_total')
document.body.style.padding = '10px';

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
  bodi.style.backgroundColor=bgColor;
  h1.style.color=textColor;
  contenedora.style.backgroundColor=bgColor;
}

select.addEventListener('change', () => ( select.value === 'black' ) ? update('black','white') : update('white','black'));