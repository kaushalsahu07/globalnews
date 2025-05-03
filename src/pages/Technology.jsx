import { useState, useEffect } from "react";
import "../index.css";
import Box from "../components/Box";
import PropTypes from "prop-types";
import { baseUrl } from "../api/newapi";

function Technology({ size }) {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setIsLoading(true);
        const data = await baseUrl(`everything?q=Technology&pageSize=${size}`);
        if (data && data.articles) {
          setNews(data.articles);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, []); // Only runs when component mounts

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--primary-color)]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-4 px-6 bg-red-50 rounded-lg m-8">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <>
    <main>
       <div className="header_section">
          <h1 className="text-left text-[30px] p-[20px] font-bold mb-10">
            Technology News
          </h1>
        </div>
      <div className="flex flex-wrap gap-6">
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
    </main>
    </>
  );
}

Technology.propTypes = {
  size: PropTypes.string,
};
Technology.defaultProps = {
  size: "50",
};

export default Technology;
