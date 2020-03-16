import React from 'react';
import List from './components/TodoList';
import TodoForm from "./components/TodoForm";
import './components/Todo.css';


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          task: "Pay the bills",
          id: 12,
          completed: false
        },
        {
          task: "Feed the pets",
          id: 13,
          completed: false
        },
        {
          task: "Go grocery shopping",
          id: 14,
          completed: false
        },
        {
          task: "Code",
          id: 15,
          completed: false
        },
        {
          task: "Play Warhammer",
          id: 16,
          completed: false
        }
      ],
      toDo: ""
    };
  };

  trackInputHandler = event => {
    this.setState({ toDo: event.target.value });
  };

  addToDo = event => {
    event.preventDefault();
    const toDos = this.state.list;
    toDos.push({ task: this.state.toDo, id: Date.now(), completed: false });
    this.setState({ list: toDos });
    this.setState({ toDo: "" });
  }

  toggleCompleted = id => {
    console.log("toggle line through");
    let list = this.state.list.slice();
    list = list.map(toDo => {
      if (toDo.id === id) {
        toDo.completed = !toDo.completed;
        return toDo;
      }
    });
  };

  clearCompleted = event => {
    console.log("clear all")
    event.preventDefault();
    let list = this.state.list.slice();
    list = list.filter(toDo => toDo.completed === false);
    this.setState({ list: list });
  }

  render() {
    console.log(this.toggleCompleted)
    return (
      <div>
        <h1>My Todo App!</h1>
        <List
          list={this.state.list}
          handler={this.toggleCompleted} />
        <TodoForm
          changeHandler={this.trackInputHandler}
          value={this.state.toDo}
          submitHandler={this.addToDo}
          clearHandler={this.clearCompleted} />
      </div>
    );
  }
}

export default App;
