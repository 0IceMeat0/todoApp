import React, { Component } from "react";
import PropTypes from "prop-types";

export default class NewTaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: "",
      min: "",
      sec: "",
    };
  }

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onMinChange = (e) => {
    const inputValue = e.target.value;
    const isNumeric = /^\d+$/.test(inputValue);
    const secValue = parseInt(inputValue, 10);

    if (isNumeric && secValue >= 0 && secValue <= 60) {
      this.setState({
        min: secValue,
      });
    }
  };

  onSecChange = (e) => {
    const inputValue = e.target.value;
    const isNumeric = /^\d+$/.test(inputValue);
    const secValue = parseInt(inputValue, 10);

    if (isNumeric && secValue >= 0 && secValue <= 60) {
      this.setState({
        sec: secValue,
      });
    }
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { label, min, sec } = this.state;
    this.props.onAdd(label, min, sec);
    this.setState({
      label: "",
      min: "",
      sec: "",
    });
  };

  render() {
    return (
      <div className="search">
        <form className="search-panel" onSubmit={this.onSubmit}>
          <input
            onChange={(e) => this.onLabelChange(e)}
            className="search-input"
            placeholder="What needs to be done"
            value={this.state.label}
            required 
          />
          <input
            onChange={(e) => this.onMinChange(e)}
            className="search-input-timer"
            placeholder="Min"
            value={this.state.min}
            required 
          />
          <input
            onChange={(e) => this.onSecChange(e)}
            className="search-input-timer"
            placeholder="Sec"
            value={this.state.sec}
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
}

NewTaskForm.defaultProps = {
  onAdd: () => {},
};

NewTaskForm.propTypes = {
  onAdd: PropTypes.func,
};




