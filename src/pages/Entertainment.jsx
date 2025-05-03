import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../index.css";
// Api And Components
import Box from "../components/Box";
import { baseUrl } from "../api/newapi";

function Entertainment({ size }) {
  const [news, setNews] = useState([]);
  // Fetching data from API
  useEffect(() => {
    const fetchNews = async () => {
      const data = await baseUrl(`everything?q=Entertainment&pageSize=${size}`);
      if (data && data.articles) {
        setNews(data.articles);
      }
    };
    fetchNews();
  });

  return (
    <>
      <div className="header_section">
        <h1 className="text-left text-[30px] p-[20px] font-bold mb-10">
          Entertainment News
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
    </>
  );
}

// PropTypes for the component
Entertainment.propTypes = {
  size: PropTypes.string,
};

Entertainment.defaultProps = {
  size: "50",
};

export default Entertainment;
