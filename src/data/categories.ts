export interface Category {
  id: string;
  slug: string;
  name: {
    en: string;
    hi: string;
  };
  scientificFamily?: string;
  description: {
    en: string;
    hi: string;
  };
  productCount: number;
  featuredImage: string;
  accentColor: string;
}

export const categories: Category[] = [
  {
    id: "okra",
    slug: "okra",
    name: {
      en: "Okra / Bhindi",
      hi: "भिंडी (Okra)",
    },
    scientificFamily: "Abelmoschus esculentus",
    description: {
      en: "High-yield hybrid okra seeds engineered for YVMV and ELCV virus resistance, tender dark-green pods, and multi-picking vigor.",
      hi: "वाईवीएमवी और ईएलसीवी वायरस प्रतिरोधी, गहरे हरे कोमल फल और अधिक तुड़ाई देने वाली उच्च उपज हाइब्रिड भिंडी बीज।",
    },
    productCount: 3,
    featuredImage: "/images/products/radhika-2411.png",
    accentColor: "#15803d",
  },
  {
    id: "gourds",
    slug: "gourds",
    name: {
      en: "Gourds & Melons",
      hi: "लौकी, तोरई और करेला",
    },
    scientificFamily: "Cucurbitaceae",
    description: {
      en: "Comprehensive range of Bottle Gourd, Sponge Gourd, Bitter Gourd, Ridge Gourd, and Snake Gourd varieties suited for riverbeds and open fields.",
      hi: "लौकी, नेनुआ/तोरई, करेला, झींगा तोरई और चिचिंडा की उन्नत हाइब्रिड किस्में।",
    },
    productCount: 11,
    featuredImage: "/images/products/madhav.png",
    accentColor: "#166534",
  },
  {
    id: "chilli",
    slug: "chilli",
    name: {
      en: "Chilli & Hot Pepper",
      hi: "मिर्च (Chilli)",
    },
    scientificFamily: "Capsicum annuum",
    description: {
      en: "Pungent and high-yield green chilli hybrids boasting exceptional fruit bearing, heat tolerance, and extended shelf life for fresh markets.",
      hi: "तीखी, चमकदार हरी मिर्च किस्में, अधिक उत्पादन और लंबी दूरी के परिवहन के लिए उपयुक्त।",
    },
    productCount: 3,
    featuredImage: "/images/products/shine-long.png",
    accentColor: "#b91c1c",
  },
  {
    id: "tomato",
    slug: "tomato",
    name: {
      en: "Tomato / Tamatar",
      hi: "टमाटर (Tomato)",
    },
    scientificFamily: "Solanum lycopersicum",
    description: {
      en: "Firm, deep red, square-round tomato hybrids with exceptional keeping quality, high TSS, and tolerance to foliar blights.",
      hi: "कठोर, गहरे लाल, आकर्षक आकार के हाइब्रिड टमाटर बीज, उत्कृष्ट भंडारण क्षमता और रोग सहिष्णुता।",
    },
    productCount: 2,
    featuredImage: "/images/products/aparna.png",
    accentColor: "#dc2626",
  },
  {
    id: "cucumber",
    slug: "cucumber",
    name: {
      en: "Cucumber & Long Melon",
      hi: "खीरा एवं ककड़ी",
    },
    scientificFamily: "Cucumis sativus",
    description: {
      en: "Crisp, non-bitter, uniform green cucumbers and summer long melons selected for high consumer appeal and continuous vine flushing.",
      hi: "कुरकुरे, मीठे, एकसमान हरे खीरे और ककड़ी की किस्में जो गर्मियों में निरंतर फलन देती हैं।",
    },
    productCount: 3,
    featuredImage: "/images/products/bheem.png",
    accentColor: "#15803d",
  },
  {
    id: "radish",
    slug: "radish",
    name: {
      en: "Radish / Mooli",
      hi: "मूली (Radish)",
    },
    scientificFamily: "Raphanus sativus",
    description: {
      en: "Pith-free, snow-white, crisp roots and tender leafy varieties engineered for summer heat tolerance and quick maturity.",
      hi: "सफेद, ठोस, बिना खोखलेपन वाली कुरकुरी जड़ें और पत्तेदार मूली की तेज तैयार होने वाली किस्में।",
    },
    productCount: 4,
    featuredImage: "/images/products/x-92.png",
    accentColor: "#0f766e",
  },
  {
    id: "cowpea",
    slug: "cowpea",
    name: {
      en: "Cowpea / Lobia",
      hi: "लोबिया (Cowpea)",
    },
    scientificFamily: "Vigna unguiculata",
    description: {
      en: "Heavy-bearing, tender light green pods with uniform length and excellent transport durability for wholesale mandi trading.",
      hi: "गुच्छों में फलने वाली, कोमल हरी फलियां और थोक मंडियों के लिए टिकाऊ लोबिया बीज।",
    },
    productCount: 2,
    featuredImage: "/images/products/ganga-kanchan.png",
    accentColor: "#047857",
  },
  {
    id: "watermelon",
    slug: "watermelon",
    name: {
      en: "Watermelon / Tarbooj",
      hi: "तरबूज (Watermelon)",
    },
    scientificFamily: "Citrullus lanatus",
    description: {
      en: "Sweet, granular red flesh hybrids with robust rind thickness for distance shipping and high sugar content (Brix).",
      hi: "मीठा, दानेदार गहरा लाल गूदा, मजबूत छिलका और उच्च ब्रिक्स मिठास वाले हाइब्रिड तरबूज।",
    },
    productCount: 2,
    featuredImage: "/images/products/green-gold.png",
    accentColor: "#065f46",
  },
  {
    id: "leafy-greens",
    slug: "leafy-greens",
    name: {
      en: "Leafy Greens (Palak, Dhaniya, Chaulai)",
      hi: "पत्तेदार सब्जियां (पालक, धनिया, चौलाई)",
    },
    scientificFamily: "Amaranthaceae & Apiaceae",
    description: {
      en: "Aromatic slow-bolting coriander, broad dark-green spinach, and vigorous amaranthus leafy greens for continuous cuttings.",
      hi: "धीमी फूलने वाली सुगंधित धनिया, चौड़े गहरे हरे पत्तों वाला पालक और पौष्टिक चौलाई।",
    },
    productCount: 5,
    featuredImage: "/images/products/hariyali.png",
    accentColor: "#166534",
  },
  {
    id: "beans",
    slug: "beans",
    name: {
      en: "Beans / French Bean",
      hi: "फ्रेंच बीन (Beans)",
    },
    scientificFamily: "Phaseolus vulgaris",
    description: {
      en: "Straight, stringless, fleshy green pods with synchronous maturity and high market preference.",
      hi: "सीधी, बिना रेशे वाली, मांसल हरी फलियां और एकसाथ पकने वाली उच्च गुणवत्ता फ्रेंच बीन।",
    },
    productCount: 1,
    featuredImage: "/images/products/x-99.png",
    accentColor: "#15803d",
  },
  {
    id: "field-crops",
    slug: "field-crops",
    name: {
      en: "Field Crops / Bajra",
      hi: "फील्ड क्रॉप्स / बाजरा",
    },
    scientificFamily: "Pennisetum glaucum",
    description: {
      en: "High-biomass nutritional hybrid pearl millet with bold grain, stay-green fodder quality, and drought tolerance.",
      hi: "मोटे दाने, सूखा सहनशील और हरा चारा देने वाला पोषक हाइब्रिड बाजरा।",
    },
    productCount: 1,
    featuredImage: "/images/products/super-nutri.png",
    accentColor: "#854d0e",
  },
  {
    id: "kitchen-garden",
    slug: "kitchen-garden",
    name: {
      en: "Kitchen Garden Collection",
      hi: "घर की क्यारी (किचन गार्डन)",
    },
    scientificFamily: "Balcony & Terrace Gardening",
    description: {
      en: "Specially packed small-size pouches designed for home balconies, terrace gardens, and fresh pesticide-free kitchen harvests.",
      hi: "बालकनी, छत और घर की क्यारी के लिए 16 लोकप्रिय सब्जियों के आसान एवं सुलभ पैक।",
    },
    productCount: 16,
    featuredImage: "/images/kitchen-garden/kg-palak.png",
    accentColor: "#047857",
  },
];
