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
