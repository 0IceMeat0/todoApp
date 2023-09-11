/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { SvgCloser, SvgReduce, SvgAccept } from "./svg-component";

export default class Task extends Component {
  state = {
    label: this.props.label,
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  render() {
    const { onDeleted, onToggleDone, done, edited, onToggleEdit } = this.props;

    let classNames = "task-item";
    if (done) {
      classNames += " done";
    }
    if (edited)
      return (
        <form className="edited" onSubmit={(e) => e.preventDefault()}>
          <input
            className="edited__input"
            value={this.state.label}
            onChange={this.onLabelChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                this.props.onToggleEdit();
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
    return (
      <div className="task">
        <div className={classNames}>
          <input type="checkbox" onClick={onToggleDone} />
          <div className="text">{this.state.label}</div>
        </div>
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
}

Task.defaultProps = {
  onDeleted: () => {},
  onToggleDone: () => {},
  done: false,
  edited: false,
  onToggleEdit: () => {},
};
Task.propTypes = {
  onDeleted: PropTypes.func,
  onToggleDone: PropTypes.func,
  done: PropTypes.bool,
  edited: PropTypes.bool,
  onToggleEdit: PropTypes.func,
};
