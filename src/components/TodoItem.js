import { Component } from "../common/Component.js";
import { TodoContext } from "../contexts/TodoContext.js";

export class TodoItem extends Component {
  // constructor(props) {
  //   super(props)

  // }


  render() {
    const { todo } = this.props;

    const todoElement = document.createElement('li');
    todoElement.className = "todo-item";
    if (todo.completed) {
      todoElement.classList.add('completed');
    }

    todoElement.innerHTML = `
      <span>${todo.text}</span>
      <div>
        <button class="mark-btn">${todo.completed ? 'Mark Incomplete' : 'Mark Completed'}</button>
        <button class="delete-btn">Delete</button>
      </div>
    `;

    const markButton = todoElement.querySelector('.mark-btn');
    markButton.addEventListener('click', () => {
      TodoContext.toggleCompleted(todo.id);
    });

    const deleteButton = todoElement.querySelector('.delete-btn');
    deleteButton.addEventListener('click', () => {
      TodoContext.deleteTodo(todo.id);
    });

    return todoElement;
  }

  // editTodo() {console.log('edit todo to attach `.completed` class')}
  // deleteTodo() {console.log('delete todo')}

  // handleAddTodo() {
  //   this.props.addTodo('hi')
  // }
}