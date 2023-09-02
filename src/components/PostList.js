// PostList.js
import React from "react";
import "../styles/style.css";
function PostList({ posts, onSelect }) {
  return (
    <div className="post-list">
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id} onClick={() => onSelect(post)}>
            {/* Handle click event on each post */}
            <div className="post">
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
