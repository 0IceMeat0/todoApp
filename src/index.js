import React, { StrictMode, useState } from "react";
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

export default function App() {

  const [todoData, setTodoData] = useState([]);
  const [maxId, setMaxId] = useState(1);
  
  const createToDoItem = (label, min, sec) => ({
    label,
    done: false,
    id: maxId,
    edited: false,
    vision: true,
    data: new Date(),
    min,
    sec,
  });

  const addItem = (text, min, sec) => {
    if (text.trim() !== "") {
      const newItem = createToDoItem(text, min, sec);
      setTodoData((prevData) => [...prevData, newItem]);
      setMaxId(maxId + 1);
    }
  };

  const deleteItem = (id) => {
    setTodoData((prevData) => prevData.filter((item) => item.id !== id));
  };

  const toggleStatus = (id, status) => {
    setTodoData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, [status]: !item[status] } : item
      )
    );
  };

  const statusFilterParametr = (get) => {
    setTodoData((prevData) =>
      prevData.map((item) => {
        if (get === 1) {
          return item.done ? { ...item, vision: true } : { ...item, vision: false };
        }
        if (get === 2) {
          return { ...item, vision: true };
        }
        if (get === 3) {
          return item.done ? { ...item, vision: false } : { ...item, vision: true };
        }
        return item;
      })
    );
  };

  const statusFilter = (text) => {
    if (text === "done") {
      statusFilterParametr(1);
    } else if (text === "all") {
      statusFilterParametr(2);
    } else if (text === "active") {
      statusFilterParametr(3);
    }
  };

  const toggleEdit = (id) => {
    toggleStatus(id, "edited");
  };

  const toggleDone = (id) => {
    toggleStatus(id, "done");
  };

  const clearCompleted = () => {
    setTodoData((prevData) => prevData.filter((item) => !item.done));
  };

  const doneCount = todoData.filter((el) => el.done).length;
  const todoCount = todoData.length - doneCount;
  return (
    <div>
      <AppHeader done={doneCount} todo={todoCount} />
      <NewTaskForm onAdd={addItem} />
      <TaskList
        todos={todoData}
        onDeleted={deleteItem}
        onToggleDone={toggleDone}
        onToggleEdit={toggleEdit}
      />
      <Taskfilter
        doneCount={doneCount}
        statusFilter={statusFilter}
        clearCompleted={clearCompleted}
      />
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
