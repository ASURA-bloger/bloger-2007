import React from "react";
import "./NewsList.css";
import NewsCard from "./NewsCard"; 
function NewsList({ articles }) {
  return (
    <div className="main__content">
      {articles.map((post, idx) => (
        <NewsCard key={idx} post={post} />
      ))}
    </div>
  );
}

export default NewsList;