import React, { useState, useEffect } from "react";
import axios from "axios";
import './styles/center.css';
import { AlignJustify } from 'lucide-react';

function Center() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://67d14e7c825945773eb3cb72.mockapi.io/Food")
      .then((response) => setData(response.data))
      .catch(console.error);
  }, []);

  return (
    <div className="max-w-12md mx-auto p-px
    ">
      <div className="flex justify-center">
        <aside className="w-2/12 bg-white rounded-lg shadow p-4 mr-4 ml-10">
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-2 text-wrap">FILTERS</h2>
            
            <br /><div className="mb-4">
              <h3 className="font-semibold mb-2">Type</h3>
              <div className="grid grid-flow-col grid-rows-4 gap-4">
                <label><input type="checkbox" /> Pan-fried</label>
                <label><input type="checkbox" /> Grilled</label>
                <label><input type="checkbox" /> Sautéed</label>
                <label><input type="checkbox" /> Steamed</label>
                <label><input type="checkbox" /> Stir-fried</label>
                <label><input type="checkbox" /> Roasted</label>
                <label><input type="checkbox" /> Baked</label>
                <label><input type="checkbox" /> Stewed</label>
              </div>
            </div>
            <br></br>

            <div className="mb-4">
              <h3 className="font-semibold mb-2">Time</h3>
              <div className="flex items-center gap-2">
                <span>10 minutes</span>
                <input type="range" min="10" max="60" />
                <span>60 minutes</span>
              </div>
            </div>
            <br></br>

            <div className="mb-4 mt-4 rouded-md">
              <h3 className="font-semibold mb-2">Rating</h3>
              <div className="flex flex-col gap-2">
                <label><input type="checkbox" name="rating" /> ★★★★★</label>
                <label><input type="checkbox" name="rating" /> ★★★★☆</label>
                <label><input type="checkbox" name="rating" /> ★★★☆☆</label>
                <label><input type="checkbox" name="rating" /> ★★☆☆☆</label>
                <label><input type="checkbox" name="rating" /> ★☆☆☆☆</label>
              </div>
            </div>
            <br></br>

            <button className="bg-pink-500 text-white py-2 px-4 rounded-md w-full
            h-10 m-px">
              Apply
            </button>
          </div>
        </aside>

        <main className="w-8/12 bg-white rounded-lg shadow ">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">
              Salad ({data.length})
            </h2>
            <select className=" rounded-md p-2">
              <option>A-Z</option>
            </select>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {data.map((recipe) => (
              <div
                className="rounded-lg overflow-hidden shadow-sm"
                key={recipe.id}
              >
                <img
                  src={recipe.image}
                  alt="Recipe"
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">
                    {recipe.name}
                  </h3>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">15 minutes</span>
                    <button className="text-pink-500">
                      <i className="fa fa-bookmark"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Center;
