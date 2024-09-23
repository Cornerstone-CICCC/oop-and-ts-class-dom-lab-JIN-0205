

export const TodoContext = {
  todos: [],
  subscribers: [],

  addTodo(text) {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false
    }
    this.todos.push(newTodo)
    this.notify()
  },

  deleteTodo(id) {
    this.todos = this.todos.filter(todo => todo.id !== id)
    this.notify()
  },

  toggleCompleted(id) {
    this.todos = this.todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
    this.notify()
  },

  subscribe(callback) {
    this.subscribers.push(callback)
  },

  notify() {
    this.subscribers.forEach(callback => callback(this.todos))
  }

}