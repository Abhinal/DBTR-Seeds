import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  Calendar,
  CloudSun,
  Droplets,
  Sprout,
  ShieldCheck,
  CheckCircle,
  HelpCircle,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import { Locale, translations } from "@/data/translations";
import { products } from "@/data/products";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isHindi = locale === "hi";

  return {
    title: isHindi
      ? "बुवाई कैलेंडर एवं फसल कृषि सलाह | डीबीटीआर सीड्स प्रा. लि."
      : "Seasonal Sowing Calendar & Crop Agronomy Guide | DBTR Seeds",
    description: isHindi
      ? "खरीफ, रबी और जायद मौसम के लिए हाइब्रिड सब्जी बीजों की बुवाई का समय, बीज दर, पौधों की दूरी और रोग प्रबंधन सलाह।"
      : "Official sowing calendar and technical agronomy guide for Indian vegetable growers. Planting seasons, seed rates, spacing, and crop management.",
  };
}

export default async function CropsAgronomyPage({
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

  const seasonsData = [
    {
      id: "kharif",
      name: isHindi ? "खरीफ मौसम (मानसून)" : "Kharif Season (Monsoon)",
      months: isHindi ? "जून – जुलाई – अगस्त" : "June – July – August",
      accent: "bg-emerald-800 text-amber-300",
      description: isHindi
        ? "दक्षिण-पश्चिम मानसून के साथ बुवाई की जाने वाली प्रमुख फसलें। उच्च आर्द्रता और वर्षा के दौरान वायरस एवं रोग प्रतिरोधक किस्मों का चयन आवश्यक होता है।"
        : "Main monsoon cropping cycle. High humidity and rainfall require hybrid varieties with proven virus tolerance and vigorous root aeration.",
      recommendedCrops: [
        { crop: "Bhindi / Okra", varieties: "Radhika 2411, Kalpana 862, Maurya", spacing: "45–60 cm × 30 cm" },
        { crop: "Gourds / लौकी, तोरई, करेला", varieties: "Madhav, Shwet, Pragati Gold, Monu", spacing: "2.0 m × 1.0 m (Trellis)" },
        { crop: "Cowpea / लोबिया", varieties: "Ganga Kanchan, Nidhi", spacing: "45 cm × 15 cm" },
        { crop: "Green Chilli / मिर्च", varieties: "Bullet-229, Shine Long", spacing: "60 cm × 45 cm (Transplant)" },
        { crop: "Hybrid Bajra", varieties: "Super Nutri", spacing: "45 cm × 15 cm" },
      ],
    },
    {
      id: "rabi",
      name: isHindi ? "रबी मौसम (शरद कालीन)" : "Rabi Season (Winter)",
      months: isHindi ? "अक्टूबर – नवंबर – दिसंबर" : "October – November – December",
      accent: "bg-teal-800 text-teal-200",
      description: isHindi
        ? "ठंडे मौसम की फसलें जिनमें उच्च गुणवत्ता, आकर्षक रंग और लंबी शेल्फ लाइफ प्राप्त होती है। सिंचाई प्रबंधन और पाला सुरक्षा मुख्य बिंदु हैं।"
        : "Cool-season crops characterized by crisp root formation, dense leafy growth, and long shelf stability under moderate winter sun.",
      recommendedCrops: [
        { crop: "Radish / मूली", varieties: "X-92, Palak Patta, Alka", spacing: "30 cm × 10 cm" },
        { crop: "Spinach / पालक", varieties: "Hariyali (Multi-cut)", spacing: "20 cm × 5 cm / Broadcast" },
        { crop: "Coriander / धनिया", varieties: "Mehak, Dhaniya Patta", spacing: "20 cm × 5 cm / Broadcast" },
        { crop: "French Bean", varieties: "X-99 (Bush Dwarf)", spacing: "45 cm × 15 cm" },
        { crop: "Tomato / टमाटर", varieties: "Aparna, Anjali 21", spacing: "60–75 cm × 45 cm" },
      ],
    },
    {
      id: "summer",
      name: isHindi ? "जायद / गर्मी का मौसम" : "Summer / Zaid Season",
      months: isHindi ? "जनवरी – फरवरी – मार्च" : "January – February – March",
      accent: "bg-amber-700 text-amber-200",
      description: isHindi
        ? "तेज धूप और उच्च तापमान की फसलें। नदी के कछार (Riverbed) और सुनिश्चित सिंचाई वाले क्षेत्रों में तरबूज, खीरा और लौकी से बंपर मुनाफा मिलता है।"
        : "High temperature and intense sunshine cycle. Riverbed and drip-irrigated zones yield peak commercial margins for watermelons, cucumbers, and gourds.",
      recommendedCrops: [
        { crop: "Watermelon / तरबूज", varieties: "Green Gold (Oblong), Black Gold", spacing: "2.5 m × 1.0 m" },
        { crop: "Cucumber / खीरा", varieties: "Bheem, Heera", spacing: "1.5 m × 60 cm" },
        { crop: "Long Melon / ककड़ी", varieties: "Heera Long", spacing: "1.5 m × 60 cm" },
        { crop: "White Sponge Gourd", varieties: "Shwet, Vivek (Heat Tolerant)", spacing: "2.0 m × 1.0 m" },
        { crop: "Amaranthus / चौलाई", varieties: "Leafy Green, Leafy Red", spacing: "20 cm × 10 cm" },
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-14">
      {/* Page Header */}
      <div className="max-w-3xl space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
          {isHindi ? "वैज्ञानिक कृषि दिशा-निर्देश" : "Scientific Agronomy & Planting Schedules"}
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          {isHindi ? "मौसमी बुवाई कैलेंडर एवं फसल गाइड" : "Crop Sowing Calendar & Agronomy Guide"}
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          {isHindi
            ? "भारतीय कृषि जलवायु के अनुसार खरीफ, रबी और जायद मौसम में सही किस्मों का चुनाव, खेत की तैयारी और अधिकतम उपज प्राप्त करने के व्यावहारिक सुझाव।"
            : "Detailed agronomic schedules, optimal spacing, seed rates, and management protocols for DBTR hybrid vegetable varieties across Indian agro-climatic zones."}
        </p>
      </div>

      {/* Sowing Season Matrix */}
      <div className="space-y-8">
        {seasonsData.map((season) => (
          <div
            key={season.id}
            className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden"
          >
            <div className={`${season.accent} p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3`}>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider opacity-90">
                  {season.months}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  {season.name}
                </h2>
              </div>
              <Calendar className="w-8 h-8 opacity-60 hidden sm:block" />
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {season.description}
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-400 font-bold uppercase tracking-wider text-[11px]">
                      <th className="py-3 px-4">{isHindi ? "फसल" : "Crop"}</th>
                      <th className="py-3 px-4">{isHindi ? "अनुशंसित किस्में" : "DBTR Varieties"}</th>
                      <th className="py-3 px-4">{isHindi ? "पौधों की दूरी (Spacing)" : "Recommended Spacing"}</th>
                      <th className="py-3 px-4 text-right">{isHindi ? "कैटलॉग" : "Catalogue"}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {season.recommendedCrops.map((c, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-3 px-4 font-bold text-slate-900">{c.crop}</td>
                        <td className="py-3 px-4 text-emerald-800 font-semibold">{c.varieties}</td>
                        <td className="py-3 px-4 text-slate-600">{c.spacing}</td>
                        <td className="py-3 px-4 text-right">
                          <Link
                            href={`/${validLocale}/products`}
                            className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-950"
                          >
                            <span>{isHindi ? "विवरण देखें" : "View"}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* General Agronomy Best Practices */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 space-y-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-950/60 border border-amber-400/30 px-3.5 py-1 rounded-full">
            {isHindi ? "सफल खेती के 4 सूत्र" : "Key Agronomic Principles"}
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
            {isHindi ? "अधिकतम पैदावार के लिए आवश्यक कदम" : "Field Management Best Practices"}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700 space-y-2">
            <h4 className="font-bold text-amber-300 text-base">
              1. {isHindi ? "खेत की तैयारी एवं जीवांश" : "Soil Preparation & Organic Carbon"}
            </h4>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {isHindi
                ? "बुवाई से पूर्व 2-3 बार गहरी जुताई करें और प्रति एकड़ 8-10 टन अच्छी तरह सड़ी हुई गोबर की खाद (FYM) मिलाएं। जल निकासी की समुचित व्यवस्था अति आवश्यक है।"
                : "Deep plow 2–3 times followed by harrowing. Incorporate 8–10 tons/acre well-rotted FYM. Proper drainage is vital to avoid root rots during monsoon flushes."}
            </p>
          </div>

          <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700 space-y-2">
            <h4 className="font-bold text-emerald-400 text-base">
              2. {isHindi ? "मचान विधि (Trellis / Bower System)" : "Trellis & Staking for Gourds"}
            </h4>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {isHindi
                ? "लौकी, तोरई, करेला और चिचिंडा की खेती मचान या तार-जाली पर करने से फल बिल्कुल सीधे रहते हैं, सड़ते नहीं और पैदावार में 30-40% की वृद्धि होती है।"
                : "Trellising bottle gourd, bitter gourd, and sponge gourds produces 100% straight, blemish-free Grade-A fruits with a 30–40% tonnage increase over ground sprawling."}
            </p>
          </div>

          <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700 space-y-2">
            <h4 className="font-bold text-amber-300 text-base">
              3. {isHindi ? "संतुलित पोषण एवं ड्रिप सिंचाई" : "Balanced Nutrition & Drip Irrigation"}
            </h4>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {isHindi
                ? "फूल और फल आते समय पोटाश और सूक्ष्म पोषक तत्वों का छिड़काव फल के आकार और चमक को बढ़ाता है। ड्रिप सिंचाई से पानी की बचत और लगातार फलन मिलता है।"
                : "Fertigate with balanced water-soluble NPK and micronutrients during flowering and fruit setting to maintain continuous flushing and deep green fruit luster."}
            </p>
          </div>

          <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700 space-y-2">
            <h4 className="font-bold text-emerald-400 text-base">
              4. {isHindi ? "कीट एवं रोग निगरानी (IPM)" : "Integrated Pest Management (IPM)"}
            </h4>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {isHindi
                ? "पीले और नीले चिपचिपे ट्रैप लगाएं। रस चूसक कीटों (थ्रिप्स, व्हाइटफ्लाई) का समय पर नियंत्रण करके वायरस जनित रोगों से फसल को पूरी तरह सुरक्षित रखें।"
                : "Deploy yellow and blue sticky traps for whiteflies and thrips. Timely vector control is critical to protect high-performing crops from viral infections."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
