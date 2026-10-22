"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, MessageCircle, Menu, X, Globe, Sprout } from "lucide-react";
import { Locale, translations } from "@/data/translations";
import { DBTR_PHONE, DBTR_PHONE_DISPLAY, getGeneralWhatsappUrl } from "@/lib/whatsapp";

interface NavbarProps {
  locale: Locale;
}

export const Navbar: React.FC<NavbarProps> = ({ locale }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const t = translations[locale];

  // Helper to switch language while preserving sub-path
  const switchLangTarget = (): string => {
    const targetLocale: Locale = locale === "en" ? "hi" : "en";
    if (!pathname) return `/${targetLocale}`;
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length === 0) return `/${targetLocale}`;
    segments[0] = targetLocale;
    return `/${segments.join("/")}`;
  };

  const navLinks = [
    { href: `/${locale}`, label: t.nav.home },
    { href: `/${locale}/products`, label: t.nav.catalogue },
    { href: `/${locale}/products/category/okra`, label: t.nav.categories },
    { href: `/${locale}/kitchen-garden`, label: t.nav.kitchenGarden },
    { href: `/${locale}/crops`, label: t.nav.agronomy },
    { href: `/${locale}/about`, label: t.nav.about },
    { href: `/${locale}/become-a-distributor`, label: t.nav.distributor, isHighlight: true },
    { href: `/${locale}/contact`, label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-emerald-900/10 shadow-xs">
      {/* Top Bar for B2B Direct Contact */}
      <div className="bg-[#12352B] text-emerald-100 text-xs py-1.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1536px] mx-auto flex justify-between items-center gap-3">
          <div className="flex items-center space-x-2 min-w-0 truncate">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span className="font-medium truncate">
              {locale === "hi"
                ? "डीबीटीआर सीड्स प्रा. लि. — विश्वसनीय कृषि हाइब्रिड बीज वितरक नेटवर्क"
                : "DBTR Seeds Pvt. Ltd. — Certified Hybrid & Research Seeds"}
            </span>
          </div>
          <div className="flex items-center space-x-3 sm:space-x-4 shrink-0 whitespace-nowrap text-xs">
            <a
              href={`tel:${DBTR_PHONE}`}
              className="flex items-center gap-1.5 hover:text-amber-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="hidden sm:inline font-semibold">{DBTR_PHONE_DISPLAY}</span>
            </a>
            <span className="text-emerald-700">|</span>
            <Link
              href={switchLangTarget()}
              className="flex items-center gap-1 font-bold text-amber-300 hover:text-amber-200 transition-colors px-2 py-0.5 rounded bg-emerald-900/60"
            >
              <Globe className="w-3 h-3 shrink-0" />
              <span>{t.nav.switchLang}</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-2 xl:gap-4">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center shrink-0 group">
            <div className="relative w-36 sm:w-40 xl:w-44 h-12 flex items-center">
              <Image
                src="/images/branding/logo.png"
                alt="DBTR Seeds Pvt. Ltd."
                width={176}
                height={48}
                className="object-contain w-auto h-11"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-0.5 xl:space-x-1.5 2xl:space-x-2 shrink-0">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-2 xl:px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold whitespace-nowrap transition-all ${
                    link.isHighlight
                      ? "bg-emerald-800 text-amber-300 hover:bg-emerald-900 border border-amber-400/30 shadow-xs hover:shadow-sm"
                      : isActive
                      ? "text-emerald-900 bg-emerald-50 border border-emerald-200"
                      : "text-slate-700 hover:text-emerald-900 hover:bg-emerald-50/70"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3 shrink-0">
            <a
              href={getGeneralWhatsappUrl(locale)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 xl:gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-3 xl:px-4 py-2 xl:py-2.5 rounded-lg text-xs xl:text-sm font-bold shadow-xs hover:shadow-md transition-all whitespace-nowrap transform hover:-translate-y-0.5 shrink-0"
            >
              <MessageCircle className="w-4 h-4 fill-current shrink-0" />
              <span>{locale === "hi" ? "व्हाट्सएप पूछताछ" : "WhatsApp Order"}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden space-x-2">
            <Link
              href={switchLangTarget()}
              className="flex items-center gap-1 text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1.5 rounded-md"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{locale === "en" ? "हिं" : "EN"}</span>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-emerald-900 hover:bg-emerald-50 focus:outline-hidden"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 rounded-md text-base font-medium ${
                  link.isHighlight
                    ? "bg-emerald-800 text-amber-300 font-bold"
                    : pathname === link.href
                    ? "bg-emerald-50 text-emerald-900 font-bold"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-slate-200 flex flex-col gap-2">
            <a
              href={`tel:${DBTR_PHONE}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-emerald-50 text-emerald-900 font-bold border border-emerald-200"
            >
              <Phone className="w-4 h-4 text-emerald-700" />
              <span>{t.nav.callNow}</span>
            </a>
            <a
              href={getGeneralWhatsappUrl(locale)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-[#25D366] text-white font-bold"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>{locale === "hi" ? "व्हाट्सएप पर संपर्क करें" : "Chat on WhatsApp"}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
