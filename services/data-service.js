class DataService {
    static getData() {
    //static non ha bisogno di un costruttore
        const todo1 = new Todo("Buy milk", false, new Date(2023, 6, 8));
        const todo2 = new Todo("Study javascript", false, new Date(2023, 5, 3));
        const todo3 = new Todo("Tell mom i love her", false, new Date(2023, 4, 1));
        const todo4 = new Todo("Pay electrical bills", false, new Date(2023, 8, 9));
        const todo5 = new Todo("Buy dog food", true, new Date(2023, 4, 14));

        const toDosArr = [todo1, todo2, todo3, todo4, todo5];
        return toDosArr;
    }
}
