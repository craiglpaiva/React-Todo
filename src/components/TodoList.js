// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";
import './Todo.css'

const List = props => {
    return (
        <ul>
            {props.list.map(toDo => {
                return (
                    <Todo handler={props.handler} toDo={toDo} key={Math.random()} />
                )
            })}
        </ul>
    );
};

export default List;