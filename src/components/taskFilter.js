import React from "react";
import PropTypes from "prop-types";

import TaskFilterButtons from "./constatns";

 function Taskfilter({statusFilter, clearCompleted}) {

    return (
      <div className="taskfilter-buttons">
        <TaskFilterButtons
          label="All"
          onClick={() => statusFilter("all")}
        />
        <TaskFilterButtons
          label="ACTIVE"
          onClick={() => statusFilter("active")}
        />
        <TaskFilterButtons
          label="DONE"
          onClick={() => statusFilter("done")}
        />
        <TaskFilterButtons
          label="Clear completed"
          onClick={() => clearCompleted()}
        />
      </div>
    );
  }
Taskfilter.defaultProps = {
  statusFilter: () => {},
  clearCompleted: () => {},
};
Taskfilter.propTypes = {
  statusFilter: PropTypes.func,
  clearCompleted: PropTypes.func,
};
export default Taskfilter;