import React from "react";
import PropTypes from "prop-types";

import Task from "./task";

function TaskList({ todos, onDeleted, onToggleDone, onToggleEdit }) {
  const elements = todos.map((item) => {
    const { id, vision, ...itemProps } = item;
    let className = "list-group-item";
    if (vision === false) className += " none";
    return (
      <li key={id} className={className}>
        <Task
          {...itemProps}
          onDeleted={() => onDeleted(id)}
          onToggleDone={() => onToggleDone(id)}
          onToggleEdit={() => onToggleEdit(id)}
        />
      </li>
    );
  });

  return <ul className="list-group todo-list">{elements}</ul>;
}

TaskList.defaultProps = {
  todos: [],
  onDeleted: () => {},
  onToggleDone: () => {},
  onToggleEdit: () => {},
};

TaskList.prototype = {
  todos: PropTypes.array,
  onDeleted: PropTypes.func,
  onToggleDone: PropTypes.func,
  onToggleEdit: PropTypes.func,
};

export default TaskList;
