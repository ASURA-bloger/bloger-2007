import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import NewsList from "./components/NewsList";

const API_KEY = "99592e52727547e592f0f4b320468d93";

function App() {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState("general");

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Ошибка! статус: ${response.status}`);
      const data = await response.json();
      setArticles(data.articles);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchData(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`
    );
  }, [category]);

  const handleSearch = (query) => {
    fetchData(
      `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`
    );
  };

  return (
    <div className="container">
      <Header />
      <Form category={category} setCategory={setCategory} onSearch={handleSearch} />
      <NewsList articles={articles} />
    </div>
  );
}

export default App;