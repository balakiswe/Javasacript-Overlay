var menu = document.getElementById("btn-menu");
menu.addEventListener("click", function(e){
    console.log(e);
    var overlay = document.getElementsByClassName('overlay');
    console.log(overlay);
    if(menu.classList.contains('btn-open')) {
        overlay[0].style.opacity = 1;
        menu.classList.remove('btn-open');
        menu.classList.add('btn-close');
    } else {
        overlay[0].style.opacity = 0;
        menu.classList.add('btn-open');
        menu.classList.remove('btn-close');
    }
});
