import React from "react";
import './Todo.css'


const TodoForm = props => {
    return (
        <div>
            <form>
                <input type="text" placeholder="...Add A Todo" onChange={props.changeHandler} onSubmit={props.submitHandler} value={props.value} />
                <button className="submitButton" onClick={props.submitHandler}>Add Todo</button>
                <button className="clearButton" onClick={props.clearHandler}>Clear When Completed</button>
            </form>
        </div>
    )
}

export default TodoForm