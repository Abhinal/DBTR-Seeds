export type Locale = "en" | "hi";

export interface Translations {
  nav: {
    home: string;
    catalogue: string;
    categories: string;
    kitchenGarden: string;
    agronomy: string;
    about: string;
    distributor: string;
    contact: string;
    switchLang: string;
    callNow: string;
    inquireWhatsapp: string;
  };
  hero: {
    badge: string;
    headlinePart1: string;
    headlineHighlight: string;
    headlinePart2: string;
    subheadline: string;
    exploreCatalogue: string;
    applyDistributor: string;
    statVarieties: string;
    statVarietiesSub: string;
    statPurity: string;
    statPuritySub: string;
    statDispatch: string;
    statDispatchSub: string;
    statSupport: string;
    statSupportSub: string;
  };
  whyDbtr: {
    heading: string;
    subheading: string;
    point1Title: string;
    point1Desc: string;
    point2Title: string;
    point2Desc: string;
    point3Title: string;
    point3Desc: string;
    point4Title: string;
    point4Desc: string;
  };
  ceo: {
    title: string;
    name: string;
    designation: string;
    quote: string;
    statement: string;
  };
  featured: {
    title: string;
    subtitle: string;
    viewAll: string;
  };
  kitchenGardenBanner: {
    badge: string;
    title: string;
    description: string;
    features: string[];
    cta: string;
  };
  distributorCta: {
    heading: string;
    subheading: string;
    bullet1: string;
    bullet2: string;
    bullet3: string;
    button: string;
    whatsappDirect: string;
  };
  cataloguePage: {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    filterCategory: string;
    filterSeason: string;
    filterType: string;
    allCategories: string;
    allSeasons: string;
    allTypes: string;
    showingResults: string;
    noResults: string;
    resetFilters: string;
    quickInquiry: string;
    viewSpecs: string;
  };
  productDetail: {
    backToCatalogue: string;
    varietyCode: string;
    cropType: string;
    firstPicking: string;
    fruitDimensions: string;
    colorTexture: string;
    plantVigor: string;
    resistance: string;
    sowingCalendar: string;
    packagingAvailable: string;
    requestQuote: string;
    directWhatsapp: string;
    keyHighlights: string;
    agronomyTable: string;
    fieldAdvice: string;
  };
  form: {
    title: string;
    subtitle: string;
    firmName: string;
    firmNamePlaceholder: string;
    contactPerson: string;
    contactPersonPlaceholder: string;
    mobile: string;
    mobilePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    state: string;
    statePlaceholder: string;
    district: string;
    districtPlaceholder: string;
    yearsInBusiness: string;
    cropsInterest: string;
    annualTurnover: string;
    message: string;
    messagePlaceholder: string;
    submitApplication: string;
    submitting: string;
    successTitle: string;
    successMessage: string;
    openInWhatsapp: string;
  };
  footer: {
    aboutText: string;
    quickLinks: string;
    seedCategories: string;
    contactInfo: string;
    address: string;
    phone: string;
    email: string;
    rights: string;
    disclaimer: string;
  };
}

export const translations: Record<Locale, Translations> = {
  en: {
    nav: {
      home: "Home",
      catalogue: "Catalogue",
      categories: "Categories",
      kitchenGarden: "Kitchen Garden",
      agronomy: "Agronomy",
      about: "About Us",
      distributor: "Distributors",
      contact: "Contact",
      switchLang: "हिंदी में देखें",
      callNow: "Call 9966639934",
      inquireWhatsapp: "WhatsApp Inquiry",
    },
    hero: {
      badge: "Govt. Compliant High-Yield Hybrid & Research Seeds",
      headlinePart1: "India's Trusted Agricultural",
      headlineHighlight: "Hybrid Seed Partner",
      headlinePart2: "For High Yields & Mandi Premium",
      subheadline:
        "Engineered for heavy flushes, virus resistance, and maximum market tonnage. DBTR Seeds supplies certified vegetable seeds, field crops, and kitchen garden packs to dealers across India.",
      exploreCatalogue: "Explore 30+ Seed Varieties",
      applyDistributor: "Apply for Dealership / Stockist",
      statVarieties: "30+ Varieties",
      statVarietiesSub: "Hybrids & research selections",
      statPurity: "100% Tested",
      statPuritySub: "High germination & genetic vigor",
      statDispatch: "Direct Dispatch",
      statDispatchSub: "From Telangana central hub",
      statSupport: "Full Agronomy",
      statSupportSub: "Dedicated field guidance",
    },
    whyDbtr: {
      heading: "Why Seed Distributors & Mandi Growers Choose DBTR",
      subheading:
        "Field-proven genetics engineered specifically for Indian agro-climatic conditions and wholesale transport durability.",
      point1Title: "Virus & Heat Resilience",
      point1Desc:
        "Proven tolerance to YVMV in Okra, Leaf Curl Virus in Chilli & Tomato, and powdery mildews in cucurbits during intense summer spikes.",
      point2Title: "Superior Mandi Presentation",
      point2Desc:
        "Fruits engineered with thick walls, crisp texture, and lustrous dark green color that retain farm freshness during long-distance transit.",
      point3Title: "High Yield & Multi-Flushing",
      point3Desc:
        "Short internodal spacing and heavy continuous flowering deliver maximum pickings per acre across an extended harvesting calendar.",
      point4Title: "Protected Dealer Territories",
      point4Desc:
        "Fair distributor margins, promotional branding materials, timely bulk shipments, and dedicated territory exclusivity for verified stockists.",
    },
    ceo: {
      title: "From the Desk of the CEO",
      name: "Sandip Kumar",
      designation: "Chief Executive Officer, DBTR Seeds Pvt. Ltd.",
      quote:
        "Our mission is simple: To empower Indian farmers with robust hybrid genetics that maximize field tonnage and fetch top prices at wholesale mandis, while giving our distributor network dependable commercial margins.",
      statement:
        "At DBTR Seeds, every hybrid in our catalogue—from our flagship Radhika 2411 Okra to our Pragati Gold Bitter Gourd and Madhav Bottle Gourd—is rigorously field-tested for genetic purity, disease tolerance, and commercial viability. We welcome forward-thinking seed distributors to partner with us.",
    },
    featured: {
      title: "Top-Performing Hybrid Seeds",
      subtitle: "The most demanded commercial varieties among progressive vegetable growers across Indian mandis.",
      viewAll: "View Complete 30+ Variety Catalogue",
    },
    kitchenGardenBanner: {
      badge: "घर की क्यारी, सेहत की तैयारी",
      title: "DBTR Kitchen Garden Balcony Collection",
      description:
        "Specially curated 16-variety home gardening collection packed for urban terraces, balconies, and kitchen plots. Pesticide-free, fresh nutrition right at home.",
      features: [
        "16 popular vegetable varieties (Spinach, Coriander, Tomato, Chilli, Gourds & more)",
        "Hermetically sealed moisture-barrier small pouches",
        "High germination rate with beginner-friendly container instructions",
        "Attractive retail counter-display packs for agro-dealers and nurseries",
      ],
      cta: "Explore Kitchen Garden Collection",
    },
    distributorCta: {
      heading: "Partner With DBTR Seeds as an Authorized Distributor",
      subheading:
        "We are expanding our dealer and stockist network across Telangana, Andhra Pradesh, Maharashtra, Madhya Pradesh, Uttar Pradesh, Bihar, and pan-India.",
      bullet1: "Competitive B2B distributor pricing with high retail margins",
      bullet2: "Direct factory shipments with tamper-evident premium multi-layer packaging",
      bullet3: "Regional marketing support, farmer meeting banners, and agronomic guidance",
      button: "Submit Distributor Application",
      whatsappDirect: "Connect Directly on WhatsApp",
    },
    cataloguePage: {
      title: "Master Product Catalogue",
      subtitle:
        "Explore our complete range of certified hybrid vegetable seeds, field crops, and balcony collection pouches.",
      searchPlaceholder: "Search by variety name (e.g. Radhika, Madhav, Bheem, Pragati)...",
      filterCategory: "Filter by Category",
      filterSeason: "Sowing Season",
      filterType: "Crop Type",
      allCategories: "All Categories",
      allSeasons: "All Sowing Seasons",
      allTypes: "All Types",
      showingResults: "Showing varieties matching your criteria",
      noResults: "No varieties found matching your filters. Try clearing your search.",
      resetFilters: "Reset Filters",
      quickInquiry: "Quick Bulk Inquiry",
      viewSpecs: "View Agronomic Specs",
    },
    productDetail: {
      backToCatalogue: "Back to Catalogue",
      varietyCode: "Variety Code",
      cropType: "Seed Category",
      firstPicking: "Maturity / First Picking",
      fruitDimensions: "Fruit Dimensions",
      colorTexture: "Color & Exterior",
      plantVigor: "Plant Habit & Growth",
      resistance: "Disease & Pest Tolerance",
      sowingCalendar: "Recommended Sowing Seasons",
      packagingAvailable: "Commercial Packaging Sizes",
      requestQuote: "Inquire for Bulk B2B Order",
      directWhatsapp: "Order via WhatsApp",
      keyHighlights: "Key Agronomic Highlights",
      agronomyTable: "Technical Agronomic Parameters",
      fieldAdvice: "Field Cultivation & Management Tips",
    },
    form: {
      title: "Distributor & Dealership Application",
      subtitle:
        "Join India's fastest-growing vegetable seed network. Fill in your business details below or connect instantly with our B2B team on WhatsApp.",
      firmName: "Firm / Business Name *",
      firmNamePlaceholder: "e.g. Kisan Krishi Kendra",
      contactPerson: "Proprietor / Contact Person *",
      contactPersonPlaceholder: "Your Full Name",
      mobile: "Mobile / WhatsApp Number *",
      mobilePlaceholder: "10-digit mobile number",
      email: "Email Address (Optional)",
      emailPlaceholder: "yourname@domain.com",
      state: "State *",
      statePlaceholder: "Select your state",
      district: "District / City *",
      districtPlaceholder: "e.g. Medchal, Nagpur, Warangal",
      yearsInBusiness: "Years in Agrochemical / Seed Retail",
      cropsInterest: "Primary Crops of Interest",
      annualTurnover: "Approx. Annual Seed Turnover Bracket",
      message: "Territory / Requirements Message",
      messagePlaceholder: "Specify districts or crops you wish to distribute...",
      submitApplication: "Submit Distributor Application",
      submitting: "Submitting...",
      successTitle: "Application Received Successfully!",
      successMessage:
        "Thank you for your interest in partnering with DBTR Seeds. Our distribution manager will review your territory request and reach out within 24 hours.",
      openInWhatsapp: "Also Send Inquiry via WhatsApp for Priority Response",
    },
    footer: {
      aboutText:
        "DBTR Seeds Pvt. Ltd. is a research-driven seed company dedicated to developing high-yielding, disease-resistant hybrid vegetable and field crop seeds for progressive farmers across India.",
      quickLinks: "Quick Links",
      seedCategories: "Core Seed Lines",
      contactInfo: "Head Office & Warehouse",
      address:
        "Plot No. 32, Sy No. 94, 1st Floor, MRR Colony, Medchal Malkajgiri 501401, Telangana, India",
      phone: "+91 99666 39934",
      email: "dbtrseeds@gmail.com",
      rights: "DBTR Seeds Pvt. Ltd. All Rights Reserved.",
      disclaimer:
        "All agronomic performance indicators, maturity periods, and yields are subject to local climate, soil conditions, and farm management practices. Seeds are strictly for agricultural sowing.",
    },
  },
  hi: {
    nav: {
      home: "होम",
      catalogue: "कैटलॉग",
      categories: "श्रेणियां",
      kitchenGarden: "किचन गार्डन",
      agronomy: "कृषि सलाह",
      about: "कंपनी परिचय",
      distributor: "डीलर पोर्टल",
      contact: "संपर्क",
      switchLang: "English",
      callNow: "कॉल करें: 9966639934",
      inquireWhatsapp: "व्हाट्सएप पूछताछ",
    },
    hero: {
      badge: "सरकारी मानकों के अनुरूप उच्च उपज हाइब्रिड एवं रिसर्च बीज",
      headlinePart1: "भारतीय किसानों का विश्वसनीय",
      headlineHighlight: "हाइब्रिड बीज साथी",
      headlinePart2: "बंपर पैदावार और मंडी में सबसे ऊंचा भाव",
      subheadline:
        "रोग प्रतिरोधी, निरंतर तुड़ाई और उच्च बाजार मांग के लिए तैयार। डीबीटीआर सीड्स देश भर के वितरकों को प्रमाणित सब्जी बीज, फील्ड क्रॉप्स और किचन गार्डन पाउच की आपूर्ति करता है।",
      exploreCatalogue: "30+ उन्नत किस्में देखें",
      applyDistributor: "डीलरशिप / डिस्ट्रीब्यूटरशिप आवेदन",
      statVarieties: "30+ किस्में",
      statVarietiesSub: "हाइब्रिड एवं रिसर्च किस्में",
      statPurity: "100% जांची गई",
      statPuritySub: "उच्च अंकुरण एवं आनुवंशिक शुद्धता",
      statDispatch: "सीधी आपूर्ति",
      statDispatchSub: "तेलंगाना मुख्य हब से प्रेषण",
      statSupport: "कृषि मार्गदर्शन",
      statSupportSub: "विशेषज्ञ फील्ड सहायता",
    },
    whyDbtr: {
      heading: "बीज वितरक और किसान डीबीटीआर को क्यों चुनते हैं?",
      subheading:
        "भारतीय कृषि-जलवायु परिस्थितियों और थोक मंडी परिवहन के अनुकूल विकसित उच्च कोटि की आनुवंशिकी।",
      point1Title: "वायरस व गर्मी सहनशीलता",
      point1Desc:
        "भिंडी में पीला शिरा मोज़ेक वायरस (YVMV), मिर्च व टमाटर में पत्ती मरोड़, और बेल वाली फसलों में पाउडरी मिल्ड्यू के प्रति उच्च सहनशील।",
      point2Title: "मंडी में आकर्षक प्रस्तुति",
      point2Desc:
        "फल मोटे गूदे, गहरे हरे चमकदार रंग और बेहतरीन स्वाद वाले होते हैं जो लंबी दूरी के परिवहन में भी ताजा बने रहते हैं।",
      point3Title: "अधिक उपज और निरंतर तुड़ाई",
      point3Desc:
        "कम दूरी की गांठों और भारी पुष्पन के कारण प्रति एकड़ सबसे अधिक तुड़ाई और लंबी फसल अवधि मिलती है।",
      point4Title: "सुरक्षित डिस्ट्रीब्यूटर क्षेत्र",
      point4Desc:
        "डीलर को बेहतर व्यापारिक मार्जिन, प्रचार सामग्री, समय पर माल की डिलीवरी और अधिकृत क्षेत्र की सुरक्षा।",
    },
    ceo: {
      title: "सीईओ संदेश",
      name: "संदीप कुमार",
      designation: "मुख्य कार्यकारी अधिकारी (CEO), डीबीटीआर सीड्स प्रा. लि.",
      quote:
        "हमारा उद्देश्य स्पष्ट है: भारतीय किसानों को ऐसे शक्तिशाली हाइब्रिड बीज उपलब्ध कराना जो बंपर पैदावार दें और थोक मंडियों में उच्चतम मूल्य दिलाएं, साथ ही हमारे वितरक नेटवर्क को सुरक्षित व्यावसायिक लाभ प्रदान करें।",
      statement:
        "डीबीटीआर सीड्स में हमारी प्रत्येक किस्म—चाहे वह राधिका 2411 भिंडी हो, प्रगति गोल्ड करेला या माधव लौकी—आनुवंशिक शुद्धता, रोग प्रतिरोधकता और मंडी उपयोगिता के लिए कठोरता से परखी जाती है। हम देश भर के बीज व्यापारियों का स्वागत करते हैं।",
    },
    featured: {
      title: "प्रमुख हाइब्रिड सब्जी किस्में",
      subtitle: "भारतीय मंडियों में प्रगतिशील सब्जी उत्पादकों द्वारा सर्वाधिक मांगी जाने वाली व्यावसायिक किस्में।",
      viewAll: "संपूर्ण 30+ उत्पाद कैटलॉग देखें",
    },
    kitchenGardenBanner: {
      badge: "घर की क्यारी, सेहत की तैयारी",
      title: "डीबीटीआर किचन गार्डन बालकनी कलेक्शन",
      description:
        "शहरी छतों, बालकनी और घर की क्यारियों के लिए विशेष रूप से तैयार 16 लोकप्रिय सब्जियों का सुलभ संग्रह। घर पर उगाएं ताजी, रसायन मुक्त हरी सब्जियां।",
      features: [
        "16 लोकप्रिय सब्जियां (पालक, धनिया, टमाटर, मिर्च, लौकी, करेला आदि)",
        "नमी-रोधी सुरक्षित छोटे पाउच",
        "सरल गमला दिशा-निर्देशों के साथ उच्च अंकुरण दर",
        "कृषि दुकानों और नर्सरी के लिए आकर्षक काउंटर-डिस्प्ले पैक",
      ],
      cta: "किचन गार्डन कलेक्शन देखें",
    },
    distributorCta: {
      heading: "डीबीटीआर सीड्स के अधिकृत वितरक (Distributor) बनें",
      subheading:
        "हम तेलंगाना, आंध्र प्रदेश, महाराष्ट्र, मध्य प्रदेश, उत्तर प्रदेश, बिहार और पूरे भारत में अपने डीलर नेटवर्क का विस्तार कर रहे हैं।",
      bullet1: "आकर्षक थोक बी2बी दरें और बेहतरीन रिटेल मुनाफा मार्जिन",
      bullet2: "सीधे फैक्ट्री से सुरक्षित मल्टी-लेयर पैकेजिंग में माल की आपूर्ति",
      bullet3: "क्षेत्रीय प्रचार सामग्री, किसान गोष्ठी बैनर और पूर्ण तकनीकी सहयोग",
      button: "डीलरशिप फॉर्म भरें",
      whatsappDirect: "सीधे व्हाट्सएप पर संपर्क करें",
    },
    cataloguePage: {
      title: "मास्टर उत्पाद कैटलॉग",
      subtitle:
        "हाइब्रिड सब्जी बीज, फील्ड क्रॉप्स और घर की क्यारी पाउच की संपूर्ण प्रमाणित श्रृंखला।",
      searchPlaceholder: "किस्म के नाम से खोजें (जैसे: राधिका, माधव, भीम, प्रगति)...",
      filterCategory: "श्रेणी चुनें",
      filterSeason: "बुवाई का मौसम",
      filterType: "बीज प्रकार",
      allCategories: "सभी श्रेणियां",
      allSeasons: "सभी मौसम",
      allTypes: "सभी प्रकार",
      showingResults: "आपकी खोज के अनुसार उपलब्ध किस्में",
      noResults: "इस फिल्टर के अनुसार कोई किस्म नहीं मिली। कृपया पुनः प्रयास करें।",
      resetFilters: "फिल्टर हटाएं",
      quickInquiry: "थोक पूछताछ",
      viewSpecs: "विशेषताएं देखें",
    },
    productDetail: {
      backToCatalogue: "कैटलॉग पर वापस जाएं",
      varietyCode: "किस्म कोड",
      cropType: "बीज श्रेणी",
      firstPicking: "पहली तुड़ाई / परिपक्वता",
      fruitDimensions: "फल का आकार व वजन",
      colorTexture: "रंग एवं बनावट",
      plantVigor: "पौधे का स्वभाव एवं बढ़वार",
      resistance: "रोग एवं कीट सहनशीलता",
      sowingCalendar: "उपयुक्त बुवाई का समय",
      packagingAvailable: "उपलब्ध व्यावसायिक पैकिंग",
      requestQuote: "थोक ऑर्डर कोटेशन प्राप्त करें",
      directWhatsapp: "व्हाट्सएप पर ऑर्डर करें",
      keyHighlights: "प्रमुख कृषि विशेषताएं",
      agronomyTable: "तकनीकी कृषि मापदंड",
      fieldAdvice: "खेत की तैयारी एवं फसल प्रबंधन सलाह",
    },
    form: {
      title: "डीलरशिप एवं डिस्ट्रीब्यूटरशिप आवेदन पत्र",
      subtitle:
        "भारत के सबसे तेजी से बढ़ते हाइब्रिड बीज नेटवर्क से जुड़ें। नीचे अपनी व्यावसायिक जानकारी भरें अथवा सीधे हमारे व्हाट्सएप पर संपर्क करें।",
      firmName: "फर्म / प्रतिष्ठान का नाम *",
      firmNamePlaceholder: "उदा. किसान कृषि केंद्र",
      contactPerson: "प्रोपराइटर / संपर्क व्यक्ति का नाम *",
      contactPersonPlaceholder: "आपका पूरा नाम",
      mobile: "मोबाइल / व्हाट्सएप नंबर *",
      mobilePlaceholder: "10 अंकों का मोबाइल नंबर",
      email: "ईमेल आईडी (वैकल्पिक)",
      emailPlaceholder: "yourname@domain.com",
      state: "राज्य *",
      statePlaceholder: "अपना राज्य चुनें",
      district: "जिला / शहर *",
      districtPlaceholder: "उदा. मेचल, नागपुर, वारंगल",
      yearsInBusiness: "बीज एवं कृषि व्यापार का अनुभव (वर्ष)",
      cropsInterest: "रुचि की प्रमुख फसलें",
      annualTurnover: "अनुमानित वार्षिक बीज टर्नओवर",
      message: "क्षेत्रीय मांग / अतिरिक्त विवरण",
      messagePlaceholder: "जिस क्षेत्र में वितरण चाहते हैं उसका विवरण दें...",
      submitApplication: "आवेदन जमा करें",
      submitting: "जमा हो रहा है...",
      successTitle: "आपका आवेदन सफलतापूर्वक प्राप्त हुआ!",
      successMessage:
        "डीबीटीआर सीड्स में रुचि लेने के लिए धन्यवाद। हमारे क्षेत्रीय डिस्ट्रीब्यूशन मैनेजर 24 घंटे के भीतर आपसे संपर्क करेंगे।",
      openInWhatsapp: "त्वरित प्रतिक्रिया के लिए व्हाट्सएप पर भी भेजें",
    },
    footer: {
      aboutText:
        "डीबीटीआर सीड्स प्रा. लि. एक शोध-आधारित बीज कंपनी है जो भारतीय किसानों के लिए उच्च उपज, रोग प्रतिरोधी हाइब्रिड सब्जी एवं फील्ड क्रॉप्स बीजों का विकास और विपणन करती है।",
      quickLinks: "महत्वपूर्ण लिंक",
      seedCategories: "मुख्य बीज श्रेणियां",
      contactInfo: "मुख्यालय एवं डिपो",
      address:
        "प्लॉट नं. 32, सर्वे नं. 94, प्रथम तल, एमआरआर कॉलोनी, मेडचल मलकाजगिरि 501401, तेलंगाना, भारत",
      phone: "+91 99666 39934",
      email: "dbtrseeds@gmail.com",
      rights: "डीबीटीआर सीड्स प्रा. लि. सर्वाधिकार सुरक्षित।",
      disclaimer:
        "सभी कृषि प्रदर्शन सूचकांक, तुड़ाई अवधि एवं उपज स्थानीय मौसम, मिट्टी व प्रबंधन पर निर्भर करते हैं। बीज केवल बुवाई के उद्देश्य हेतु हैं।",
    },
  },
};
