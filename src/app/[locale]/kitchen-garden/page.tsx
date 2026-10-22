import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  Sun,
  Clock,
  Sparkles,
  CheckCircle2,
  Package,
  MessageCircle,
  HeartPulse,
  Leaf,
  Flower2,
} from "lucide-react";
import { Locale, translations } from "@/data/translations";
import { kitchenGardenItems } from "@/data/kitchenGarden";
import { getGeneralWhatsappUrl } from "@/lib/whatsapp";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isHindi = locale === "hi";

  return {
    title: isHindi
      ? "घर की क्यारी - बालकनी एवं रूफटॉप बीज संग्रह | डीबीटीआर सीड्स"
      : "Kitchen Garden Collection - Home Balcony Seeds | DBTR Seeds",
    description: isHindi
      ? "घर की क्यारी, सेहत की तैयारी। 16 लोकप्रिय सब्जियों के आसान एवं सुलभ छोटे पैक, गमलों और बालकनी के लिए सर्वोत्तम।"
      : "DBTR Kitchen Garden 16-variety balcony & terrace gardening seed collection. Chemical-free fresh greens, tomatoes, chillies, and gourds.",
  };
}

export default async function KitchenGardenPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "en" && locale !== "hi") {
    notFound();
  }

  const validLocale = locale as Locale;
  const isHindi = validLocale === "hi";
  const whatsappUrl = getGeneralWhatsappUrl(validLocale);

  return (
    <div className="space-y-16 py-10 sm:py-16">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-linear-to-r from-emerald-900 via-emerald-800 to-teal-900 text-white rounded-3xl p-8 sm:p-14 border border-emerald-700/60 shadow-xl relative overflow-hidden">
          <div className="max-w-3xl space-y-5 relative z-10">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300 bg-emerald-950/80 px-3.5 py-1.5 rounded-full border border-amber-400/30">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>घर की क्यारी, सेहत की तैयारी</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              {isHindi
                ? "डीबीटीआर किचन गार्डन बालकनी कलेक्शन"
                : "DBTR Kitchen Garden Collection"}
            </h1>

            <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed">
              {isHindi
                ? "शहरी फ्लैटों, बालकनी, छत और घर की क्यारियों के लिए विशेष रूप से तैयार 16 लोकप्रिय सब्जियों के सुलभ पाउच। 100% ताजी, पोषण से भरपूर, कीटनाशक मुक्त सब्जियां स्वयं उगाएं और अपने परिवार के स्वास्थ्य को सुरक्षित रखें।"
                : "Engineered specifically for urban terraces, balconies, and home kitchen gardens. 16 popular, fast-germinating vegetable seed pouches packed with superior moisture-barrier foil to ensure high germination in small containers."}
            </p>

            {/* Key Value Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs sm:text-sm">
              <div className="flex items-center gap-2 bg-emerald-950/60 p-3 rounded-xl border border-emerald-800/50">
                <HeartPulse className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{isHindi ? "100% रसायन मुक्त पोषण" : "Pesticide-Free Nutrition"}</span>
              </div>
              <div className="flex items-center gap-2 bg-emerald-950/60 p-3 rounded-xl border border-emerald-800/50">
                <Leaf className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{isHindi ? "गमलों के लिए सरल निर्देश" : "Beginner-Friendly Pots"}</span>
              </div>
              <div className="flex items-center gap-2 bg-emerald-950/60 p-3 rounded-xl border border-emerald-800/50">
                <Package className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{isHindi ? "आकर्षक रिटेल काउंटर पैक" : "Retail Counter Display"}</span>
              </div>
            </div>

            <div className="pt-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all text-sm"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>{isHindi ? "थोक काउंटर पैक पूछताछ" : "Inquire for Retail Counter Boxes"}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 16 Pouches Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {isHindi ? "16 लोकप्रिय घर की क्यारी किस्में" : "All 16 Home Balcony Varieties"}
          </h2>
          <p className="text-sm text-slate-600">
            {isHindi
              ? "प्रत्येक पैक में उच्च अंकुरण क्षमता वाले प्रमाणित बीज और गमला दिशा-निर्देश शामिल हैं।"
              : "Each pouch contains certified seeds with tested germination and container potting guidelines."}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {kitchenGardenItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl border border-slate-200/90 hover:border-emerald-500/60 shadow-xs hover:shadow-xl transition-all duration-300 p-5 flex flex-col justify-between"
            >
              <div>
                {/* Pouch Image */}
                <div className="relative h-48 w-full bg-linear-to-b from-slate-50 to-emerald-50/20 rounded-xl p-3 flex items-center justify-center overflow-hidden mb-4">
                  <div className="relative w-full h-full transform group-hover:scale-105 transition-transform duration-300">
                    <Image
                      src={item.image}
                      alt={item.cropName[validLocale]}
                      fill
                      className="object-contain drop-shadow-md"
                      sizes="(max-width: 768px) 50vw, 25vw"
                      loading="eager"
                    />
                  </div>
                </div>

                {/* Name */}
                <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-0.5">
                  {item.hindiDisplay}
                </div>
                <h3 className="text-lg font-black text-slate-900 group-hover:text-emerald-800">
                  {item.cropName[validLocale]}
                </h3>

                <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                  {item.slogan[validLocale]}
                </p>

                {/* Growing Parameters */}
                <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-700">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 font-medium">{isHindi ? "कटाई:" : "Harvest:"}</span>
                    <span className="font-bold flex items-center gap-1">
                      <Clock className="w-3 h-3 text-emerald-600" />
                      {item.harvestDays}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 font-medium">{isHindi ? "धूप:" : "Sunlight:"}</span>
                    <span className="font-bold flex items-center gap-1">
                      <Sun className="w-3 h-3 text-amber-500" />
                      {item.sunlightHours}
                    </span>
                  </div>
                  <div className="pt-1 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">{isHindi ? "गमला: " : "Container: "}</span>
                    {item.containerType[validLocale]}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-5 pt-3 border-t border-slate-100">
                <a
                  href={`https://wa.me/919966639934?text=${encodeURIComponent(
                    `Hello DBTR Seeds, I want to inquire about Kitchen Garden Pouch: ${item.cropName.en} (${item.hindiDisplay}).`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-900 font-bold text-xs transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>{isHindi ? "इस किस्म की पूछताछ" : "Inquire This Pack"}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Retailer Display Box Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-amber-50 rounded-3xl p-8 sm:p-12 border border-amber-200/80 text-slate-900">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-200/70 px-3 py-1 rounded-full">
                {isHindi ? "दुकानदारों व नर्सरी के लिए" : "For Agro-Dealers & Nurseries"}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
                {isHindi
                  ? "आकर्षक काउंटर-डिस्प्ले बॉक्सेज में उपलब्ध"
                  : "Attractive Counter-Top Display Boxes"}
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                {isHindi
                  ? "कृषि दवा विक्रेताओं, बीज दुकानों और नर्सरी के लिए तैयार 100-पाउच मिक्स्ड असॉर्टमेंट काउंटर बॉक्स। शहरी एवं अर्ध-शहरी ग्राहकों को आकर्षित करने और काउंटर बिक्री बढ़ाने के लिए बेहतरीन उत्पाद।"
                  : "We supply 100-pouch mixed-assortment counter display boxes optimized for retail cash counters, agrochemical shops, garden centers, and plant nurseries with high dealer margins."}
              </p>
            </div>
            <div className="md:col-span-4 flex justify-center md:justify-end">
              <a
                href={`https://wa.me/919966639934?text=${encodeURIComponent(
                  "Hello DBTR Seeds, I am an agro-dealer/nursery owner interested in ordering the 100-pouch Kitchen Garden Counter Display Box. Please share dealer wholesale pricing."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-amber-300 font-black px-6 py-4 rounded-xl text-sm shadow-md transition-all"
              >
                <Package className="w-4 h-4" />
                <span>{isHindi ? "काउंटर बॉक्स ऑर्डर करें" : "Order Display Box"}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
