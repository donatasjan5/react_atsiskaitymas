import React, { useState, useEffect } from "react";
import Post from "../Post/Post";
import "./Home.css";

const Home = ({ items, loading }) => {
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : items.length > 0 ? (
        items.map((post) => <Post key={post.id} post={post} />)
      ) : (
        <p>No posts found.</p>
      )}
      <footer>Footer</footer>
    </div>
  );
};

export default Home;
