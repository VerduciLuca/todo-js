// console.log(DataService.getData())
const todos = DataService.getData();
const manager = new Manager(todos)

function render(){
    const todoContainer = document.getElementById('todo-container')
    todoContainer.innerHTML=''
    // for (const todo of manager.todosArray)
    
    for (let index = 0; index < manager.todosArray.length; index++) {
        const todo = manager.todosArray[index];

        const div = document.createElement('div')

        div.classList.add('todo-card')
        if(todo.isCompleted){
            div.classList.add ('todo-completed')
        }

        const titleStrong =document.createElement('strong');
        const titleNode=document.createTextNode(todo.title)

        const dateSpan = document.createElement('span')
        const dateNode = document.createTextNode(todo.creationDate.toISOString())

        dateSpan.appendChild(dateNode)
        div.appendChild(dateSpan)


        todoContainer.appendChild(div)
        titleStrong.appendChild(titleNode)
        div.appendChild(titleStrong)

        const completeBtn = document.createElement('button')
        const completeNode = document.createTextNode(todo.isCompleted? 'ACTUALLY I GUESS IT IS NOT DONE' : 'DONE')
        completeBtn.addEventListener('click', ()=> {
            todo.isCompleted = !todo.isCompleted;
            render()
        })

        completeBtn.appendChild(completeNode)
        div.appendChild(completeBtn)

        const deleteButton = document.createElement('button');
        const deleteNode = document.createTextNode('DELETE');

        deleteButton.addEventListener('click', ()=> {
        manager.deleteTodo(index);
        render()
        } );

        deleteButton.appendChild(deleteNode);
        div.appendChild(deleteButton);





    }
}

render();

// function render2() {

//     const todoContainer = document.getElementById('todo-container')
//     todoContainer.innerHTML=''
//     for (const todo of manager.todosArray) {
//         const template = `<div class="todo-card ${todo.isCompleted? 'todo-completed' : ''}">
//                             <strong>${todo.title}</strong>
//                             <span>${todo.creationDate.toISOString()}</span>
//                         </div>`;
//         todoContainer.innerHTML += template
//     }
// }

// render2()

function orderByTitle(){
    manager.orderTodosByTitle();
    render();
}

function orderByDate(){
    manager.orderTodosByDate();
    render();
}