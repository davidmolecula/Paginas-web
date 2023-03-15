let s4Container=document.getElementById('section-4-container');
let informationCard="";

s4Container.onmousemove=e=> {
    for(const section4Div of document.getElementsByClassName('section-4-div'))
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
informationCard+=`<div class="section-4-div" id="section-4-div">
				
<h3 class="section-4-h3">${card.title}</h3>
<p class="section-4-p">${card.description}
</p>
<a href="${card.url}" class="section-4-a">${card.link}</a>

</div>`;
}
s4Container.innerHTML=informationCard;
