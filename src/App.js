// App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import PostList from "./components/PostList";
import CommentList from "./components/CommentList";
import FilterForm from "./components/Filter";

function App() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setPosts(response.data);
        setFilteredPosts(response.data);
      });
  }, []);

  // Handle post selection
  const handlePostSelect = (post) => {
    setSelectedPost(post);
  };

  // Handle post filtering
  const handleFilter = (postId) => {
    if (postId === "") {
      setFilteredPosts(posts);
    } else {
      const filtered = posts.filter((post) => post.id === parseInt(postId));
      setFilteredPosts(filtered);
    }
  };

  return (
    <div className="App">
      <FilterForm onFilter={handleFilter} />
      <PostList posts={filteredPosts} onSelect={handlePostSelect} />
      <CommentList selectedPost={selectedPost} />
    </div>
  );
}

export default App;
