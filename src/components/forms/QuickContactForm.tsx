"use client";

import React, { useState } from "react";
import { Send } from "lucide-react";
import { Locale } from "@/data/translations";
import { DBTR_PHONE } from "@/lib/whatsapp";

interface QuickContactFormProps {
  locale: Locale;
}

export const QuickContactForm: React.FC<QuickContactFormProps> = ({ locale }) => {
  const isHindi = locale === "hi";
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [state, setState] = useState("");
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*DBTR SEEDS WEBSITE CONTACT FORM*
• *Name:* ${name}
• *Mobile:* ${mobile}
• *State/District:* ${state}
• *Message:* ${query}`;

    window.open(`https://wa.me/91${DBTR_PHONE}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            {isHindi ? "आपका नाम *" : "Your Name *"}
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-600 focus:bg-white"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            {isHindi ? "मोबाइल नंबर *" : "Mobile Number *"}
          </label>
          <input
            type="tel"
            required
            pattern="[0-9]{10}"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="10-digit mobile"
            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-600 focus:bg-white"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-700 mb-1">
          {isHindi ? "राज्य एवं जिला *" : "State & District *"}
        </label>
        <input
          type="text"
          required
          value={state}
          onChange={(e) => setState(e.target.value)}
          placeholder="e.g. Medchal Malkajgiri, Telangana"
          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-600 focus:bg-white"
        />
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-700 mb-1">
          {isHindi ? "संदेश / पूछताछ *" : "Your Query / Requirements *"}
        </label>
        <textarea
          required
          rows={4}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={
            isHindi
              ? "आप किन फसलों के बीजों या डीलरशिप के संबंध में जानकारी चाहते हैं..."
              : "Describe your seed requirements, target crops, or dealership questions..."
          }
          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-600 focus:bg-white"
        />
      </div>

      <button
        type="submit"
        className="w-full py-3.5 px-6 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-amber-300 font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
      >
        <Send className="w-4 h-4" />
        <span>{isHindi ? "संदेश भेजें" : "Send Inquiry"}</span>
      </button>
    </form>
  );
};
