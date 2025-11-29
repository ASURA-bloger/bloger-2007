import React, { useState } from "react";
import "./Form.css";
function Form({ category, setCategory, onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") return;
    onSearch(query);
    setQuery("");
  };

  return (
    <form className="main__form" onSubmit={handleSubmit}>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="business">business</option>
        <option value="entertainment">entertainment</option>
        <option value="general">general</option>
        <option value="health">health</option>
        <option value="science">science</option>
        <option value="sports">sports</option>
        <option value="technology">technology</option>
      </select>
      <input
        type="text"
        placeholder="News keyword"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;