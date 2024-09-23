import { Component } from "../common/Component.js";
import { TodoContext } from "../contexts/TodoContext.js";


export class AddTodo extends Component {
  // constructor(props) {
  //   super(props)

  //   // this.props.todoContext
  // }
  render() {
    const addElement = document.createElement('div')
    addElement.className = "add-todo"
    addElement.innerHTML = `
      <input type="text" id="todo-input" placeholder="Enter task details...">
      <button id="todo-add-btn">Add To Do</button>
    `

    const addBtn = addElement.querySelector('#todo-add-btn');
    const todoInput = addElement.querySelector('#todo-input');

    addBtn.addEventListener('click', () => {
      const text = todoInput.value.trim();
      if (text) {
        TodoContext.addTodo(text);
        todoInput.value = '';
      }

    })

    return addElement;
  }
}

