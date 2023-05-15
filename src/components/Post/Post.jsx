import React from "react";

function Post({ post }) {
  console.log(post);
  return (
    <div className="post">
      <h2>{post.aprasymas}</h2>
      <p>{post.kaina} €</p>
    </div>
  );
}

export default Post;
