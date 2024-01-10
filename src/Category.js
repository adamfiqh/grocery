// src/Category.js
import React from "react";
import "materialize-css/dist/css/materialize.min.css";

const Category = ({ categories, selectCategory }) => {
  return (
    <div className="card">
      <div className="card-content">
        <span className="card-title">Kategori</span>
        <ul className="collection">
          {categories?.map((category, index) => (
            <li
              key={index}
              className="collection-item"
              onClick={() => selectCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Category;
