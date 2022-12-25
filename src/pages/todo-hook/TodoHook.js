import React, { useEffect, useState } from "react";
import "../todo-app/TodoApp.css";
import axios from "axios";
import TodoHookFilter from "../../components/TodoHookFilter/TodoHookFilter";
import ListTodoHook from "../../components/ListTodoHook/ListTodoHook";

export const BUTTON = {
    all: "all",
    active: "active",
    complete: "conplete"
}

const TodoHook = () => {
    const [listTodo, setListTodo] = useState([])
    const [tab, setTab] = useState(BUTTON.all);

    const fetchTodoList = async () => {
        const { data } = await axios.get("https://63a44dab2a73744b00736eeb.mockapi.io/list")
        setListTodo(data);
    }
    useEffect(() => {
        fetchTodoList()
    }, [])

    const handleCreateTodo = async (event) => {
        const value = event.target.value;
        if (event.key === 'Enter') {
            await axios.post("https://63a44dab2a73744b00736eeb.mockapi.io/list", {
                id: Math.random(),
                content: value,
                isActive: true,
                isCompleted: false,
            })
        }
        fetchTodoList();
    }

    const handleDeleteTodo = async (item) => {
        await axios.delete(`https://63a44dab2a73744b00736eeb.mockapi.io/list/${item.id}`)
        fetchTodoList();
    }

    const handleOnchangeCheckboxItem = async (item) => {
        await axios.put(`https://63a44dab2a73744b00736eeb.mockapi.io/list/${item.id}`, {
            isComplete: !item.isComplete
        });
        fetchTodoList();
    }

    const handleOnAllCheckbox = () => {
        const findUncheck = listTodo.find(el => !el.isComplete);
        if (findUncheck) {
            const newList = listTodo.map((el) => {
                return {
                    ...el,
                    isComplete: true
                }
            });
            setListTodo(newList);
        } else {
            const newList = listTodo.map((el) => {
                return {
                    ...el,
                    isComplete: false
                }
            });
            setListTodo(newList);
        }
    }
    const isAllCheckbox = () => {
        const findUncheck = listTodo.find(el => !el.isComplete);
        if (listTodo.length === 0) {
            return findUncheck;
        }
        return !findUncheck;
    }
    const onShowList = (tabshow) => {
        setTab(tabshow);
    }
    const getShowListTodo = () => {
        if (tab === BUTTON.all) {
            return listTodo;
        } else if (tab === BUTTON.active) {
            return listTodo.filter(el => el.isComplete === false);
        } else {
            return listTodo.filter(el => el.isComplete === true);
        }
    }


    return (
        <section className="todoapp">
            <div data-reactid=".0">
                <header className="header" data-reactid=".0.0">
                    <h1 data-reactid=".0.0.0">todos</h1>
                    <input
                        className="new-todo"
                        placeholder="What needs to be done?"
                        value={listTodo.content}
                        data-reactid=".0.0.1"
                        onKeyDown={handleCreateTodo}
                    />
                </header>
                <ListTodoHook
                    listTodo={listTodo}
                    handleDeleteTodo={handleDeleteTodo}
                    handleOnchangeCheckboxItem={handleOnchangeCheckboxItem}
                    handleOnAllCheckbox={handleOnAllCheckbox}
                    getShowListTodo={getShowListTodo}
                    isAllCheckbox={isAllCheckbox}
                />
                <TodoHookFilter
                    listTodo={listTodo}
                    onShowList={onShowList}
                    tab={tab}
                />
            </div>
        </section>
    );
};

export default TodoHook;