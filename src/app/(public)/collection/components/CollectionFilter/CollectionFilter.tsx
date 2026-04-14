"use client";
import { useState } from "react";
import { FILTER_OPTIONS } from "../../data";

function CollectionFilter() {
  const [activeYear, setActiveYear] = useState("Tất cả");
  const [activeSeason, setActiveSeason] = useState("Xuân/Hè");
  const [activeCategory, setActiveCategory] = useState("Couture");

  return (
    <div className="flex flex-wrap gap-12 cursor-pointer py-8 mb-16 border-b border-[#b2b2b126]">
      {/* Year Filter */}
      <div>
        <p className="text-[10px] uppercase tracking-[0.2em] text-[#5f5f5f] mb-4 block">
          Năm
        </p>

        <div className="flex gap-6">
          {FILTER_OPTIONS.years.map((year, index) => (
            <button
              key={index}
              onClick={() => setActiveYear(year.toString())}
              className={`text-sm font-medium transition-colors duration-300 ${
                activeYear === year.toString()
                  ? "text-(--primary-color)"
                  : "text-[#323233] hover:text-(--primary-color)/70"
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      {/* Season Filter */}
      <div>
        <p className="text-[10px] uppercase tracking-[0.2em] text-[#5f5f5f] mb-4 block">
          Mùa
        </p>

        <div className="flex gap-6">
          {FILTER_OPTIONS.seasons.map((season, index) => (
            <button
              key={index}
              onClick={() => setActiveSeason(season.toString())}
              className={`text-sm font-medium transition-colors duration-300 ${
                activeSeason === season.toString()
                  ? "text-(--primary-color)"
                  : "text-[#323233] hover:text-(--primary-color)/70"
              }`}
            >
              {season}
            </button>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <div>
        <p className="text-[10px] uppercase tracking-[0.2em] text-[#5f5f5f] mb-4 block">
          Danh mục
        </p>

        <div className="flex gap-6">
          {FILTER_OPTIONS.categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category.toString())}
              className={`text-sm font-medium transition-colors duration-300 ${
                activeCategory === category.toString()
                  ? "text-(--primary-color)"
                  : "text-[#323233] hover:text-(--primary-color)/70"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CollectionFilter;
