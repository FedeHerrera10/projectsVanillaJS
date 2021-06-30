let movie1 = {
    nombre:'Terminator 2',
    seatsocuped:[0,4,5,7,14,55],
    ticket:9
}

let movie2 = {
    nombre:'Toy Story 3 ',
    seatsocuped:[2,3,8,20],
    ticket:10
}

let moviesObj ={
    movies:[movie1,movie2]
}

let indexMovie=null;
let count=0;
const select = document.querySelector('#movies');
const seats = document.querySelectorAll('.seat');
const containerTicket = document.querySelector('.container-ticket');

document.addEventListener('DOMContentLoaded' , () =>{
    loadOptionsMovies()
})



select.addEventListener('change',(e)=>{
    setMovieData(e.target.selectedIndex -1);
    refreshSeat(e.target.selectedIndex -1);
    populateUI();
    calculateSelect();
})

function loadOptionsMovies(){
    moviesObj.movies.map(movie => 
        (select.appendChild(createOption(movie)))
    )
}

function createOption(movie){
    let option = document.createElement('option');
    option.value=movie.nombre;
    option.text=`${movie.nombre} ( $${movie.ticket} )`;
    return option;
}

function setMovieData(movieIndex) {
    localStorage.setItem('selectedMovieIndex', movieIndex);
}



function refreshSeat(index) {
    if (index >= 0) {
        indexMovie=index;
        localStorage.setItem('seataocupped',JSON.stringify(moviesObj.movies[index].seatsocuped));
    }
}

function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('seataocupped'));
  
    if (selectedSeats !== null && selectedSeats.length > 0) {
      seats.forEach((seat, index) => {
        if (selectedSeats.indexOf(index) > -1) {
          seat.classList.add('ocuped');
        } else{
            seat.classList.remove('ocuped');
        }
      });
    }
}

document.addEventListener('click',(e)=>{
    const element = e.target;
    
    if(element.classList.contains('seat')){
        if(element.classList.contains('ocuped')){
            return;
        } else if(element.classList.contains('selected')){
            element.classList.remove('selected');
        } else{
            
            element.classList.add('selected');
        }
        updateSelected();
        calculateSelect();
    }
})

function updateSelected(){
    const selectedSeats = document.querySelectorAll('div.seat.selected');
    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
    count=selectedSeats.length;
}

function calculateSelect(){
    console.log(indexMovie)
    if(indexMovie >=0){
        let price=0;
        const movie= moviesObj.movies[indexMovie];
        containerTicket.innerHTML = `<p class="result-ticket">You have selected <span>${count}</span> seats for a price of <span>${movie.ticket * count}</span></p>`
    }
}