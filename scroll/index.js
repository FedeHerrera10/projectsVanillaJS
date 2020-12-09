const $btnMenu = document.getElementById('toggle-menu');
const $navList = document.getElementById('nav-list');
const $navBar = document.getElementById('navbar');
const $header = document.getElementById('header');

$btnMenu.addEventListener('click', () => {
    $navList.classList.toggle('nav-open');
})

window.addEventListener("scroll", function () {
    let height = header.getBoundingClientRect();
    const navOpen = $navList.classList.contains('nav-open');
    let top = -90;
    if(navOpen){
        top = -250;
    }
    
    if(height.top < top){
        $navBar.classList.add('static-navbar');
       
    }else{
        $navBar.classList.remove('static-navbar');
    }
    
}); 