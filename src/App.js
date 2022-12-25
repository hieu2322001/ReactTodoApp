import React from "react";
import "./App.css";
import CrudAxiosExample from "./pages/crud-axios-example/crud-axios-example";
import TodoApp from "./pages/todo-app/TodoApp";
import TodoHook from "./pages/todo-hook/TodoHook";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }

  render() {
    return (
      <>
        <TodoHook />
      </>
    );
  }
}

export default App;
