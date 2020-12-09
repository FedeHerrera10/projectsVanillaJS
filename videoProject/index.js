const $btnSwitch = document.getElementById('switch');
const $video = document.getElementById('video');
const $toggle= document.getElementById('btn-switch');

document,addEventListener('DOMContentLoaded', () =>{
    $video.muted = true;
    $video.play();
})

$video.addEventListener('ended', () => {
    $video.play();
})

$btnSwitch.addEventListener('click', () => {
    
    if($video.paused){
        $video.play();
        $toggle.classList.remove('play');
        
    }else{
        $video.pause();
        $toggle.classList.add('play');
    }
})

