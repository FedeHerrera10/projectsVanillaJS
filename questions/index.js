/* const $btnShow = document.getElementById('show-collapse');
const $btnHide = document.getElementById('hide-collapse');
const $textCollpase = document.getElementById('text-collapse');


$btnShow.addEventListener('click', () => {
    $textCollpase.style.display = 'inline-block';
    $btnHide.style.display='inline-block';
    $btnShow.style.display='none';
})

$btnHide.addEventListener('click', () => {
    $textCollpase.style.animation = 'out .7s linear forwards';
    
})

$textCollpase.addEventListener('animationend', (event) => {
    if(event.animationName == 'out'){
        $textCollpase.style.display = 'none';
        $textCollpase.style.animation ='';
        $btnHide.style.display='none';
        $btnShow.style.display='inline-block';
    }
}) */
const $textCollpase = document.getElementById('text-collapse');
 $textCollpase.classList.toggle

const $buttons = document.querySelectorAll('.btn');

$buttons.forEach((button) => {
    button.addEventListener("click",toggleText);
})

function toggleText(event){
    const target = event.target.parentNode.parentNode.parentElement.childNodes;
    const divText = target[3];
    const icon =event.srcElement;
    if(icon.classList.contains('is-active')){
        icon.classList.remove('is-active');
        icon.classList.add('is-disabled');
        divText.classList.add('show');
        
    }else if(icon.classList.contains('is-disabled')){
        icon.classList.remove('is-disabled');
        icon.classList.add('is-active');
        divText.style.animation = 'out .7s linear forwards'
        
    }
    
    divText.addEventListener('animationend', (event) => {
        if(event.animationName == 'out'){
           divText.classList.remove('show');
           divText.style.animation = '';
        }
    });
    
}