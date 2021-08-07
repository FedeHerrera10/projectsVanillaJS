const h2 = document.querySelector('#character');
const img = document.querySelector('#image');
const urlBase = 'http://futuramaapi.herokuapp.com/api/v2/';

function renderFuturama(futurama){
    h2.textContent = futurama[0].Name;
    img.setAttribute('src',futurama[0].PicUrl);
}

function renderError(status){
    h2.textContent = 'Character nor found ' + status;
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

const futurama = ajax({
    url:`${urlBase}characters?search=Hermes`,
    //method: 'GET',
    //async= true
    done: renderFuturama,
    error: renderError,
    //responseType : 'json'
})