import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  ShieldCheck,
  Award,
  Sprout,
  Users,
  Target,
  Eye,
  CheckCircle2,
  Building,
  Quote,
  ArrowRight,
} from "lucide-react";
import { Locale, translations } from "@/data/translations";
import { DBTR_CEO, DBTR_ADDRESS, DBTR_PHONE_DISPLAY, DBTR_EMAIL } from "@/lib/whatsapp";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isHindi = locale === "hi";

  return {
    title: isHindi
      ? "कंपनी परिचय एवं नेतृत्व | डीबीटीआर सीड्स प्रा. लि."
      : "About DBTR Seeds Pvt. Ltd. | Corporate Legacy & Leadership",
    description: isHindi
      ? "डीबीटीआर सीड्स प्रा. लि. का इतिहास, शोध एवं विकास, गुणवत्ता मानक और सीईओ संदीप कुमार का संदेश।"
      : "Discover DBTR Seeds Pvt. Ltd., leadership by CEO Sandip Kumar, seed research facilities, and commitment to Indian farming excellence.",
  };
}

export default async function AboutPage({
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

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Hero Header */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3.5 py-1.5 rounded-full inline-block">
          {isHindi ? "कंपनी का परिचय एवं दृष्टिकोण" : "Corporate Heritage & Purpose"}
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          {isHindi
            ? "भारतीय कृषि को सशक्त बनाने के लिए समर्पित: डीबीटीआर सीड्स"
            : "Dedicated to Empowering Indian Agriculture: DBTR Seeds Pvt. Ltd."}
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          {isHindi
            ? "डीबीटीआर सीड्स प्रा. लि. एक शोध एवं विकास-उन्मुख बीज उपक्रम है, जो भारतीय किसानों के लिए उच्च उपज, रोग-प्रतिरोधी और बाजार में बेहतर भाव दिलाने वाले हाइब्रिड सब्जी एवं फील्ड क्रॉप बीजों का उत्पादन करता है।"
            : "DBTR Seeds Pvt. Ltd. is an agricultural seed enterprise focused on breeding, producing, and distributing certified hybrid vegetable seeds, field crops, and specialty kitchen garden lines engineered to thrive in diverse Indian climates."}
        </p>
      </div>

      {/* CEO Message Banner */}
      <div className="bg-linear-to-br from-emerald-900 via-emerald-950 to-slate-900 text-white rounded-3xl p-8 sm:p-14 border border-emerald-700/60 shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-5">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300 bg-emerald-800/80 px-3 py-1 rounded-full border border-amber-400/30">
            <span>{isHindi ? "सीईओ संदेश" : "Executive Statement"}</span>
          </div>

          <h2 className="text-xl sm:text-3xl font-extrabold text-white leading-snug">
            &ldquo;
            {isHindi
              ? "हमारा लक्ष्य भारतीय किसान को केवल बीज उपलब्ध कराना नहीं, बल्कि उसके पसीने और मेहनत का सही मूल्य सुनिश्चित करना है।"
              : "Our vision is not just selling seeds, but delivering verified genetic horsepower that protects the farmer against virus failures and guarantees maximum tonnage at the wholesale mandi."}
            &rdquo;
          </h2>

          <p className="text-sm text-emerald-100/90 leading-relaxed">
            {isHindi
              ? "डीबीटीआर सीड्स में हमारी प्रत्येक किस्म कठोर परीक्षणों के बाद ही बाजार में उतारी जाती है। हम अपने वितरकों और डीलरों के साथ दीर्घकालिक, विश्वास-आधारित साझेदारी में विश्वास रखते हैं।"
              : "Every hybrid variety in our portfolio undergoes stringent multi-location trials across varying temperature zones and moisture regimes before entering commercial production. We stand firmly behind our distributor network."}
          </p>

          <div className="pt-4 border-t border-emerald-800/80 flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-amber-400 text-slate-950 font-black text-xl flex items-center justify-center shadow-md">
              SK
            </div>
            <div>
              <div className="text-lg font-bold text-white">{DBTR_CEO}</div>
              <div className="text-xs text-amber-300">
                {isHindi ? "मुख्य कार्यकारी अधिकारी (CEO), डीबीटीआर सीड्स प्रा. लि." : "Chief Executive Officer, DBTR Seeds Pvt. Ltd."}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision & Mission Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/90 shadow-sm space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
            <Eye className="w-6 h-6" />
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900">
            {isHindi ? "हमारा दृष्टिकोण (Our Vision)" : "Our Vision"}
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            {isHindi
              ? "भारतीय कृषि परिदृश्य में एक ऐसा विश्वसनीय नाम बनना, जिस पर हर छोटा और बड़ा किसान आंख मूंदकर भरोसा कर सके। हाइब्रिड बीजों की शुद्धता और उपज में नए मानक स्थापित करना।"
              : "To emerge as India's most trusted partner for progressive growers and seed dealers by setting benchmark standards in genetic vigor, virus resistance, and wholesale produce appeal."}
          </p>
        </div>

        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/90 shadow-sm space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center">
            <Target className="w-6 h-6" />
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900">
            {isHindi ? "हमारा मिशन (Our Mission)" : "Our Mission"}
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            {isHindi
              ? "आधुनिक वैज्ञानिक अनुसंधान के माध्यम से ऐसे बीज तैयार करना जो बदलते मौसम और कीट-रोगों के प्रति सहनशील हों, और हमारे वितरक बंधुओं को एक सम्मानजनक व लाभकारी व्यवसाय प्रदान करें।"
              : "Deploying scientific germplasm selection to breed high-tonnage hybrids that minimize crop losses, protect distributor territories, and maximize agricultural prosperity nationwide."}
          </p>
        </div>
      </div>

      {/* Quality Assurance Pillars */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-950/60 border border-amber-400/30 px-3 py-1 rounded-full">
            {isHindi ? "गुणवत्ता नियंत्रण मानक" : "Quality Assurance Standards"}
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            {isHindi ? "खेत से पैक तक 4-स्तरीय जांच" : "4-Stage Verification Protocol"}
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
          <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700 space-y-2">
            <div className="text-amber-400 font-bold text-xs uppercase">Step 01</div>
            <h4 className="font-bold text-white text-base">
              {isHindi ? "आनुवंशिक शुद्धता" : "Genetic Purity (GOT)"}
            </h4>
            <p className="text-slate-300 text-xs leading-relaxed">
              {isHindi ? "ग्रो-आउट टेस्ट (GOT) द्वारा हर बीज लॉट की 100% नस्लीय शुद्धता का सत्यापन।" : "Grow-Out Tests (GOT) to guarantee 100% trueness-to-type across all hybrid batches."}
            </p>
          </div>

          <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700 space-y-2">
            <div className="text-amber-400 font-bold text-xs uppercase">Step 02</div>
            <h4 className="font-bold text-white text-base">
              {isHindi ? "अंकुरण परीक्षण" : "Germination Testing"}
            </h4>
            <p className="text-slate-300 text-xs leading-relaxed">
              {isHindi ? "सरकारी मानकों से भी उच्च अंकुरण प्रतिशत (High Germination Vigour) की पुष्टि।" : "Laboratory and field germination tests exceeding regulatory Indian minimum seed standards."}
            </p>
          </div>

          <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700 space-y-2">
            <div className="text-amber-400 font-bold text-xs uppercase">Step 03</div>
            <h4 className="font-bold text-white text-base">
              {isHindi ? "नमी व बीज सुरक्षा" : "Moisture Control"}
            </h4>
            <p className="text-slate-300 text-xs leading-relaxed">
              {isHindi ? "उचित तापमान पर सुखाने के बाद 4-लेयर फॉयल पाउच में वैक्यूम सीलिंग।" : "Dehumidified drying and airtight multi-layer barrier foil packaging."}
            </p>
          </div>

          <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700 space-y-2">
            <div className="text-amber-400 font-bold text-xs uppercase">Step 04</div>
            <h4 className="font-bold text-white text-base">
              {isHindi ? "त्वरित प्रेषण" : "Logistics Hub"}
            </h4>
            <p className="text-slate-300 text-xs leading-relaxed">
              {isHindi ? "तेलंगाना से सुरक्षित बारकोडेड कार्टन में सीधा ट्रांसपोर्ट प्रेषण।" : "Direct dispatch in secure barcoded Master Cartons from Telangana distribution hub."}
            </p>
          </div>
        </div>
      </div>

      {/* Corporate Location Details */}
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm space-y-6">
        <h3 className="text-xl sm:text-2xl font-black text-slate-900">
          {isHindi ? "कंपनी का पंजीकृत कार्यालय एवं डिपो" : "Registered Office & Central Hub"}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <div className="text-slate-500 font-semibold mb-1">{isHindi ? "पता:" : "Address:"}</div>
            <div className="font-bold text-slate-900 leading-relaxed">{DBTR_ADDRESS}</div>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <div className="text-slate-500 font-semibold mb-1">{isHindi ? "फोन / व्हाट्सएप:" : "Phone / WhatsApp:"}</div>
            <div className="font-bold text-emerald-800 text-lg">{DBTR_PHONE_DISPLAY}</div>
            <div className="text-xs text-slate-500 mt-1">{isHindi ? "सोमवार - शनिवार, 9 AM - 7 PM" : "Monday - Saturday, 9 AM - 7 PM"}</div>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <div className="text-slate-500 font-semibold mb-1">{isHindi ? "ईमेल आईडी:" : "Official Email:"}</div>
            <div className="font-bold text-slate-900 text-lg">{DBTR_EMAIL}</div>
            <div className="text-xs text-slate-500 mt-1">{isHindi ? "बी2बी पूछताछ एवं कोटेशन" : "For Dealership Inquiries"}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
