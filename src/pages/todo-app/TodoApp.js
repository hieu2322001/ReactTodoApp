import React, { Component } from "react";
import "./TodoApp.css";
import ListTodo from "../../components/TodoAppExample/ListTodo/ListTodo";
import TodoFilter from "../../components/TodoAppExample/TodoFilter/TodoFilter";
import Header from "../../components/TodoAppExample/Header/Header";

export default class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listTodos: [
        { id: 1, content: 'ăn sáng', isActive: true },
        { id: 2, content: 'ăn trưa', isActive: true },
        { id: 3, content: 'ăn tối', isActive: true },
      ],
      checkButton: [],
    };
  }


  deleteItem = (item) => {
    this.setState((prevState) => ({
      ...prevState,
      listTodos: this.state.listTodos.filter((it) => {
        if (it.id !== item.id) {
          return it;
        }
      }),
    }));
  }

  addItem = () => {
    this.setState((prevState) => ({
      ...prevState,
      listTodos: [
        ...prevState.listTodos,
        {
          id: Math.random,
          content: prevState.content,
          isActive: true,
        },
      ],
    }));
  }

  handleContent = (event) => {
    this.setState((prevState) => ({
      ...prevState,
      content: event.target.value,
    }));
  };

  // activeFilter = () => {
  //   this.setState((prevState) => ({
  //     ...prevState,
  //     listTodos: [...prevState.listTodos.filter((it) => {
  //       if (it.isActive === true) {
  //         return it;
  //       }
  //     })],
  //   }));
  // }


  handleChecked = (item) => {
    this.setState((prevState) => ({
      ...prevState,
      listTodos: [
        ...prevState.listTodos.map((el) => {
          if (el.id === item.id) {
            return {
              ...item,
              isActive: !item.isActive
            }
          }
          return el;
        })
      ],
    }))
    console.log(item.isActive)
  }

  // handleTodoListAll = () => {
  //   this.setState((prevState) => ({
  //     ...prevState,
  //     checkButton: "all",
  //   }))
  // } 
  // handleTodoListActive = () => {
  //   this.setState((prevState) => ({
  //     ...prevState,
  //     listTodos: this.state.listTodos.filter((it) => {
  //       if (it.isActive === true) {
  //         this.state.checkButton.push(it);
  //       }
  //     }),
  //   }))
  // }
  // handleTodoListComplete = () => {
  //   this.setState((prevState) => ({
  //     ...prevState,
  //     checkButton: "isComplete",
  //   }))
  // } 

  // showTodoList = () => {
  //   if(this.state.checkButton === 'all') {
  //     return this.state.listTodos;
  //   }
  //   else if(this.state.checkButton === 'isActive') {
  //     return this.state.listTodos.filter((it) => {return it.isActive})
  //   }
  //   else {
  //     return this.state.listTodos.filter((it) => {return !it.isActive})
  //   }
  // }

  render() {
    return (
      <section className="todoapp">
        <div data-reactid=".0">
          <Header
            addItem={this.addItem}
            handleContent={this.handleContent}
          />
          <section className="main" data-reactid=".0.1">
            <input
              id="toggle-all"
              className="toggle-all"
              type="checkbox"
              data-reactid=".0.1.0"
            />
            <label htmlFor="toggle-all" data-reactid=".0.1.1" />
            <ul className="todo-list" data-reactid=".0.1.2">
              {this.state.listTodos.map((item) => {
                return (
                  <ListTodo
                    key={item.id}
                    content={item.content}
                    isActive={item.isActive}
                    deleteItem={() => this.deleteItem(item)}
                    handleChecked={() => this.handleChecked(item)}
                  />
                )
              })}
            </ul>
          </section>

          <TodoFilter
            // checkButton={this.state.checkButton}
            // handleTodoListActive={this.handleTodoListActive()}
          />
        </div>
      </section>
    );
  }
}
