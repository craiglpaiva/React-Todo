import React from "react";

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoName: ""
        };
    }

    //handleChanges = ({ target: { name, value } }) => {
    handleChanges = e => {
        // update state with each keystroke
        this.setState({ todoName: e.target.value });
    };

    // class property to submit form
    handleAddItem = e => {
        e.preventDefault();
        this.props.addTask(this.state.todoName);
        // update state of local component here
    };

    render() {
        console.log("rendering form");
        return (
            <form onSubmit={this.handleAddItem}>
                {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
                <input
                    type="text"
                    name="item"
                    value={this.state.todoName}
                    onChange={this.handleChanges}
                />
                <button>Add</button>
            </form>
        );
    }
}

export default TodoForm;
