import React, { Component } from "react";
import PropTypes from "prop-types";

import TaskFilterButtons from "./constatns";

export default class Taskfilter extends Component {
  render() {
    return (
      <div className="taskfilter-buttons">
        <TaskFilterButtons
          label="All"
          onClick={() => this.props.statusFilter("all")}
        />
        <TaskFilterButtons
          label="ACTIVE"
          onClick={() => this.props.statusFilter("active")}
        />
        <TaskFilterButtons
          label="DONE"
          onClick={() => this.props.statusFilter("done")}
        />
        <TaskFilterButtons
          label="Clear completed"
          onClick={() => this.props.clearCompleted()}
        />
      </div>
    );
  }
}
Taskfilter.defaultProps = {
  statusFilter: () => {},
  clearCompleted: () => {},
};
Taskfilter.propTypes = {
  statusFilter: PropTypes.func,
  clearCompleted: PropTypes.func,
};
