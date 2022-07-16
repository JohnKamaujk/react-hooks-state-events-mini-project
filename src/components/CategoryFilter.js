import React from "react";

function CategoryFilter({ categories, onButtonClick }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button className="" key={category} onClick={onButtonClick}>
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
