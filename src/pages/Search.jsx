import React, { useState, useEffect, useCallback } from "react";
import "../index.css";
import Box from "../components/Box";
import { baseUrl } from "../api/newapi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSpinner } from "@fortawesome/free-solid-svg-icons";

function Search() {
  const [news, setNews] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [error, setError] = useState(null);

  // Debounced search function
  const debouncedFetchNews = useCallback(
    async (term) => {
      if (!term.trim()) {
        setNews([]);
        setHasSearched(false);
        return;
      }

      try {
        setIsLoading(true);
        setError(null);
        const data = await baseUrl(`everything?q=${term}&pageSize=12`);
        if (data && data.articles) {
          setNews(data.articles);
          setHasSearched(true);
        }
      } catch (err) {
        setError(err.message);
        setNews([]);
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    // Clear any existing timeouts
    const timeoutId = setTimeout(() => {
      debouncedFetchNews(searchTerm);
    }, 1000); // Increased debounce delay to 1 second

    // Cleanup function
    return () => clearTimeout(timeoutId);
  }, [searchTerm, debouncedFetchNews]);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    // Reset error state when user starts typing again
    if (error) setError(null);
  };

  return (
    <div className="search flex justify-center items-center mt-10">
      <div className="min-h-screen p-6">
        <div className="max-w-4xl mx-auto">
          {/* Search Header */}
          <div className="text-center mb-10">
            <h1 className="text-[30px] font-bold text-[var(--black-color)] mb-4">
              Search News
            </h1>
            <p className="text-gray-600 mb-8">
              Discover the latest news from around the world
            </p>
          </div>

          {/* Search Input */}
          <div className="flex justify-center mb-12">

              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search for news..."
                className="pl-12 pr-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[var(--primary-color)] focus:outline-none text-lg transition-all duration-300 shadow-sm hover:shadow-md"
                disabled={isLoading}
              />

          </div>

          {/* Error State */}
          {error && (
            <div className="text-center py-4 px-6 bg-red-50 rounded-lg mb-8">
              <p className="text-red-600">{error}</p>
            </div>
          )}

          {/* Loading State */}
          {isLoading && (
            <div className="flex justify-center items-center py-10">
              <FontAwesomeIcon
                icon={faSpinner}
                className="text-4xl text-[var(--primary-color)] animate-spin"
              />
            </div>
          )}

          {/* No Results State */}
          {!isLoading && hasSearched && news.length === 0 && (
            <div className="center_text text-center py-10">
              <p className="text-gray-600 text-lg">
                No results found. Try a different search term.
              </p>
            </div>
          )}

          {/* Results */}
          {!isLoading && news.length > 0 && (
            <>
              <p className="search mb-8 text-gray-600 text-center">
                Found {news.length} results for "{searchTerm}"
              </p>
              <div className="flex flex-wrap justify-center gap-6">
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
          )}

          {/* Initial State */}
          {!hasSearched && !isLoading && (
            <div className="center_text text-center mt-[10rem]">
              <p className="text-gray-600 text-lg">
                Start typing to search for news
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Search;