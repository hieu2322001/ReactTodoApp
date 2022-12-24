import React, { Component } from 'react'

import './TodoFilter.css'

export default class TodoFilter extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <footer className="footer" data-reactid=".0.2">
                <span className="todo-count" data-reactid=".0.2.0">
                    <strong data-reactid=".0.2.0.0">1</strong>
                    <span data-reactid=".0.2.0.1"> </span>
                    <span data-reactid=".0.2.0.2">item</span>
                    <span data-reactid=".0.2.0.3"> left</span>
                </span>
                <ul className="filters" data-reactid=".0.2.1">
                    <li data-reactid=".0.2.1.0">
                        <a className='selected' data-reactid=".0.2.1.0.0">
                            All
                        </a>
                    </li>
                    <span data-reactid=".0.2.1.1"> </span>
                    <li data-reactid=".0.2.1.2" onClick={this.props.handleTodoListActive}>
                        <a href="#/" data-reactid=".0.2.1.2.0">
                            Active
                        </a>
                    </li>
                    <span data-reactid=".0.2.1.3"> </span>
                    <li data-reactid=".0.2.1.4" >
                        <a href="#/" data-reactid=".0.2.1.4.0">
                            Completed
                        </a>
                    </li>
                </ul>
            </footer>
        )
    }
}