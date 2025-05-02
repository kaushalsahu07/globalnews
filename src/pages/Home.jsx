import React, { useState, useEffect } from "react";
import "../index.css";
import Box from "../components/Box";
import { baseUrl } from "../api/newapi";

function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const data = await baseUrl(`top-headlines?country=us&pageSize=5`);
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
              Latest News
            </h1>
        </div>
        <div className="flex flex-wrap gap-4">
          {news.map((article) => (
            <Box
              key={article.url}
              url={article.url}
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

export default Home;
