document.getElementById('section-4-container').onmousemove=e=> {
    for(const section4Div of document.getElementsByClassName('section-4-div'))
    {
        const rect=section4Div.getBoundingClientRect(),
        x=e.clientX-rect.left,
        y=e.clientY-rect.top;
    
        section4Div.style.setProperty("--mouse-x",`${x}px`);
        section4Div.style.setProperty("--mouse-y",`${y}px`);
    
    }
}