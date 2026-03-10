
const newsPuntos=document.querySelector('.news-puntos')
const newsGrande=document.querySelector('.news-grande')
const newsCarrousel=document.querySelector('.news-carrousel')
const newsTitulo=document.querySelector('.news-titulo')


const newsCardsReversed=newsCardData.newsCards.reverse()
newsGrande.innerHTML = newsCardData.newsCards.map(noticia => 
    `<img src="${noticia.urlImg}" alt="${noticia.title}" class="img1">`
).join('');
newsGrande.style.width=`${newsCardData.newsCards.length*100}%`

newsPuntos.innerHTML= newsCardData.newsCards.map((noticia,index) => {
  if(index==0){
    return(`<li class="news-punto activo"></li>`)
  }else if(index<=9){
    return(`<li class="news-punto"></li>`)
  }
}
).join('');

newsTitulo.innerHTML=`<h3 class="news-titulo-array">${newsCardData.newsCards[0].title}</h3>
								<a href="noticias.html?id=0" class="new-s-link" id="new-s-link">Leer más</a>`

const eventoNoticiasListas = new CustomEvent('noticiasRenderizadas', {
    detail: { totalNoticias: newsCardData.newsCards.length }
});

window.dispatchEvent(eventoNoticiasListas);
