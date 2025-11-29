import React from "react";
import "./NewsCard.css";

function NewsCard({ post }) {
  return (
    <div
      className="main__post"
      style={
        post.urlToImage
          ? { background: `url(${post.urlToImage}) center/cover no-repeat` }
          : {}
      }
    >
      {!post.urlToImage && <h3 className="main__post-warning">Image not found</h3>}

      <div className="main__post-text">
        <div className="main__post-title">{post.title}</div>
        <a
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
          className="main__post-link"
        >
          O
        </a>
      </div>
    </div>
  );
}

export default NewsCard;