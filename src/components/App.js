import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  // All possible tasks from data and user-submitted
  const [allTasks, setAllTasks] = useState(TASKS);
  //filtered tasks
  const [tasksToDisplay, setTasksToDisplay] = useState(allTasks);
  const [newDetails, setNewDetails] = useState("");
  const [newCategory, setNewCategory] = useState("Code");

  function handleButton(event) {
    event.target.parentNode.childNodes.forEach((x) => (x.className = ""));
    event.target.className = "selected";
    setTasksToDisplay(
      allTasks.filter((task) => {
        if (event.target.textContent === "All") {
          return true;
        }
        return task.category === event.target.textContent;
      })
    );
  }

  function handleTaskFormSubmit(event) {
    event.preventDefault();
    const newTask = {
      text: newDetails,
      category: newCategory,
    };

    setTasksToDisplay([...tasksToDisplay, newTask]);
    setAllTasks([...allTasks, newTask]);

    setNewCategory("Code");
    setNewDetails("");
  }
  function handleDetailsChange(event) {
    setNewDetails(event.target.value);
    console.log(newDetails);
  }

  function handleCategoryChange(event) {
    setNewCategory(event.target.value);
    console.log(newCategory);
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onButtonClick={handleButton} />
      <NewTaskForm
        categories={CATEGORIES}
        newCategory={newCategory}
        newDetails={newDetails}
        onTaskFormSubmit={handleTaskFormSubmit}
        onDetailsChange={handleDetailsChange}
        onCategoryChange={handleCategoryChange}
      />
      <TaskList tasks={tasksToDisplay} />
    </div>
  );
}

export default App;
