import React, { useState, useEffect } from "react";
import "../index.css";
import Box from "../components/Box";
import { baseUrl } from "../api/newapi";

function Technology() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const data = await baseUrl(`everything?q=Technology&pageSize=6`);
      if (data && data.articles) {
        setNews(data.articles);
      }
    };
    fetchNews();
  }, []);

  return (
    <>
        <div className="header_section">
            <h1 className="text-left text-[30px] p-[20px] font-bold mb-10">
              Technology News
            </h1>
        </div>
        <div className="flex flex-wrap gap-4">
          {news.map((article) => (
            <Box
              key={article.url}
              url={article.url}
              author={article.author}
              image={article.urlToImage}
              date={article.publishedAt}
              CardTitle={article.title.slice(0, 80) + "..."}
              CardDescription={article.description ? article.description.slice(0, 250) + "..." : "No description available"}
            />
          ))}
        </div>

    </>
  );
}

export default Technology;