export interface KitchenGardenItem {
  id: string;
  slug: string;
  cropName: {
    en: string;
    hi: string;
  };
  hindiDisplay: string;
  slogan: {
    en: string;
    hi: string;
  };
  description: {
    en: string;
    hi: string;
  };
  growingDifficulty: "Easy" | "Medium";
  containerType: {
    en: string;
    hi: string;
  };
  sunlightHours: string;
  harvestDays: string;
  image: string;
}

export const kitchenGardenItems: KitchenGardenItem[] = [
  {
    id: "kg-palak",
    slug: "kg-palak",
    cropName: { en: "Spinach / Palak", hi: "पालक" },
    hindiDisplay: "पालक",
    slogan: {
      en: "Rich in natural iron and dietary fiber, perfect for windowsill planters.",
      hi: "आयरन और फाइबर से भरपूर, बालकनी और गमलों के लिए सर्वोत्तम।",
    },
    description: {
      en: "Quick-growing broad-leaf spinach for repeated cutting in shallow containers or grow bags.",
      hi: "उथले गमलों और ग्रो बैग्स में तेजी से उगने वाला, बार-बार कटाई देने वाला पालक।",
    },
    growingDifficulty: "Easy",
    containerType: { en: "Shallow Trays or 8–10 inch Pots", hi: "उथले ट्रे या 8-10 इंच के गमले" },
    sunlightHours: "3–4 Hours",
    harvestDays: "25–30 Days",
    image: "/images/kitchen-garden/kg-palak.png",
  },
  {
    id: "kg-dhaniya",
    slug: "kg-dhaniya",
    cropName: { en: "Coriander / Dhaniya", hi: "धनिया" },
    hindiDisplay: "धनिया",
    slogan: {
      en: "Fresh aromatic garnish right from your kitchen windowsill.",
      hi: "ताजा महकती धनिया, सीधे आपकी खिड़की या बालकनी से।",
    },
    description: {
      en: "Aromatic cilantro seeds that produce dense clusters of fragrant green leaves for daily kitchen seasoning.",
      hi: "दैनिक रसोई के लिए सुगंधित हरी पत्तियों से भरपूर आसान धनिया।",
    },
    growingDifficulty: "Easy",
    containerType: { en: "Wide Rectangular Planters (6–8 inch depth)", hi: "चौड़े आयताकार गमले (6-8 इंच गहरे)" },
    sunlightHours: "4–5 Hours",
    harvestDays: "30–35 Days",
    image: "/images/kitchen-garden/kg-dhaniya.png",
  },
  {
    id: "kg-methi",
    slug: "kg-methi",
    cropName: { en: "Fenugreek / Methi", hi: "मेथी" },
    hindiDisplay: "मेथी",
    slogan: {
      en: "Heart-healthy, quick microgreen and culinary leafy vegetable.",
      hi: "हृदय के लिए गुणकारी, झटपट तैयार होने वाली स्वादिष्ट मेथी।",
    },
    description: {
      en: "One of the easiest greens to grow at home. Ready for delicious parathas and curries in just 20 days.",
      hi: "घर पर उगाने में सबसे आसान। मात्र 20 दिनों में स्वादिष्ट पराठे और भाजी के लिए तैयार।",
    },
    growingDifficulty: "Easy",
    containerType: { en: "Shallow Planter Box or Terracotta Pots", hi: "उथले गमले या ग्रो बैग" },
    sunlightHours: "3–4 Hours",
    harvestDays: "20–25 Days",
    image: "/images/kitchen-garden/kg-methi.png",
  },
  {
    id: "kg-karela",
    slug: "kg-karela",
    cropName: { en: "Bitter Gourd / Karela", hi: "करेला" },
    hindiDisplay: "करेला",
    slogan: {
      en: "Diabetes-friendly detox vegetable that climbs gracefully on balcony railings.",
      hi: "डायबिटीज नियंत्रण में सहायक, बालकनी की ग्रिल पर आसानी से चढ़ने वाली बेल।",
    },
    description: {
      en: "Compact vine variety producing tender, spiny bitter gourds ideal for balcony trellis netting.",
      hi: "मचान या बालकनी ग्रिल पर आसानी से फैलने वाला कांटेदार स्वादिष्ट करेला।",
    },
    growingDifficulty: "Medium",
    containerType: { en: "12–16 inch Grow Bags with Trellis", hi: "12-16 इंच ग्रो बैग (सहारे के साथ)" },
    sunlightHours: "5–6 Hours",
    harvestDays: "50–55 Days",
    image: "/images/kitchen-garden/kg-karela.png",
  },
  {
    id: "kg-bhindi",
    slug: "kg-bhindi",
    cropName: { en: "Okra / Bhindi", hi: "भिंडी" },
    hindiDisplay: "भिंडी",
    slogan: {
      en: "Sturdy upright plants with beautiful yellow blooms and tender green pods.",
      hi: "सुंदर पीले फूल, सीधा पौधा और कोमल ताजी हरी भिंडी।",
    },
    description: {
      en: "Compact okra plants producing defect-free tender pods right on sunny balconies.",
      hi: "धूप वाली बालकनी के लिए उपयुक्त, लगातार फलने वाली स्वादिष्ट भिंडी।",
    },
    growingDifficulty: "Easy",
    containerType: { en: "10–12 inch Pots (1–2 plants per pot)", hi: "10-12 इंच गमले (प्रति गमला 1-2 पौधे)" },
    sunlightHours: "5–6 Hours",
    harvestDays: "45–50 Days",
    image: "/images/kitchen-garden/kg-bhindi.png",
  },
  {
    id: "kg-lauki",
    slug: "kg-lauki",
    cropName: { en: "Bottle Gourd / Lauki", hi: "लौकी" },
    hindiDisplay: "लौकी",
    slogan: {
      en: "Hydrating, cooling terrace climber for fresh morning juice and curries.",
      hi: "ठंडक देने वाली, सुबह के ताजे जूस और सब्जी के लिए अमृत समान लौकी।",
    },
    description: {
      en: "Vigorous climber that creates green terrace shade while bearing tender bottle gourds.",
      hi: "छत पर हरी छांव देने वाली और कोमल फल पैदा करने वाली लौकी की बेल।",
    },
    growingDifficulty: "Medium",
    containerType: { en: "15–18 inch Large Grow Bags", hi: "15-18 इंच बड़े ग्रो बैग" },
    sunlightHours: "5–6 Hours",
    harvestDays: "50–55 Days",
    image: "/images/kitchen-garden/kg-lauki.png",
  },
  {
    id: "kg-tamatar",
    slug: "kg-tamatar",
    cropName: { en: "Tomato / Tamatar", hi: "टमाटर" },
    hindiDisplay: "टमाटर",
    slogan: {
      en: "Juicy, vine-ripened red tomatoes bursting with garden freshness.",
      hi: "शाखा पर पके, रसीले लाल टमाटर सीधे आपके गमले से।",
    },
    description: {
      en: "Prolific container-friendly tomato bearing clusters of sweet, firm red fruits.",
      hi: "गमलों में गुच्छों में फलने वाला, रसीला और स्वादिष्ट टमाटर।",
    },
    growingDifficulty: "Medium",
    containerType: { en: "12 inch Pots with Staking Stick", hi: "12 इंच गमले (लकड़ी के सहारे के साथ)" },
    sunlightHours: "6 Hours",
    harvestDays: "60–65 Days",
    image: "/images/kitchen-garden/kg-tamatar.png",
  },
  {
    id: "kg-baingan",
    slug: "kg-baingan",
    cropName: { en: "Brinjal / Baingan", hi: "बैंगन" },
    hindiDisplay: "बैंगन",
    slogan: {
      en: "Glossy purple fruits ideal for home bharta and stuffed delicacies.",
      hi: "चमकदार बैंगनी फल, स्वादिष्ट भरता और कलौंजी के लिए उत्तम।",
    },
    description: {
      en: "Hardy perennial-like vegetable that bears glossy tender brinjals over several months.",
      hi: "महीनों तक लगातार फलने वाला, कीट प्रतिरोधी सुगठित बैंगन का पौधा।",
    },
    growingDifficulty: "Easy",
    containerType: { en: "10–12 inch Pots", hi: "10-12 इंच गमले" },
    sunlightHours: "5–6 Hours",
    harvestDays: "55–60 Days",
    image: "/images/kitchen-garden/kg-baingan.png",
  },
  {
    id: "kg-kheera",
    slug: "kg-kheera",
    cropName: { en: "Cucumber / Kheera", hi: "खीरा" },
    hindiDisplay: "खीरा",
    slogan: {
      en: "Crisp, sweet, pesticide-free salad straight from your potted garden.",
      hi: "बिना कीटनाशक का ताजा, कुरकुरा और मीठा सलाद खीरा।",
    },
    description: {
      en: "Fast-growing climber producing tender, non-bitter cucumbers on vertical supports.",
      hi: "वर्टिकल जाली पर तेजी से चढ़ने वाला, मीठा और रसदार खीरा।",
    },
    growingDifficulty: "Easy",
    containerType: { en: "12 inch Pots with Netting", hi: "12 इंच गमला (जाली के साथ)" },
    sunlightHours: "4–5 Hours",
    harvestDays: "42–45 Days",
    image: "/images/kitchen-garden/kg-kheera.png",
  },
  {
    id: "kg-mirch",
    slug: "kg-mirch",
    cropName: { en: "Chilli / Mirch", hi: "मिर्च" },
    hindiDisplay: "मिर्च",
    slogan: {
      en: "Spicy kick of organic green chillies on a compact bushy terrace plant.",
      hi: "गमले में भरपूर तीखी हरी मिर्च, रासायनिक दवाओं से 100% मुक्त।",
    },
    description: {
      en: "Decorative yet prolific chilli plant bearing pungent green chillies all year round.",
      hi: "साल भर तीखी हरी मिर्च देने वाला सुंदर व सुगठित पौधा।",
    },
    growingDifficulty: "Easy",
    containerType: { en: "8–10 inch Pots", hi: "8-10 इंच गमला" },
    sunlightHours: "5–6 Hours",
    harvestDays: "60–65 Days",
    image: "/images/kitchen-garden/kg-mirch.png",
  },
  {
    id: "kg-shimla-mirch",
    slug: "kg-shimla-mirch",
    cropName: { en: "Capsicum / Shimla Mirch", hi: "शिमला मिर्च" },
    hindiDisplay: "शिमला मिर्च",
    slogan: {
      en: "Crunchy bell peppers packed with Vitamin C for pizzas and stir-fries.",
      hi: "विटामिन सी से भरपूर कुरकुरी शिमला मिर्च, घर के बने पिज्जा व नूडल्स के लिए।",
    },
    description: {
      en: "Thick-walled blocky green bell peppers that grow reliably in terrace container pots.",
      hi: "मोटी दीवार वाली कुरकुरी शिमला मिर्च जो बालकनी में आसानी से फलती है।",
    },
    growingDifficulty: "Medium",
    containerType: { en: "10–12 inch Pots", hi: "10-12 इंच गमले" },
    sunlightHours: "4–5 Hours",
    harvestDays: "65–70 Days",
    image: "/images/kitchen-garden/kg-shimla-mirch.png",
  },
  {
    id: "kg-gajar",
    slug: "kg-gajar",
    cropName: { en: "Carrot / Gajar", hi: "गाजर" },
    hindiDisplay: "गाजर",
    slogan: {
      en: "Sweet, crunchy orange-red roots rich in Beta-Carotene for wholesome salads.",
      hi: "बीटा-कैरोटीन से भरपूर मीठी, कुरकुरी लाल गाजर, ताजे सलाद और हलवे के लिए।",
    },
    description: {
      en: "Bred for loose container potting mix; develops straight sweet carrots in deep pots.",
      hi: "गहरे गमलों की भुरभुरी मिट्टी में सीधी, मीठी व लाल गाजर पैदा करने वाला बीज।",
    },
    growingDifficulty: "Easy",
    containerType: { en: "Deep Grow Bags (12–14 inch depth)", hi: "गहरे ग्रो बैग (12-14 इंच गहरे)" },
    sunlightHours: "4–5 Hours",
    harvestDays: "70–75 Days",
    image: "/images/kitchen-garden/kg-gajar.png",
  },
  {
    id: "kg-mooli",
    slug: "kg-mooli",
    cropName: { en: "Radish / Mooli", hi: "मूली" },
    hindiDisplay: "मूली",
    slogan: {
      en: "Crisp snow-white roots ready to harvest in just 35 to 40 days.",
      hi: "मात्र 35 से 40 दिनों में तैयार, ठोस सफेद कुरकुरी मूली।",
    },
    description: {
      en: "One of the fastest root crops for containers, yielding both crisp radish and tender greens.",
      hi: "गमलों में सबसे जल्दी तैयार होने वाली फसल, सलाद और पत्तों के साग दोनों का आनंद।",
    },
    growingDifficulty: "Easy",
    containerType: { en: "10–12 inch Deep Planters", hi: "10-12 इंच गहरे गमले" },
    sunlightHours: "4–5 Hours",
    harvestDays: "35–40 Days",
    image: "/images/kitchen-garden/kg-mooli.png",
  },
  {
    id: "kg-french-bean",
    slug: "kg-french-bean",
    cropName: { en: "French Bean", hi: "फ्रेंच बीन" },
    hindiDisplay: "फ्रेंच बीन",
    slogan: {
      en: "Stringless, tender green beans from compact self-standing bush plants.",
      hi: "बिना सहारे के खड़े होने वाले पौधे से कोमल व बिना रेशे की ताजी बीन्स।",
    },
    description: {
      en: "Dwarf bush bean variety that requires zero stakes and produces high pod counts per pot.",
      hi: "बौनी किस्म जिसे मचान की जरूरत नहीं होती, गमले में भरपूर फलियां देती है।",
    },
    growingDifficulty: "Easy",
    containerType: { en: "10 inch Pots (2 plants)", hi: "10 इंच गमला (2 पौधे)" },
    sunlightHours: "5 Hours",
    harvestDays: "50–55 Days",
    image: "/images/kitchen-garden/kg-french-bean.png",
  },
  {
    id: "kg-torai",
    slug: "kg-torai",
    cropName: { en: "Sponge Gourd / Torai", hi: "तोरई" },
    hindiDisplay: "तोरई",
    slogan: {
      en: "Tender, soft green gourds that climb rapidly and produce abundant summer vegetables.",
      hi: "गर्मी में आसानी से बढ़ने वाली, कोमल व मीठे गूदे वाली तोरई।",
    },
    description: {
      en: "Fast-climbing vine that provides both beautiful yellow flowers and tender nutritious gourds.",
      hi: "सुंदर पीले फूल और कोमल तोरई देने वाली तेज बढ़ने वाली बेल।",
    },
    growingDifficulty: "Easy",
    containerType: { en: "14–16 inch Grow Bags with Balcony Railing", hi: "14-16 इंच ग्रो बैग (रेलिंग के सहारे)" },
    sunlightHours: "5–6 Hours",
    harvestDays: "45–50 Days",
    image: "/images/kitchen-garden/kg-torai.png",
  },
  {
    id: "kg-chaulai",
    slug: "kg-chaulai",
    cropName: { en: "Amaranthus / Chaulai", hi: "चौलाई" },
    hindiDisplay: "चौलाई",
    slogan: {
      en: "Summer superfood bursting with iron, calcium, and essential vitamins.",
      hi: "आयरन और कैल्शियम का खजाना, गर्मी का पौष्टिक सुपरफूड चौलाई।",
    },
    description: {
      en: "Thrives in hot summer sunshine and yields multiple fresh leafy cuttings within weeks.",
      hi: "कड़क धूप में तेजी से बढ़ने वाली और कुछ ही हफ्तों में कई बार कटाई देने वाली पौष्टिक चौलाई।",
    },
    growingDifficulty: "Easy",
    containerType: { en: "Wide Shallow Trays or 8 inch Pots", hi: "चौड़े उथले गमले या ट्रे" },
    sunlightHours: "4–6 Hours",
    harvestDays: "20–25 Days",
    image: "/images/kitchen-garden/kg-chaulai.png",
  },
];
