import { Component } from "../common/Component.js";
import { TodoContext } from "../contexts/TodoContext.js";
import { TodoItem } from "./TodoItem.js";

export class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };

    TodoContext.subscribe(this.update.bind(this));
  }

  render() {
    const todoListElement = document.createElement('div');
    todoListElement.className = "todo-list";

    const ul = document.createElement('ul');

    this.state.todos.forEach(todo => {
      const todoItem = new TodoItem({ todo }).render();
      ul.appendChild(todoItem);
    });

    todoListElement.appendChild(ul);

    return todoListElement;
  }

  update(todos) {
    this.state.todos = todos;
    if (this.element) {
      this.element.innerHTML = '';
      const newElement = this.render();
      this.element.appendChild(newElement.firstChild);
    }
  }
}