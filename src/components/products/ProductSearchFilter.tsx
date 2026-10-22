"use client";

import React, { useState, useMemo } from "react";
import { Search, X, Filter, RotateCcw, Sprout } from "lucide-react";
import { Product } from "@/data/products";
import { Category } from "@/data/categories";
import { Locale, translations } from "@/data/translations";
import { ProductCard } from "./ProductCard";

interface ProductSearchFilterProps {
  initialProducts: Product[];
  categories: Category[];
  locale: Locale;
  defaultCategory?: string;
}

export const ProductSearchFilter: React.FC<ProductSearchFilterProps> = ({
  initialProducts,
  categories,
  locale,
  defaultCategory = "all",
}) => {
  const t = translations[locale];
  const isHindi = locale === "hi";

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>(defaultCategory);
  const [selectedSeason, setSelectedSeason] = useState<string>("all");
  const [selectedType, setSelectedType] = useState<string>("all");

  // Filter logic
  const filteredProducts = useMemo(() => {
    return initialProducts.filter((product) => {
      // 1. Search Query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchNameEn = product.name.en.toLowerCase().includes(query);
        const matchNameHi = product.name.hi.toLowerCase().includes(query);
        const matchCode = product.varietyCode?.toLowerCase().includes(query);
        const matchCategory = product.categoryName[locale].toLowerCase().includes(query);
        const matchDesc = product.description[locale].toLowerCase().includes(query);
        if (!matchNameEn && !matchNameHi && !matchCode && !matchCategory && !matchDesc) {
          return false;
        }
      }

      // 2. Category Filter
      if (selectedCategory !== "all" && product.categorySlug !== selectedCategory) {
        return false;
      }

      // 3. Sowing Season Filter
      if (selectedSeason !== "all") {
        const seasonStr = product.specs.sowingSeason.en.toLowerCase();
        if (selectedSeason === "kharif" && !seasonStr.includes("kharif") && !seasonStr.includes("rainy") && !seasonStr.includes("round")) {
          return false;
        }
        if (selectedSeason === "rabi" && !seasonStr.includes("rabi") && !seasonStr.includes("winter") && !seasonStr.includes("round")) {
          return false;
        }
        if (selectedSeason === "summer" && !seasonStr.includes("summer") && !seasonStr.includes("round")) {
          return false;
        }
      }

      // 4. Crop Type Filter
      if (selectedType !== "all") {
        if (selectedType === "hybrid" && !product.cropType.toLowerCase().includes("hybrid")) {
          return false;
        }
        if (selectedType === "selection" && product.cropType.toLowerCase().includes("hybrid")) {
          return false;
        }
      }

      return true;
    });
  }, [initialProducts, searchQuery, selectedCategory, selectedSeason, selectedType, locale]);

  const hasActiveFilters =
    searchQuery.trim() !== "" ||
    selectedCategory !== "all" ||
    selectedSeason !== "all" ||
    selectedType !== "all";

  const handleReset = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedSeason("all");
    setSelectedType("all");
  };

  return (
    <div className="space-y-8">
      {/* Search & Filter Controls Panel */}
      <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-slate-200">
        {/* Search Bar */}
        <div className="relative mb-5">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.cataloguePage.searchPlaceholder}
            className="w-full pl-12 pr-10 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-emerald-600 focus:bg-white text-sm sm:text-base transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category Filter Pills (Scrollable on mobile) */}
        <div className="mb-5">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
            <Sprout className="w-3.5 h-3.5 text-emerald-600" />
            <span>{t.cataloguePage.filterCategory}</span>
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                selectedCategory === "all"
                  ? "bg-emerald-900 text-amber-300 shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {t.cataloguePage.allCategories} ({initialProducts.length})
            </button>
            {categories.map((cat) => {
              const count = initialProducts.filter((p) => p.categorySlug === cat.slug).length;
              if (count === 0) return null;
              return (
                <button
                  key={cat.slug}
                  onClick={() => setSelectedCategory(cat.slug)}
                  className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                    selectedCategory === cat.slug
                      ? "bg-emerald-800 text-amber-300 shadow-xs"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {cat.name[locale]} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Dropdown Filters & Reset */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-100">
          {/* Season Filter */}
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">
              {t.cataloguePage.filterSeason}
            </label>
            <select
              value={selectedSeason}
              onChange={(e) => setSelectedSeason(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2 px-3 text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-emerald-600"
            >
              <option value="all">{t.cataloguePage.allSeasons}</option>
              <option value="kharif">{isHindi ? "खरीफ / वर्षा (Kharif/Monsoon)" : "Kharif / Monsoon"}</option>
              <option value="rabi">{isHindi ? "रबी / सर्दी (Rabi/Winter)" : "Rabi / Winter"}</option>
              <option value="summer">{isHindi ? "जायद / गर्मी (Summer)" : "Summer / Zaid"}</option>
            </select>
          </div>

          {/* Crop Type Filter */}
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">
              {t.cataloguePage.filterType}
            </label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2 px-3 text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-emerald-600"
            >
              <option value="all">{t.cataloguePage.allTypes}</option>
              <option value="hybrid">{isHindi ? "हाइब्रिड F1 (Hybrid F1)" : "Hybrid F1 Only"}</option>
              <option value="selection">{isHindi ? "रिसर्च एवं सलेक्शन (Research Selection)" : "Research Selection Only"}</option>
            </select>
          </div>

          {/* Reset Button */}
          <div className="flex items-end">
            <button
              onClick={handleReset}
              disabled={!hasActiveFilters}
              className={`w-full py-2 px-4 rounded-lg text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 transition-all ${
                hasActiveFilters
                  ? "bg-slate-100 text-slate-700 hover:bg-slate-200 cursor-pointer"
                  : "bg-slate-50 text-slate-300 cursor-not-allowed"
              }`}
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{t.cataloguePage.resetFilters}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Results Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm text-slate-600 gap-2 px-1">
        <div>
          <span>{isHindi ? "कुल उपलब्ध किस्में: " : "Showing: "}</span>
          <span className="font-bold text-slate-900">{filteredProducts.length}</span>
          <span> {isHindi ? "प्रमाणित बीज किस्में" : "certified seed varieties"}</span>
        </div>
        {hasActiveFilters && (
          <span className="text-xs text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
            {isHindi ? "फिल्टर सक्रिय हैं" : "Active Filters Applied"}
          </span>
        )}
      </div>

      {/* Products Grid or Empty State */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} locale={locale} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 space-y-4">
          <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
            <Filter className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-slate-800">
            {t.cataloguePage.noResults}
          </h3>
          <p className="text-sm text-slate-500 max-w-md mx-auto">
            {isHindi
              ? "कृपया अपने खोज शब्द बदलें या 'फिल्टर हटाएं' बटन दबाकर सभी किस्में देखें।"
              : "Try adjusting your search query or reset the filters to browse our full 30+ variety catalogue."}
          </p>
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-2 bg-emerald-800 text-amber-300 font-bold px-5 py-2.5 rounded-xl hover:bg-emerald-900 transition-colors text-sm"
          >
            <RotateCcw className="w-4 h-4" />
            <span>{t.cataloguePage.resetFilters}</span>
          </button>
        </div>
      )}
    </div>
  );
};
