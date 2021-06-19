const btnEnviar = document.querySelector('#btn-enviar');
const inputTask = document.querySelector('#task');
const loading = document.querySelector('.loading');


inputTask.addEventListener('focus', ()=>{
    btnEnviar.style.display='block';
    loading.style.display = 'none';
})

inputTask.addEventListener('blur', (e)=>{
    if(inputTask.value.length == 0 ){
        btnEnviar.style.display='none';
    }
})

btnEnviar.addEventListener('click', ()=> {
    if(inputTask.value.length > 0 ){
        //cargar la lista de tarea y al terminar ocultar el loading
        loading.style.display = 'block';
        btnEnviar.style.display='none';
    }
})

