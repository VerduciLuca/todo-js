class Manager{
    constructor(todosArray=[]){
        this.todosArray=todosArray;
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
    }

    addToDoWithTitle(title){
        const newTodo = new Todo(title)
        this.addToDo(newTodo)
        console.log('caodia');
        render()
    }
}