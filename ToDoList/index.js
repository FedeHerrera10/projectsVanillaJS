import ToDo from './toDos.js';
import templateToDo from './detailsToDo.js';
// Creando un router
const router = () => {
    
    const RUTA =location.hash.slice(1).toLocaleLowerCase().split('/');
    const ACTION =  RUTA[1];
    const PARAM = Number(RUTA[2]) || '';
    
    if((ACTION=='remove') && ((PARAM) > 0)){
        const Todo = new ToDo();
        Todo.eliminarTodo(PARAM);
        reloadPage();
    }
}

window.addEventListener('load',router); // cuando carga por 1ra vez
window.addEventListener('hashchange',router); // cuando cambia de pagina


const $showInputs = document.getElementById('showInputs');
const $headerInput= document.getElementById('headerInputs');
const $btnCancelar = document.getElementById('cancelar');
const $btnAgregar = document.getElementById('agregar');
const $inputDescripcion = document.getElementById('descripcion');
const $select = document.getElementById('selectPrioridad');
const $containerDetails = document.getElementById('containerDetails');
const $clear = document.getElementById('clear');
const $total = document.getElementById('total');
const $terminadas = document.getElementById('terminadas');
const $pendientes = document.getElementById('pendientes');

const toDo = new ToDo();

reloadPage();
const $bntGuardar = document.getElementById('btn-guardar'); 

$showInputs.addEventListener('click',(event)=> {
    event.preventDefault();
    $headerInput.style.animation = "";
    $headerInput.classList.add('header__inputs--active');
})


$btnCancelar.addEventListener('click',(event)=> {
    hideModal();
})

function hideModal() {
    $headerInput.style.animation = "animationOut 1s forwards";
    $headerInput.addEventListener('animationend',(event) => {
        if(event.animationName == 'animationOut'){
            $headerInput.classList.remove('header__inputs--active');
            $inputDescripcion.value="";
        }
    })
}

$btnAgregar.addEventListener('click',() => {
    if (validarInput($inputDescripcion)){
        const descripcion = $inputDescripcion.value;
        const prioridad = $select.value;
        const nuevaTodo = toDo.crearTodo(descripcion,prioridad);
        $inputDescripcion.value='';
        reloadPage();
        
    }else{
        console.log('Debe introducir un valor');
    }
})

$clear.addEventListener('click',(event)=> {
    event.preventDefault();
    toDo.borrarTodos();
    reloadPage();
    
})


function validarInput(element){
    const value = element.value.trim();
    if(value.length == 0){
        return false;
    }
    return true;
}

async function reloadPage(){
    let templateTask = await templateToDo();
    $containerDetails.innerHTML=templateTask;
    reloadCount();
}

async function reloadCount(){
    $bntGuardar.style.display='none';
 const todos = toDo.obtenerTodos();
 let terminadas=0;
 let pendientes=0;
 let total=todos.length;
 await todos.forEach(todo => {
     $bntGuardar.style.display='inline';
     if(todo.estado == 'pendiente'){
         pendientes +=1;
     }
     if(todo.estado =='terminada'){
         terminadas +=1;
     }
 });

 $total.innerText=`Total: ${total}`;
 $terminadas.innerText=`Terminadas: ${terminadas}`;
 $pendientes.innerText=`Pendientes: ${pendientes}`;
}


$bntGuardar.addEventListener('click',()=>{
    const $checkBoxAll = document.querySelectorAll('input[type="checkbox"]');
    $checkBoxAll.forEach(element => {
        let id=element.getAttribute('id');
        if(element.checked === true){
            toDo.cambiarEstado(id,'terminada');
        }else{
            toDo.cambiarEstado(id,'pendiente');
        }
    });

    reloadPage();
    reloadCount();
})
