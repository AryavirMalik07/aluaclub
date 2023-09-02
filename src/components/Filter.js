// FilterForm.js
import React, { useState } from "react";

function FilterForm({ onFilter }) {
  const [postId, setPostId] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setPostId(value);
    onFilter(value); // Call the onFilter prop to filter posts
  };

  return (
    <div className="filter-form">
      <label htmlFor="postId">Filter by Post ID:</label>
      <input
        type="text"
        id="postId"
        name="postId"
        value={postId}
        onChange={handleInputChange}
        placeholder="Enter Post ID"
      />
    </div>
  );
}

export default FilterForm;
