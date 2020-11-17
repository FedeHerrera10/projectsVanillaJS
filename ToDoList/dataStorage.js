class Storage{

    agregarItem(todo){
        let todos;
        todos = this.obtenerItems();
        todos.push(todo);
        localStorage.setItem('todos',JSON.stringify(todos));
    }

    obtenerItems(){
        let todosLS;
        if (localStorage.getItem('todos') === null){
            todosLS = [];
        } else {
            todosLS = JSON.parse(localStorage.getItem('todos'));
        }
        return todosLS;
    }

    limpiarStorage(){
        localStorage.clear();
    }

    obtenerId(){
        let ids;
        ids= this.obtenerItems();
    
        if(ids.length == 0 ){
            return 1;
        } else{
            let index = ids.length;
            let id = ids[index -1].id + 1;
            return id;
        }
    }
}

export default Storage;

