import Storage from './dataStorage.js';

class ToDo {
    storage;

    constructor(){
        this.storage = new Storage();
    }
    
    crearTodo(descipcion,prioridad,estado){
        
        const LASTID=this.storage.obtenerId();

        const todo = {
            id:LASTID,
            descripcion:descipcion,
            prioridad:prioridad,
            estado: estado || 'pendiente'
        }

        this.storage.agregarItem(todo)
        return todo;
    }

    obtenerTodos(){
        return this.storage.obtenerItems();
    }

    cambiarEstado(id,estado){
        const TODOS = this.storage.obtenerItems();
        let editTodos=[];
        this.borrarTodos();
        TODOS.forEach(todo => {
            if(todo.id == id){
                todo.estado=estado;
            }
            this.storage.agregarItem(todo)
        });
    }
    
    eliminarTodo(id){
        const TODOS = this.storage.obtenerItems();
        let editTodos=[];
        this.borrarTodos();
        TODOS.forEach(todo => {
            if(todo.id !== id){
                this.storage.agregarItem(todo)
            }
        });
    }
    
    borrarTodos(){
        this.storage.limpiarStorage();
    }

}

export default ToDo;