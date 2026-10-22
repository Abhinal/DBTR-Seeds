import { notFound } from "next/navigation";
import { Locale } from "@/data/translations";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "hi" }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "en" && locale !== "hi") {
    notFound();
  }

  const validLocale = locale as Locale;

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAF9]">
      <Navbar locale={validLocale} />
      <main className="flex-1">{children}</main>
      <Footer locale={validLocale} />
      <WhatsAppFloat locale={validLocale} />
    </div>
  );
}
