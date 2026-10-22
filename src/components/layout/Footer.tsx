"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ShieldCheck, Sprout, ArrowRight } from "lucide-react";
import { Locale, translations } from "@/data/translations";
import { DBTR_PHONE, DBTR_PHONE_DISPLAY, DBTR_EMAIL, DBTR_ADDRESS, DBTR_CEO } from "@/lib/whatsapp";
import { categories } from "@/data/categories";

interface FooterProps {
  locale: Locale;
}

export const Footer: React.FC<FooterProps> = ({ locale }) => {
  const t = translations[locale];

  return (
    <footer className="bg-[#0D241D] text-slate-300 border-t border-emerald-800/40 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-emerald-900/60">
          {/* Column 1: Company Profile */}
          <div className="space-y-4">
            <div className="bg-white/95 rounded-lg p-2.5 inline-block shadow-sm">
              <Image
                src="/images/branding/logo.png"
                alt="DBTR Seeds Pvt. Ltd."
                width={160}
                height={45}
                className="object-contain"
              />
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              {t.footer.aboutText}
            </p>
            <div className="pt-2 text-xs text-amber-300/90 font-medium">
              <span>{locale === "hi" ? "नेतृत्व:" : "Leadership:"} </span>
              <span className="font-bold text-white">{DBTR_CEO}</span>, CEO
            </div>
          </div>

          {/* Column 2: Seed Lines & Categories */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 flex items-center gap-2">
              <Sprout className="w-4 h-4 text-emerald-400" />
              <span>{t.footer.seedCategories}</span>
            </h3>
            <ul className="space-y-2 text-sm">
              {categories.slice(0, 8).map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/${locale}/products/category/${cat.slug}`}
                    className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-emerald-500 text-xs">›</span>
                    <span>{cat.name[locale]}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links & Portals */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{t.footer.quickLinks}</span>
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href={`/${locale}/products`}
                  className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-emerald-500 text-xs">›</span>
                  <span>{t.nav.catalogue}</span>
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/kitchen-garden`}
                  className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-emerald-500 text-xs">›</span>
                  <span>{t.nav.kitchenGarden}</span>
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/crops`}
                  className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-emerald-500 text-xs">›</span>
                  <span>{t.nav.agronomy}</span>
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/become-a-distributor`}
                  className="text-amber-400 font-semibold hover:text-amber-300 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-amber-400 text-xs">›</span>
                  <span>{t.nav.distributor}</span>
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/about`}
                  className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-emerald-500 text-xs">›</span>
                  <span>{t.nav.about}</span>
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/contact`}
                  className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-emerald-500 text-xs">›</span>
                  <span>{t.nav.contact}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Central Hub */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span>{t.footer.contactInfo}</span>
            </h3>
            <div className="space-y-3 text-sm">
              <p className="flex items-start gap-2.5 text-slate-300">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span>{DBTR_ADDRESS}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${DBTR_PHONE}`} className="hover:text-white font-semibold">
                  {DBTR_PHONE_DISPLAY}
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`mailto:${DBTR_EMAIL}`} className="hover:text-white">
                  {DBTR_EMAIL}
                </a>
              </p>
              <div className="pt-2">
                <Link
                  href={`/${locale}/become-a-distributor`}
                  className="inline-flex items-center gap-2 text-xs font-bold bg-emerald-800 hover:bg-emerald-700 text-amber-300 px-3.5 py-2 rounded-md transition-colors"
                >
                  <span>{locale === "hi" ? "डीलरशिप आवेदन" : "Apply for Dealership"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Legal Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 {t.footer.rights}</p>
          <p className="max-w-2xl text-center md:text-right text-[11px] text-slate-400 leading-normal">
            {t.footer.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
};
