import React, { Component } from "react";
import PropTypes from "prop-types";

export default class NewTaskForm extends Component {
  state = {
    label: "",
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAdd(this.state.label);
    this.setState({
      label: "",
    });
  };

  render() {
    return (
      <div className="search">
        <form className="search-panel" onSubmit={this.onSubmit}>
          <input
            onChange={this.onLabelChange}
            className="search-input"
            placeholder="What needs to be done"
            value={this.state.label}
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
}

NewTaskForm.defaultProps = {
  onAdd: () => {},
};

NewTaskForm.propTypes = {
  onAdd: PropTypes.func,
};
