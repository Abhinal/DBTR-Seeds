"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Locale } from "@/data/translations";
import { getGeneralWhatsappUrl } from "@/lib/whatsapp";

interface WhatsAppFloatProps {
  locale: Locale;
}

export const WhatsAppFloat: React.FC<WhatsAppFloatProps> = ({ locale }) => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3 group">
      {/* Friendly Tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-slate-800 text-xs font-semibold py-2 px-3.5 rounded-full shadow-lg border border-emerald-100 animate-in fade-in slide-in-from-right-4 duration-300">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span>
            {locale === "hi"
              ? "थोक बीज पूछताछ व डीलरशिप सहायता"
              : "B2B Seed Inquiry & Dealership Support"}
          </span>
          <button
            onClick={(e) => {
              e.preventDefault();
              setShowTooltip(false);
            }}
            className="text-slate-400 hover:text-slate-600 ml-1"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={getGeneralWhatsappUrl(locale)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with DBTR Seeds on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none" />
        <MessageCircle className="w-8 h-8 fill-current relative z-10" />
      </a>
    </div>
  );
};
