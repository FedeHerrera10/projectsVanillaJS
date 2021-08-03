const music = [
    {title:"Happy Rock", 
    imageUrl:"./media/happyrock.jpg",
    soundUrl:"./media/bensound-happyrock.mp3"
    },
    {title:"Memories", 
    imageUrl:"./media/memories.jpg",
    soundUrl:"./media/bensound-memories.mp3"
    },
    {title:"Once Again", 
    imageUrl:"./media/onceagain.jpg",
    soundUrl:"./media/bensound-sunny.mp3"
    },
    {title:"SlowMotion", 
    imageUrl:"./media/slowmotion.jpg",
    soundUrl:"./media/bensound-slowmotion.mp3"
    }
    
];

const mediaContainer = document.querySelector('.audio-img');
const titleSong = document.querySelector('#title-song');
const btnPrev = document.querySelector('.btn-prev');
const btnPlay = document.querySelector('.btn-play');
const btnNext = document.querySelector('.btn-next');
const timeStamp = document.querySelector('.timestamp');
const progress = document.querySelector('#time');
const slider = document.querySelector('.slider');
const iconPlay = document.querySelectorAll('.btn-play > .fas');

let img = document.createElement('img');
let audio = document.createElement('audio');

let indexSong=0;
let countSoong=0;

document.addEventListener('DOMContentLoaded' , () => {
    createUIMusic(music[indexSong]);
    countSoong=music.length -1 ;
});

progress.addEventListener('change', setVideoProgress);
audio.addEventListener('timeupdate', updateProgress);

btnPrev.addEventListener('click' ,() => {
    if(indexSong === 0) return;
    indexSong -=1;
    createUIMusic(music[indexSong])
    changeIconPlayPause();
})
btnPlay.addEventListener('click' ,() => {
    changeIconPlayPause();

})

btnNext.addEventListener('click' ,() => {
    if(indexSong === countSoong) return;
    indexSong +=1;
    createUIMusic(music[indexSong])
    changeIconPlayPause();

})


function createUIMusic(objMusic){
    img.classList.add('sound-poster')
    img.src=objMusic.imageUrl;
    img.alt=objMusic.title;
    audio.src = objMusic.soundUrl;
    audio.id='song';
    mediaContainer.appendChild(img);
    mediaContainer.appendChild(audio);
    titleSong.textContent=objMusic.title;
}

function calculteTime(timeInSeconds){
    let minutes = Math.floor(timeInSeconds / 60);
    let second = (timeInSeconds / 60 +"").split(".")[1];
    return `${minutes}:${second}`;
}


function updateProgress() {
    progress.value = (audio.currentTime / audio.duration) * 100;
  
    let mins = Math.floor(audio.currentTime / 60);
    if (mins < 10) {
      mins = '0' + String(mins);
    }
    
    let secs = Math.floor(audio.currentTime % 60);
    if (secs < 10) {
      secs = '0' + String(secs);
    }
    timeStamp.innerHTML = `${mins}:${secs}`;
    
  } 

  function setVideoProgress() {
    audio.currentTime = (+progress.value * audio.duration) / 100;
  }

  function changeIconPlayPause(){
    const audio = document.querySelector('#song');
    
    if(audio.paused){
        audio.play();
        iconPlay[0].classList.remove('fa-play');
        iconPlay[0].classList.add('fa-pause');
        mediaContainer.style.webkitAnimationPlayState = 'running';

    } else{
        audio.pause();
        iconPlay[0].classList.remove('fa-pause');
        iconPlay[0].classList.add('fa-play');
        mediaContainer.style.webkitAnimationPlayState = 'paused';

    }
  }