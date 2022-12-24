import React from "react";
import "./App.css";
import CrudAxiosExample from "./pages/crud-axios-example/crud-axios-example";
import Form from "./pages/form/Form";
import TodoApp from "./pages/todo-app/TodoApp";
import Hook from "./pages/hooks/Hook";
import TodoHook from "./pages/todo-hook/TodoHook";
import EffectHook from "./components/EffectHooks/EffectHook";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }

  render() {
    return (
      <>
        {/* <CrudAxiosExample /> */}
        {/* <Form /> */}
        {/* <TodoApp /> */}
        {/* <Hook/> */}
        <TodoHook/>
        {/* <EffectHook/> */}
      </>
    );
  }
}

export default App;
