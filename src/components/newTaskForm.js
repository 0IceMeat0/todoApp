import React, { useState } from "react";
import PropTypes from "prop-types";

function NewTaskForm({ onAdd }) {
  const [text, setText] = useState("");
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);

  const onMinChange = (e) => {
    const inputValue = e.target.value;
    const isNumeric = /^\d+$/.test(inputValue);
    const newMin = parseInt(inputValue, 10);

    if (isNumeric && newMin >= 0 && newMin <= 60) {
      setMin(newMin);
      if (newMin === 0 && sec === 0) {
        setSec(0); 
      }
    }
  };

  const onSecChange = (e) => {
    const inputValue = e.target.value;
    const isNumeric = /^\d+$/.test(inputValue);
    const newSec = parseInt(inputValue, 10);

    if (isNumeric && newSec >= 0 && newSec <= 60) {
      setSec(newSec);
      if (newSec === 0 && min === 0) {
        setMin(0); 
      }
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onAdd(text, min, sec);
    setText("");
    setMin(0);
    setSec(0);
  };

  return (
    <div className="search">
      <form className="search-panel" onSubmit={onSubmit}>
        <input
          onChange={(e) => setText(e.target.value)}
          className="search-input"
          placeholder="What needs to be done"
          value={text}
          required
        />
        <input
          onChange={(e) => onMinChange(e)}
          className="search-input-timer"
          placeholder="Min"
          value={min || ""}
      
        />
        <input
          onChange={(e) => onSecChange(e)}
          className="search-input-timer"
          placeholder="Sec"
          value={sec || ""}
          required
        />
        <div className="task-add-form">
          <button className="taskfilter-panel-btn btn btn-outline-danger">
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
}

NewTaskForm.defaultProps = {
  onAdd: () => {},
};

NewTaskForm.propTypes = {
  onAdd: PropTypes.func,
};

export default NewTaskForm;