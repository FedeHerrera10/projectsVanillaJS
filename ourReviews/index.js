const reviews = [
{
    id: 1 ,
    name: "Susan Smith" ,
    job: "Web Developer",
    img: "img/pexels-andrea-piacquadio-774909 (1).jpg",
    text : " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa accusamus molestiae ipsum a consectetur quam officia, assumenda pariatur. Dolores vitae cumque aspernatur. Explicabo, ad quibusdam."
},
{
    id: 2 ,
    name: "Evans Martin" ,
    job: "Developer",
    img: "img/pexels-ono-kosuki-5648107.jpg",
    text : " Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed itaque expedita ullam ratione, repellendus voluptatibus odit porro, temporibus."
},
{
    id: 1 ,
    name: "Anna Jhonson" ,
    job: "Web Designer",
    img: "img/pexels-mentatdgt-1024311.jpg",
    text : " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores sit tenetur tempora rerum adipisci recusandae illo molestiae repellendus "
},
{
    id: 1 ,
    name: "Susan Smith" ,
    job: "QA",
    img: "img/pexels-daniel-xavier-1121796.jpg",
    text : " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa accusamus molestiae ipsum a consectetur quam officia, assumenda pariatur. Dolores vitae cumque aspernatur. Explicabo, ad quibusdam."
},
]

const $imgProfile = document.getElementById('img-profile');
const $nameProfile = document.getElementById('name');
const $jobProfile = document.getElementById('job');
const $review = document.getElementById('review');
const $btnNext = document.getElementById('next');
const $btnPrev = document.getElementById('prev');
const $btnSurprise = document.getElementById('surprise');
const $container = document.getElementById('container');
let currentIndex =0;
document.addEventListener("DOMContentLoaded", function(event) {
    loadReview(currentIndex);
});

function loadReview(index){
    const review = reviews[index];
    $imgProfile.src = review.img;
    $nameProfile.innerText = review.name;
    $jobProfile.innerText = review.job;
    $review.innerText = review.text;
}

$container.addEventListener("animationend" , () => {
    $container.classList.remove('is-active');
})

$btnNext.addEventListener('click', () => {
    currentIndex = (currentIndex ==3) ? currentIndex =0 : currentIndex + 1;
    loadReview(currentIndex);
    $container.classList.add('is-active');
})

$btnPrev.addEventListener('click', () => {
    currentIndex = (currentIndex ==0) ? currentIndex =3 : currentIndex - 1;
    loadReview(currentIndex);
    $container.classList.add('is-active');
})

$btnSurprise.addEventListener('click', () => {
    currentIndex = Math.floor(Math.random() * 3);
    loadReview(currentIndex);
    $container.classList.add('is-active');
})