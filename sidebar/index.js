const $menu = document.getElementById('toggle-menu');
const $navBar = document.getElementById('nav');
const $btnClose = document.getElementById('close');

$menu.addEventListener('click', () => {
    console.log('si');
    if($navBar.classList.contains('is-active')){
        $navBar.style.animation ="animationOut 1s ease-out forwards";
        
    }else{
        $navBar.classList.add('is-active');
        
    }
});

$navBar.addEventListener('animationend', (event)=>{
    if(event.animationName == 'animationOut'){
        $navBar.classList.remove('is-active');
        $navBar.style.animation="";
    }
})

$btnClose.addEventListener('click', () => {
    if($navBar.classList.contains('is-active')){
        $navBar.style.animation ="animationOut 1s ease-out forwards";
    }    
});