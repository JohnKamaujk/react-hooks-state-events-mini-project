import React from "react";

function NewTaskForm({
  categories,
  newCategory,
  newDetails,
  onTaskFormSubmit,
  onDetailsChange,
  onCategoryChange,
}) {
  return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={newDetails}
          onChange={onDetailsChange}
        />
      </label>
      <label>
        Category
        <select name="category" value={newCategory} onChange={onCategoryChange}>
          {categories
            .filter((categ) => categ !== "All")
            .map((categ) => (
              <option key={categ}>{categ}</option>
            ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
