import React from "react";
import { SvgRubish } from "./svg-component";

export default function TaskFilterButtons({ label, onClick }) {
  if (label === "Clear completed") {
    return (
      <button
        className="taskfilter-panel-btn btn btn-outline-danger"
        onClick={onClick}
      >
        <SvgRubish />
        {label}
      </button>
    );
  }
  return (
    <button
      className="taskfilter-panel-btn btn btn-outline-danger"
      onClick={onClick}
    >
      {label}
    </button>
  );
}
