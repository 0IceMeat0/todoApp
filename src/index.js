import React, { StrictMode, Component } from "react";
import { createRoot } from "react-dom/client";
import "./style/button.scss";
import "./style/tasklist.scss";
import "./style/task.scss";
import "./style/app-header.scss";
import "./style/basesettings.scss";
import "./style/searchpanel.scss";
import "./style/taskfilter.scss";
import "./style/taskbuttons.scss";
import AppHeader from "./components/app-header";
import TaskList from "./components/taskList";
import NewTaskForm from "./components/newTaskForm";
import Taskfilter from "./components/taskFilter";

export default class App extends Component {
  maxId = 1;

  state = {
    todoData: [],
  };

  statusFilter = (text) => {
    if (text === "done") {
      this.setState(({ todoData }) => {
        for (const el of todoData) {
          if (el.done === false) {
            el.vision = false;
          } else el.vision = true;
        }
        return {
          todoData: this.state.todoData,
        };
      });
    }
    if (text === "all") {
      this.setState(({ todoData }) => {
        for (const el of todoData) {
          if (el.vision === false) {
            el.vision = true;
          }
        }
        return {
          todoData: this.state.todoData,
        };
      });
    }
    if (text === "active") {
      this.setState(({ todoData }) => {
        for (const el of todoData) {
          if (el.done === true) {
            el.vision = false;
          } else el.vision = true;
        }
        return {
          todoData: this.state.todoData,
        };
      });
    }
  };

  onToggleEdit = (id) => {
    this.setState(({ todoData }) => {
      const inx = todoData.findIndex((el) => el.id === id);
      const oldTask = todoData[inx];
      const newTask = { ...oldTask, edited: !oldTask.edited };
      const before = todoData.slice(0, inx);
      const after = todoData.slice(inx + 1);
      const newArr = [...before, newTask, ...after];
      if (!oldTask.done)
        return {
          todoData: newArr,
        };
    });
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      const inx = todoData.findIndex((el) => el.id === id);

      const oldItem = todoData[inx];
      const newItem = { ...oldItem, done: !oldItem.done };
      const before = todoData.slice(0, inx);
      const after = todoData.slice(inx + 1);
      const newArray = [...before, newItem, ...after];
      return {
        todoData: newArray,
      };
    });
  };

  clearCompleted = () => {
    this.setState(({ todoData }) => {
      const updatedToDoData = todoData.filter((task) => !task.done);

      updatedToDoData.forEach((task) => {
        if (task.done) {
          this.deleteItem(task.id);
        }
      });

      return {
        todoData: updatedToDoData,
      };
    });
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const inx = todoData.findIndex((el) => el.id === id);
      todoData.splice(inx, 1);
      const before = todoData.slice(0, inx);
      const after = todoData.slice(inx);
      const newArray = [...before, ...after];
      return {
        todoData: newArray,
      };
    });
  };

  addItem = (text) => {
    if (text.length !== 0 && text.split("")[0] !== " ") {
      const newItem = this.createToDoItem(text);
      this.setState(({ todoData }) => {
        const newArray = [...todoData, newItem];
        return {
          todoData: newArray,
        };
      });
    }
  };

  createToDoItem(label) {
    return {
      label,
      done: false,
      id: this.maxId++,
      edited: false,
      vision: true,
      date: new Date(),
    };
  }

  render() {
    const doneCount = this.state.todoData.filter((el) => el.done).length;
    const todoCount = this.state.todoData.length - doneCount;
    return (
      <div>
        <AppHeader done={doneCount} todo={todoCount} />
        <NewTaskForm onAdd={this.addItem} />
        <TaskList
          todos={this.state.todoData}
          onDeleted={this.deleteItem}
          onToggleDone={this.onToggleDone}
          onToggleEdit={this.onToggleEdit}
        />
        <Taskfilter
          doneCount={doneCount}
          statusFilter={this.statusFilter}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
