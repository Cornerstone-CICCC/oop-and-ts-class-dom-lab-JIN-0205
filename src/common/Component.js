export class Component {
  constructor(props = {}) {
    this.props = props
    this.element = null
    // this.todoContext = document.querySelector('#todo-input')
  }

  render() {
    throw new Error('Component should have a mount() method!')
  }

  mount(container) {
    this.element = this.render()
    container.appendChild(this.element)
  }
}