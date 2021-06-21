const user = document.querySelector('#username');
const email = document.querySelector('#email');
const pass = document.querySelector('#password');
const passAgain = document.querySelector('#confirm-password');
const form = document.querySelector('#form');
let formValid = false;

form.addEventListener('submit', e => {
    e.preventDefault();
    clearError();
    contolerInput(user);
    contolerInput(pass);
    contolerInputEmail();
    contolerInputPassowrdAgain();
    
})

function contolerInput(input){
    let error = '';
    const value = input.value.trim();
    if(value === ''){
        error = 'This field is obligatory'
    }

    if(value.length < 3){
        error = 'The minimun length is 3 character'
    }
    renderError(input,error);
    if(error === '') formValid = true;
    
}
function contolerInputEmail(){
    let error = '';
    const value = email.value.trim();
    if(value === ''){
        error = 'This field is obligatory'
    }

    if(!validateEmail(value)){
        error = 'Email is not valid';
    }
    renderError(email,error);
    if(error === '') formValid = true;
}


function contolerInputPassowrdAgain(){
    let error = '';
    const valuePass = pass.value.trim();
    const valuePassAgain = passAgain.value.trim();

    if(valuePassAgain.length < 3){
        error = 'Password Diferent'
    }
    if(valuePass != valuePassAgain){
        error = 'Passwords diferent';
    }

    renderError(passAgain,error);
}

function renderError(input,error){
    if(error === ''){
        input.style.borderColor="green"

    } else{
        input.style.borderColor="red"
        const elementError =createElementError(error);
        input.insertAdjacentElement('afterend',elementError)
    }
}

function createElementError(error){
    const elementError = document.createElement('small');
    elementError.innerText = error;
    elementError.classList.add('error');
    return elementError;
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function clearError(){
    document.querySelectorAll('.error').forEach(e => e.remove());
}