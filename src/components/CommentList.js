// CommentList.js
import React from "react";
import "../styles/style.css";
function CommentList({ selectedPost }) {
  return (
    <div className="comment-list">
      {selectedPost ? (
        <div>
          <h2>Comments for Post #{selectedPost.id}</h2>
          <ul>
            {selectedPost.comments.map((comment) => (
              <li key={comment.id}>
                <div className="comment">
                  <h4>{comment.name}</h4>
                  <p>{comment.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Select a post to view comments.</p>
      )}
    </div>
  );
}

export default CommentList;
