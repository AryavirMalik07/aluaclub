import axios from "axios";
// import ForEach from "gltf-pipeline/lib/ForEach";
import React, { useEffect, useState } from "react";
const Comment = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div>
      {data.map((item) => (
        <h1>{item.id}</h1>
      ))}
    </div>
  );
};

export default Comment;
