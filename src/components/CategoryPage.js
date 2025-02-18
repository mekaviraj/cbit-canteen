import React from "react";
import "./CategoryPage.css"; // Import the CSS file

const CategoryPage = () => {
  // Sample data for food categories
  const categories = [
    { id: 1, name: "Tea", image: "tea.jpg" },
    { id: 2, name: "Lunch", image: "lunch.jpg" },
    { id: 3, name: "Breakfast", image: "breakfast.jpg" },
    { id: 4, name: "Fast Food", image: "fast-food.jpg" },
    { id: 5, name: "Beverages & Ice Cream", image: "beverages.jpg" },
    { id: 6, name: "Chocolates & Chips", image: "chocolates.jpg" },
    { id: 7, name: "Fruits", image: "fruits.jpg" },
    { id: 8, name: "Bakery", image: "bakery.jpg" },
    { id: 9, name: "Snacks", image: "snacks.jpg" },
  ];

  return (
    <div className="category-page">
      <h1>Food Categories</h1>
      <div className="category-grid">
        {categories.map((category) => (
          <div key={category.id} className="category-box">
            <img
              src={category.image}
              alt={category.name}
              className="category-image"
            />
            <h2 className="category-name">{category.name}</h2>
            <div className="arrow-icon">→</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;