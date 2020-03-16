import React from "react";
import './Todo.css';

const Todo = props => {
    return (
        <li onClick={() => props.handler(props.toDo.id)} style={props.toDo.completed ? { textDecoration: 'line-through' } : null}>
            {props.toDo.task}
        </li>
    )
}

export default Todo;
