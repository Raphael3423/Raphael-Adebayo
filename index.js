const harburger = document.querySelector(".harburger");
harburger.onclick = function(){
    let navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}
