const $btnPrev = document.getElementById('prev');
const $btnNext = document.getElementById('next');
const $container = document.querySelectorAll('.slider');


let currentSlide =0;
let currentX = 0;

$btnPrev.style.display = 'none';

$btnNext.addEventListener('click' ,() => {
    $btnPrev.style.display = 'block';
    if(currentSlide < 3){
        currentSlide +=1;
        currentX +=100;
        translate();
    }

    if(currentSlide == 3){
    $btnNext.style.display = 'none';
    }
})

$btnPrev.addEventListener('click' ,() => {
    $btnNext.style.display = 'block';
    
    if(currentSlide > 0){
        currentSlide -=1;
        currentX -=100;
        translate();
    }

    if(currentSlide == 0){
    $btnPrev.style.display = 'none';
    }
    
})

function translate(){
    $container.forEach((item) => {
        item.style.transform=`translateX(-${currentX}%)`;
    })
}

