import React, { useState, useEffect } from "react";
import "../index.css";
// Api
import { baseUrl } from "../api/newapi";
// All Components
import Box from "../components/Box";
import Technology from "./Technology";
import Entertainment from "./Entertainment";
import Business from "./Business";
import Sports from "./Sports";

function Home() {
  const [news, setNews] = useState([]);
  // Fetching data from API
  useEffect(() => {
    const fetchNews = async () => {
      const data = await baseUrl(`top-headlines?country=us`);
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
            author={article.author}
            image={article.urlToImage}
            date={article.publishedAt}
            CardTitle={article.title.slice(0, 80) + "..."}
            CardDescription={
              article.description
                ? article.description.slice(0, 250) + "..."
                : "No description available"
            }
          />
        ))}
      </div>

      {/* Business */}
      <Business size="10" />

      {/* Technology */}
      <Technology size="10" />

      {/* Sports */}
      <Sports size="10" />

      {/* Entertainment */}
      <Entertainment size="10" />
    </>
  );
}

export default Home;
