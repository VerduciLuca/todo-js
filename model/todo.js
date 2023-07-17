class Todo {
    constructor(title, isCompleted = false, creationDate = new Date(), id) {
        this.title = title;
        this.isCompleted = isCompleted;
        this.creationDate = creationDate;
        this.id=id;
    }

    compareByTitle(todo){
        return this.title.localeCompare(todo.title)
    }

    compareByDate(todo){
        return this.creationDate.getTime()-todo.creationDate.getTime()
    }

}
