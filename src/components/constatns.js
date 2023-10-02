import React from "react";
import { SvgRubish } from "./svg-component";

export default function TaskFilterButtons({ label, active, onClick }) {
  return (
    <button
      className={`taskfilter-panel-btn btn btn-outline-danger ${
        active ? "active" : ""
      }`}
      onClick={onClick}
    >
      {label === "Clear completed" ? <SvgRubish /> : null}
      {label}
    </button>
  );
}