export const DBTR_PHONE = "9966639934";
export const DBTR_PHONE_DISPLAY = "+91 99666 39934";
export const DBTR_EMAIL = "dbtrseeds@gmail.com";
export const DBTR_ADDRESS =
  "Plot No. 32, Sy No. 94, 1st Floor, MRR Colony, Medchal Malkajgiri 501401, Telangana, India";
export const DBTR_CEO = "Sandip Kumar";

export function getProductWhatsappUrl(productName: string, categoryName: string, lang: "en" | "hi" = "en"): string {
  const message =
    lang === "hi"
      ? `नमस्ते डीबीटीआर सीड्स, मैं आपकी हाइब्रिड किस्म *${productName}* (${categoryName}) के थोक वितरण/बी2बी ऑर्डर के संबंध में जानकारी व कोटेशन चाहता हूँ। कृपया न्यूनतम ऑर्डर मात्रा (MOQ) और डीलर दरें साझा करें।`
      : `Hello DBTR Seeds, I am interested in placing a bulk distributor order / dealership inquiry for *${productName}* (${categoryName}). Please share commercial pricing, MOQ, and territory availability.`;

  return `https://wa.me/91${DBTR_PHONE}?text=${encodeURIComponent(message)}`;
}

export function getDistributorWhatsappUrl(formData: {
  firmName: string;
  contactPerson: string;
  mobile: string;
  state: string;
  district: string;
  cropsInterest?: string;
  turnover?: string;
}): string {
  const message = `*NEW DISTRIBUTOR INQUIRY - DBTR SEEDS*
• *Firm Name:* ${formData.firmName}
• *Proprietor:* ${formData.contactPerson}
• *Mobile:* ${formData.mobile}
• *Location:* ${formData.district}, ${formData.state}
• *Crops of Interest:* ${formData.cropsInterest || "All Vegetable Seeds"}
• *Annual Turnover:* ${formData.turnover || "N/A"}

I would like to apply for DBTR Seeds dealership in my district. Please share dealership terms and product price list.`;

  return `https://wa.me/91${DBTR_PHONE}?text=${encodeURIComponent(message)}`;
}

export function getGeneralWhatsappUrl(lang: "en" | "hi" = "en"): string {
  const msg =
    lang === "hi"
      ? "नमस्ते डीबीटीआर सीड्स टीम, मैं आपकी हाइब्रिड सब्जी बीज श्रृंखला और डिस्ट्रीब्यूटरशिप के बारे में चर्चा करना चाहता हूँ।"
      : "Hello DBTR Seeds Team, I am contacting you regarding your hybrid vegetable seeds catalogue and B2B distributor opportunities.";

  return `https://wa.me/91${DBTR_PHONE}?text=${encodeURIComponent(msg)}`;
}
