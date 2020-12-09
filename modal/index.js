const $btnOpen = document.getElementById('open-modal');
const $overlay = document.getElementById('overlay');
const $btnClose = document.getElementById('close');
const $modal = document.getElementById('modal');

$btnOpen.addEventListener('click', () =>{
    $overlay.classList.add('is-active');
})

$btnClose.addEventListener('click', () =>{
    $modal.style.animation = "animationOut .8s forwards";
})

$modal.addEventListener('animationend', (event) => {
    if(event.animationName =='animationOut'){
        $overlay.classList.remove('is-active');
        $modal.style.animation = "";
    }
})


