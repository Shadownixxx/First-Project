import React, { Component } from "react";

import AddTask from "./AddTask.js";
import TaskList from "./TaskList.js";

class ToDoPage extends Component {
  counter = 6;
  state = {
    tasks: [
      {
        id: 0,
        text: "Przeczytać wiedźmina",
        date: "2020-02-15",
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 1,
        text: "Nauczyć się Reacta",
        date: "2019-12-15",
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 2,
        text: "wymyć podłogę",
        date: "2020-02-25",
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 3,
        text: "Wyprowadzić psa",
        date: "2020-02-15",
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 4,
        text: "Utrzymać wagę 80 kg!",
        date: "2020-03-15",
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 5,
        text: "pójść na siłownię",
        date: "2020-04-15",
        important: false,
        active: true,
        finishDate: null
      }
    ]
  };

  deleteTask = id => {
    // METODA NR 1
    // const tasks = [...this.state.tasks];
    // const index = tasks.findIndex(task => task.id === id);
    // tasks.splice(index, 1);
    // this.setState({ tasks });

    let tasks = [...this.state.tasks];
    tasks = tasks.filter(task => task.id !== id);
    console.log(tasks);
    this.setState({ tasks });
  };

  changeTaskStatus = id => {
    const tasks = Array.from(this.state.tasks);
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });
    this.setState({ tasks });
  };

  addTask = (text, date, checked) => {
    const task = {
      id: this.counter,
      text: text,
      date: date,
      important: checked,
      active: true,
      finishDate: null
    };
    this.counter++;

    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }));
    return true;
  };

  render() {
    return (
      <div>
        <AddTask add={this.addTask} />
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeTaskStatus}
        />
      </div>
    );
  }
}
export default ToDoPage;
