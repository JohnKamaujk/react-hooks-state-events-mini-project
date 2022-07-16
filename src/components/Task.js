import React from "react";

function Task({ text, category }) {
  function handleDelete(event) {
    event.target.parentNode.remove();
  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={handleDelete} className="delete">
        X
      </button>
    </div>
  );
}

export default Task;
