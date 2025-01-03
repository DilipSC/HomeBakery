import React from "react";
import useFetch from "../hooks/useFetch";

function DataFetchingComponent() {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts");

  if (loading) return  <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {Array.isArray(data) ? (
          data.map((post) => <li key={post.id}>{post.title}</li>)
        ) : (
          <p>No posts available</p>
        )}
      </ul>
    </div>
  );
}

export default DataFetchingComponent;
