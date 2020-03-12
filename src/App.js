import React from 'react';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";


const tasks = [
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
  },
]



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      thingsTodo: tasks
    };
  }

  toggleCompleted = todoId => {
    console.log("bk: index.js: App: toggleCompleted: todoId: ", todoId);
    this.setState({
      thingsTodo: this.state.thingsTodo.map(todo => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    });
  };

  addTask = taskName => {
    this.setState({
      thingsTodo: [
        ...this.state.thingsTodo,
        {
          name: taskName,
          id: Date.now(),
          completed: false
        }
      ]
    });
  };

  clearTask = () => {
    console.log("bk: index.js: App: clearTask");
    this.setState({
      thingsTodo: this.state.thingsTodo.filter(task => {
        return !task.completed;
      })
    });
  };

  render() {
    return (
      <div classNAme="App">
        <div classNAme="header">
          <h2>Welcome to your Todo App!</h2>
          <TodoForm
            addTask={this.addTask} />
        </div>
        <TodoList
          thingsTodo={this.state.thingsTodo}
          toggleCompleted={this.toggleCompleted}
          clearTask={this.clearTask}
        />
      </div>
    );
  }
}

export default App;
