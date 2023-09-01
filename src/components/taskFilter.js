import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Taskfilter extends Component {
  render() {
    return (
      <div className="taskfilter-buttons">
        <button
          className="taskfilter-panel-btn btn btn-outline-danger"
          onClick={() => this.props.statusFilter("all")}
        >
          All
        </button>
        <button
          className="taskfilter-panel-btn btn btn-outline-danger"
          onClick={() => this.props.statusFilter("active")}
        >
          ACTIVE
        </button>
        <button
          className="taskfilter-panel-btn btn btn-outline-danger"
          onClick={() => this.props.statusFilter("done")}
        >
          DONE
        </button>
        <button
          className="taskfilter-panel-btn btn btn-outline-danger"
          onClick={() => this.props.clearCompleted()}
        >
          <i className="bi bi-trash">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-trash"
              viewBox="0 0 16 16"
            >
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
              <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
            </svg>
          </i>
          Clear completed
        </button>
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
