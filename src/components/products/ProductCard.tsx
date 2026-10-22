"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, ArrowRight, ShieldCheck, Clock, Calendar } from "lucide-react";
import { Product } from "@/data/products";
import { Locale } from "@/data/translations";
import { getProductWhatsappUrl } from "@/lib/whatsapp";

interface ProductCardProps {
  product: Product;
  locale: Locale;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, locale }) => {
  const isHindi = locale === "hi";
  const whatsappUrl = getProductWhatsappUrl(
    product.name[locale],
    product.categoryName[locale],
    locale
  );

  return (
    <div className="group bg-white rounded-2xl border border-slate-200/90 hover:border-emerald-500/50 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden relative">
      {/* Top Badges */}
      <div className="absolute top-3 left-3 right-3 z-10 flex justify-between items-center pointer-events-none">
        <span className="px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-800 text-amber-300 shadow-xs">
          {product.cropType}
        </span>
        {product.varietyCode && (
          <span className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-slate-900/80 text-white backdrop-blur-xs">
            {product.varietyCode}
          </span>
        )}
      </div>

      {/* Product Image Area */}
      <Link
        href={`/${locale}/products/${product.slug}`}
        className="relative h-64 sm:h-72 w-full bg-linear-to-b from-slate-50 to-emerald-50/30 flex items-center justify-center p-6 overflow-hidden cursor-pointer"
      >
        <div className="relative w-full h-full transform group-hover:scale-105 transition-transform duration-500 ease-out flex items-center justify-center">
          <Image
            src={product.image}
            alt={product.name[locale]}
            fill
            className="object-contain drop-shadow-md"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </Link>

      {/* Product Information */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Category */}
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-1">
            {product.categoryName[locale]}
          </div>

          {/* Name & Tagline */}
          <Link href={`/${locale}/products/${product.slug}`} className="block group-hover:text-emerald-800">
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              {product.name[locale]}
            </h3>
          </Link>
          <p className="text-xs text-slate-500 mt-1 line-clamp-2">
            {product.tagline[locale]}
          </p>

          {/* Quick Specs Grid */}
          <div className="mt-4 pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs">
            <div className="flex items-center gap-1.5 text-slate-700">
              <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span className="truncate">{product.specs.maturityDays}</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-700">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span className="truncate">{product.specs.fruitLengthOrWeight}</span>
            </div>
            <div className="col-span-2 flex items-center gap-1.5 text-slate-600">
              <Calendar className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span className="truncate">{product.specs.sowingSeason[locale]}</span>
            </div>
          </div>

          {/* Available Packaging Sizes */}
          <div className="mt-3 flex items-center gap-1.5 flex-wrap">
            <span className="text-[11px] text-slate-400 font-medium">
              {isHindi ? "पैकिंग:" : "Packs:"}
            </span>
            {product.packagingSizes.map((size) => (
              <span
                key={size}
                className="text-[11px] font-semibold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-sm"
              >
                {size}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-5 pt-3 border-t border-slate-100 grid grid-cols-2 gap-2">
          <Link
            href={`/${locale}/products/${product.slug}`}
            className="flex items-center justify-center gap-1.5 text-xs font-bold py-2.5 px-3 rounded-lg bg-emerald-50 text-emerald-900 hover:bg-emerald-100 transition-colors"
          >
            <span>{isHindi ? "विस्तृत विवरण" : "Full Specs"}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 text-xs font-bold py-2.5 px-3 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white shadow-2xs hover:shadow-sm transition-all"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span>{isHindi ? "थोक पूछताछ" : "B2B Inquiry"}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
