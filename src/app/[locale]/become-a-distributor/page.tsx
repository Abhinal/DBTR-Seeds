import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  ShieldCheck,
  Truck,
  TrendingUp,
  MapPin,
  CheckCircle2,
  Users,
  MessageCircle,
  HelpCircle,
  Award,
} from "lucide-react";
import { Locale, translations } from "@/data/translations";
import { DistributorInquiryForm } from "@/components/forms/DistributorInquiryForm";
import { DBTR_PHONE, DBTR_PHONE_DISPLAY, getGeneralWhatsappUrl } from "@/lib/whatsapp";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isHindi = locale === "hi";

  return {
    title: isHindi
      ? "बीज डिस्ट्रीब्यूटरशिप एवं डीलरशिप आवेदन | डीबीटीआर सीड्स"
      : "Apply for Seed Dealership & Distributorship | DBTR Seeds Pvt. Ltd.",
    description: isHindi
      ? "डीबीटीआर सीड्स के साथ अधिकृत बीज वितरक बनें। आकर्षक व्यापारिक मार्जिन, सुरक्षित क्षेत्र और उच्च उपज हाइब्रिड सब्जी बीज।"
      : "Partner with DBTR Seeds Pvt. Ltd. as an authorized seed stockist or retail dealer. Competitive B2B pricing, territory protection, and direct dispatch.",
  };
}

export default async function BecomeDistributorPage({
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

  const distributorFaqs = [
    {
      q: isHindi
        ? "डीबीटीआर सीड्स की डीलरशिप के लिए न्यूनतम योग्यता व औपचारिकताएं क्या हैं?"
        : "What are the requirements to become an authorized DBTR Seeds distributor?",
      a: isHindi
        ? "आपके पास वैध बीज/कीटनाशक बिक्री लाइसेंस (Seed License), जीएसटी नंबर और स्थानीय कृषि व्यापार में अनुभव होना चाहिए। हम नए उद्यमियों और स्थापित वितरकों दोनों का स्वागत करते हैं।"
        : "You require a valid State Seed License, GST registration, and established retail or wholesale agro-input operations in your target district.",
    },
    {
      q: isHindi
        ? "ऑर्डर करने के बाद माल की डिलीवरी में कितना समय लगता है?"
        : "What is the dispatch and delivery turnaround time?",
      a: isHindi
        ? "तेलंगाना स्थित हमारे केंद्रीय गोदाम से ऑर्डर की पुष्टि के 24-48 घंटों के भीतर माल सीधे ट्रांसपोर्ट द्वारा रवाना कर दिया जाता है।"
        : "Orders are processed and dispatched within 24 to 48 hours from our central Telangana logistics hub to your district transport depot.",
    },
    {
      q: isHindi
        ? "क्या एक जिले में एक ही डीलर को विशेष क्षेत्र (Exclusivity) दिया जाता है?"
        : "Do you offer territory exclusivity for primary stockists?",
      a: isHindi
        ? "हां, हमारे सक्रिय और उच्च प्रदर्शन करने वाले मुख्य वितरकों (Stockists) को उनके तहसील या जिले में मूल्य सुरक्षा और क्षेत्रीय प्राथमिकता दी जाती है।"
        : "Yes, verified volume stockists receive territory protection and preferential pricing to prevent market cannibalization.",
    },
    {
      q: isHindi
        ? "कंपनी द्वारा प्रचार और किसान सम्मेलनों में क्या सहयोग दिया जाता है?"
        : "What marketing and field demonstration support does DBTR provide?",
      a: isHindi
        ? "हम दुकान के लिए फ्लैक्स बोर्ड, उत्पाद ब्रोशर, किसान गोष्ठी बैनर और प्रगतिशील किसानों के लिए फील्ड ट्रायल सैंपल पैक उपलब्ध कराते हैं।"
        : "We supply dealer shop glow-sign branding, full-color product catalogues, farmer meeting banners, and demonstration trial sample packs.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3.5 py-1.5 rounded-full inline-block">
          {isHindi ? "व्यापारिक साझेदारी आमंत्रण" : "B2B Dealership & Stockist Network"}
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          {isHindi
            ? "डीबीटीआर सीड्स के साथ जुड़ें, अपने बीज व्यापार को नई ऊंचाई दें"
            : "Partner With DBTR Seeds as an Authorized Seed Distributor"}
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          {isHindi
            ? "तेलंगाना, आंध्र प्रदेश, महाराष्ट्र, मध्य प्रदेश, उत्तर प्रदेश, बिहार, गुजरात एवं संपूर्ण भारत में कृषि सेवा केंद्रों एवं बीज व्यापारियों का हार्दिक स्वागत है।"
            : "Expand your agrochemical dealership with high-demand, virus-resistant hybrid vegetable varieties proven to deliver record yields in Indian mandis."}
        </p>
      </div>

      {/* 4 Pillars of Distributor Partnership */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-xs space-y-3">
          <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
            <TrendingUp className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-slate-900 text-base">
            {isHindi ? "आकर्षक मार्जिन व मूल्य सुरक्षा" : "Profitable Dealer Margins"}
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            {isHindi
              ? "पारदर्शी मूल्य निर्धारण और उच्च खुदरा मुनाफा, जिससे आपकी हर बिक्री पर बेहतर लाभ सुनिश्चित होता है।"
              : "Competitive wholesale pricing structure designed to deliver healthy profit margins for both stockists and retailers."}
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-xs space-y-3">
          <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-slate-900 text-base">
            {isHindi ? "सुरक्षित मल्टी-लेयर पैकिंग" : "Tamper-Proof Packaging"}
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            {isHindi
              ? "अत्याधुनिक नमी-रोधी 4-परत पाउच जो बीजों की अंकुरण क्षमता और ताजगी को लंबे समय तक सुरक्षित रखते हैं।"
              : "Four-layer foil barrier pouches preserve seed germination and moisture integrity across seasons."}
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-xs space-y-3">
          <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
            <Truck className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-slate-900 text-base">
            {isHindi ? "तेज व विश्वसनीय ट्रांसपोर्ट" : "Fast Direct Dispatch"}
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            {isHindi
              ? "तेलंगाना के प्रमुख लॉजिस्टिक्स हब से 24 से 48 घंटे में सीधा माल प्रेषण, सीजन में स्टॉक की कमी नहीं होगी।"
              : "Central dispatch from Medchal, Telangana ensures reliable stock availability right when sowing season peaks."}
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-xs space-y-3">
          <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
            <Users className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-slate-900 text-base">
            {isHindi ? "क्षेत्रीय प्रचार व फील्ड सपोर्ट" : "Field & Marketing Support"}
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            {isHindi
              ? "दुकान के लिए आकर्षक बोर्ड, कैटलॉग, किसान गोष्ठी और तकनीकी मार्गदर्शन से आपकी दुकान की प्रतिष्ठा में वृद्धि।"
              : "Co-branded farmer awareness meetings, point-of-sale promotional banners, and technical field assistance."}
          </p>
        </div>
      </div>

      {/* Application Form Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left: Contact Info & Support */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 space-y-5">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-950/60 px-3 py-1 rounded-full">
              <span>{isHindi ? "प्रत्यक्ष सहायता" : "Direct B2B Desk"}</span>
            </div>
            <h3 className="text-xl font-bold text-white">
              {isHindi ? "सीधे संपर्क करें" : "Talk Directly with Distribution Head"}
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {isHindi
                ? "यदि आपके पास तत्काल थोक आवश्यकता है, तो आप सीधे हमारे डिस्ट्रीब्यूशन डेस्क पर कॉल या व्हाट्सएप कर सकते हैं।"
                : "For urgent seasonal requirements or bulk volume quotes, reach out directly via call or WhatsApp."}
            </p>
            <div className="pt-2 border-t border-slate-800 space-y-3 text-sm">
              <a
                href={`tel:${DBTR_PHONE}`}
                className="flex items-center gap-3 text-white font-bold hover:text-amber-300"
              >
                <div className="w-9 h-9 rounded-lg bg-emerald-800 text-emerald-200 flex items-center justify-center">
                  📞
                </div>
                <span>{DBTR_PHONE_DISPLAY}</span>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-emerald-400 font-bold hover:text-emerald-300"
              >
                <div className="w-9 h-9 rounded-lg bg-[#25D366] text-white flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 fill-current" />
                </div>
                <span>{isHindi ? "व्हाट्सएप चैट शुरू करें" : "Chat on WhatsApp"}</span>
              </a>
            </div>
          </div>

          {/* Target States Box */}
          <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-200/80 space-y-3">
            <h4 className="font-bold text-emerald-950 text-sm flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-700" />
              <span>{isHindi ? "प्राथमिक विस्तार क्षेत्र" : "Priority Distribution States"}</span>
            </h4>
            <p className="text-xs text-emerald-800 leading-relaxed">
              Telangana, Andhra Pradesh, Maharashtra, Madhya Pradesh, Uttar Pradesh, Bihar, Gujarat, Karnataka, Rajasthan, West Bengal, Odisha, and Haryana.
            </p>
          </div>
        </div>

        {/* Right: Interactive Form */}
        <div className="lg:col-span-8">
          <DistributorInquiryForm locale={validLocale} />
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h3 className="text-2xl font-black text-slate-900">
            {isHindi ? "डिस्ट्रीब्यूटरशिप संबंधित अक्सर पूछे जाने वाले प्रश्न" : "Frequently Asked Distributor Questions"}
          </h3>
          <p className="text-xs sm:text-sm text-slate-500">
            {isHindi ? "डीलरशिप से जुड़े प्रमुख सवालों के त्वरित उत्तर।" : "Key details about dealership operations, ordering, and territory policies."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          {distributorFaqs.map((faq, idx) => (
            <div key={idx} className="bg-slate-50 p-5 rounded-2xl border border-slate-200/70 space-y-2">
              <h4 className="font-bold text-slate-900 text-sm flex items-start gap-2">
                <HelpCircle className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>{faq.q}</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
