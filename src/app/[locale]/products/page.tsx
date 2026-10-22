import React, { Suspense } from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Locale, translations } from "@/data/translations";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { ProductSearchFilter } from "@/components/products/ProductSearchFilter";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isHindi = locale === "hi";

  return {
    title: isHindi
      ? "मास्टर हाइब्रिड सब्जी बीज कैटलॉग | डीबीटीआर सीड्स प्रा. लि."
      : "Master Hybrid Vegetable Seeds Catalogue | DBTR Seeds Pvt. Ltd.",
    description: isHindi
      ? "डीबीटीआर सीड्स की संपूर्ण 30+ हाइब्रिड सब्जी, फील्ड क्रॉप्स और किचन गार्डन बीज श्रृंखला। थोक बी2बी दरें और डीलरशिप पूछताछ।"
      : "Explore DBTR Seeds complete 30+ hybrid vegetable seed varieties, field crops, and balcony collection pouches. Commercial agronomic specs and bulk distributor inquiry.",
  };
}

async function FilterSection({
  locale,
  searchParams,
}: {
  locale: Locale;
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  return (
    <ProductSearchFilter
      initialProducts={products}
      categories={categories}
      locale={locale}
      defaultCategory={category || "all"}
    />
  );
}

export default async function CataloguePage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ category?: string }>;
}) {
  const { locale } = await params;
  if (locale !== "en" && locale !== "hi") {
    notFound();
  }

  const validLocale = locale as Locale;
  const t = translations[validLocale];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-8">
      {/* Page Header */}
      <div className="max-w-3xl space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
          {validLocale === "hi" ? "व्यावसायिक बीज कैटलॉग" : "B2B Commercial Catalogue"}
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          {t.cataloguePage.title}
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          {t.cataloguePage.subtitle}
        </p>
      </div>

      {/* Suspense boundary for searchParams handling in Next.js 16 */}
      <Suspense
        fallback={
          <div className="p-12 text-center text-slate-400">
            {validLocale === "hi" ? "कैटलॉग लोड हो रहा है..." : "Loading Master Catalogue..."}
          </div>
        }
      >
        <FilterSection locale={validLocale} searchParams={searchParams} />
      </Suspense>
    </div>
  );
}
