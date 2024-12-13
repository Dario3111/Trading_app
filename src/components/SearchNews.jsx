import React, { useState } from "react";
import axios from "axios";

const SearchNews = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    if (query.trim() === "") return;
    onSearch(query);
    setQuery("");
  };

  return (
    <form onSubmit={handleSearch} className="flex gap-2">
      <input
        type="text"
        placeholder="Buscar noticias de acciones..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-2 border rounded-md"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Buscar
      </button>
    </form>
  );
};

export default SearchNews;
