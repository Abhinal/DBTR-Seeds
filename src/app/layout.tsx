import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "DBTR Seeds Pvt. Ltd. | Certified Hybrid & Research Seeds India",
    template: "%s | DBTR Seeds Pvt. Ltd.",
  },
  description:
    "Official B2B catalogue & distributor acquisition portal for DBTR Seeds Pvt. Ltd. High-yield, virus-resistant hybrid vegetable seeds, field crops, and balcony collection pouches.",
  keywords: [
    "DBTR Seeds",
    "Hybrid vegetable seeds",
    "Radhika 2411 okra",
    "Madhav bottle gourd",
    "Pragati Gold bitter gourd",
    "Bheem cucumber",
    "Vegetable seed distributor India",
    "Telangana seed company",
    "Kharif seeds",
    "Rabi seeds",
    "Zaid seeds",
    "Kitchen garden seeds",
  ],
  authors: [{ name: "DBTR Seeds Pvt. Ltd." }],
  metadataBase: new URL("https://dbtrseeds.com"),
  icons: {
    icon: "/images/branding/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-[#F8FAF9] text-slate-900 font-sans">
        {children}
      </body>
    </html>
  );
}
