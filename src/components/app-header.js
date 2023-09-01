import React from "react";
import PropTypes from "prop-types";

function AppHeader({ todo, done }) {
  return (
    <div className="app-header">
      <h1 className="app-header-title">ToDo List</h1>
      <span className="app-header-status">
        {todo} more to do, {done} done
      </span>
    </div>
  );
}
AppHeader.defaultProps = {
  todo: 0,
  done: 0,
};
AppHeader.prototype = {
  todo: PropTypes.number,
  done: PropTypes.number,
};
export default AppHeader;
