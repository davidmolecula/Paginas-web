const locationSearch=location.search;

const params=new URLSearchParams(locationSearch);

const id=params.get("id");

const news=newsCardData.newsCards.find(news=>news.id==id);
console.log(id);
console.log(news);
const newsContainer=document.getElementById('news-container');

newsContainer.innerHTML=`
<h1 class="news-title">${news.title}</h1>
<p class="news-subtitle">${news.subtitle}</p>
<div class="news-image"><img src="${news.urlImg}"></div>
${news.text}`;





