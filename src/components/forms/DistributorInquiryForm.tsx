"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { Send, CheckCircle2, MessageCircle, Building2, User, Phone, Mail, MapPin, Briefcase } from "lucide-react";
import { Locale, translations } from "@/data/translations";
import { getDistributorWhatsappUrl } from "@/lib/whatsapp";

interface DistributorInquiryFormProps {
  locale: Locale;
}

const INDIAN_STATES = [
  "Telangana",
  "Andhra Pradesh",
  "Maharashtra",
  "Madhya Pradesh",
  "Uttar Pradesh",
  "Bihar",
  "Gujarat",
  "Karnataka",
  "Rajasthan",
  "Haryana",
  "Punjab",
  "West Bengal",
  "Odisha",
  "Chhattisgarh",
  "Tamil Nadu",
  "Other State",
];

const CROPS_LIST = [
  "Okra / Bhindi (राधिका, कल्पना)",
  "Gourds / लौकी, तोरई, करेला",
  "Chilli / मिर्च (बुलेट, शाइन लॉन्ग)",
  "Tomato / टमाटर (अपर्णा, अंजलि)",
  "Cucumber & Melons / खीरा व तरबूज",
  "Radish & Greens / मूली, पालक, धनिया",
  "Cowpea & Beans / लोबिया व बीन्स",
  "Bajra / हाइब्रिड बाजरा",
  "Kitchen Garden Balcony Packs (घर की क्यारी)",
];

export const DistributorInquiryForm: React.FC<DistributorInquiryFormProps> = ({ locale }) => {
  const t = translations[locale];
  const isHindi = locale === "hi";

  const [formData, setFormData] = useState({
    firmName: "",
    contactPerson: "",
    mobile: "",
    email: "",
    state: "Telangana",
    district: "",
    yearsInBusiness: "3-5 Years",
    cropsInterest: [] as string[],
    turnover: "₹25 Lakhs – ₹1 Crore",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [whatsappSyncUrl, setWhatsappSyncUrl] = useState("");

  const handleCropToggle = (crop: string) => {
    setFormData((prev) => {
      const exists = prev.cropsInterest.includes(crop);
      if (exists) {
        return { ...prev, cropsInterest: prev.cropsInterest.filter((c) => c !== crop) };
      } else {
        return { ...prev, cropsInterest: [...prev.cropsInterest, crop] };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firmName || !formData.contactPerson || !formData.mobile || !formData.district) {
      alert(isHindi ? "कृपया सभी आवश्यक फील्ड भरें।" : "Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    // Build WhatsApp URL
    const waUrl = getDistributorWhatsappUrl({
      firmName: formData.firmName,
      contactPerson: formData.contactPerson,
      mobile: formData.mobile,
      state: formData.state,
      district: formData.district,
      cropsInterest: formData.cropsInterest.join(", "),
      turnover: formData.turnover,
    });

    setWhatsappSyncUrl(waUrl);

    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Confetti burst
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#1B4D3E", "#DDA15E", "#25D366"],
        });
      } catch (err) {
        // Confetti fallback
      }
    }, 700);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-emerald-200 shadow-xl text-center max-w-2xl mx-auto space-y-6">
        <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-inner">
          <CheckCircle2 className="w-12 h-12" />
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          {t.form.successTitle}
        </h3>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          {t.form.successMessage}
        </p>
        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={whatsappSyncUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all text-sm"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>{t.form.openInWhatsapp}</span>
          </a>
          <button
            onClick={() => setIsSubmitted(false)}
            className="w-full sm:w-auto py-3.5 px-6 rounded-xl border border-slate-300 text-slate-700 font-semibold hover:bg-slate-50 transition-colors text-sm"
          >
            {isHindi ? "नया आवेदन भरें" : "Submit Another Application"}
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-lg space-y-6"
    >
      <div className="border-b border-slate-100 pb-4">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
          {t.form.title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          {t.form.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Firm Name */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
            <Building2 className="w-3.5 h-3.5 text-emerald-700" />
            <span>{t.form.firmName}</span>
          </label>
          <input
            type="text"
            required
            value={formData.firmName}
            onChange={(e) => setFormData({ ...formData, firmName: e.target.value })}
            placeholder={t.form.firmNamePlaceholder}
            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-emerald-600 focus:bg-white focus:outline-hidden"
          />
        </div>

        {/* Contact Person */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-emerald-700" />
            <span>{t.form.contactPerson}</span>
          </label>
          <input
            type="text"
            required
            value={formData.contactPerson}
            onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
            placeholder={t.form.contactPersonPlaceholder}
            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-emerald-600 focus:bg-white focus:outline-hidden"
          />
        </div>

        {/* Mobile / WhatsApp */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-emerald-700" />
            <span>{t.form.mobile}</span>
          </label>
          <input
            type="tel"
            required
            pattern="[0-9]{10}"
            value={formData.mobile}
            onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
            placeholder={t.form.mobilePlaceholder}
            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-emerald-600 focus:bg-white focus:outline-hidden"
          />
        </div>

        {/* Email Address */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-emerald-700" />
            <span>{t.form.email}</span>
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder={t.form.emailPlaceholder}
            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-emerald-600 focus:bg-white focus:outline-hidden"
          />
        </div>

        {/* State */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-emerald-700" />
            <span>{t.form.state}</span>
          </label>
          <select
            value={formData.state}
            onChange={(e) => setFormData({ ...formData, state: e.target.value })}
            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-emerald-600 focus:bg-white focus:outline-hidden"
          >
            {INDIAN_STATES.map((st) => (
              <option key={st} value={st}>
                {st}
              </option>
            ))}
          </select>
        </div>

        {/* District */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-emerald-700" />
            <span>{t.form.district}</span>
          </label>
          <input
            type="text"
            required
            value={formData.district}
            onChange={(e) => setFormData({ ...formData, district: e.target.value })}
            placeholder={t.form.districtPlaceholder}
            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-emerald-600 focus:bg-white focus:outline-hidden"
          />
        </div>

        {/* Experience */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
            <Briefcase className="w-3.5 h-3.5 text-emerald-700" />
            <span>{t.form.yearsInBusiness}</span>
          </label>
          <select
            value={formData.yearsInBusiness}
            onChange={(e) => setFormData({ ...formData, yearsInBusiness: e.target.value })}
            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-emerald-600 focus:bg-white focus:outline-hidden"
          >
            <option value="New Entrant">New Entrant / Starting Business</option>
            <option value="1-3 Years">1 to 3 Years</option>
            <option value="3-5 Years">3 to 5 Years</option>
            <option value="5-10 Years">5 to 10 Years</option>
            <option value="10+ Years">10+ Years (Established Dealer)</option>
          </select>
        </div>

        {/* Annual Turnover */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5">
            {t.form.annualTurnover}
          </label>
          <select
            value={formData.turnover}
            onChange={(e) => setFormData({ ...formData, turnover: e.target.value })}
            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-emerald-600 focus:bg-white focus:outline-hidden"
          >
            <option value="Under ₹25 Lakhs">Under ₹25 Lakhs</option>
            <option value="₹25 Lakhs – ₹1 Crore">₹25 Lakhs – ₹1 Crore</option>
            <option value="₹1 Crore – ₹3 Crores">₹1 Crore – ₹3 Crores</option>
            <option value="₹3 Crores+">₹3 Crores+ (Wholesale Stockist)</option>
          </select>
        </div>
      </div>

      {/* Crops of Interest (Multi-select Chips) */}
      <div>
        <label className="block text-xs font-bold text-slate-700 mb-2">
          {t.form.cropsInterest}
        </label>
        <div className="flex flex-wrap gap-2">
          {CROPS_LIST.map((crop) => {
            const isSelected = formData.cropsInterest.includes(crop);
            return (
              <button
                type="button"
                key={crop}
                onClick={() => handleCropToggle(crop)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-lg border transition-all ${
                  isSelected
                    ? "bg-emerald-800 text-amber-300 border-emerald-900 shadow-2xs"
                    : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                }`}
              >
                {isSelected ? "✓ " : "+ "}
                {crop}
              </button>
            );
          })}
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-bold text-slate-700 mb-1.5">
          {t.form.message}
        </label>
        <textarea
          rows={3}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder={t.form.messagePlaceholder}
          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-emerald-600 focus:bg-white focus:outline-hidden"
        />
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 px-6 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-amber-300 font-extrabold text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 cursor-pointer"
        >
          <Send className="w-5 h-5" />
          <span>{isSubmitting ? t.form.submitting : t.form.submitApplication}</span>
        </button>
      </div>
    </form>
  );
};
