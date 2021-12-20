const h2 = document.querySelector('#character');
const specie = document.querySelector('#specie');
const img = document.querySelector('#image');
const spinner = document.querySelector('.sk-chase');
const main =document.querySelector('.main');
const btn = document.querySelector('.btn');
const urlBase = 'http://futuramaapi.herokuapp.com/api/v2/';
let loading = true;
let characters = [];

function renderFuturama(futurama){

    h2.textContent = futurama[0].Name;
    specie.textContent = futurama[0].Species;
    img.setAttribute('src',futurama[0].PicUrl);
    img.classList.add('animate__animated', 'animate__fadeIn');
    loading = false;
    activeSpinner();
}

function renderError(status){
    h2.textContent = 'Character nor found ' + status;
}

function saveCharacters(result){
    characters = result.map(r => (r.Name))
    futurama(randomCharacter());
}

function randomCharacter() {
    let countCharacter = characters.length;
    let theRandomNumber = Math.floor(Math.random() * countCharacter) + 1;
    console.log(countCharacter +"--"+ theRandomNumber)
    return characters[theRandomNumber-1];
}

/*Function that simulates the operation of ajax */
/* Parameters :
 * url : url of the api to call
 * method : defect is get
 * async: if call is async or not
 * done:  function callback , in case the call is correct
 * error : function callback , in case the call is incorrect
 * responseType : return type response
 */

function ajax({url , method = 'GET', async = true, done= ()=>{} , error = () => {} , responseType = 'json' }){
    console.log(url)
    function status(readyState){
        switch(readyState){
            case 0 : return 'unitilized'
            case 1 : return 'loading'
            case 2 : return 'loaded'
            case 3 : return 'interactive'
            case 4 : return 'completed'
        }
    }

    const request = new XMLHttpRequest();

    request.responseType = responseType;

    request.onreadystatechange = () => {
        console.log(status(request.readyState) + " "+ request.readyState)
        if(request.readyState === 4){
            if(request.status === 200){
                done(request.response)
            } else{
                error(request.status)
            }

        }
    }

    request.open(method,url,async);
    request.send(null);

}

const futurama = (index)=> ajax({
    url:`${urlBase}characters?search=${index}`,
    //method: 'GET',
    //async= true
    done: renderFuturama,
    error: renderError,
    //responseType : 'json'
})

const getAllCharacter = ajax({
    url:`${urlBase}characters`,
    //method: 'GET',
    //async= true
    done: saveCharacters,
    error: renderError,
    //responseType : 'json'
})


const activeSpinner = () => {
    if(!loading){
        spinner.style.display = 'none';
        main.style.display = 'flex';

    } else{
        spinner.style.display = 'inline-block';
        main.style.display = 'none';
    }
}
activeSpinner();

btn.addEventListener( 'click' , () =>{
    img.classList.remove('animate__animated', 'animate__fadeIn');
    futurama(randomCharacter());
})