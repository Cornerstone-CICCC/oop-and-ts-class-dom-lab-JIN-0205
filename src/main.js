import { App } from "./components/App.js";
import { TodoContext } from "./contexts/TodoContext.js";

const root = document.querySelector('#app')

//make description
const app = new App()

app.mount(root)