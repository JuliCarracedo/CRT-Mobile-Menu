const obj = document.querySelector("button.menu-bars")
const popup = document.querySelector(".popup-links")
const cross = document.querySelector(".close-popup")
const popupLinks = document.querySelectorAll("a.nav-link.bigger")

console.log(popupLinks)
const handleHamburger = (e) => {
    e.stopPropagation();
    popup.classList.replace('untoggled','toggled')

    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    window.onscroll = function() {
        window.scrollTo(scrollLeft, scrollTop);
    };
}

obj.addEventListener('click', e =>{ handleHamburger(e); });


const handleClose = (e) => {
    e.stopPropagation();
    popup.classList.replace('toggled','untoggled')

    window.onscroll = function() {};
}

 popupLinks.forEach((link)=>{
    link.addEventListener('click', e=>{handleClose(e)})
 })

cross.addEventListener('click', e =>{ handleClose(e); });
