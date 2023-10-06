/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */
import React, {useState } from "react";
import PropTypes from "prop-types";
import { formatDistanceToNow } from "date-fns";
import { SvgCloser, SvgReduce, SvgAccept } from "./svg-component";
import Timer from "./timer";

 function Task({label,
   min,
  sec,
  date,
  onDeleted,
  onToggleDone,
  done,
  edited,
  onToggleEdit }) {

  const [ text, setText] = useState(label);
 
  let classNames = "task-item";
  if (done) {
    classNames += " done";
  } 
 
    if (edited && !done){
      return (
        <form className="edited" onSubmit={(e) => e.preventDefault()}>
          <input
            className="edited__input"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                onToggleEdit(text);
              }
            }}
          />
          <button
            className="btn btn-outline-danger"
            type="button"
            onClick={onToggleEdit}
          >
            <SvgAccept />
          </button>
        </form>
      );
    }
    return (
      <div className="task">
        <div className={classNames}>
          <input type="checkbox" onClick={onToggleDone} />
          <div className="text">{text}</div>
        </div>
        <span className="task__time">
          {`created ${formatDistanceToNow(date, {
            includeSeconds: true,
            addSuffix: true,
          })}`}
        </span>
        <Timer min={min} sec={sec} />
        <div className="task-buttons">
          <button className="btn btn-outline-danger closer" onClick={onDeleted}>
            <SvgCloser />
          </button>
          <button
            className="btn btn-outline-danger render"
            onClick={onToggleEdit}
          >
            <SvgReduce />
          </button>
        </div>
      </div>
    );
  }

Task.defaultProps = {
  onDeleted: () => {},
  onToggleDone: () => {},
  done: false,
  edited: false,
  onToggleEdit: () => {},
  date: new Date(),
};
Task.propTypes = {
  onDeleted: PropTypes.func,
  onToggleDone: PropTypes.func,
  done: PropTypes.bool,
  edited: PropTypes.bool,
  onToggleEdit: PropTypes.func,
  date: PropTypes.any,
};
export default Task;