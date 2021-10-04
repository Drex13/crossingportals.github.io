document.getElementById("icon-menu").addEventListener("click", mostrar_menu);

function mostrar_menu(){
    document.getElementById("move-content").classList.toggle('move-container-all');
    document.getElementById("show-menu").classList.toggle('show-lateral');

}


// Scroll up

document.getElementById("button-up").addEventListener("click",scrollUp);

function scrollUp(){
    var currentScroll = document.documentElement.scrollTop;

    if(currentScroll > 0){
        window.scrollTo (0,0);
    }
}