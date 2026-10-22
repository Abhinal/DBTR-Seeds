"use client";

import React, { useState } from "react";
import { X, MessageCircle, Send, Check } from "lucide-react";
import { Product } from "@/data/products";
import { Locale } from "@/data/translations";
import { DBTR_PHONE } from "@/lib/whatsapp";

interface ProductInquiryModalProps {
  product: Product;
  locale: Locale;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductInquiryModal: React.FC<ProductInquiryModalProps> = ({
  product,
  locale,
  isOpen,
  onClose,
}) => {
  const isHindi = locale === "hi";
  const [selectedPack, setSelectedPack] = useState(product.packagingSizes[0] || "100g");
  const [quantity, setQuantity] = useState("50 Packs");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [location, setLocation] = useState("");

  if (!isOpen) return null;

  const handleWhatsappSend = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `*BULK PRODUCT INQUIRY - DBTR SEEDS*
• *Product:* ${product.name[locale]} (${product.categoryName[locale]})
• *Variety Code:* ${product.varietyCode || "N/A"}
• *Packaging Size:* ${selectedPack}
• *Approx Order Qty:* ${quantity}
• *Buyer Name:* ${name || "B2B Buyer"}
• *Buyer Mobile:* ${mobile || "Provided on WhatsApp"}
• *Mandi/District:* ${location || "India"}

Please share the latest wholesale distributor rate, packaging availability, and dispatch timeline.`;

    const url = `https://wa.me/91${DBTR_PHONE}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative animate-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-5">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
            {product.cropType}
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-2">
            {product.name[locale]}
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            {isHindi ? "थोक बी2बी दर सूची एवं न्यूनतम ऑर्डर मात्रा पूछताछ" : "Request Bulk B2B Pricing & MOQ"}
          </p>
        </div>

        <form onSubmit={handleWhatsappSend} className="space-y-4">
          {/* Pack Size Selector */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              {isHindi ? "पैकिंग साइज चुनें" : "Select Packaging Size"}
            </label>
            <div className="flex flex-wrap gap-2">
              {product.packagingSizes.map((size) => (
                <button
                  type="button"
                  key={size}
                  onClick={() => setSelectedPack(size)}
                  className={`text-xs font-bold py-1.5 px-3 rounded-lg border transition-all ${
                    selectedPack === size
                      ? "bg-emerald-800 text-amber-300 border-emerald-900 shadow-xs"
                      : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {selectedPack === size && <Check className="w-3 h-3 inline mr-1" />}
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Approx Quantity */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              {isHindi ? "अनुमानित मात्रा (Packs / Kg)" : "Approx. Order Quantity"}
            </label>
            <input
              type="text"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              placeholder="e.g. 50 Packs, 100 kg, 1 Carton"
              className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-600 focus:bg-white"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                {isHindi ? "आपका नाम / फर्म" : "Your Name / Firm"}
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-600 focus:bg-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                {isHindi ? "मोबाइल नंबर" : "Mobile / WhatsApp"}
              </label>
              <input
                type="tel"
                required
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="Mobile"
                className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-600 focus:bg-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              {isHindi ? "जिला एवं राज्य" : "District & State"}
            </label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g. Medchal, Telangana"
              className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-600 focus:bg-white"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>
                {isHindi
                  ? "व्हाट्सएप पर तुरंत कोटेशन प्राप्त करें"
                  : "Send Inquiry Directly on WhatsApp"}
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
