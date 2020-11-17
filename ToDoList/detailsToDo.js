import Storage from './dataStorage.js';


const templateToDo = async () => {
const storage = new Storage();
let todos= storage.obtenerItems();

if(todos.length == 0){
    return `<h2 class="task__not-found pending">No hay tareas actualmente</h2>`;
}

let template = "";
let check;
await todos.forEach(todo => {
check = (todo.estado =='terminada') ? 'checked' :'';
template +=`
    <section class="details">
    <div class="detail__taskDescription">
        <p>${todo.descripcion}</p>
    </div>
    <div class="detail__taskPriority">
        <p>${todo.prioridad}</p>
    </div>
    <div class="detail__taskActions">
    <div class="detail__taskActions--check">
        <input type="checkbox" id="${todo.id}" name="taskCheck" value="" ${check} >
    </div>
    <div class="detail__taskActions--remove">
        <a href="#/remove/${todo.id}"><i class="far fa-trash-alt"></i></a>
    </div>
    </div>
    </section>
`;
});


return template;
}

export default templateToDo;