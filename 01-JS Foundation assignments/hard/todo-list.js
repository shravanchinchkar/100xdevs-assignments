/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todos = [];
  }

  //Add the todo into the array
  add(todo) {
    this.todos.push(todo);
  }

  //Delete the todo of specific index
  remove(removeIndex) {
    if (removeIndex < 0 || removeIndex >= this.todos.length) {
      console.error("Invalid Index");
      return this.todos; // Return the todos array unchanged
    } else {
      this.todos = this.todos.filter((item, index) => {
        return index != removeIndex;
      });
      console.log(
        "updated todos after removing todo from",
        removeIndex,
        " index:-",
        this.todos
      );
      return this.todos;
    }
  }

  //Update the todo of specific index
  update(index, updatedTodo) {
    if (index < 0 || index >= this.todos.length) {
      console.error("Index Out of bound");
      return false; // Indicate failure
    } else {
      this.todos[index] = updatedTodo;
    }
  }

  //Print all the todos
  getAll() {
    return this.todos;
  }

  //Return todo of specific index
  get(indexOfTodo) {
    if (indexOfTodo < 0 || indexOfTodo >= this.todos.length) {
      console.error("Invalid Index of Todo");
      return null; // Return null for invalid index
    } else {
      let requiredTodo = this.todos[indexOfTodo];
      console.log("Todo present at ", indexOfTodo, " index is:-", requiredTodo);
      return requiredTodo;
    }
  }

  //Delete all the todos present in the list
  clear() {
    this.todos.length = 0;
    console.log("Todos after clear function is called:-", this.todos);
  }
}
//Create object of Todo class
let obj1 = new Todo();

//following function addes the todos into the list
obj1.add("Complete the JS tasks"); //0
obj1.getAll();

obj1.add("Complete week wise tasks"); //1
obj1.getAll();

obj1.add("Complete the frontEnd Mentor challenges"); //2
obj1.getAll();

// obj1.update(1,"Complete week wise tasks of Harkirat Singhs Course")
// obj1.getAll()

obj1.get(2);
obj1.clear();

// obj1.remove(0);

module.exports = Todo;
