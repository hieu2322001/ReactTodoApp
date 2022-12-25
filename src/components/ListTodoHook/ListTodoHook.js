import React from 'react';

const ListTodoHook = (props) => {
    const listTodoCheck = props.getShowListTodo()
    const isAllCheck = props.isAllCheckbox()
    return (
        <section className="main" data-reactid=".0.1">
            <input
                id="toggle-all"
                className="toggle-all"
                type="checkbox"
                checked={isAllCheck || false}
                data-reactid=".0.1.0"
                onChange={() => {
                    props.handleOnAllCheckbox()
                }}
            />
            <label htmlFor="toggle-all" data-reactid=".0.1.1" />
            <ul className="todo-list" data-reactid=".0.1.2">
                {listTodoCheck.map((item, index) => {
                    return (
                        <li
                            className=""
                            data-reactid=".0.1.2.$bb632cfd-6960-41f0-a68e-5387c4a20654"
                            key={index}
                        >
                            <div
                                className="view"
                                data-reactid=".0.1.2.$bb632cfd-6960-41f0-a68e-5387c4a20654.0"
                            >
                                <input
                                    className="toggle"
                                    type="checkbox"
                                    checked={item.isComplete || false}
                                    data-reactid=".0.1.2.$bb632cfd-6960-41f0-a68e-5387c4a20654.0.0"
                                    onClick={() => {
                                        props.handleOnchangeCheckboxItem(item)
                                    }}
                                />
                                <label data-reactid=".0.1.2.$bb632cfd-6960-41f0-a68e-5387c4a20654.0.1">
                                    <span className={item.isComplete === true ? "text-content" : ""}>
                                        {item.content}
                                    </span>
                                </label>
                                <button
                                    className="destroy"
                                    data-reactid=".0.1.2.$bb632cfd-6960-41f0-a68e-5387c4a20654.0.2"
                                    onClick={() => {
                                        props.handleDeleteTodo(item)
                                    }}
                                />
                            </div>
                            <input
                                className="edit"
                                defaultValue="ăn sáng"
                                data-reactid=".0.1.2.$bb632cfd-6960-41f0-a68e-5387c4a20654.1"
                            />
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default ListTodoHook; 