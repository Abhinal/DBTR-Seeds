import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ShieldCheck,
  Sprout,
  Truck,
  Users,
  ArrowRight,
  Sparkles,
  PhoneCall,
  CheckCircle,
  Quote,
  Flame,
  Award,
} from "lucide-react";
import { Locale, translations } from "@/data/translations";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";
import { DBTR_CEO, DBTR_PHONE, DBTR_PHONE_DISPLAY, getGeneralWhatsappUrl } from "@/lib/whatsapp";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "en" && locale !== "hi") {
    notFound();
  }

  const validLocale = locale as Locale;
  const t = translations[validLocale];
  const isHindi = validLocale === "hi";

  const featuredProducts = products.filter((p) => p.isFeatured).slice(0, 6);

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative bg-agro-pattern text-white overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-28 border-b border-emerald-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-800/80 border border-emerald-600/40 text-amber-300 text-xs sm:text-sm font-bold shadow-inner">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>{t.hero.badge}</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight sm:leading-none">
                <span>{t.hero.headlinePart1} </span>
                <span className="text-amber-400 underline decoration-emerald-500/50 decoration-wavy underline-offset-8">
                  {t.hero.headlineHighlight}
                </span>{" "}
                <span>{t.hero.headlinePart2}</span>
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {t.hero.subheadline}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href={`/${validLocale}/products`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-7 py-4 rounded-xl text-base shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
                >
                  <span>{t.hero.exploreCatalogue}</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <Link
                  href={`/${validLocale}/become-a-distributor`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-800/90 hover:bg-emerald-700 text-white font-bold px-7 py-4 rounded-xl text-base border border-emerald-600/50 shadow-md transition-all hover:border-amber-400"
                >
                  <Users className="w-5 h-5 text-amber-400" />
                  <span>{t.hero.applyDistributor}</span>
                </Link>
              </div>

              {/* Live Metric Badges */}
              <div className="pt-8 border-t border-emerald-800/60 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
                <div className="bg-emerald-950/50 p-3.5 rounded-xl border border-emerald-800/40">
                  <div className="text-2xl font-black text-amber-400">30+</div>
                  <div className="text-xs text-emerald-200/80 font-medium">{t.hero.statVarietiesSub}</div>
                </div>
                <div className="bg-emerald-950/50 p-3.5 rounded-xl border border-emerald-800/40">
                  <div className="text-2xl font-black text-emerald-400">100%</div>
                  <div className="text-xs text-emerald-200/80 font-medium">{t.hero.statPuritySub}</div>
                </div>
                <div className="bg-emerald-950/50 p-3.5 rounded-xl border border-emerald-800/40">
                  <div className="text-2xl font-black text-amber-400">Direct</div>
                  <div className="text-xs text-emerald-200/80 font-medium">{t.hero.statDispatchSub}</div>
                </div>
                <div className="bg-emerald-950/50 p-3.5 rounded-xl border border-emerald-800/40">
                  <div className="text-2xl font-black text-emerald-400">Pan-India</div>
                  <div className="text-xs text-emerald-200/80 font-medium">{t.hero.statSupportSub}</div>
                </div>
              </div>
            </div>

            {/* Right Visual: Showcase Trio of DBTR Packs */}
            <div className="lg:col-span-5 flex justify-center relative">
              <div className="relative w-full max-w-md h-96 sm:h-[460px] flex items-center justify-center">
                {/* Back glow */}
                <div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-full" />
                {/* Center Showcase Pack (Radhika 2411) */}
                <div className="relative z-20 w-64 h-80 sm:w-72 sm:h-96 transform hover:scale-105 transition-transform duration-300 drop-shadow-2xl">
                  <Image
                    src="/images/products/radhika-2411.png"
                    alt="Radhika 2411 Okra Seed Pack"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                {/* Secondary Background Pack Left (Pragati Gold) */}
                <div className="absolute -left-4 sm:left-2 z-10 w-44 h-64 sm:w-52 sm:h-72 opacity-90 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                  <Image
                    src="/images/products/pragati-gold.png"
                    alt="Pragati Gold Bitter Gourd"
                    fill
                    className="object-contain"
                  />
                </div>
                {/* Secondary Background Pack Right (Madhav) */}
                <div className="absolute -right-4 sm:right-2 z-10 w-44 h-64 sm:w-52 sm:h-72 opacity-90 transform rotate-6 hover:rotate-0 transition-transform duration-300">
                  <Image
                    src="/images/products/madhav.png"
                    alt="Madhav Bottle Gourd"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE SEED CATEGORIES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 inline-block px-3 py-1 rounded-full mb-2">
            {isHindi ? "विस्तृत उत्पाद श्रृंखला" : "Explore Crop Lines"}
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
            {isHindi ? "डीबीटीआर हाइब्रिड बीज श्रेणियां" : "Engineered for Indian Mandis"}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            {isHindi
              ? "देश भर के विभिन्न मौसमों एवं मिट्टी के अनुकूल उच्च उपज देने वाली उन्नत किस्में।"
              : "Discover our comprehensive portfolio of high-yielding hybrid vegetable seeds, field crops, and home packs."}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/${validLocale}/products/category/${cat.slug}`}
              className="group bg-white rounded-2xl p-5 border border-slate-200/90 hover:border-emerald-500 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center relative overflow-hidden"
            >
              <div className="relative w-28 h-32 sm:w-32 sm:h-36 mb-3 transform group-hover:scale-110 transition-transform duration-300">
                <Image
                  src={cat.featuredImage}
                  alt={cat.name[validLocale]}
                  fill
                  className="object-contain drop-shadow-sm"
                />
              </div>
              <h3 className="font-bold text-slate-900 group-hover:text-emerald-800 text-sm sm:text-base">
                {cat.name[validLocale]}
              </h3>
              <span className="text-xs font-semibold text-emerald-700 mt-1">
                {cat.productCount} {isHindi ? "किस्में" : "Varieties"}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. FEATURED COMMERCIAL HYBRIDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 inline-block px-3 py-1 rounded-full mb-2">
              <Flame className="w-3.5 h-3.5 inline mr-1 text-amber-500" />
              {isHindi ? "सर्वाधिक बिकने वाली किस्में" : "High Demand Hybrids"}
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
              {t.featured.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-xl">
              {t.featured.subtitle}
            </p>
          </div>
          <Link
            href={`/${validLocale}/products`}
            className="inline-flex items-center gap-2 text-sm font-bold text-emerald-800 hover:text-emerald-950 bg-emerald-50 px-4 py-2.5 rounded-xl border border-emerald-200/60 transition-colors w-fit"
          >
            <span>{t.featured.viewAll}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredProducts.map((prod) => (
            <ProductCard key={prod.id} product={prod} locale={validLocale} />
          ))}
        </div>
      </section>

      {/* 4. WHY CHOOSE DBTR SEEDS */}
      <section className="bg-slate-900 text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-950/60 border border-amber-400/30 px-3.5 py-1.5 rounded-full inline-block mb-3">
              {isHindi ? "व्यावसायिक विश्वसनीयता" : "Commercial Superiority"}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              {t.whyDbtr.heading}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-3">
              {t.whyDbtr.subheading}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700/80 hover:border-emerald-500 transition-colors space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-900/60 text-emerald-400 flex items-center justify-center font-black">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">{t.whyDbtr.point1Title}</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {t.whyDbtr.point1Desc}
              </p>
            </div>

            <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700/80 hover:border-amber-400 transition-colors space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-950/60 text-amber-400 flex items-center justify-center font-black">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">{t.whyDbtr.point2Title}</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {t.whyDbtr.point2Desc}
              </p>
            </div>

            <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700/80 hover:border-emerald-500 transition-colors space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-900/60 text-emerald-400 flex items-center justify-center font-black">
                <Sprout className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">{t.whyDbtr.point3Title}</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {t.whyDbtr.point3Desc}
              </p>
            </div>

            <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700/80 hover:border-amber-400 transition-colors space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-950/60 text-amber-400 flex items-center justify-center font-black">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">{t.whyDbtr.point4Title}</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {t.whyDbtr.point4Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CEO MESSAGE & VISION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-linear-to-br from-emerald-900 via-emerald-950 to-slate-900 text-white rounded-3xl p-8 sm:p-14 border border-emerald-700/40 shadow-2xl relative overflow-hidden">
          <div className="absolute top-6 right-8 text-emerald-800/40">
            <Quote className="w-24 h-24" />
          </div>
          <div className="relative z-10 max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300 bg-emerald-800/60 px-3.5 py-1 rounded-full border border-amber-400/30">
              <span>{t.ceo.title}</span>
            </div>
            <h3 className="text-xl sm:text-3xl font-extrabold text-white leading-snug">
              &ldquo;{t.ceo.quote}&rdquo;
            </h3>
            <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed">
              {t.ceo.statement}
            </p>
            <div className="pt-4 border-t border-emerald-800/70 flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center font-black text-xl shadow-md">
                SK
              </div>
              <div>
                <div className="text-lg font-bold text-white">{t.ceo.name}</div>
                <div className="text-xs text-amber-300">{t.ceo.designation}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. KITCHEN GARDEN COLLECTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-linear-to-r from-emerald-50 via-amber-50/50 to-emerald-50 rounded-3xl p-8 sm:p-12 border border-emerald-200/80 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                {t.kitchenGardenBanner.badge}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
                {t.kitchenGardenBanner.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {t.kitchenGardenBanner.description}
              </p>
              <ul className="space-y-2 pt-2 text-xs sm:text-sm text-slate-700">
                {t.kitchenGardenBanner.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-3">
                <Link
                  href={`/${validLocale}/kitchen-garden`}
                  className="inline-flex items-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-amber-300 font-bold px-6 py-3.5 rounded-xl shadow-sm hover:shadow-md transition-all text-sm"
                >
                  <span>{t.kitchenGardenBanner.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="grid grid-cols-3 gap-3 w-full max-w-sm">
                <div className="relative h-32 rounded-xl bg-white p-2 shadow-xs border border-slate-200 flex items-center justify-center">
                  <Image
                    src="/images/kitchen-garden/kg-palak.png"
                    alt="Kitchen Garden Palak"
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <div className="relative h-32 rounded-xl bg-white p-2 shadow-xs border border-slate-200 flex items-center justify-center">
                  <Image
                    src="/images/kitchen-garden/kg-tamatar.png"
                    alt="Kitchen Garden Tamatar"
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <div className="relative h-32 rounded-xl bg-white p-2 shadow-xs border border-slate-200 flex items-center justify-center">
                  <Image
                    src="/images/kitchen-garden/kg-mirch.png"
                    alt="Kitchen Garden Mirch"
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <div className="relative h-32 rounded-xl bg-white p-2 shadow-xs border border-slate-200 flex items-center justify-center">
                  <Image
                    src="/images/kitchen-garden/kg-kheera.png"
                    alt="Kitchen Garden Kheera"
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <div className="relative h-32 rounded-xl bg-white p-2 shadow-xs border border-slate-200 flex items-center justify-center">
                  <Image
                    src="/images/kitchen-garden/kg-lauki.png"
                    alt="Kitchen Garden Lauki"
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <div className="relative h-32 rounded-xl bg-white p-2 shadow-xs border border-slate-200 flex items-center justify-center">
                  <Image
                    src="/images/kitchen-garden/kg-dhaniya.png"
                    alt="Kitchen Garden Dhaniya"
                    fill
                    className="object-contain p-1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. DISTRIBUTOR ACQUISITION CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-emerald-900 text-white rounded-3xl p-8 sm:p-14 border border-emerald-700/60 shadow-xl">
          <div className="max-w-3xl space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300 bg-emerald-950/70 px-3 py-1 rounded-full border border-amber-400/30">
              {isHindi ? "वितरक आमंत्रण" : "Distributor Acquisition"}
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              {t.distributorCta.heading}
            </h2>
            <p className="text-sm sm:text-base text-emerald-100">
              {t.distributorCta.subheading}
            </p>
            <div className="space-y-2 pt-2 text-xs sm:text-sm text-emerald-100">
              <p className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-amber-400" />
                <span>{t.distributorCta.bullet1}</span>
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-amber-400" />
                <span>{t.distributorCta.bullet2}</span>
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-amber-400" />
                <span>{t.distributorCta.bullet3}</span>
              </p>
            </div>
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <Link
                href={`/${validLocale}/become-a-distributor`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-7 py-4 rounded-xl text-sm sm:text-base shadow-lg transition-transform transform hover:-translate-y-0.5"
              >
                <span>{t.distributorCta.button}</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={getGeneralWhatsappUrl(validLocale)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold px-7 py-4 rounded-xl text-sm sm:text-base shadow-md transition-all"
              >
                <span>{t.distributorCta.whatsappDirect}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
