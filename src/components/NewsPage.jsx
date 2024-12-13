import React, { useState } from "react";
import axios from "axios";
import SearchNews from "./SearchNews";
import TrendingTopics from "./TrendingTopics";

const NewsPage = () => {
  const [articles, setArticles] = useState([]);

  const fetchNews = async (query) => {
    const apiKey = "a72c02a6b71f4ee0a483623ef34a3a73"; // Reemplaza con tu clave de API
    const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;

    try {
      const response = await axios.get(url);
      setArticles(response.data.articles);
    } catch (error) {
      console.error("Error al buscar noticias:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Noticias de Comercio</h1>
      <SearchNews onSearch={fetchNews} />
      <TrendingTopics onSelect={fetchNews} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {articles.map((article, index) => (
          <div key={index} className="p-4 border rounded-md">
            <img
              src={article.urlToImage}
              alt={article.title}
              className="w-full h-40 object-cover rounded-md mb-2"
            />
            <h2 className="text-lg font-semibold">{article.title}</h2>
            <p className="text-sm text-gray-700">{article.description}</p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-balue-500 mt-2 block"
            >
              Leer más
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
