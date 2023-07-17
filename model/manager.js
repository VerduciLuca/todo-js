class Manager{
    constructor(todosArray=[]){
    //     if(!todosArray){
    //         const todosArray=StorageService.loadTodos();
    //         if (todosArray){
    //         this.todosArray=todosArray;
    //     } 
    //     else{
    //         this.todosArray=[]
    //     }
        
    // } else {
    //         this.todosArray = todosArray
    //     }
    this.todosArray=todosArray
    }


    addToDo(toDo){
        this.todosArray.push(toDo);
    }

    orderTodosByTitle(){
        this.todosArray.sort((todo1,todo2) => todo1.compareByTitle(todo2))
    }

    orderTodosByDate(){
        this.todosArray.sort((todo1,todo2) => todo1.compareByDate(todo2))
    }

    deleteTodo(index){

        this.todosArray.splice(index, 1)
        // StorageService.saveData(this.todosArray)

    }

    addToDoWithTitle(title){
        if (title.trim()==='') {
            alert('You must write something!')
        } else{
        const newTodo = new Todo(title)
        this.addToDo(newTodo)
        // StorageService.saveData(this.todosArray)
        console.log('ciao');
        render()
        inputTask.value=''
        }
    }

    changeCompleteStatus(index){
        const todo =this.todosArray[index];
        todo.isCompleted = !todo.isCompleted
        // StorageService.saveData(this.todosArray)

    }
}