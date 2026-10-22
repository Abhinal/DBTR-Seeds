import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  ArrowLeft,
  MessageCircle,
  ShieldCheck,
  Clock,
  Calendar,
  CheckCircle2,
  Package,
  Sparkles,
  MapPin,
  Sprout,
  Share2,
} from "lucide-react";
import { Locale, translations } from "@/data/translations";
import { products, Product } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";
import { getProductWhatsappUrl, DBTR_PHONE_DISPLAY } from "@/lib/whatsapp";

export async function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  const locales = ["en", "hi"];
  for (const locale of locales) {
    for (const prod of products) {
      params.push({ locale, slug: prod.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};

  const validLocale = (locale === "hi" ? "hi" : "en") as Locale;
  const isHindi = validLocale === "hi";

  return {
    title: `${product.name[validLocale]} (${product.categoryName[validLocale]}) | DBTR Seeds`,
    description: `${product.tagline[validLocale]} Sowing Season: ${product.specs.sowingSeason[validLocale]}. First picking: ${product.specs.maturityDays}.`,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (locale !== "en" && locale !== "hi") {
    notFound();
  }

  const validLocale = locale as Locale;
  const isHindi = validLocale === "hi";
  const t = translations[validLocale];

  const product = products.find((p) => p.slug === slug);
  if (!product) {
    notFound();
  }

  const whatsappUrl = getProductWhatsappUrl(
    product.name[validLocale],
    product.categoryName[validLocale],
    validLocale
  );

  const relatedProducts = products
    .filter((p) => p.categorySlug === product.categorySlug && p.slug !== product.slug)
    .slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-500">
        <Link href={`/${validLocale}`} className="hover:text-emerald-800">
          {t.nav.home}
        </Link>
        <span>/</span>
        <Link href={`/${validLocale}/products`} className="hover:text-emerald-800">
          {t.nav.catalogue}
        </Link>
        <span>/</span>
        <Link
          href={`/${validLocale}/products/category/${product.categorySlug}`}
          className="hover:text-emerald-800"
        >
          {product.categoryName[validLocale]}
        </Link>
        <span>/</span>
        <span className="font-semibold text-slate-900 truncate">
          {product.name[validLocale]}
        </span>
      </nav>

      {/* Main Product Showcase Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm">
        {/* Left: Product Media Gallery */}
        <div className="lg:col-span-5 space-y-4">
          <div className="relative h-80 sm:h-96 w-full rounded-2xl bg-linear-to-b from-slate-50 to-emerald-50/40 border border-slate-100 flex items-center justify-center p-6 overflow-hidden shadow-inner">
            <Image
              src={product.image}
              alt={product.name[validLocale]}
              fill
              className="object-contain drop-shadow-xl"
              priority
            />
          </div>

          {/* Secondary 3D Packaging Render if available */}
          {product.packRender && (
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between text-xs text-slate-600">
              <span className="flex items-center gap-1.5 font-medium">
                <Package className="w-4 h-4 text-emerald-700" />
                <span>{isHindi ? "ओरिजिनल पैकेजिंग डिजाइन उपलब्ध" : "Authentic Retail Packaging Display"}</span>
              </span>
              <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                Tamper-Proof
              </span>
            </div>
          )}
        </div>

        {/* Right: Technical Overview & B2B Inquiry */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-800 text-amber-300">
                {product.cropType}
              </span>
              {product.varietyCode && (
                <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 text-slate-800">
                  {isHindi ? "कोड:" : "Code:"} {product.varietyCode}
                </span>
              )}
              <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-emerald-50 text-emerald-800">
                {product.categoryName[validLocale]}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              {product.name[validLocale]}
            </h1>
            <p className="text-xs text-slate-400 font-mono italic mt-0.5">
              {product.scientificName}
            </p>
            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              {product.tagline[validLocale]}
            </p>
          </div>

          {/* Core Specs Chips */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100 text-xs sm:text-sm">
            <div>
              <div className="text-slate-400 font-semibold">{t.productDetail.firstPicking}</div>
              <div className="font-bold text-slate-900 mt-0.5 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{product.specs.maturityDays}</span>
              </div>
            </div>
            <div>
              <div className="text-slate-400 font-semibold">{t.productDetail.fruitDimensions}</div>
              <div className="font-bold text-slate-900 mt-0.5 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span>{product.specs.fruitLengthOrWeight}</span>
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <div className="text-slate-400 font-semibold">{t.productDetail.sowingCalendar}</div>
              <div className="font-bold text-slate-900 mt-0.5 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="truncate">{product.specs.sowingSeason[validLocale]}</span>
              </div>
            </div>
          </div>

          {/* Description Narrative */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              {isHindi ? "किस्म विवरण एवं विशेषताएं" : "Agronomic Profile"}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {product.description[validLocale]}
            </p>
          </div>

          {/* Packaging Sizes */}
          <div>
            <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              {t.productDetail.packagingAvailable}
            </div>
            <div className="flex flex-wrap gap-2">
              {product.packagingSizes.map((sz) => (
                <span
                  key={sz}
                  className="px-3 py-1 rounded-lg text-xs font-bold bg-white border border-slate-300 text-slate-800 shadow-2xs"
                >
                  {sz}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all text-sm"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>{t.productDetail.directWhatsapp}</span>
            </a>

            <Link
              href={`/${validLocale}/become-a-distributor`}
              className="inline-flex items-center justify-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-amber-300 font-bold py-3.5 px-6 rounded-xl text-sm transition-colors border border-emerald-900"
            >
              <span>{isHindi ? "डीलरशिप आवेदन" : "Apply for Dealership"}</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Technical Agronomic Specifications Table */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm space-y-6">
        <div className="border-b border-slate-100 pb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full">
            {isHindi ? "वैज्ञानिक एवं कृषि मापदंड" : "Technical Specifications"}
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
            {t.productDetail.agronomyTable}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-sm">
          <div className="py-2.5 border-b border-slate-100 flex justify-between gap-4">
            <span className="font-semibold text-slate-500">{t.productDetail.colorTexture}</span>
            <span className="font-bold text-slate-900 text-right">{product.specs.fruitColor[validLocale]}</span>
          </div>

          <div className="py-2.5 border-b border-slate-100 flex justify-between gap-4">
            <span className="font-semibold text-slate-500">{isHindi ? "फल का आकार" : "Fruit Shape"}</span>
            <span className="font-bold text-slate-900 text-right">{product.specs.fruitShape[validLocale]}</span>
          </div>

          <div className="py-2.5 border-b border-slate-100 flex justify-between gap-4">
            <span className="font-semibold text-slate-500">{t.productDetail.plantVigor}</span>
            <span className="font-bold text-slate-900 text-right">{product.specs.plantHabit[validLocale]}</span>
          </div>

          <div className="py-2.5 border-b border-slate-100 flex justify-between gap-4">
            <span className="font-semibold text-slate-500">{t.productDetail.resistance}</span>
            <span className="font-bold text-emerald-800 text-right">{product.specs.diseaseResistance[validLocale]}</span>
          </div>

          {product.specs.recommendedRegions && (
            <div className="py-2.5 border-b border-slate-100 flex justify-between gap-4 md:col-span-2">
              <span className="font-semibold text-slate-500">{isHindi ? "अनुशंसित राज्य" : "Target Agro-Climatic Zones"}</span>
              <span className="font-bold text-slate-900 text-right">{product.specs.recommendedRegions[validLocale]}</span>
            </div>
          )}
        </div>

        {/* Key Highlights Checklist */}
        <div className="pt-4">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
            {t.productDetail.keyHighlights}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {product.specs.specialFeatures[validLocale].map((feat, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 bg-slate-50 p-3.5 rounded-xl border border-slate-200/60"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-800 leading-snug">{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Varieties in Same Category */}
      {relatedProducts.length > 0 && (
        <div className="space-y-6 pt-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              {isHindi ? `इसी श्रेणी की अन्य उन्नत किस्में` : `Other Popular ${product.categoryName[validLocale]} Varieties`}
            </h3>
            <Link
              href={`/${validLocale}/products/category/${product.categorySlug}`}
              className="text-xs sm:text-sm font-bold text-emerald-800 hover:text-emerald-950"
            >
              {isHindi ? "सभी देखें ›" : "View All Category ›"}
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((rel) => (
              <ProductCard key={rel.id} product={rel} locale={validLocale} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
