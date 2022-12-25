import React from 'react'
import { BUTTON } from '../../pages/todo-hook/TodoHook';

const TodoHookFilter = (props) => {
  const numberOf = props.listTodo.reduce(function (accumulator, currentValue) {
    if (currentValue.isComplete === false) {
      return accumulator + 1;
    }
    return accumulator;

  }, 0);
  return (
    <footer className="footer" data-reactid=".0.2">
      <span className="todo-count" data-reactid=".0.2.0">
        <strong data-reactid=".0.2.0.0">{numberOf}</strong>
        <span data-reactid=".0.2.0.1"> </span>
        <span data-reactid=".0.2.0.2">item</span>
        <span data-reactid=".0.2.0.3"> left</span>
      </span>
      <ul className="filters" data-reactid=".0.2.1">
        <li data-reactid=".0.2.1.0">
          <a
            className={props.tab === BUTTON.all ? "selected" : ""}
            href="#/"
            data-reactid=".0.2.1.0.0"
            onClick={() => {
              props.onShowList(BUTTON.all)
            }}
          >
            All
          </a>
        </li>
        <span data-reactid=".0.2.1.1"> </span>
        <li data-reactid=".0.2.1.2">
          <a
            className={props.tab === BUTTON.active ? "selected" : ""}
            href="#/"
            data-reactid=".0.2.1.2.0"
            onClick={() => {
              props.onShowList(BUTTON.active)
            }}
          >
            Active
          </a>
        </li>
        <span data-reactid=".0.2.1.3"> </span>
        <li data-reactid=".0.2.1.4">
          <a
            className={props.tab === BUTTON.complete ? "selected" : ""}
            href="#/"
            data-reactid=".0.2.1.4.0"
            onClick={() => {
              props.onShowList(BUTTON.complete)
            }}
          >
            Completed
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default TodoHookFilter