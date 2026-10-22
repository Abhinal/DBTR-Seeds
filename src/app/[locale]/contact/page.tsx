import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Building,
  ShieldCheck,
  Send,
} from "lucide-react";
import { Locale, translations } from "@/data/translations";
import {
  DBTR_PHONE,
  DBTR_PHONE_DISPLAY,
  DBTR_EMAIL,
  DBTR_ADDRESS,
  DBTR_CEO,
  getGeneralWhatsappUrl,
} from "@/lib/whatsapp";
import { QuickContactForm } from "@/components/forms/QuickContactForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isHindi = locale === "hi";

  return {
    title: isHindi
      ? "संपर्क करें एवं डिपो पता | डीबीटीआर सीड्स प्रा. लि."
      : "Contact Us & Head Office | DBTR Seeds Pvt. Ltd. Telangana",
    description: isHindi
      ? "डीबीटीआर सीड्स प्रा. लि. से संपर्क करें। फोन: 9966639934, पता: मेडचल मलकाजगिरि 501401, तेलंगाना, भारत।"
      : "Contact DBTR Seeds Pvt. Ltd. Head Office at Medchal Malkajgiri, Telangana. Phone: +91 99666 39934. Email: dbtrseeds@gmail.com.",
  };
}

export default async function ContactPage({
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-14">
      {/* Page Header */}
      <div className="max-w-3xl space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
          {isHindi ? "सीधा संपर्क सूत्र" : "Direct B2B Communication"}
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          {isHindi ? "डीबीटीआर सीड्स से संपर्क करें" : "Contact DBTR Seeds Pvt. Ltd."}
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          {isHindi
            ? "बीज वितरण, थोक ऑर्डर, डीलरशिप या तकनीकी कृषि सहायता के लिए हमारे मुख्यालय से संपर्क करें।"
            : "Reach our central Telangana headquarters and seed distribution team directly via phone, WhatsApp, or email."}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Contact Information Cards */}
        <div className="lg:col-span-5 space-y-6">
          {/* Main Headquarters Card */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-sm space-y-5">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Building className="w-5 h-5 text-emerald-700" />
              <span>{isHindi ? "केंद्रीय कार्यालय एवं डिपो" : "Head Office & Warehouse"}</span>
            </h2>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-500 text-xs">
                    {isHindi ? "पंजीकृत पता" : "Registered Address"}
                  </div>
                  <p className="text-slate-900 font-medium leading-relaxed mt-0.5">
                    {DBTR_ADDRESS}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-500 text-xs">
                    {isHindi ? "फोन / हेल्पलाइन" : "Phone / Helpline"}
                  </div>
                  <a
                    href={`tel:${DBTR_PHONE}`}
                    className="text-lg font-bold text-slate-900 hover:text-emerald-800 block"
                  >
                    {DBTR_PHONE_DISPLAY}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-500 text-xs">
                    {isHindi ? "आधिकारिक ईमेल" : "Official Email"}
                  </div>
                  <a
                    href={`mailto:${DBTR_EMAIL}`}
                    className="font-bold text-slate-900 hover:text-emerald-800 block"
                  >
                    {DBTR_EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-500 text-xs">
                    {isHindi ? "कार्य समय" : "Operating Hours"}
                  </div>
                  <p className="text-slate-700 font-medium">
                    {isHindi ? "सोमवार से शनिवार: प्रातः 9:00 से सायं 7:00" : "Monday to Saturday: 9:00 AM – 7:00 PM IST"}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-3.5 px-4 rounded-xl shadow-xs transition-all text-sm"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>{isHindi ? "व्हाट्सएप पर तुरंत चैट करें" : "Chat on WhatsApp (9966639934)"}</span>
              </a>
              <a
                href={`tel:${DBTR_PHONE}`}
                className="w-full inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold py-3 px-4 rounded-xl transition-colors text-sm"
              >
                <Phone className="w-4 h-4 text-emerald-700" />
                <span>{isHindi ? "कॉल करें: 9966639934" : "Direct Call Now"}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Quick Inquiry & Location Map */}
        <div className="lg:col-span-7 space-y-6">
          {/* Quick Message Form */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/90 shadow-sm space-y-5">
            <h2 className="text-xl font-bold text-slate-900">
              {isHindi ? "त्वरित संदेश भेजें" : "Send an Instant B2B Message"}
            </h2>
            <p className="text-xs text-slate-500">
              {isHindi
                ? "अपना संदेश लिखें, यह सीधे हमारे व्हाट्सएप बी2बी डेस्क पर प्रेषित हो जाएगा।"
                : "Type your query below to route directly to our central distribution desk."}
            </p>

            <QuickContactForm locale={validLocale} />
          </div>

          {/* Location Map Visual Placeholder */}
          <div className="bg-slate-100 rounded-3xl p-6 border border-slate-200 text-center space-y-2">
            <div className="flex items-center justify-center gap-2 text-emerald-800 font-bold text-sm">
              <MapPin className="w-4 h-4" />
              <span>Medchal Malkajgiri, Telangana 501401</span>
            </div>
            <p className="text-xs text-slate-500">
              {isHindi
                ? "हैदराबाद-नागपुर राष्ट्रीय राजमार्ग (NH 44) के निकट स्थित केंद्रीय लॉजिस्टिक्स डिपो।"
                : "Strategically located in Medchal Malkajgiri district near NH 44 for fast freight dispatch across all Indian states."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
