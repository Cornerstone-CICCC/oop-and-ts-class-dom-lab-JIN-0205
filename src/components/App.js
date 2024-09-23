import { Component } from "../common/Component.js";
import { TodoContext } from "../contexts/TodoContext.js";
import { AddTodo } from "./AddTodo.js";
import { TodoList } from "./TodoList.js";

export class App extends Component {
  // constructor(props) {
  //   super(props)
  // }
  render() {
    const container = document.createElement('div')
    container.className = 'container'
    container.innerHTML = `
      <h1>My To Dos</h1>
      <div id="wrapper-add"></div>
      <div id="wrapper-todos"></div>
    `

    const add = new AddTodo()
    const todos = new TodoList()
    // const cart = new Cart({ cartContext: this.props.cartContext }).render()
    // const productList = new ProductList({ cartContext: this.props.cartContext })

    add.mount(container.querySelector('#wrapper-add'));
    todos.mount(container.querySelector('#wrapper-todos'));

    return container;
  }
}