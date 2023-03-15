let startingX, startingY, endingX, endingY;
let moving = false;
let i=0;
let operacion=0;
function touchstart(evt) {
    startingX = evt.touches[0].clientX;
    startingY = evt.touches[0].clientY;
}
function touchmove(evt) {
    moving = true;
    endingX = evt.touches[0].clientX;
    endingY = evt.touches[0].clientY;
}
function touchend() {
    if (!moving) return;
    let touchDirection;
    if ( Math.abs(endingX - startingX) > Math.abs(endingY - startingY) ) {
        if ( endingX > startingX ){
            touchDirection = "ArrowRight";

            console.log(touchDirection);
        if(operacion<0) 
    {
        operacion+=25;
        console.log(operacion);
        i-=1;
        grande.style.transform=`translateX(${operacion}%)`;
        title.innerHTML=titles[i];
        text.innerHTML=texts[i];
        tarjetaLink1.setAttribute('href',tarjetaLinks1[i]);
        tarjetaLink2.setAttribute('href', tarjetaLinks2[i]);
            console.log(touchDirection);
        }
            }
        else {
            touchDirection = "ArrowLeft";
    if(operacion>-75) 
    {
        operacion-=25;
        console.log(operacion);
        i+=1;
        grande.style.transform=`translateX(${operacion}%)`;
        title.innerHTML=titles[i];
        text.innerHTML=texts[i];
        tarjetaLink1.setAttribute('href',tarjetaLinks1[i]);
        tarjetaLink2.setAttribute('href', tarjetaLinks2[i]);
            console.log(touchDirection);
        }
        }

    } else {
        if ( endingY > startingY ) 
        {
            touchDirection = "ArrowDown";
            console.log(touchDirection);
        }
        else 
        {
            touchDirection = "ArrowUp";
            console.log(touchDirection);
        }
    }
    moving = false;
}