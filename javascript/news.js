const hamburguesa=document.querySelector(".hamburguesa");
const navLinks= document.querySelector(".nav-links");
const links= document.querySelectorAll(".nav-links li");


hamburguesa.addEventListener("click",() =>
{
  navLinks.classList.toggle("open");
});

const locationSearch=location.search;

const params=new URLSearchParams(locationSearch);

const id=params.get("id");

const news=newsCardData.newsCards.find(news=>news.id==id);

const newsContainer=document.getElementById('news-container');
let newsText='';
for(let text of news.text)
{
    newsText+=text;
}
newsContainer.innerHTML=`
<p class="news-date">3 de abril 2023</p>
<h1 class="news-title">${news.title}</h1>
<p class="news-subtitle">${news.subtitle}</p>
<div class="news-image"><img src="${news.urlImg}"></div>
${newsText}`;

let newsCards='<h2 class="new-s-title">Ultimas noticias</h2>';
const newsCard=document.getElementById("news-secondary");

let newsCardBig='';
let i=0;
for(let news of newsCardData.newsCards)
{
  if(i!=id&&i<6)
  {
  newsCards+=`<div class="new-s ${newsCardData.newsCards[i].letter}">
  <div class="new-s-img"><img src="${newsCardData.newsCards[i].urlImg}" alt=""></div>
  <div class="new-s-div">
    <h3>${newsCardData.newsCards[i].title}</h3>
    <a href="noticias.html?id=${newsCardData.newsCards[i].id}" class="new-s-link">Leer más</a>
  </div>
</div>`
}
i++;
};

newsCard.innerHTML=newsCards;


