import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ArrowLeft, Sprout } from "lucide-react";
import { Locale, translations } from "@/data/translations";
import { categories, Category } from "@/data/categories";
import { products } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";

export async function generateStaticParams() {
  const params: { locale: string; category: string }[] = [];
  const locales = ["en", "hi"];
  for (const locale of locales) {
    for (const cat of categories) {
      params.push({ locale, category: cat.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; category: string }>;
}): Promise<Metadata> {
  const { locale, category } = await params;
  const cat = categories.find((c) => c.slug === category);
  if (!cat) return {};

  const validLocale = (locale === "hi" ? "hi" : "en") as Locale;
  return {
    title: `${cat.name[validLocale]} Seeds | DBTR Seeds Pvt. Ltd.`,
    description: cat.description[validLocale],
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ locale: string; category: string }>;
}) {
  const { locale, category } = await params;
  if (locale !== "en" && locale !== "hi") {
    notFound();
  }

  const validLocale = locale as Locale;
  const isHindi = validLocale === "hi";
  const t = translations[validLocale];

  const currentCat = categories.find((c) => c.slug === category);
  if (!currentCat) {
    notFound();
  }

  const categoryProducts = products.filter((p) => p.categorySlug === category);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      {/* Back to Catalogue */}
      <div>
        <Link
          href={`/${validLocale}/products`}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-800 hover:text-emerald-950"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t.productDetail.backToCatalogue}</span>
        </Link>
      </div>

      {/* Category Hero Header */}
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm relative overflow-hidden">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
            <Sprout className="w-3.5 h-3.5" />
            <span>{currentCat.scientificFamily || "Vegetable Seeds"}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            {currentCat.name[validLocale]}
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {currentCat.description[validLocale]}
          </p>

          <div className="pt-2 text-xs font-bold text-emerald-700">
            {categoryProducts.length} {isHindi ? "किस्में उपलब्ध" : "Commercial Varieties Available"}
          </div>
        </div>
      </div>

      {/* Category Navigation Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <Link
          href={`/${validLocale}/products`}
          className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap bg-slate-100 text-slate-700 hover:bg-slate-200"
        >
          {isHindi ? "सभी किस्में" : "All Crops"}
        </Link>
        {categories.map((c) => (
          <Link
            key={c.slug}
            href={`/${validLocale}/products/category/${c.slug}`}
            className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
              c.slug === category
                ? "bg-emerald-800 text-amber-300 shadow-xs"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {c.name[validLocale]}
          </Link>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {categoryProducts.map((prod) => (
          <ProductCard key={prod.id} product={prod} locale={validLocale} />
        ))}
      </div>
    </div>
  );
}
