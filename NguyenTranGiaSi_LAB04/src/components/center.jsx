import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/center.css";
import { Clock, Star, BookmarkPlus, ChevronDown, Filter } from "lucide-react";

function Center() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://67d14e7c825945773eb3cb72.mockapi.io/Food")
      .then((response) => {
        // Đảm bảo mọi đối tượng đều có giá trị rating
        const processedData = response.data.map((item) => ({
          ...item,
          rating: item.rating || Math.floor(Math.random() * 5) + 1,
          time: item.time || Math.floor(Math.random() * 30) + 10,
        }));
        setData(processedData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`w-4 h-4 ${
            i <= rating ? "text-amber-400 fill-amber-400" : "text-gray-300"
          }`}
        />
      );
    }
    return stars;
  };

  return (
    <div className="max-w-8xl mx-auto p-4 flex justify-center">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-6 justify-center">
        <aside className="w-full lg:w-1/4 bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-5">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-800">
                <Filter className="inline mr-2 h-5 w-5" />
                FILTERS
              </h2>
            </div>

            <div className="space-y-6">
              <div className="filter-section">
                <h3 className="filter-title">Cooking Type</h3>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "Pan-fried",
                    "Grilled",
                    "Sautéed",
                    "Steamed",
                    "Stir-fried",
                    "Roasted",
                    "Baked",
                    "Stewed",
                  ].map((type) => (
                    <label key={type} className="filter-checkbox-label">
                      <input type="checkbox" className="filter-checkbox" />
                      <span>{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="filter-section">
                <h3 className="filter-title">Cooking Time</h3>
                <div className="mt-2">
                  <div className="flex justify-between text-sm text-gray-500 mb-1">
                    <span>10 min</span>
                    <span>60 min</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="60"
                    defaultValue="30"
                    className="range-slider"
                  />
                </div>
              </div>

              <div className="filter-section">
                <h3 className="filter-title">Rating</h3>
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <label key={rating} className="filter-checkbox-label">
                      <input type="checkbox" className="filter-checkbox" />
                      <div className="flex">{renderStars(rating)}</div>
                    </label>
                  ))}
                </div>
              </div>

              <button
                className="w-full py-3 px-5 bg-gradient-to-r from-pink-500 to-rose-500 
                text-white font-medium rounded-lg transition hover:shadow-lg hover:from-pink-600 
                hover:to-rose-600"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </aside>

        <main className="w-full lg:w-3/4">
          <div className="bg-white rounded-xl shadow-md p-5 mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 sm:mb-0">
              Salad Recipes
              <span className="ml-2 text-lg font-medium text-gray-500">
                ({data.length})
              </span>
            </h2>
            <div className="w-full sm:w-auto">
              <div className="relative">
                <select
                  className="appearance-none w-full sm:w-44 bg-gray-50 border border-gray-200 
                  text-gray-700 py-3 px-4 pr-8 rounded-lg"
                >
                  <option>Name (A-Z)</option>
                  <option>Name (Z-A)</option>
                  <option>Rating (Low to High)</option>
                  <option>Rating (High to Low)</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <ChevronDown className="h-5 w-5" />
                </div>
              </div>
            </div>
          </div>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="spinner"></div>
              <span className="ml-3 text-gray-600">Loading recipes...</span>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.map((recipe) => (
                <div
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                  key={recipe.id}
                >
                  <div className="relative">
                    <img
                      src={recipe.image}
                      alt={recipe.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-3 right-3 recipe-rating">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-amber-400 fill-amber-400 mr-1" />
                        <span>{recipe.rating.toFixed(1)}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-lg mb-2 line-clamp-2 text-gray-800">
                      {recipe.name}
                    </h3>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        <span className="text-sm">{recipe.time} min</span>
                      </div>
                      <button className="text-pink-500 hover:text-pink-600 transition-colors">
                        <BookmarkPlus className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default Center;
