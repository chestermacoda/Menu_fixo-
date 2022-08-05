window.addEventListener("scroll",function(){
    var nav = document.querySelector("nav"); 
    nav.classList.toggle("fixo", window.scrolly > 0);
})