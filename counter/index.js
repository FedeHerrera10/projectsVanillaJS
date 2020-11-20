const $btnDecrease = document.getElementById('decrease');
const $btnReset = document.getElementById('reset');
const $btnIncrease = document.getElementById('increase');
const $result = document.getElementById('result');
let value = Number($result.innerText);

$btnDecrease.addEventListener('click',()=>{
    value -=1;
    insertValue(value);
    changeColor();
})

$btnReset.addEventListener('click',()=>{
    value =0;
    insertValue(value);
    changeColor();
    
})

$btnIncrease.addEventListener('click',()=>{
    value +=1;
    insertValue(value);
    changeColor();
})

function insertValue(value){
    $result.innerText = value || 0;
}

function changeColor(){
    let color ="black";
    
    if(value > 0 ) {
        color="green";
    }
    if(value < 0 ) {
        color="red";
    }
    $result.style.color = color;
}

    
    

