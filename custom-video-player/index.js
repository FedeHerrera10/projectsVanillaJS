const videoPlayer = document.querySelector('#videoplayer');
const container = document.querySelector('.container');
const btnPlay = document.querySelector('#btn-play');
const btnStop = document.querySelector('#btn-stop');
const iconPlay = document.querySelectorAll('#btn-play > .fas');
const timeStamp = document.querySelector('.timestamp');
const progress = document.querySelector('#time');

progress.addEventListener('change', setVideoProgress);

videoPlayer.addEventListener('click' ,  (e) => {
    if(videoPlayer.paused){
        videoPlayer.play();
        iconPlay[0].classList.remove('fa-play');
        iconPlay[0].classList.add('fa-pause');
    }
})

videoPlayer.addEventListener('timeupdate', updateProgress);

btnPlay.addEventListener('click', () => {
    
    if(videoPlayer.paused){
        videoPlayer.play();
        iconPlay[0].classList.remove('fa-play');
        iconPlay[0].classList.add('fa-pause');
    } else{
        videoPlayer.pause();
        iconPlay[0].classList.remove('fa-pause');
        iconPlay[0].classList.add('fa-play');
    }
})

btnStop.addEventListener('click', () => {
    console.log('si')
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
    iconPlay[0].classList.remove('fa-pause');
    iconPlay[0].classList.add('fa-play');
})

function calculteTime(timeInSeconds){
    let minutes = Math.floor(timeInSeconds / 60);
    let second = (timeInSeconds / 60 +"").split(".")[1];
    return `${minutes}:${second}`;
}


function updateProgress() {
    progress.value = (videoPlayer.currentTime / videoPlayer.duration) * 100;
  
    let mins = Math.floor(videoPlayer.currentTime / 60);
    if (mins < 10) {
      mins = '0' + String(mins);
    }
    
    let secs = Math.floor(videoPlayer.currentTime % 60);
    if (secs < 10) {
      secs = '0' + String(secs);
    }
    timeStamp.innerHTML = `${mins}:${secs}`;
  }


  function setVideoProgress() {
    videoPlayer.currentTime = (+progress.value * videoPlayer.duration) / 100;
  }