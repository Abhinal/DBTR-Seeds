export interface Product {
  id: string;
  slug: string;
  name: {
    en: string;
    hi: string;
  };
  scientificName: string;
  categorySlug: string;
  categoryName: {
    en: string;
    hi: string;
  };
  cropType: string;
  varietyCode?: string;
  tagline: {
    en: string;
    hi: string;
  };
  description: {
    en: string;
    hi: string;
  };
  specs: {
    sowingSeason: {
      en: string;
      hi: string;
    };
    maturityDays: string;
    fruitLengthOrWeight: string;
    fruitColor: {
      en: string;
      hi: string;
    };
    fruitShape: {
      en: string;
      hi: string;
    };
    plantHabit: {
      en: string;
      hi: string;
    };
    diseaseResistance: {
      en: string;
      hi: string;
    };
    specialFeatures: {
      en: string[];
      hi: string[];
    };
    recommendedRegions?: {
      en: string;
      hi: string;
    };
  };
  packagingSizes: string[];
  image: string;
  packRender?: string;
  isFeatured?: boolean;
}

export const products: Product[] = [
  // 1. RADHIKA 2411 (Okra)
  {
    id: "radhika-2411",
    slug: "radhika-2411",
    name: {
      en: "Radhika 2411",
      hi: "राधिका 2411 (भिंडी)",
    },
    scientificName: "Abelmoschus esculentus",
    categorySlug: "okra",
    categoryName: {
      en: "Okra / Bhindi",
      hi: "भिंडी",
    },
    cropType: "Hybrid F1",
    varietyCode: "DBTR 2411",
    tagline: {
      en: "High-yield hybrid okra with exceptional YVMV & ELCV tolerance and tender dark green pods.",
      hi: "वाईवीएमवी और ईएलसीवी वायरस प्रतिरोधी, गहरे हरे कोमल फल और बंपर पैदावार।",
    },
    description: {
      en: "Radhika 2411 is a flagship hybrid okra variety engineered for heavy yields, continuous multi-picking flushes, and superior field tolerance against Yellow Vein Mosaic Virus (YVMV) and Enation Leaf Curl Virus (ELCV). Its short internodal distance yields fruit at every node, keeping pods tender and defect-free.",
      hi: "राधिका 2411 एक प्रीमियम हाइब्रिड भिंडी किस्म है, जिसे भारी पैदावार, निरंतर तुड़ाई और पीला शिरा मोज़ेक वायरस (YVMV) एवं पत्ती मरोड़ वायरस (ELCV) के प्रति उत्कृष्ट सहनशीलता के लिए विकसित किया गया है। कम अंतर-गांठों के कारण हर गांठ पर फल लगते हैं।",
    },
    specs: {
      sowingSeason: {
        en: "Kharif (June–July) & Summer (Jan–March)",
        hi: "खरीफ (जून-जुलाई) एवं जायद/गर्मी (जनवरी-मार्च)",
      },
      maturityDays: "45–50 Days (First Picking)",
      fruitLengthOrWeight: "12–14 cm Length",
      fruitColor: {
        en: "Lustrous Dark Green",
        hi: "चमकदार गहरा हरा",
      },
      fruitShape: {
        en: "5-ridged, straight, slender & tender",
        hi: "5 धारियों वाला, सीधा, पतला और कोमल",
      },
      plantHabit: {
        en: "Erect, medium tall (110–130 cm) with 2–4 productive branches",
        hi: "सीधा, मध्यम लंबा (110-130 सेमी) और 2-4 शाखाओं वाला",
      },
      diseaseResistance: {
        en: "High field tolerance to YVMV & ELCV viruses",
        hi: "YVMV एवं ELCV वायरस के प्रति उच्च सहनशील",
      },
      specialFeatures: {
        en: [
          "Short internodes ensuring heavy fruit set at every node",
          "Retains tenderness and dark green color for days after harvest",
          "Easy picking with minimal hairiness, highly favored by farm labor",
          "Excellent keeping quality for long-distance mandi transportation",
        ],
        hi: [
          "कम अंतर-गांठें जिससे प्रत्येक गांठ पर भरपूर फल लगते हैं",
          "तुड़ाई के कई दिनों बाद तक कोमलता और गहरा हरा रंग बरकरार रहता है",
          "कम रोएं होने से आसानी से तुड़ाई, मजदूरों की पहली पसंद",
          "दूरस्थ मंडियों में परिवहन के लिए उत्कृष्ट भंडारण क्षमता",
        ],
      },
      recommendedRegions: {
        en: "Telangana, Andhra Pradesh, Maharashtra, MP, UP, Bihar, Gujarat, Karnataka",
        hi: "तेलंगाना, आंध्र प्रदेश, महाराष्ट्र, मध्य प्रदेश, उत्तर प्रदेश, बिहार, गुजरात, कर्नाटक",
      },
    },
    packagingSizes: ["100g", "250g", "500g", "1kg"],
    image: "/images/products/radhika-2411.png",
    packRender: "/images/packaging/radhika-2411-pack.png",
    isFeatured: true,
  },

  // 2. KALPANA 862 (Okra)
  {
    id: "kalpana-862",
    slug: "kalpana-862",
    name: {
      en: "Kalpana 862",
      hi: "कल्पना 862 (भिंडी)",
    },
    scientificName: "Abelmoschus esculentus",
    categorySlug: "okra",
    categoryName: {
      en: "Okra / Bhindi",
      hi: "भिंडी",
    },
    cropType: "Hybrid F1",
    varietyCode: "DBTR 862",
    tagline: {
      en: "Early maturity dark-green hybrid okra with high branching vigor.",
      hi: "अगेती तुड़ाई, आकर्षक गहरे हरे फल और अधिक फुटाव वाली हाइब्रिड भिंडी।",
    },
    description: {
      en: "Kalpana 862 is an early-maturing okra hybrid known for vigorous branching and uniform, tender dark-green pods. Highly suitable for farmers targeting early-market premium price windows.",
      hi: "कल्पना 862 अगेती तैयार होने वाली हाइब्रिड भिंडी किस्म है। इसके पौधे में मजबूत फुटाव होता है और फल एकसमान, गहरे हरे व कोमल होते हैं, जो किसानों को अगेती मंडी में ऊंचा भाव दिलाते हैं।",
    },
    specs: {
      sowingSeason: {
        en: "Kharif & Summer",
        hi: "खरीफ एवं जायद",
      },
      maturityDays: "42–47 Days (First Picking)",
      fruitLengthOrWeight: "11–13 cm Length",
      fruitColor: {
        en: "Deep Dark Green",
        hi: "गहरा हरा",
      },
      fruitShape: {
        en: "Uniform, 5-ridged, tender",
        hi: "एकसमान, 5 धारियों वाला, कोमल",
      },
      plantHabit: {
        en: "Medium tall with strong basal branches",
        hi: "मध्यम लंबा, मजबूत निचली शाखाएं",
      },
      diseaseResistance: {
        en: "Tolerant to Yellow Vein Mosaic Virus",
        hi: "पीला शिरा मोज़ेक वायरस के प्रति सहनशील",
      },
      specialFeatures: {
        en: [
          "Early first picking by 42–45 days",
          "Continuous bearing across warm summer spells",
          "Attractive luster in consumer markets",
        ],
        hi: [
          "42-45 दिनों में पहली अगेती तुड़ाई शुरू",
          "गर्मी के मौसम में भी निरंतर फलन",
          "मंडी में व्यापारियों द्वारा अत्यधिक पसंद",
        ],
      },
    },
    packagingSizes: ["100g", "250g", "500g", "1kg"],
    image: "/images/products/kalpana-862.png",
    packRender: "/images/packaging/kalpana-862-pack.png",
    isFeatured: true,
  },

  // 3. MAURYA (Okra)
  {
    id: "maurya",
    slug: "maurya",
    name: {
      en: "Maurya",
      hi: "मौर्य (भिंडी)",
    },
    scientificName: "Abelmoschus esculentus",
    categorySlug: "okra",
    categoryName: {
      en: "Okra / Bhindi",
      hi: "भिंडी",
    },
    cropType: "Hybrid F1",
    varietyCode: "DBTR 111",
    tagline: {
      en: "Prolific bearer with long harvesting duration and sturdy branching.",
      hi: "लंबी अवधि तक फलन, मजबूत तना और उच्च उपज देने वाली भिंडी।",
    },
    description: {
      en: "Maurya is a sturdy okra hybrid built for prolonged harvesting cycles. It maintains fruit tenderness and uniform pod size even during late flushes, maximizing total tonnage per acre.",
      hi: "मौर्य एक मजबूत हाइब्रिड किस्म है जो लंबे समय तक तुड़ाई देती है। देर की तुड़ाई में भी इसके फल कड़े नहीं होते और एकसमान आकार व कोमलता बनी रहती है।",
    },
    specs: {
      sowingSeason: {
        en: "Kharif & Summer",
        hi: "खरीफ एवं जायद",
      },
      maturityDays: "45–48 Days (First Picking)",
      fruitLengthOrWeight: "12–14 cm Length",
      fruitColor: {
        en: "Lustrous Dark Green",
        hi: "चमकदार गहरा हरा",
      },
      fruitShape: {
        en: "Straight, 5-ridged, smooth",
        hi: "सीधा, 5 धारियों वाला, चिकना",
      },
      plantHabit: {
        en: "Vigorous, dense green foliage with 3–4 lateral branches",
        hi: "सघन हरा पौधा, 3-4 पार्श्व शाखाएं",
      },
      diseaseResistance: {
        en: "Tolerant to YVMV and sucking pests",
        hi: "YVMV एवं रस चूसक कीटों के प्रति सहनशील",
      },
      specialFeatures: {
        en: [
          "Prolonged fruiting window of 80–90 days",
          "Uniform dark green coloration until the final harvest",
          "Superb shelf life for long-distance transport",
        ],
        hi: [
          "80-90 दिनों तक लंबा फलन काल",
          "अंतिम तुड़ाई तक गहरा हरा रंग कायम",
          "लंबी दूरी के परिवहन के लिए उपयुक्त",
        ],
      },
    },
    packagingSizes: ["100g", "250g", "500g", "1kg"],
    image: "/images/products/maurya.png",
    packRender: "/images/packaging/maurya-pack.png",
  },

  // 4. SHWET (White Sponge Gourd)
  {
    id: "shwet",
    slug: "shwet",
    name: {
      en: "Shwet",
      hi: "श्वेत (नेनुआ / स्पंज गॉर्ड)",
    },
    scientificName: "Luffa aegyptiaca",
    categorySlug: "gourds",
    categoryName: {
      en: "Gourds & Melons",
      hi: "लौकी, तोरई और करेला",
    },
    cropType: "Hybrid F1",
    varietyCode: "DBTR Shwet",
    tagline: {
      en: "Milky-white, tender sponge gourd with sweet flesh and prolific flushes.",
      hi: "दूधिया सफेद-हरा, मीठा व कोमल गूदा, पूर्वी व उत्तरी भारत की पहली पसंद।",
    },
    description: {
      en: "Shwet is an elite White Sponge Gourd (Nenua/Ghiya Torai) hybrid featuring attractive milky light-green, straight cylindrical fruits. It commands a premium price in Bihar, UP, West Bengal, and northern markets due to its tender non-fibrous texture and delicious sweetness.",
      hi: "श्वेत एक प्रीमियम सफेद नेनुआ हाइब्रिड किस्म है जिसके फल आकर्षक दूधिया हल्के हरे, सीधे और बेलनाकार होते हैं। बिहार, यूपी, बंगाल और उत्तरी भारत की मंडियों में इसके कोमल व रेशारहित गूदे के कारण इसे सबसे ऊंचा भाव मिलता है।",
    },
    specs: {
      sowingSeason: {
        en: "Summer (Feb–March) & Rainy (June–July)",
        hi: "जायद (फरवरी-मार्च) एवं वर्षा (जून-जुलाई)",
      },
      maturityDays: "45–50 Days (First Picking)",
      fruitLengthOrWeight: "20–25 cm Length, 120–150g Weight",
      fruitColor: {
        en: "Milky Light White-Green",
        hi: "दूधिया हल्का सफेद-हरा",
      },
      fruitShape: {
        en: "Straight cylindrical with uniform girth",
        hi: "सीधा बेलनाकार, एकसमान मोटाई",
      },
      plantHabit: {
        en: "Vigorous climber with profuse female flowering",
        hi: "तेज बढ़ने वाली बेल, अधिक मादा फूल",
      },
      diseaseResistance: {
        en: "Tolerant to Downy Mildew and fruit fly damage",
        hi: "डाउनी मिल्ड्यू एवं फल मक्खी के प्रति सहनशील",
      },
      specialFeatures: {
        en: [
          "Early prolific flushes with fruit setting at every node",
          "Tender, sweet, non-fibrous flesh that cooks quickly",
          "Very high consumer preference in eastern and northern India",
        ],
        hi: [
          "हर गांठ पर फल लगना, शुरुआती तुड़ाई में भारी आवक",
          "कोमल, मीठा, बिना रेशे का गूदा जो जल्दी पकता है",
          "पूर्वी एवं उत्तरी भारत की मंडियों में सर्वाधिक मांग",
        ],
      },
    },
    packagingSizes: ["50g", "100g", "250g", "500g"],
    image: "/images/products/shwet.png",
    packRender: "/images/packaging/shwet-pack.png",
    isFeatured: true,
  },

  // 5. VIVEK (White Sponge Gourd)
  {
    id: "vivek",
    slug: "vivek",
    name: {
      en: "Vivek",
      hi: "विवेक (सफेद नेनुआ)",
    },
    scientificName: "Luffa aegyptiaca",
    categorySlug: "gourds",
    categoryName: {
      en: "Gourds & Melons",
      hi: "लौकी, तोरई और करेला",
    },
    cropType: "Hybrid F1",
    varietyCode: "DBTR Vivek",
    tagline: {
      en: "Long cylindrical white sponge gourd with exceptional summer heat tolerance.",
      hi: "लंबा बेलनाकार सफेद नेनुआ, भीषण गर्मी में भी निरंतर फलन देने में सक्षम।",
    },
    description: {
      en: "Vivek is a high-yielding white sponge gourd hybrid producing long, cylindrical, light greenish-white fruits. It is especially noted for setting abundant fruits even during peak summer temperatures.",
      hi: "विवेक एक अधिक उपज देने वाली सफेद नेनुआ हाइब्रिड किस्म है जिसके फल लंबे, बेलनाकार और हल्के हरे-सफेद होते हैं। यह भीषण गर्मी में भी बिना फल झड़े भरपूर पैदावार देती है।",
    },
    specs: {
      sowingSeason: {
        en: "Summer & Rainy",
        hi: "जायद एवं वर्षा",
      },
      maturityDays: "48–52 Days (First Picking)",
      fruitLengthOrWeight: "22–26 cm Length",
      fruitColor: {
        en: "Shiny Light Greenish-White",
        hi: "चमकदार हल्का हरा-सफेद",
      },
      fruitShape: {
        en: "Long, straight, uniform cylindrical",
        hi: "लंबा, सीधा, एकसमान बेलनाकार",
      },
      plantHabit: {
        en: "Strong vine vigor with dense foliage cover protecting fruits from sunburn",
        hi: "मजबूत बेल, घने पत्ते जो फलों को धूप से बचाते हैं",
      },
      diseaseResistance: {
        en: "High heat and virus tolerance",
        hi: "उच्च तापमान एवं वायरस के प्रति सहनशील",
      },
      specialFeatures: {
        en: [
          "Superb fruit set in high summer temperatures",
          "Straight fruits that pack efficiently in crates",
          "Prolonged harvest period of 70–80 days",
        ],
        hi: [
          "भीषण गर्मी में भी उत्कृष्ट फल जमाव",
          "सीधे फल जो क्रेट में आसानी से पैक होते हैं",
          "70-80 दिनों तक लंबी तुड़ाई अवधि",
        ],
      },
    },
    packagingSizes: ["50g", "100g", "250g", "500g"],
    image: "/images/products/vivek.png",
    packRender: "/images/packaging/vivek-pack.png",
  },

  // 6. SHYAM (Black / Dark Green Sponge Gourd)
  {
    id: "shyam",
    slug: "shyam",
    name: {
      en: "Shyam",
      hi: "श्याम (काला / गहरा हरा नेनुआ)",
    },
    scientificName: "Luffa aegyptiaca",
    categorySlug: "gourds",
    categoryName: {
      en: "Gourds & Melons",
      hi: "लौकी, तोरई और करेला",
    },
    cropType: "Hybrid F1",
    varietyCode: "DBTR Shyam",
    tagline: {
      en: "Glossy dark-green sponge gourd with firm flesh and outstanding transit stamina.",
      hi: "चमकदार गहरा हरा नेनुआ, ठोस गूदा और लंबी दूरी के परिवहन के लिए आदर्श।",
    },
    description: {
      en: "Shyam is a dark-green sponge gourd hybrid engineered for wholesale transport durability. Its deep green, attractive cylindrical fruits retain their crisp firmness without blackening during long distance shipping.",
      hi: "श्याम एक गहरे हरे रंग की नेनुआ हाइब्रिड किस्म है जिसे थोक परिवहन के लिए खास तैयार किया गया है। इसके गहरे हरे फल लंबी दूरी की ढुलाई में काले नहीं पड़ते और ताजा बने रहते हैं।",
    },
    specs: {
      sowingSeason: {
        en: "Kharif & Summer",
        hi: "खरीफ एवं जायद",
      },
      maturityDays: "45–50 Days (First Picking)",
      fruitLengthOrWeight: "20–25 cm Length",
      fruitColor: {
        en: "Glossy Dark Green",
        hi: "चमकदार गहरा हरा",
      },
      fruitShape: {
        en: "Smooth, cylindrical, uniform",
        hi: "चिकना, बेलनाकार, एकसमान",
      },
      plantHabit: {
        en: "Vigorous vine with prolific branches",
        hi: "अधिक फुटाव वाली मजबूत बेल",
      },
      diseaseResistance: {
        en: "Tolerant to Downy Mildew and Anthracnose",
        hi: "डाउनी मिल्ड्यू एवं एन्थ्रेक्नोज प्रतिरोधी",
      },
      specialFeatures: {
        en: [
          "Dark green color preferred in Central and Southern Indian markets",
          "Thick rind resisting transport transit bruising",
          "Rapid fruit growth allowing picking every alternate day",
        ],
        hi: [
          "मध्य व दक्षिण भारतीय मंडियों में अत्यधिक लोकप्रिय",
          "मजबूत छिलका जिससे परिवहन में दाग नहीं लगते",
          "तेज गति से बढ़ने वाले फल, हर दूसरे दिन तुड़ाई संभव",
        ],
      },
    },
    packagingSizes: ["50g", "100g", "250g", "500g"],
    image: "/images/products/shyam.png",
    packRender: "/images/packaging/shyam-pack.png",
  },

  // 7. MADHAV (Bottle Gourd - Long)
  {
    id: "madhav",
    slug: "madhav",
    name: {
      en: "Madhav",
      hi: "माधव (लंबी लौकी)",
    },
    scientificName: "Lagenaria siceraria",
    categorySlug: "gourds",
    categoryName: {
      en: "Gourds & Melons",
      hi: "लौकी, तोरई और करेला",
    },
    cropType: "Hybrid F1",
    varietyCode: "DBTR Madhav",
    tagline: {
      en: "Straight, tender, 40–45 cm long bottle gourd with snow-white sweet flesh.",
      hi: "40-45 सेमी लंबी, सीधी, सफेद मीठे गूदे वाली उच्च उपज हाइब्रिड लौकी।",
    },
    description: {
      en: "Madhav is a benchmark long bottle gourd hybrid yielding uniform, straight, cylindrical fruits without any curved necks. The rind is light shining green with soft pubescence, while the interior is packed with tender, slow-seeding white pulp.",
      hi: "माधव एक मानक लंबी हाइब्रिड लौकी किस्म है जिसके फल बिल्कुल सीधे, बेलनाकार और बिना टेढ़े मुंह के होते हैं। इसका छिलका हल्का चमकदार हरा और भीतरी गूदा बर्फ जैसा सफेद, मीठा व धीरे बीज बनने वाला होता है।",
    },
    specs: {
      sowingSeason: {
        en: "Round the Year (Rainy: June–July, Summer: Jan–Feb, Winter: Oct in mild zones)",
        hi: "वर्ष भर (वर्षा: जून-जुलाई, जायद: जनवरी-फरवरी)",
      },
      maturityDays: "50–55 Days (First Picking)",
      fruitLengthOrWeight: "40–45 cm Length, 1.0–1.3 kg Weight",
      fruitColor: {
        en: "Attractive Light Shining Green",
        hi: "आकर्षक हल्का चमकदार हरा",
      },
      fruitShape: {
        en: "Straight cylindrical with uniform thickness from top to bottom",
        hi: "ऊपर से नीचे तक एकसमान मोटाई, सीधी बेलनाकार",
      },
      plantHabit: {
        en: "High-vigor prolific climber with continuous female flower emergence",
        hi: "तेज बढ़ने वाली बेल, निरंतर मादा फूलों का निकलना",
      },
      diseaseResistance: {
        en: "Tolerant to Powdery Mildew and collar rot",
        hi: "पाउडरी मिल्ड्यू एवं तना गलन के प्रति सहनशील",
      },
      specialFeatures: {
        en: [
          "Zero neck bend ensures 100% Grade-A market packout",
          "Slow seed cavity formation keeps flesh tender longer",
          "High fruit setting per vine delivers record tonnage per acre",
        ],
        hi: [
          "बिल्कुल सीधी होने के कारण 100% ए-ग्रेड मंडी भाव",
          "देर से बीज बनना, जिससे फल अधिक समय तक कोमल रहता है",
          "प्रति बेल अधिक फल लगने से रिकॉर्ड प्रति एकड़ पैदावार",
        ],
      },
    },
    packagingSizes: ["50g", "100g", "250g", "500g"],
    image: "/images/products/madhav.png",
    packRender: "/images/packaging/madhav-pack.png",
    isFeatured: true,
  },

  // 8. SHARAD (Bottle Gourd - Long)
  {
    id: "sharad",
    slug: "sharad",
    name: {
      en: "Sharad",
      hi: "शरद (लंबी लौकी)",
    },
    scientificName: "Lagenaria siceraria",
    categorySlug: "gourds",
    categoryName: {
      en: "Gourds & Melons",
      hi: "लौकी, तोरई और करेला",
    },
    cropType: "Hybrid F1",
    varietyCode: "DBTR Sharad",
    tagline: {
      en: "High initial flush bottle gourd with smooth skin and medium-long fruits.",
      hi: "अगेती भारी आवक, चिकनी त्वचा और 35-40 सेमी सीधी हाइब्रिड लौकी।",
    },
    description: {
      en: "Sharad is a fast-fruiting long bottle gourd hybrid characterized by dense early fruit setting and smooth, blemish-free light-green fruits.",
      hi: "शरद अगेती फलन देने वाली लंबी लौकी हाइब्रिड किस्म है। इसके फल 35-40 सेमी लंबे, चिकने और दाग-धब्बों से मुक्त हल्के हरे होते हैं।",
    },
    specs: {
      sowingSeason: {
        en: "Summer & Rainy",
        hi: "जायद एवं वर्षा",
      },
      maturityDays: "50–55 Days",
      fruitLengthOrWeight: "35–40 cm Length, 900g–1.2 kg",
      fruitColor: {
        en: "Light Green with soft luster",
        hi: "हल्का हरा, कोमल चमक",
      },
      fruitShape: {
        en: "Cylindrical, straight",
        hi: "बेलनाकार, सीधी",
      },
      plantHabit: {
        en: "Medium-vigor climber, early branching",
        hi: "मध्यम बेल, अगेती शाखाएं",
      },
      diseaseResistance: {
        en: "Field tolerant to Downey Mildew",
        hi: "डाउनी मिल्ड्यू के प्रति सहनशील",
      },
      specialFeatures: {
        en: [
          "Heavy early flushes capturing early market prices",
          "Soft, tender pulp with minimal seed cavity",
          "Responds exceptionally well to trellis / bower cultivation",
        ],
        hi: [
          "शुरुआती तुड़ाई में भरपूर फलन",
          "कोमल गूदा और बहुत छोटे बीज",
          "मचान विधि पर खेती के लिए सर्वोत्तम",
        ],
      },
    },
    packagingSizes: ["50g", "100g", "250g", "500g"],
    image: "/images/products/sharad.png",
    packRender: "/images/packaging/sharad-pack.png",
  },

  // 9. GOLU (Round Bottle Gourd)
  {
    id: "golu",
    slug: "golu",
    name: {
      en: "Golu",
      hi: "गोलू (गोल लौकी)",
    },
    scientificName: "Lagenaria siceraria",
    categorySlug: "gourds",
    categoryName: {
      en: "Gourds & Melons",
      hi: "लौकी, तोरई और करेला",
    },
    cropType: "Hybrid F1",
    varietyCode: "DBTR Golu",
    tagline: {
      en: "Globe-shaped, tender round bottle gourd popular in regional delicacies.",
      hi: "आकर्षक गोल आकार, अत्यंत कोमल गूदा और बंपर फलन देने वाली गोल लौकी।",
    },
    description: {
      en: "Golu is a premium round bottle gourd hybrid designed for markets where round lauki is preferred. It produces uniform globe-shaped fruits with soft, juicy, tender white flesh and high fruit set per vine.",
      hi: "गोलू एक उन्नत गोल लौकी हाइब्रिड किस्म है। इसके फल आकर्षक गोल, एकसमान 1.0 से 1.4 किग्रा वजन के होते हैं। इसका गूदा बहुत ही रसीला, कोमल और मीठा होता है।",
    },
    specs: {
      sowingSeason: {
        en: "Kharif & Summer",
        hi: "खरीफ एवं जायद",
      },
      maturityDays: "50–55 Days",
      fruitLengthOrWeight: "1.0–1.4 kg Weight, Globe/Oval",
      fruitColor: {
        en: "Attractive Light Green",
        hi: "आकर्षक हल्का हरा",
      },
      fruitShape: {
        en: "Globe-shaped, smooth round",
        hi: "गोल, सुडौल",
      },
      plantHabit: {
        en: "Vigorous vine with prolific fruit clusters",
        hi: "मजबूत बेल, गुच्छों में फलन",
      },
      diseaseResistance: {
        en: "Tolerant to fungal foliar spots",
        hi: "पत्ती धब्बा रोगों के प्रति सहनशील",
      },
      specialFeatures: {
        en: [
          "High market demand in urban specialty centers and sweet confectionaries (Lauki Halwa / Petha)",
          "Thick flesh with very small seed cavity",
          "Heavy weight retention after harvest",
        ],
        hi: [
          "मिठाई (लौकी हलवा/पेठा) एवं शहरी मंडियों में भारी मांग",
          "मोटा गूदा और बहुत छोटा बीज कक्ष",
          "तुड़ाई के बाद वजन में कमी नहीं आती",
        ],
      },
    },
    packagingSizes: ["50g", "100g", "250g", "500g"],
    image: "/images/products/golu.png",
    packRender: "/images/packaging/golu-pack.png",
  },

  // 10. PRAGATI GOLD (Bitter Gourd / Karela)
  {
    id: "pragati-gold",
    slug: "pragati-gold",
    name: {
      en: "Pragati Gold",
      hi: "प्रगति गोल्ड (करेला)",
    },
    scientificName: "Momordica charantia",
    categorySlug: "gourds",
    categoryName: {
      en: "Gourds & Melons",
      hi: "लौकी, तोरई और करेला",
    },
    cropType: "Hybrid F1",
    varietyCode: "DBTR Pragati Gold",
    tagline: {
      en: "Dense sharp prickles, glossy dark green, 18–22 cm long export-grade bitter gourd.",
      hi: "तीखे घने कांटे, चमकदार गहरा हरा रंग, 18-22 सेमी लंबा अव्वल दर्जे का करेला।",
    },
    description: {
      en: "Pragati Gold is DBTR's premier bitter gourd hybrid. It bears attractive, long, dark-green fruits packed with sharp continuous spines (prickles). Its crisp flesh, high bitterness, and durable skin make it the top choice for commercial growers and distant mandi traders.",
      hi: "प्रगति गोल्ड डीबीटीआर की सबसे लोकप्रिय करेला हाइब्रिड किस्म है। इसके फल 18-22 सेमी लंबे, गहरे हरे और तीखे व घने कांटों से भरे होते हैं। इसका कुरकुरा गूदा, उचित कड़वाहट और मजबूत त्वचा इसे दूरस्थ मंडियों के लिए किसानों की पहली पसंद बनाती है।",
    },
    specs: {
      sowingSeason: {
        en: "Summer (Jan–March) & Rainy (June–July)",
        hi: "जायद (जनवरी-मार्च) एवं वर्षा (जून-जुलाई)",
      },
      maturityDays: "50–55 Days (First Picking)",
      fruitLengthOrWeight: "18–22 cm Length, 100–130g Weight",
      fruitColor: {
        en: "Glossy Dark Green",
        hi: "चमकदार गहरा हरा",
      },
      fruitShape: {
        en: "Spindle shaped with dense, sharp, continuous prickles",
        hi: "लंबोतरा, दोनों सिरों पर नुकीला, घने तीखे कांटे",
      },
      plantHabit: {
        en: "Extremely vigorous climber with heavy lateral shoots",
        hi: "अत्यधिक तेज बढ़ने वाली बेल, भरपूर पार्श्व शाखाएं",
      },
      diseaseResistance: {
        en: "Tolerant to Powdery Mildew and Downy Mildew",
        hi: "पाउडरी एवं डाउनी मिल्ड्यू के प्रति सहनशील",
      },
      specialFeatures: {
        en: [
          "Sharp prominent spines prevent fruit bruising in transit",
          "High bitterness and crispness preferred by health-conscious consumers",
          "Continuous picking every 3–4 days across a 90-day window",
        ],
        hi: [
          "तीखे कांटे परिवहन के दौरान फलों को दबने से बचाते हैं",
          "उत्कृष्ट कड़वाहट व कुरकुरापन, उपभोक्ताओं की पसंद",
          "90 दिनों तक हर 3-4 दिन में लगातार तुड़ाई",
        ],
      },
    },
    packagingSizes: ["50g", "100g", "250g", "500g"],
    image: "/images/products/pragati-gold.png",
    packRender: "/images/packaging/pragati-gold-pack.png",
    isFeatured: true,
  },

  // 11. PRAGATI (Bitter Gourd / Karela)
  {
    id: "pragati",
    slug: "pragati",
    name: {
      en: "Pragati",
      hi: "प्रगति (करेला)",
    },
    scientificName: "Momordica charantia",
    categorySlug: "gourds",
    categoryName: {
      en: "Gourds & Melons",
      hi: "लौकी, तोरई और करेला",
    },
    cropType: "Hybrid F1",
    varietyCode: "DBTR Pragati",
    tagline: {
      en: "Medium-long dark-green bitter gourd with prominent tubercles.",
      hi: "मध्यम लंबा गहरा हरा करेला, उभरे हुए कांटे और उच्च व्यावसायिक उत्पादन।",
    },
    description: {
      en: "Pragati produces 15–18 cm dark green fruits with sharp tubercles. A dependable workhorse hybrid with consistent fruit length and reliable performance in high summer heat.",
      hi: "प्रगति 15-18 सेमी लंबे, गहरे हरे और तीखे कांटों वाले फल देती है। यह गर्मी में भी बिना फलन प्रभावित हुए स्थिर और बंपर उपज देने वाली भरोसेमंद किस्म है।",
    },
    specs: {
      sowingSeason: {
        en: "Summer & Rainy",
        hi: "जायद एवं वर्षा",
      },
      maturityDays: "50–55 Days",
      fruitLengthOrWeight: "15–18 cm Length",
      fruitColor: {
        en: "Deep Dark Green",
        hi: "गहरा हरा",
      },
      fruitShape: {
        en: "Spindle shape with sharp prickles",
        hi: "मध्यम नुकीला, तीखे कांटे",
      },
      plantHabit: {
        en: "Vigorous vine",
        hi: "मजबूत बेल",
      },
      diseaseResistance: {
        en: "Tolerant to Downey Mildew",
        hi: "डाउनी मिल्ड्यू के प्रति सहनशील",
      },
      specialFeatures: {
        en: [
          "Uniform fruit dimensions throughout picking flushes",
          "Excellent heat tolerance during flowering",
          "Solid market demand in local and wholesale bazars",
        ],
        hi: [
          "पूरी तुड़ाई के दौरान एकसमान आकार के फल",
          "फूल आने के समय उच्च तापमान सहने की क्षमता",
          "स्थानीय व थोक बाजारों में लगातार मांग",
        ],
      },
    },
    packagingSizes: ["50g", "100g", "250g", "500g"],
    image: "/images/products/pragati.png",
    packRender: "/images/packaging/pragati-pack.png",
  },

  // 12. PAALI-111 (Bitter Gourd / Karela)
  {
    id: "paali-111",
    slug: "paali-111",
    name: {
      en: "Paali-111",
      hi: "पाली-111 (करेला)",
    },
    scientificName: "Momordica charantia",
    categorySlug: "gourds",
    categoryName: {
      en: "Gourds & Melons",
      hi: "लौकी, तोरई और करेला",
    },
    cropType: "Hybrid F1",
    varietyCode: "DBTR 111 Karela",
    tagline: {
      en: "Uniform dark green bitter gourd engineered for high tonnage and shelf stability.",
      hi: "सघन कांटे, गहरा हरा रंग और लंबी शेल्फ लाइफ वाला हाइब्रिड करेला।",
    },
    description: {
      en: "Paali-111 is tailored for growers demanding high fruit uniformity and long post-harvest shelf life. Its 16–20 cm dark green spiny fruits command top rates.",
      hi: "पाली-111 उन किसानों के लिए आदर्श है जो एकसमान फल और तुड़ाई के बाद लंबे समय तक ताजा रहने वाले फल चाहते हैं। 16-20 सेमी लंबे गहरे हरे कांटेदार फल मंडी में शीर्ष भाव पाते हैं।",
    },
    specs: {
      sowingSeason: {
        en: "Kharif & Summer",
        hi: "खरीफ एवं जायद",
      },
      maturityDays: "52–58 Days",
      fruitLengthOrWeight: "16–20 cm Length, 90–120g",
      fruitColor: {
        en: "Dark Lustrous Green",
        hi: "गहरा चमकदार हरा",
      },
      fruitShape: {
        en: "Cylindrical spindle with dense prickles",
        hi: "घने कांटों वाला सुडौल फल",
      },
      plantHabit: {
        en: "Sturdy climber with strong main vine",
        hi: "मजबूत मुख्य बेल, अधिक शाखाएं",
      },
      diseaseResistance: {
        en: "Field tolerant to virus and root diseases",
        hi: "वायरस एवं जड़ रोगों के प्रति सहनशील",
      },
      specialFeatures: {
        en: [
          "Thick flesh, minimal seed volume",
          "Resistant to yellowing after picking",
          "Consistent fruit size from first to last picking",
        ],
        hi: [
          "मोटा गूदा, बहुत कम बीज",
          "तुड़ाई के बाद पीला नहीं पड़ता",
          "पहली से आखिरी तुड़ाई तक एकसमान आकार",
        ],
      },
    },
    packagingSizes: ["50g", "100g", "250g", "500g"],
    image: "/images/products/paali-111.png",
    packRender: "/images/packaging/paali-111-pack.png",
  },

  // 13. MONU (Ridge Gourd / Torai)
  {
    id: "monu",
    slug: "monu",
    name: {
      en: "Monu",
      hi: "मोनू (तोरी / झींगा तोरई)",
    },
    scientificName: "Luffa acutangula",
    categorySlug: "gourds",
    categoryName: {
      en: "Gourds & Melons",
      hi: "लौकी, तोरई और करेला",
    },
    cropType: "Hybrid F1",
    varietyCode: "DBTR Monu",
    tagline: {
      en: "Straight dark green ridge gourd with sharp prominent ribs and non-fibrous sweet meat.",
      hi: "30-35 सेमी लंबी, सीधी, गहरे हरे रंग की तीखी धारियों वाली मीठी व कोमल तोरई।",
    },
    description: {
      en: "Monu is an elite Ridge Gourd (Torai/Luffa acutangula) hybrid characterized by straight, uniform 30–35 cm fruits with prominent sharp ridges. Highly prized for its non-fibrous tender flesh and heavy initial fruit setting.",
      hi: "मोनू एक उन्नत झींगा तोरई (Ridge Gourd) हाइब्रिड किस्म है जिसके फल 30-35 सेमी लंबे, सीधे और गहरी धारियों वाले होते हैं। इसका गूदा बिना रेशे का, अत्यंत कोमल व मीठा होता है और शुरुआती तुड़ाई में भारी पैदावार मिलती है।",
    },
    specs: {
      sowingSeason: {
        en: "Rainy (June–July) & Summer (Feb–March)",
        hi: "वर्षा (जून-जुलाई) एवं जायद (फरवरी-मार्च)",
      },
      maturityDays: "45–50 Days (First Picking)",
      fruitLengthOrWeight: "30–35 cm Length, 130–160g Weight",
      fruitColor: {
        en: "Deep Dark Green",
        hi: "गहरा हरा",
      },
      fruitShape: {
        en: "Straight cylindrical with sharp continuous ridges",
        hi: "सीधी बेलनाकार, तीखी स्पष्ट धारियां",
      },
      plantHabit: {
        en: "Vigorous vine with profuse female flowers at lower nodes",
        hi: "निचली गांठों से ही मादा फूल देने वाली तेज बेल",
      },
      diseaseResistance: {
        en: "Tolerant to Downy Mildew and Anthracnose",
        hi: "डाउनी मिल्ड्यू एवं एन्थ्रेक्नोज सहनशील",
      },
      specialFeatures: {
        en: [
          "Zero curling ensures straight fruits that pack tightly in transport boxes",
          "Tender flesh that stays sweet and soft without turning spongy",
          "Continuous fruit flush over 70–80 days",
        ],
        hi: [
          "फल बिल्कुल सीधे रहते हैं, पैकिंग में कोई नुकसान नहीं",
          "कोमल गूदा जो लंबे समय तक स्पंजी या रेशेदार नहीं होता",
          "70-80 दिनों तक निरंतर फलन",
        ],
      },
    },
    packagingSizes: ["50g", "100g", "250g", "500g"],
    image: "/images/products/monu.png",
    packRender: "/images/packaging/monu-pack.png",
    isFeatured: true,
  },

  // 14. MAITRA (Snake Gourd / Chichinda)
  {
    id: "maitra",
    slug: "maitra",
    name: {
      en: "Maitra",
      hi: "मैत्रा (चिचिंडा / स्नेक गॉर्ड)",
    },
    scientificName: "Trichosanthes cucumerina",
    categorySlug: "gourds",
    categoryName: {
      en: "Gourds & Melons",
      hi: "लौकी, तोरई और करेला",
    },
    cropType: "Hybrid F1",
    varietyCode: "DBTR Maitra",
    tagline: {
      en: "Long slender snake gourd with light green stripes and crisp tender texture.",
      hi: "50-60 सेमी लंबा, सफेद व हल्की हरी धारियों वाला कोमल व स्वादिष्ट चिचिंडा।",
    },
    description: {
      en: "Maitra produces 50–60 cm long, straight snake gourd fruits with striking white and light green longitudinal stripes. Highly prolific on trellises with tender, aromatic flesh.",
      hi: "मैत्रा 50-60 सेमी लंबे, सीधे चिचिंडा फल देती है जिन पर आकर्षक सफेद और हल्की हरी धारियां होती हैं। मचान पर खेती करने से इसके फल बिल्कुल सीधे और भारी मात्रा में फलते हैं।",
    },
    specs: {
      sowingSeason: {
        en: "Rainy & Summer",
        hi: "वर्षा एवं जायद",
      },
      maturityDays: "55–60 Days",
      fruitLengthOrWeight: "50–60 cm Length",
      fruitColor: {
        en: "White with light green stripes",
        hi: "सफेद के साथ हल्की हरी धारियां",
      },
      fruitShape: {
        en: "Long slender cylindrical",
        hi: "लंबा, पतला, सीधा",
      },
      plantHabit: {
        en: "Climbing vine, requires bower support",
        hi: "मचान की आवश्यकता वाली बेल",
      },
      diseaseResistance: {
        en: "Field tolerant to leaf blights",
        hi: "पत्ती झुलसा के प्रति सहनशील",
      },
      specialFeatures: {
        en: [
          "Consistently straight fruits under proper trellis management",
          "High moisture retention and delicate cooking flavor",
          "Major commercial popularity in Southern and Eastern regions",
        ],
        hi: [
          "मचान पर बिल्कुल सीधे फल",
          "स्वादिष्ट और जल्दी पकने वाला कोमल गूदा",
          "दक्षिण एवं पूर्वी भारत में भारी मांग",
        ],
      },
    },
    packagingSizes: ["50g", "100g", "250g"],
    image: "/images/products/maitra.png",
    packRender: "/images/packaging/maitra-pack.png",
  },

  // 15. GANGA KANCHAN (Cowpea / Lobia)
  {
    id: "ganga-kanchan",
    slug: "ganga-kanchan",
    name: {
      en: "Ganga Kanchan",
      hi: "गंगा कंचन (लोबिया / बोड़ा)",
    },
    scientificName: "Vigna unguiculata",
    categorySlug: "cowpea",
    categoryName: {
      en: "Cowpea / Lobia",
      hi: "लोबिया",
    },
    cropType: "High-Yield Selection",
    varietyCode: "DBTR Ganga Kanchan",
    tagline: {
      en: "Heavy bunch bearing cowpea with 25–30 cm tender stringless light-green pods.",
      hi: "गुच्छों में फलन, 25-30 सेमी लंबी, कोमल बिना रेशे वाली आकर्षक हरी फलियां।",
    },
    description: {
      en: "Ganga Kanchan is a benchmark high-yielding cowpea (Lobia/Bodi) variety. It bears abundant clusters of light green, round, fleshy, tender pods that remain stringless even when mature. A favorite among wholesale vegetable traders for its weight retention.",
      hi: "गंगा कंचन लोबिया की एक सर्वाधिक बिकने वाली किस्म है। इसके पौधे में गुच्छों में 25-30 सेमी लंबी, गोल, मांसल और बिना रेशे की फलियां लगती हैं। तुड़ाई के बाद लंबे समय तक ताजगी और वजन बनाए रखने के कारण व्यापारियों की पहली पसंद है।",
    },
    specs: {
      sowingSeason: {
        en: "Kharif (June–July) & Summer (Feb–March)",
        hi: "खरीफ (जून-जुलाई) एवं जायद (फरवरी-मार्च)",
      },
      maturityDays: "45–50 Days (First Picking)",
      fruitLengthOrWeight: "25–30 cm Length",
      fruitColor: {
        en: "Attractive Light Green",
        hi: "आकर्षक हल्का हरा",
      },
      fruitShape: {
        en: "Round, straight, fleshy, stringless",
        hi: "गोल, सीधी, मांसल, बिना रेशे की",
      },
      plantHabit: {
        en: "Semi-trailing bushy vine with vigorous bunch formation",
        hi: "अर्ध-झाड़ीदार पौधा, गुच्छों में फलन",
      },
      diseaseResistance: {
        en: "Strong tolerance to Cowpea Mosaic Virus and Rust",
        hi: "मोज़ेक वायरस एवं रतुआ रोग के प्रति उच्च सहनशील",
      },
      specialFeatures: {
        en: [
          "Tender stringless pods cook soft and retain vibrant green color",
          "Synchronous flowering provides heavy flushes at each picking",
          "Excellent heat tolerance during harsh pre-monsoon summer",
        ],
        hi: [
          "बिना रेशे की कोमल फलियां जो पकने पर अत्यंत स्वादिष्ट लगती हैं",
          "एकसाथ फूल आने से हर तुड़ाई में भारी आवक",
          "भीषण गर्मी और सूखे को सहने की अद्भुत क्षमता",
        ],
      },
    },
    packagingSizes: ["100g", "250g", "500g", "1kg"],
    image: "/images/products/ganga-kanchan.png",
    packRender: "/images/packaging/ganga-kanchan-pack.png",
    isFeatured: true,
  },

  // 16. NIDHI (Cowpea / Lobia)
  {
    id: "nidhi",
    slug: "nidhi",
    name: {
      en: "Nidhi",
      hi: "निधि / काशी निधि (लोबिया)",
    },
    scientificName: "Vigna unguiculata",
    categorySlug: "cowpea",
    categoryName: {
      en: "Cowpea / Lobia",
      hi: "लोबिया",
    },
    cropType: "Research Selection",
    varietyCode: "DBTR Nidhi",
    tagline: {
      en: "Deep green, tender cowpea pods with slow seed cavity development.",
      hi: "गहरी हरी, सीधी, 22-26 सेमी लंबी फलियां, देर से बीज बनने वाली उन्नत लोबिया।",
    },
    description: {
      en: "Nidhi produces uniform, deep green, tender pods measuring 22–26 cm. Its slow seed development allows farmers flexibility in picking intervals without losing quality.",
      hi: "निधि गहरे हरे रंग की 22-26 सेमी लंबी फलियां देती है। इसमें बीज बहुत देर से बनते हैं जिससे किसान को तुड़ाई में 1-2 दिन की देरी होने पर भी फल कड़ा नहीं होता।",
    },
    specs: {
      sowingSeason: {
        en: "Kharif & Summer",
        hi: "खरीफ एवं जायद",
      },
      maturityDays: "48–52 Days",
      fruitLengthOrWeight: "22–26 cm Length",
      fruitColor: {
        en: "Lustrous Deep Green",
        hi: "गहरा चमकदार हरा",
      },
      fruitShape: {
        en: "Cylindrical, straight, non-fibrous",
        hi: "बेलनाकार, सीधी, रेशारहित",
      },
      plantHabit: {
        en: "Bushy compact habit",
        hi: "झाड़ीदार सुगठित पौधा",
      },
      diseaseResistance: {
        en: "Tolerant to bacterial blight and wilt",
        hi: "जीवाणु झुलसा एवं उकठा सहनशील",
      },
      specialFeatures: {
        en: [
          "Extended harvesting window of 60–75 days",
          "Deep green color attracts premium retail buyers",
          "Thick flesh minimizes shrinkage during transport",
        ],
        hi: [
          "60-75 दिनों तक लंबी तुड़ाई अवधि",
          "गहरे हरे रंग के कारण मंडी में तुरंत बिकने वाली",
          "मोटा गूदा जिससे ढुलाई में वजन कम नहीं होता",
        ],
      },
    },
    packagingSizes: ["100g", "250g", "500g", "1kg"],
    image: "/images/products/nidhi.png",
    packRender: "/images/packaging/nidhi-pack.png",
  },

  // 17. BHEEM (Cucumber / Kheera)
  {
    id: "bheem",
    slug: "bheem",
    name: {
      en: "Bheem",
      hi: "भीम (खीरा)",
    },
    scientificName: "Cucumis sativus",
    categorySlug: "cucumber",
    categoryName: {
      en: "Cucumber & Long Melon",
      hi: "खीरा एवं ककड़ी",
    },
    cropType: "Hybrid F1",
    varietyCode: "DBTR Bheem",
    tagline: {
      en: "High-yield non-bitter cucumber with attractive green skin and juicy crisp bite.",
      hi: "कुरकुरा, मीठा, बिना कड़वाहट वाला 18-20 सेमी हरा हाइब्रिड खीरा।",
    },
    description: {
      en: "Bheem is a powerhouse hybrid cucumber engineered for heavy outdoor yields. It produces attractive, medium dark-green, uniform 18–20 cm cylindrical fruits with subtle white spines and zero bitterness.",
      hi: "भीम खुले खेतों के लिए एक अत्यंत सफल हाइब्रिड खीरा किस्म है। इसके फल 18-20 सेमी लंबे, बेलनाकार, हल्के सफेद कांटों वाले और बिल्कुल कड़वाहट रहित होते हैं। इसका गूदा बहुत ही कुरकुरा और रसीला होता है।",
    },
    specs: {
      sowingSeason: {
        en: "Summer (Jan–March) & Rainy (June–July)",
        hi: "जायद (जनवरी-मार्च) एवं वर्षा (जून-जुलाई)",
      },
      maturityDays: "42–45 Days (First Picking)",
      fruitLengthOrWeight: "18–20 cm Length, 180–220g Weight",
      fruitColor: {
        en: "Attractive Medium Dark Green with faint white specks",
        hi: "आकर्षक मध्यम गहरा हरा, हल्की सफेद धारियां",
      },
      fruitShape: {
        en: "Uniform cylindrical with blunt ends",
        hi: "एकसमान बेलनाकार, दोनों सिरों से सुडौल",
      },
      plantHabit: {
        en: "Vigorous vine with predominantly female flowering (gynoecious tendency)",
        hi: "मजबूत बेल, अधिक मादा फूल",
      },
      diseaseResistance: {
        en: "High field tolerance to Powdery Mildew and CMV",
        hi: "पाउडरी मिल्ड्यू एवं सीएमवी वायरस के प्रति सहनशील",
      },
      specialFeatures: {
        en: [
          "Zero bitterness guaranteed even under high summer heat stress",
          "Crisp crunchy flesh with small seed core and slow seed hardening",
          "High market shelf life of 4–5 days at ambient temperatures",
        ],
        hi: [
          "कड़क धूप में भी फल में बिल्कुल कड़वाहट नहीं आती",
          "कुरकुरा रसीला गूदा, बहुत छोटे व कोमल बीज",
          "सामान्य तापमान पर 4-5 दिनों तक तरोताजा बना रहने वाला",
        ],
      },
    },
    packagingSizes: ["10g", "50g", "100g"],
    image: "/images/products/bheem.png",
    packRender: "/images/packaging/bheem-pack.png",
    isFeatured: true,
  },

  // 18. HEERA (Cucumber / Kheera)
  {
    id: "heera",
    slug: "heera",
    name: {
      en: "Heera",
      hi: "हीरा (खीरा)",
    },
    scientificName: "Cucumis sativus",
    categorySlug: "cucumber",
    categoryName: {
      en: "Cucumber & Long Melon",
      hi: "खीरा एवं ककड़ी",
    },
    cropType: "Hybrid F1",
    varietyCode: "DBTR Heera",
    tagline: {
      en: "Early maturity light-green salad cucumber with thin skin and juicy sweetness.",
      hi: "अगेती तुड़ाई, हल्का हरा, पतले छिलके वाला रसीला व कुरकुरा सलाद खीरा।",
    },
    description: {
      en: "Heera is an early-yielding salad cucumber hybrid producing light-green, smooth, thin-skinned fruits measuring 16–18 cm. Favored for urban fresh vegetable markets and salad bars.",
      hi: "हीरा एक अगेती सलाद खीरा हाइब्रिड किस्म है जिसके फल 16-18 सेमी लंबे, हल्के हरे और पतले छिलके वाले होते हैं। शहरी बाजारों और ताजे सलाद के लिए यह सर्वोत्तम माना जाता है।",
    },
    specs: {
      sowingSeason: {
        en: "Summer & Rainy",
        hi: "जायद एवं वर्षा",
      },
      maturityDays: "40–45 Days",
      fruitLengthOrWeight: "16–18 cm Length, 160–190g",
      fruitColor: {
        en: "Light Crisp Green",
        hi: "हल्का चमकदार हरा",
      },
      fruitShape: {
        en: "Smooth cylindrical",
        hi: "चिकना बेलनाकार",
      },
      plantHabit: {
        en: "Medium-growth vine, early flushes",
        hi: "मध्यम बेल, अगेती आवक",
      },
      diseaseResistance: {
        en: "Tolerant to Downy Mildew",
        hi: "डाउनी मिल्ड्यू के प्रति सहनशील",
      },
      specialFeatures: {
        en: [
          "Super early first harvest in 40 days",
          "Thin skin requires no peeling for fresh eating",
          "Continuous fruiting with adequate irrigation",
        ],
        hi: [
          "मात्र 40 दिनों में पहली तुड़ाई शुरू",
          "छिलका बहुत पतला होने से बिना छीले खाया जा सकता है",
          "नियमित सिंचाई पर लगातार फलन",
        ],
      },
    },
    packagingSizes: ["10g", "50g", "100g"],
    image: "/images/products/heera.png",
    packRender: "/images/packaging/heera-pack.png",
  },

  // 19. HEERA LONG (Long Melon / Kakri)
  {
    id: "heera-long",
    slug: "heera-long",
    name: {
      en: "Heera Long",
      hi: "हीरा लॉन्ग (ककड़ी)",
    },
    scientificName: "Cucumis melo var. flexuosus",
    categorySlug: "cucumber",
    categoryName: {
      en: "Cucumber & Long Melon",
      hi: "खीरा एवं ककड़ी",
    },
    cropType: "Special Selection",
    varietyCode: "DBTR Heera Long",
    tagline: {
      en: "Tender, crunchy, ribbed summer long melon with refreshing cooling taste.",
      hi: "30-40 सेमी लंबी, हल्की हरी, कुरकुरी और भीषण गर्मी में ठंडक देने वाली ककड़ी।",
    },
    description: {
      en: "Heera Long is an outstanding summer long melon (Kakri) selection that thrives in hot climates. It yields 30–40 cm long, straight, light-green ribbed fruits with exceptional crunchiness and sweet hydrating flesh.",
      hi: "हीरा लॉन्ग जायद (गर्मी) के मौसम के लिए एक विशेष ककड़ी किस्म है। यह भीषण गर्मी में भी 30-40 सेमी लंबी, सीधी, हल्की हरी धारियों वाली कुरकुरी ककड़ी पैदा करती है जो प्यास बुझाने और ताजगी देने के लिए प्रसिद्ध है।",
    },
    specs: {
      sowingSeason: {
        en: "Summer (Feb–March)",
        hi: "जायद (फरवरी-मार्च)",
      },
      maturityDays: "45–50 Days",
      fruitLengthOrWeight: "30–40 cm Length",
      fruitColor: {
        en: "Light Green with faint longitudinal ribs",
        hi: "हल्का हरा, हल्की धारियां",
      },
      fruitShape: {
        en: "Long slender, straight cylindrical",
        hi: "लंबी, पतली, सीधी",
      },
      plantHabit: {
        en: "Sprawling vine with rapid ground coverage",
        hi: "जमीन पर तेजी से फैलने वाली बेल",
      },
      diseaseResistance: {
        en: "High heat and drought tolerance",
        hi: "उच्च तापमान एवं सूखा सहनशील",
      },
      specialFeatures: {
        en: [
          "Bears abundantly during April–June peak summer demand",
          "Crisp tender texture with pleasant sweetness",
          "Fast fruit development allowing picking every 2 days",
        ],
        hi: [
          "अप्रैल से जून की भीषण गर्मी में बंपर मांग व आवक",
          "कुरकुरा कोमल स्वाद, बिना बीज का अहसास",
          "तेज गति से फल बढ़ना, हर 2 दिन में तुड़ाई संभव",
        ],
      },
    },
    packagingSizes: ["50g", "100g", "250g"],
    image: "/images/products/heera-long.png",
    packRender: "/images/packaging/heera-long-pack.png",
  },

  // 20. X-99 (French Bean)
  {
    id: "x-99",
    slug: "x-99",
    name: {
      en: "X-99",
      hi: "एक्स-99 (फ्रेंच बीन)",
    },
    scientificName: "Phaseolus vulgaris",
    categorySlug: "beans",
    categoryName: {
      en: "Beans / French Bean",
      hi: "फ्रेंच बीन",
    },
    cropType: "Bush Selection",
    varietyCode: "DBTR X-99",
    tagline: {
      en: "Stringless, round, fleshy dark green pods with concentrated synchronous maturity.",
      hi: "बिना रेशे की, गोल, मांसल गहरी हरी फलियां और एकसाथ पकने वाली उन्नत फ्रेंच बीन।",
    },
    description: {
      en: "X-99 is a premier dwarf/bush french bean selection. It produces 13–15 cm straight, stringless, fleshy dark green pods. Compact plant habit makes harvesting easy and yields high pod volume per plant.",
      hi: "एक्स-99 एक उन्नत बौनी/झाड़ीदार फ्रेंच बीन किस्म है जिसके फल 13-15 सेमी लंबे, गोल, सीधे और बिना रेशे के होते हैं। इसके पौधे सुगठित होते हैं जिससे तुड़ाई आसान होती है और प्रति एकड़ भरपूर पैदावार मिलती है।",
    },
    specs: {
      sowingSeason: {
        en: "Rabi (Oct–Nov) & Spring (Jan–Feb)",
        hi: "रबी (अक्टूबर-नवंबर) एवं वसंत (जनवरी-फरवरी)",
      },
      maturityDays: "50–55 Days",
      fruitLengthOrWeight: "13–15 cm Length",
      fruitColor: {
        en: "Lustrous Deep Green",
        hi: "गहरा चमकदार हरा",
      },
      fruitShape: {
        en: "Round, straight, fleshy, stringless",
        hi: "गोल, सीधी, मांसल, बिना रेशे की",
      },
      plantHabit: {
        en: "Erect dwarf bush (45–50 cm), no staking required",
        hi: "सीधा झाड़ीदार पौधा (45-50 सेमी), सहारे की आवश्यकता नहीं",
      },
      diseaseResistance: {
        en: "Tolerant to Bean Common Mosaic Virus and Anthracnose",
        hi: "मोज़ेक वायरस एवं एन्थ्रेक्नोज सहनशील",
      },
      specialFeatures: {
        en: [
          "No staking or bower needed, reducing cultivation labor cost",
          "Synchronized pod maturation ideal for bulk mandi harvesting",
          "Exceptional cooking quality with tender, juicy pod walls",
        ],
        hi: [
          "मचान या सहारे की जरूरत नहीं, खेती की लागत में बचत",
          "एकसाथ फलियां तैयार होना, थोक मंडी में बिक्री के लिए सुगम",
          "पकाने में अत्यंत कोमल व स्वादिष्ट",
        ],
      },
    },
    packagingSizes: ["100g", "250g", "500g", "1kg"],
    image: "/images/products/x-99.png",
    packRender: "/images/packaging/x-99-pack.png",
  },

  // 21. BULLET-229 (Green Chilli)
  {
    id: "bullet-229",
    slug: "bullet-229",
    name: {
      en: "Bullet-229",
      hi: "बुलेट-229 (तीखी हरी मिर्च)",
    },
    scientificName: "Capsicum annuum",
    categorySlug: "chilli",
    categoryName: {
      en: "Chilli & Hot Pepper",
      hi: "मिर्च",
    },
    cropType: "Hybrid F1",
    varietyCode: "DBTR 229",
    tagline: {
      en: "High-pungency, compact dark green chilli with dense fruit bearing and thick skin.",
      hi: "तीखी, चमकदार गहरी हरी, गुच्छों में फलने वाली अधिक पैदावार हाइब्रिड मिर्च।",
    },
    description: {
      en: "Bullet-229 is a high-demand hybrid hot pepper producing dense clusters of 7–9 cm dark green, highly pungent chillies. Its thick pericarp prevents shrinkage, providing long shelf life and high transport resilience.",
      hi: "बुलेट-229 एक लोकप्रिय हाइब्रिड हरी मिर्च किस्म है जिसमें 7-9 सेमी लंबी, गहरे हरे रंग की अत्यंत तीखी मिर्चें गुच्छों में लगती हैं। इसका छिलका मोटा होने के कारण यह जल्दी सिकुड़ती नहीं और लंबी दूरी के परिवहन में बिल्कुल ताजा रहती है।",
    },
    specs: {
      sowingSeason: {
        en: "Kharif (May–June nursery), Rabi (Sept–Oct) & Summer (Jan–Feb)",
        hi: "खरीफ, रबी एवं जायद (वर्ष भर उपयुक्त)",
      },
      maturityDays: "60–65 Days after Transplanting",
      fruitLengthOrWeight: "7–9 cm Length, 1.0–1.2 cm Girth",
      fruitColor: {
        en: "Dark Shining Green turning bright red on ripening",
        hi: "चमकदार गहरा हरा (पकने पर गहरा लाल)",
      },
      fruitShape: {
        en: "Pungent bullet shape, smooth and thick walled",
        hi: "बुलेट आकार, चिकनी व मोटी दीवार",
      },
      plantHabit: {
        en: "Bushy compact plant (80–90 cm) with profuse branching",
        hi: "झाड़ीदार सुगठित पौधा (80-90 सेमी), अधिक शाखाएं",
      },
      diseaseResistance: {
        en: "High field tolerance to Leaf Curl Virus (LCV) and sucking pests",
        hi: "पत्ती मरोड़ (LCV) एवं थ्रिप्स/माइट्स के प्रति उच्च सहनशील",
      },
      specialFeatures: {
        en: [
          "High Scoville heat rating preferred for industrial and fresh culinary use",
          "Thick pericarp guarantees weight retention during mandi transport",
          "Prolonged picking cycle over 120–150 days",
        ],
        hi: [
          "उच्च तीखापन जो घरेलू और व्यावसायिक दोनों उपयोगों के लिए उपयुक्त है",
          "मोटा छिलका जिससे वजन में कमी नहीं आती",
          "120-150 दिनों तक लंबी तुड़ाई अवधि",
        ],
      },
    },
    packagingSizes: ["10g", "50g", "100g"],
    image: "/images/products/bullet-229.png",
    packRender: "/images/packaging/bullet-gold-pack.png",
    isFeatured: true,
  },

  // 22. BULLET GOLD (Chilli / Hot Pepper)
  {
    id: "bullet-gold",
    slug: "bullet-gold",
    name: {
      en: "Bullet Gold",
      hi: "बुलेट गोल्ड (मिर्च)",
    },
    scientificName: "Capsicum annuum",
    categorySlug: "chilli",
    categoryName: {
      en: "Chilli & Hot Pepper",
      hi: "मिर्च",
    },
    cropType: "Hybrid F1",
    varietyCode: "DBTR Bullet Gold",
    tagline: {
      en: "Dual-purpose fresh green and dry red chilli hybrid with exceptional fruit count.",
      hi: "हरी व सूखी लाल मिर्च दोनों के लिए उपयुक्त, आकर्षक तीखापन और बंपर फलन।",
    },
    description: {
      en: "Bullet Gold is an aggressive-bearing chilli hybrid prized for both fresh green harvest and sun-dried red chilli production. It produces 8–10 cm uniform fruits with intense pungency and glossy deep green skin.",
      hi: "बुलेट गोल्ड हरी मिर्च एवं सूखी लाल मिर्च दोनों के लिए एक श्रेष्ठ हाइब्रिड किस्म है। इसके फल 8-10 सेमी लंबे, एकसमान, गहरे हरे और तीखे होते हैं। सुखाने पर इसका लाल रंग अत्यंत आकर्षक बनता है।",
    },
    specs: {
      sowingSeason: {
        en: "Kharif & Rabi",
        hi: "खरीफ एवं रबी",
      },
      maturityDays: "60–65 Days (Green), 100–110 Days (Red)",
      fruitLengthOrWeight: "8–10 cm Length",
      fruitColor: {
        en: "Glossy Dark Green to Deep Brilliant Red",
        hi: "चमकदार गहरा हरा से गहरा लाल",
      },
      fruitShape: {
        en: "Smooth conical, pointed tip",
        hi: "शंक्वाकार, नुकीला सिरा",
      },
      plantHabit: {
        en: "Vigorous erect bush with dense canopy",
        hi: "सीधा मजबूत पौधा, घने पत्ते",
      },
      diseaseResistance: {
        en: "Tolerant to Anthracnose (Die-back) and Phytophthora",
        hi: "एन्थ्रेक्नोज (डाई-बैक) एवं फाइटोफ्थोरा सहनशील",
      },
      specialFeatures: {
        en: [
          "Dual market utility: fetch premium as green chilli or dry for high dry-weight recovery",
          "Uniform drying with wrinkle-free, bright red skin",
          "High fruit setting under variable temperature swings",
        ],
        hi: [
          "दोहरा लाभ: ताजी हरी मिर्च बेचें या सुखाकर लाल मिर्च का ऊंचा भाव पाएं",
          "सूखने पर आकर्षक चमकदार लाल रंग और कम टूट-फूट",
          "मौसम के उतार-चढ़ाव में भी स्थिर फल जमाव",
        ],
      },
    },
    packagingSizes: ["10g", "50g", "100g"],
    image: "/images/products/bullet-gold.png",
    packRender: "/images/packaging/bullet-gold-pack.png",
  },

  // 23. SHINE LONG (Green Chilli)
  {
    id: "shine-long",
    slug: "shine-long",
    name: {
      en: "Shine Long",
      hi: "शाइन लॉन्ग (लंबी हरी मिर्च)",
    },
    scientificName: "Capsicum annuum",
    categorySlug: "chilli",
    categoryName: {
      en: "Chilli & Hot Pepper",
      hi: "मिर्च",
    },
    cropType: "Hybrid F1",
    varietyCode: "DBTR Shine Long",
    tagline: {
      en: "Slender 12–14 cm light shining green chilli with sharp pungency and continuous flushing.",
      hi: "12-14 सेमी लंबी, चमकदार हल्की हरी, तीखी और निरंतर फलन देने वाली हाइब्रिड मिर्च।",
    },
    description: {
      en: "Shine Long is a high-yielding long green chilli hybrid. It produces 12–14 cm slender, glossy light-green chillies that are heavily preferred in fresh vegetable markets across Northern and Central India.",
      hi: "शाइन लॉन्ग एक लंबी हरी मिर्च हाइब्रिड किस्म है जिसके फल 12-14 सेमी लंबे, पतले, चमकदार हल्के हरे और अत्यधिक तीखे होते हैं। उत्तर और मध्य भारत की मंडियों में लंबी हरी मिर्च के रूप में इसकी सबसे ज्यादा मांग रहती है।",
    },
    specs: {
      sowingSeason: {
        en: "Kharif, Rabi & Summer",
        hi: "खरीफ, रबी एवं जायद",
      },
      maturityDays: "65–70 Days",
      fruitLengthOrWeight: "12–14 cm Length, 1.0 cm Girth",
      fruitColor: {
        en: "Shining Light Green",
        hi: "चमकदार हल्का हरा",
      },
      fruitShape: {
        en: "Long slender, straight to slightly curved",
        hi: "लंबी, पतली, सुडौल",
      },
      plantHabit: {
        en: "Tall spreading plant with prolific branches",
        hi: "लंबा, फैला हुआ पौधा, अत्यधिक शाखाएं",
      },
      diseaseResistance: {
        en: "Tolerant to Powdery Mildew and Viruses",
        hi: "पाउडरी मिल्ड्यू एवं वायरस के प्रति सहनशील",
      },
      specialFeatures: {
        en: [
          "Superb eye-appeal in retail grocery bundles",
          "Sharp heat with rich green pepper flavor",
          "Maintains length and vigor across late picking flushes",
        ],
        hi: [
          "मंडी में गड्डी बनाकर बेचने के लिए सर्वाधिक आकर्षक",
          "तेज तीखापन और बेहतरीन स्वाद",
          "अंतिम तुड़ाई तक फलों की लंबाई बनी रहती है",
        ],
      },
    },
    packagingSizes: ["10g", "50g", "100g"],
    image: "/images/products/shine-long.png",
    packRender: "/images/packaging/shine-long-pack.png",
  },

  // 24. APARNA (Tomato / Tamatar)
  {
    id: "aparna",
    slug: "aparna",
    name: {
      en: "Aparna",
      hi: "अपर्णा (टमाटर)",
    },
    scientificName: "Solanum lycopersicum",
    categorySlug: "tomato",
    categoryName: {
      en: "Tomato / Tamatar",
      hi: "टमाटर",
    },
    cropType: "Hybrid F1",
    varietyCode: "DBTR Aparna",
    tagline: {
      en: "Firm, square-round, 80–100g deep red tomato hybrid with outstanding long-distance shipping stamina.",
      hi: "80-100 ग्राम ठोस, चौकोर-गोल, गहरा लाल हाइब्रिड टमाटर, लंबी दूरी के परिवहन के लिए सर्वोत्तम।",
    },
    description: {
      en: "Aparna is an outstanding determinate tomato hybrid tailored for commercial transit. It produces uniform 80–100g square-round fruits with thick pericarps, brilliant red skin, high TSS, and exceptional resistance to cracking and transit bruising.",
      hi: "अपर्णा एक उच्च गुणवत्ता वाली हाइब्रिड टमाटर किस्म है जिसे दूरस्थ मंडियों में बिक्री के लिए विशेष रूप से विकसित किया गया है। इसके फल 80-100 ग्राम के, चौकोर-गोल, गहरे लाल और मोटे छिलके वाले होते हैं, जो कई दिनों तक बिना गले ठोस बने रहते हैं।",
    },
    specs: {
      sowingSeason: {
        en: "Kharif (June–July) & Rabi (Sept–Oct)",
        hi: "खरीफ (जून-जुलाई) एवं रबी (सितंबर-अक्टूबर)",
      },
      maturityDays: "60–65 Days after Transplanting",
      fruitLengthOrWeight: "80–100g Weight",
      fruitColor: {
        en: "Lustrous Deep Red upon ripening",
        hi: "चमकदार गहरा लाल",
      },
      fruitShape: {
        en: "Square-round, uniform with thick pericarp",
        hi: "चौकोर-गोल, एकसमान, मोटा गूदा",
      },
      plantHabit: {
        en: "Semi-determinate, vigorous with dense foliage protecting fruit from sunburn",
        hi: "अर्ध-सीमित, घने पत्ते जो फलों को तेज धूप से बचाते हैं",
      },
      diseaseResistance: {
        en: "High field tolerance to Tomato Leaf Curl Virus (ToLCV) and Early Blight",
        hi: "पत्ती मरोड़ (ToLCV) एवं अगेती झुलसा के प्रति सहनशील",
      },
      specialFeatures: {
        en: [
          "Thick fruit walls allow stacking in wooden/plastic crates without crushing",
          "High Total Soluble Solids (TSS) providing rich acidic-sweet tomato flavor",
          "Excellent field holding capacity; ripe fruits stay firm on the vine for 7–10 days",
        ],
        hi: [
          "मोटा छिलका जिससे क्रेट में दबाने पर भी टमाटर पिचकता नहीं",
          "उत्कृष्ट खट्टा-मीठा स्वाद और गाढ़ा गूदा",
          "पकने के बाद भी 7-10 दिनों तक पौधे पर कड़ा बना रहता है",
        ],
      },
    },
    packagingSizes: ["10g", "50g", "100g"],
    image: "/images/products/aparna.png",
    packRender: "/images/packaging/aparna-pack.png",
    isFeatured: true,
  },

  // 25. ANJALI 21 (Tomato / Tamatar)
  {
    id: "anjali-21",
    slug: "anjali-21",
    name: {
      en: "Anjali 21",
      hi: "अंजलि 21 (टमाटर)",
    },
    scientificName: "Solanum lycopersicum",
    categorySlug: "tomato",
    categoryName: {
      en: "Tomato / Tamatar",
      hi: "टमाटर",
    },
    cropType: "Hybrid F1",
    varietyCode: "DBTR Anjali 21",
    tagline: {
      en: "Large 90–110g glossy red round tomato with heat tolerance and high fruit set.",
      hi: "90-110 ग्राम गोल, गहरे लाल फल, गर्मी सहनशील और बंपर फल जमाव वाला हाइब्रिड टमाटर।",
    },
    description: {
      en: "Anjali 21 is a high-yielding hybrid tomato known for vigorous plant habit and large 90–110g round fruits. Its outstanding heat tolerance enables strong fruit setting during hot spells.",
      hi: "अंजलि 21 एक भारी पैदावार देने वाली हाइब्रिड टमाटर किस्म है। इसके फल 90-110 ग्राम के, गोल और गहरे लाल होते हैं। गर्मी के मौसम में भी इसका फल जमाव बहुत अच्छा रहता है।",
    },
    specs: {
      sowingSeason: {
        en: "Kharif, Rabi & Spring",
        hi: "खरीफ, रबी एवं वसंत",
      },
      maturityDays: "65–70 Days after Transplanting",
      fruitLengthOrWeight: "90–110g Weight",
      fruitColor: {
        en: "Attractive Glossy Red",
        hi: "आकर्षक चमकदार लाल",
      },
      fruitShape: {
        en: "Smooth round, firm",
        hi: "सुडौल गोल, ठोस",
      },
      plantHabit: {
        en: "Determinate vigorous bush",
        hi: "सीमित मजबूत झाड़ी",
      },
      diseaseResistance: {
        en: "Tolerant to Bacterial Wilt and Foliar Blights",
        hi: "जीवाणु उकठा एवं पत्ती झुलसा सहनशील",
      },
      specialFeatures: {
        en: [
          "Bigger fruit size commands premium prices in fresh vegetable mandis",
          "Rich red interior color ideal for processing and table slicing",
          "Strong disease package reducing pesticide applications",
        ],
        hi: [
          "बड़ा फल आकार जिससे खुदरा और थोक मंडी में ऊंचा भाव मिलता है",
          "गहरा लाल भीतरी गूदा, सलाद और पकाने दोनों के लिए उत्तम",
          "रोगों के प्रति मजबूत सहनशीलता से कीटनाशक खर्च में बचत",
        ],
      },
    },
    packagingSizes: ["10g", "50g", "100g"],
    image: "/images/products/anjali-21.png",
    packRender: "/images/packaging/anjali-21-pack.png",
  },

  // 26. GREEN GOLD (Watermelon / Tarbooj)
  {
    id: "green-gold",
    slug: "green-gold",
    name: {
      en: "Green Gold",
      hi: "ग्रीन गोल्ड (तरबूज)",
    },
    scientificName: "Citrullus lanatus",
    categorySlug: "watermelon",
    categoryName: {
      en: "Watermelon / Tarbooj",
      hi: "तरबूज",
    },
    cropType: "Hybrid F1",
    varietyCode: "DBTR Green Gold",
    tagline: {
      en: "Oblong 8–12 kg watermelon with granular deep crimson flesh and high Brix sweetness.",
      hi: "8-12 किग्रा लंबोतरा तरबूज, दानेदार गहरा लाल गूदा, 12-13% ब्रिक्स मिठास और मजबूत छिलका।",
    },
    description: {
      en: "Green Gold is a high-tonnage watermelon hybrid yielding large oblong fruits weighing 8–12 kg. The rind has dark green stripes over a lighter background. Inside, the deep crimson-red flesh is intensely sweet (12–13% Brix) with a crisp, melting, granular texture.",
      hi: "ग्रीन गोल्ड एक भारी उत्पादन देने वाली हाइब्रिड तरबूज किस्म है जिसके फल 8-12 किग्रा वजन के लंबोतरे होते हैं। इसके छिलके पर आकर्षक गहरे हरे रंग की धारियां होती हैं। भीतर का गूदा गहरा लाल, दानेदार, कुरकुरा और 12-13% ब्रिक्स मिठास से भरपूर होता है।",
    },
    specs: {
      sowingSeason: {
        en: "Summer (Jan–Feb) & Post-Monsoon in mild climates",
        hi: "जायद/गर्मी (जनवरी-फरवरी)",
      },
      maturityDays: "80–85 Days",
      fruitLengthOrWeight: "8–12 kg Weight",
      fruitColor: {
        en: "Light green background with broad dark green stripes",
        hi: "हल्के हरे रंग पर चौड़ी गहरी हरी धारियां",
      },
      fruitShape: {
        en: "Oblong, uniform blocky",
        hi: "लंबोतरा, सुडौल",
      },
      plantHabit: {
        en: "Vigorous vine with strong canopy shielding melons from sun-scald",
        hi: "तेज बढ़ने वाली बेल, घने पत्ते जो फलों को तेज धूप से बचाते हैं",
      },
      diseaseResistance: {
        en: "Tolerant to Fusarium Wilt and Anthracnose",
        hi: "फ्युजेरियम उकठा एवं एन्थ्रेक्नोज सहनशील",
      },
      specialFeatures: {
        en: [
          "Thick durable rind ensures zero transit loss over 1000+ km hauls",
          "Small brown seeds sparsely distributed in the flesh",
          "High sweetness (Brix 12–13%) guarantees repeat customer demand",
        ],
        hi: [
          "मजबूत छिलका जिससे 1000+ किमी की ढुलाई में भी फल नहीं फटते",
          "गूदे में बहुत छोटे और कम बीज",
          "12-13% ब्रिक्स मिठास जो ग्राहकों को बार-बार खींचती है",
        ],
      },
    },
    packagingSizes: ["50g", "100g", "250g", "500g"],
    image: "/images/products/green-gold.png",
    packRender: "/images/packaging/super-nutri-pack.png",
    isFeatured: true,
  },

  // 27. BLACK GOLD (Watermelon / Tarbooj)
  {
    id: "black-gold",
    slug: "black-gold",
    name: {
      en: "Black Gold",
      hi: "ब्लैक गोल्ड (काला तरबूज)",
    },
    scientificName: "Citrullus lanatus",
    categorySlug: "watermelon",
    categoryName: {
      en: "Watermelon / Tarbooj",
      hi: "तरबूज",
    },
    cropType: "Hybrid F1",
    varietyCode: "DBTR Black Gold",
    tagline: {
      en: "Solid dark blackish-green rind, 6–9 kg round-oval sugar-sweet watermelon.",
      hi: "ठोस काला-हरा छिलका, 6-9 किग्रा गोल फल, चीनी जैसी मिठास और छोटे बीज।",
    },
    description: {
      en: "Black Gold is a premier 'Sugar Baby' type dark watermelon hybrid producing 6–9 kg round-oval fruits with a solid dark blackish-green rind. Known for rapid maturity and ultra-sweet, vibrant red flesh.",
      hi: "ब्लैक गोल्ड काले छिलके वाली एक प्रीमियम हाइब्रिड तरबूज किस्म है। इसके फल 6-9 किग्रा के गोल-अंडाकार और गहरे काले-हरे रंग के होते हैं। यह अगेती तैयार होती है और इसका गूदा अत्यंत मीठा व चमकदार लाल होता है।",
    },
    specs: {
      sowingSeason: {
        en: "Summer (Jan–Feb)",
        hi: "जायद/गर्मी (जनवरी-फरवरी)",
      },
      maturityDays: "75–80 Days",
      fruitLengthOrWeight: "6–9 kg Weight",
      fruitColor: {
        en: "Uniform Solid Dark Blackish Green",
        hi: "एकसमान गहरा काला-हरा",
      },
      fruitShape: {
        en: "Round to oval",
        hi: "गोल से अंडाकार",
      },
      plantHabit: {
        en: "Vigorous vine, early fruit set",
        hi: "तेज बेल, अगेती फल जमाव",
      },
      diseaseResistance: {
        en: "Tolerant to Downy Mildew",
        hi: "डाउनी मिल्ड्यू के प्रति सहनशील",
      },
      specialFeatures: {
        en: [
          "Early maturity (75 days) catches peak early-summer prices",
          "Solid dark rind is highly sought after in urban fruit markets",
          "Very crisp, granular texture with small seeds",
        ],
        hi: [
          "मात्र 75 दिनों में अगेती तुड़ाई, सीजन की शुरुआत में सबसे ऊंचा भाव",
          "काले रंग का छिलका शहरी सुपरमार्केट और मंडियों में पहली पसंद",
          "दानेदार कुरकुरा गूदा और बहुत छोटे बीज",
        ],
      },
    },
    packagingSizes: ["50g", "100g", "250g", "500g"],
    image: "/images/products/black-gold.png",
  },

  // 28. X-92 (Radish / Mooli)
  {
    id: "x-92",
    slug: "x-92",
    name: {
      en: "X-92",
      hi: "एक्स-92 (सफेद मूली)",
    },
    scientificName: "Raphanus sativus",
    categorySlug: "radish",
    categoryName: {
      en: "Radish / Mooli",
      hi: "मूली",
    },
    cropType: "Research Selection",
    varietyCode: "DBTR X-92",
    tagline: {
      en: "Snow-white, pith-free, 25–30 cm cylindrical radish with high heat tolerance.",
      hi: "बर्फ जैसी सफेद, बिना खोखलेपन की 25-30 सेमी ठोस मूली, गर्मी सहनशील।",
    },
    description: {
      en: "X-92 is a high-grade research selection radish developed for year-round cultivation including hot summer months. It yields 25–30 cm snow-white, smooth, cylindrical roots that remain crisp and completely free of pithiness or internal hollows.",
      hi: "एक्स-92 साल भर और विशेष रूप से गर्मियों के लिए विकसित एक विशेष मूली किस्म है। इसके फल 25-30 सेमी लंबे, बिल्कुल सीधे, बर्फ जैसे सफेद और चिकने होते हैं। कड़क गर्मी में भी इसमें अंदर से खोखलापन या जाली नहीं पड़ती।",
    },
    specs: {
      sowingSeason: {
        en: "Year Round (Summer: Feb–May, Rainy: June–Aug, Winter: Sept–Nov)",
        hi: "वर्ष भर (गर्मी, वर्षा एवं सर्दी तीनों मौसमों में)",
      },
      maturityDays: "40–45 Days",
      fruitLengthOrWeight: "25–30 cm Length, 200–250g Weight",
      fruitColor: {
        en: "Pure Snow White",
        hi: "बर्फ जैसी सफेद",
      },
      fruitShape: {
        en: "Cylindrical with blunt tip, smooth skin",
        hi: "बेलनाकार, सीधा, चिकनी त्वचा",
      },
      plantHabit: {
        en: "Semi-erect foliage with medium-sized edible leaves",
        hi: "मध्यम पत्ते, मजबूत जड़",
      },
      diseaseResistance: {
        en: "High heat tolerance and slow bolting",
        hi: "उच्च तापमान सहनशील और देर से फूल आना",
      },
      specialFeatures: {
        en: [
          "Zero pithiness: retains crispness and juicy mild pungency",
          "Blunt root tip minimizes washing and breakage losses",
          "Slow bolting habit allows extended harvest window",
        ],
        hi: [
          "बिना जाली/खोखलेपन के, कुरकुरी और स्वादिष्ट हल्की तीखी",
          "जड़ का सिरा सुडौल होने से धुलाई और परिवहन में टूटती नहीं",
          "देर से फूल निकलने के कारण कई दिनों तक खेत में रखी जा सकती है",
        ],
      },
    },
    packagingSizes: ["100g", "250g", "500g", "1kg"],
    image: "/images/products/x-92.png",
    isFeatured: true,
  },

  // 29. PALAK PATTA (Radish / Mooli)
  {
    id: "palak-patta",
    slug: "palak-patta",
    name: {
      en: "Palak Patta",
      hi: "पालक पत्ता (मूली)",
    },
    scientificName: "Raphanus sativus",
    categorySlug: "radish",
    categoryName: {
      en: "Radish / Mooli",
      hi: "मूली",
    },
    cropType: "Dual-Purpose Selection",
    varietyCode: "DBTR Palak Patta",
    tagline: {
      en: "Dual-purpose radish with spineless smooth leaves and crisp white roots.",
      hi: "बिना कांटे वाले मुलायम पत्ते और सफेद ठोस जड़, साग व सलाद दोनों के लिए उत्तम।",
    },
    description: {
      en: "Palak Patta is a dual-purpose radish variety bred for both tender spineless green foliage (consumed as saag/greens) and crisp snow-white roots. Its spineless leaves make picking and eating delightful.",
      hi: "पालक पत्ता मूली की एक दोहरे उपयोग वाली किस्म है जिसके पत्ते पालक की तरह मुलायम और बिना कांटों के होते हैं। इसके पत्तों का साग बहुत स्वादिष्ट बनता है और नीचे 20-25 सेमी की सफेद ठोस मूली भी तैयार होती है।",
    },
    specs: {
      sowingSeason: {
        en: "Year Round",
        hi: "वर्ष भर",
      },
      maturityDays: "35–42 Days",
      fruitLengthOrWeight: "20–25 cm Length",
      fruitColor: {
        en: "Pure White Root, Lush Green Leaves",
        hi: "सफेद जड़, गहरे हरे कोमल पत्ते",
      },
      fruitShape: {
        en: "Straight tapering cylindrical",
        hi: "सीधी बेलनाकार",
      },
      plantHabit: {
        en: "Broad smooth spineless leaves resembling spinach",
        hi: "पालक जैसे चौड़े, बिना रोएं वाले कोमल पत्ते",
      },
      diseaseResistance: {
        en: "Tolerant to Alternaria Leaf Spot",
        hi: "पत्ती धब्बा रोग सहनशील",
      },
      specialFeatures: {
        en: [
          "Dual income for farmers: sell bunches with lush greens for higher mandi prices",
          "Fast turnaround in just 35–40 days",
          "Leaves are 100% spineless and highly nutritious",
        ],
        hi: [
          "किसानों को दोहरा लाभ: पत्तों समेत मूली बेचकर अधिक मुनाफा",
          "मात्र 35-40 दिनों में फसल तैयार",
          "पत्ते बिल्कुल बिना कांटे के और पौष्टिक",
        ],
      },
    },
    packagingSizes: ["100g", "250g", "500g", "1kg"],
    image: "/images/products/palak-patta.png",
  },

  // 30. ALKA (Radish / Mooli)
  {
    id: "alka",
    slug: "alka",
    name: {
      en: "Alka",
      hi: "अलका (सफेद मूली)",
    },
    scientificName: "Raphanus sativus",
    categorySlug: "radish",
    categoryName: {
      en: "Radish / Mooli",
      hi: "मूली",
    },
    cropType: "Commercial Selection",
    varietyCode: "DBTR Alka",
    tagline: {
      en: "Uniform 25–28 cm crisp white radish with exceptional field holding quality.",
      hi: "25-28 सेमी एकसमान सफेद मूली, कुरकुरी और खेत में अधिक समय तक टिकने वाली।",
    },
    description: {
      en: "Alka is an all-season white radish producing straight, 25–28 cm roots with a smooth skin and crisp, mildly pungent flesh. It holds in the field without turning fibrous.",
      hi: "अलका सभी मौसमों के लिए उपयुक्त सफेद मूली किस्म है जिसके फल 25-28 सेमी लंबे, चिकने और स्वादिष्ट होते हैं। यह खेत में देर तक खड़ी रहने पर भी रेशेदार नहीं होती।",
    },
    specs: {
      sowingSeason: {
        en: "All Season",
        hi: "सभी मौसम",
      },
      maturityDays: "42–48 Days",
      fruitLengthOrWeight: "25–28 cm Length",
      fruitColor: {
        en: "Milky White",
        hi: "दूधिया सफेद",
      },
      fruitShape: {
        en: "Straight cylindrical with tapering tip",
        hi: "सीधी बेलनाकार",
      },
      plantHabit: {
        en: "Semi-spreading vigorous foliage",
        hi: "मध्यम फैला हुआ पौधा",
      },
      diseaseResistance: {
        en: "Heat and bolting tolerant",
        hi: "गर्मी एवं बोल्टिंग सहनशील",
      },
      specialFeatures: {
        en: [
          "Uniform size and weight ideal for wholesale bundling",
          "Resists internal blackening during washing",
          "Pleasant juicy texture favored for salads",
        ],
        hi: [
          "थोक बंडलिंग के लिए एकसमान आकार और वजन",
          "धुलाई के बाद अंदर से काली नहीं पड़ती",
          "सलाद के लिए कुरकुरी और रसीली",
        ],
      },
    },
    packagingSizes: ["100g", "250g", "500g", "1kg"],
    image: "/images/products/alka.png",
  },

  // 31. MULI PATTA (Radish / Mooli)
  {
    id: "muli-patta",
    slug: "muli-patta",
    name: {
      en: "Muli Patta",
      hi: "मूली पत्ता (मूली)",
    },
    scientificName: "Raphanus sativus",
    categorySlug: "radish",
    categoryName: {
      en: "Radish / Mooli",
      hi: "मूली",
    },
    cropType: "Rapid Turnaround Selection",
    varietyCode: "DBTR Muli Patta",
    tagline: {
      en: "Ultra-fast 35-day turnaround radish with lush tender foliage for bunch markets.",
      hi: "मात्र 35 दिनों में तैयार, ताजे हरे पत्तों और सफेद जड़ वाली मूली।",
    },
    description: {
      en: "Muli Patta is bred for quick farm turnover. Within 35 days, it delivers lush edible green leaves alongside a tender, sweet white root, perfect for local mandi vegetable bundles.",
      hi: "मूली पत्ता बहुत तेजी से तैयार होने वाली किस्म है। मात्र 35 दिनों में इसके कोमल हरे पत्ते और मीठी सफेद मूली तैयार हो जाती है, जो स्थानीय बाजारों में गड्डी बनाकर बेचने के लिए उत्तम है।",
    },
    specs: {
      sowingSeason: {
        en: "Round the Year",
        hi: "वर्ष भर",
      },
      maturityDays: "35–40 Days",
      fruitLengthOrWeight: "20–24 cm Length",
      fruitColor: {
        en: "White Root with vibrant green leaves",
        hi: "सफेद जड़ और चमकदार हरे पत्ते",
      },
      fruitShape: {
        en: "Cylindrical",
        hi: "बेलनाकार",
      },
      plantHabit: {
        en: "Lush rapid foliar growth",
        hi: "तेज पत्ती विकास",
      },
      diseaseResistance: {
        en: "Hardy against seasonal pests",
        hi: "मौसमी कीटों के प्रति सहनशील",
      },
      specialFeatures: {
        en: [
          "Fastest crop turnaround allowing multi-crop cycles per year",
          "High fresh biomass per square meter",
          "Crisp and succulent taste",
        ],
        hi: [
          "सबसे तेज तैयार होने वाली फसल, साल में कई बार बोई जा सकती है",
          "प्रति वर्ग मीटर भरपूर ताजा वजन",
          "कुरकुरा और रसीला स्वाद",
        ],
      },
    },
    packagingSizes: ["100g", "250g", "500g", "1kg"],
    image: "/images/products/muli-patta.png",
  },

  // 32. HARIYALI (Spinach / Palak)
  {
    id: "hariyali",
    slug: "hariyali",
    name: {
      en: "Hariyali",
      hi: "हरियाली (पालक)",
    },
    scientificName: "Spinacia oleracea",
    categorySlug: "leafy-greens",
    categoryName: {
      en: "Leafy Greens",
      hi: "पत्तेदार सब्जियां",
    },
    cropType: "Multi-Cut Selection",
    varietyCode: "DBTR Hariyali",
    tagline: {
      en: "Broad, succulent dark green leaves with 5–6 vigorous cuttings and slow bolting.",
      hi: "चौड़े, रसीले गहरे हरे पत्ते, 5-6 बार तेज तुड़ाई और देर से फूल आने वाला उन्नत पालक।",
    },
    description: {
      en: "Hariyali is DBTR's high-yielding all-season spinach (Palak) selection. It features broad, thick, succulent, glossy dark-green leaves with tender juicy stems. Plants regenerate rapidly after every cut, giving 5–6 prolific harvests across the season.",
      hi: "हरियाली डीबीटीआर की एक लोकप्रिय बहु-कटाई पालक किस्म है। इसके पत्ते चौड़े, मोटे, चमकदार गहरे हरे और डंठल कोमल होते हैं। प्रत्येक कटाई के बाद पौधा बहुत तेजी से फुटाव करता है जिससे पूरे सीजन में 5 से 6 बार भरपूर पैदावार मिलती है।",
    },
    specs: {
      sowingSeason: {
        en: "Round the Year (Major: Sept–Nov & Feb–March)",
        hi: "वर्ष भर (मुख्य: सितंबर-नवंबर एवं फरवरी-मार्च)",
      },
      maturityDays: "25–30 Days (First Cut), every 15 days thereafter",
      fruitLengthOrWeight: "Broad thick leaves, 25–30 cm plant height",
      fruitColor: {
        en: "Lustrous Dark Green",
        hi: "चमकदार गहरा हरा",
      },
      fruitShape: {
        en: "Broad ovate, smooth, fleshy succulent leaves",
        hi: "चौड़े, चिकने, मांसल पत्ते",
      },
      plantHabit: {
        en: "Erect bushy rosette with rapid regrowth tillers",
        hi: "सीधा सुगठित पौधा, कटाई के बाद तेज फुटाव",
      },
      diseaseResistance: {
        en: "Slow bolting in high heat, tolerant to Downy Mildew",
        hi: "गर्मी में देर से फूल आना, डाउनी मिल्ड्यू सहनशील",
      },
      specialFeatures: {
        en: [
          "5 to 6 heavy cuttings maximize total farm return per acre",
          "High dry-matter and iron content with superior culinary softness",
          "Slow bolting habit maintains vegetative quality in summer",
        ],
        hi: [
          "5 से 6 बार भारी कटाई से प्रति एकड़ अधिकतम मुनाफा",
          "उच्च आयरन व पोषण, पकाने पर अत्यंत मुलायम और स्वादिष्ट",
          "गर्मी में देर से फूल आना जिससे पत्तों की गुणवत्ता बनी रहती है",
        ],
      },
    },
    packagingSizes: ["100g", "250g", "500g", "1kg"],
    image: "/images/products/hariyali.png",
    isFeatured: true,
  },

  // 33. MEHAK (Coriander / Dhaniya)
  {
    id: "mehak",
    slug: "mehak",
    name: {
      en: "Mehak",
      hi: "महक (धनिया)",
    },
    scientificName: "Coriandrum sativum",
    categorySlug: "leafy-greens",
    categoryName: {
      en: "Leafy Greens",
      hi: "पत्तेदार सब्जियां",
    },
    cropType: "High-Aroma Multi-Cut Selection",
    varietyCode: "DBTR Mehak",
    tagline: {
      en: "Intensely aromatic, late-bolting multi-cut coriander with lustrous green leaves.",
      hi: "अत्यधिक सुगंधित, देर से फूलने वाली, बहु-कटाई और गहरे हरे पत्तों वाली उन्नत धनिया।",
    },
    description: {
      en: "Mehak is a celebrated coriander (Dhaniya) selection known for its intense natural essential-oil aroma and late-bolting characteristic. It produces dense bushes of shiny green leaves that allow 3–4 multiple cuttings without losing fragrance.",
      hi: "महक अपनी लाजवाब प्राकृतिक खुशबू और देर से फूलने (बोल्टिंग) के गुण के लिए प्रसिद्ध धनिया किस्म है। इसके पौधे में घने चमकदार हरे पत्ते आते हैं और यह 3-4 बार कटाई देती है। इसकी खुशबू दूर तक महकती है।",
    },
    specs: {
      sowingSeason: {
        en: "Round the Year (Summer: Feb–April, Kharif: June–Aug, Rabi: Oct–Dec)",
        hi: "वर्ष भर (जायद, खरीफ एवं रबी तीनों में)",
      },
      maturityDays: "35–40 Days (First Cut)",
      fruitLengthOrWeight: "Dense bushy foliage, 20–25 cm height",
      fruitColor: {
        en: "Lustrous Shiny Green",
        hi: "चमकदार गहरा हरा",
      },
      fruitShape: {
        en: "Finely serrated, multi-lobed aromatic leaves",
        hi: "सुडौल, खुशबूदार पत्ते",
      },
      plantHabit: {
        en: "Multi-branching bushy plant with dense basal clusters",
        hi: "जड़ से अत्यधिक फुटाव वाला झाड़ीदार पौधा",
      },
      diseaseResistance: {
        en: "Slow bolting in high heat, tolerant to Powdery Mildew and Wilt",
        hi: "गर्मी में देर से फूल आना, पाउडरी मिल्ड्यू एवं उकठा सहनशील",
      },
      specialFeatures: {
        en: [
          "Superb essential oil content delivers rich aroma that consumers crave",
          "Withstands hot summer temperatures without premature flowering",
          "3–4 commercial cuttings provide steady mandi income",
        ],
        hi: [
          "उच्च प्राकृतिक तेल जिससे भरपूर खुशबू मिलती है",
          "कड़क गर्मी में भी जल्दी फूल नहीं आते",
          "3-4 कटाइयों से लगातार मंडी में बिक्री",
        ],
      },
    },
    packagingSizes: ["100g", "250g", "500g", "1kg"],
    image: "/images/products/mehak.png",
    isFeatured: true,
  },

  // 34. DHANIYA PATTA (Coriander / Dhaniya)
  {
    id: "dhaniya-patta",
    slug: "dhaniya-patta",
    name: {
      en: "Dhaniya Patta",
      hi: "धनिया पत्ता (धनिया)",
    },
    scientificName: "Coriandrum sativum",
    categorySlug: "leafy-greens",
    categoryName: {
      en: "Leafy Greens",
      hi: "पत्तेदार सब्जियां",
    },
    cropType: "Leafy Special Selection",
    varietyCode: "DBTR Dhaniya Patta",
    tagline: {
      en: "Broad fragrant leaves, rapid initial vegetative flush for fresh bunching.",
      hi: "चौड़े सुगंधित पत्ते, तेज प्रारंभिक बढ़वार और ताजे बंडल के लिए आदर्श धनिया।",
    },
    description: {
      en: "Dhaniya Patta is selected for rapid vegetative growth and broad aromatic foliage. Ideal for commercial growers supplying fresh leafy bunches to wholesale urban vegetable markets.",
      hi: "धनिया पत्ता तेजी से पत्ते देने वाली किस्म है। इसके पत्ते चौड़े, गहरे हरे और खुशबूदार होते हैं। ताजी गड्डियां बनाकर मंडियों में आपूर्ति करने वाले किसानों के लिए यह बहुत लाभकारी है।",
    },
    specs: {
      sowingSeason: {
        en: "Year Round",
        hi: "वर्ष भर",
      },
      maturityDays: "30–35 Days",
      fruitLengthOrWeight: "Broad leafy foliage",
      fruitColor: {
        en: "Deep Green",
        hi: "गहरा हरा",
      },
      fruitShape: {
        en: "Broad lobed leaves",
        hi: "चौड़े पत्ते",
      },
      plantHabit: {
        en: "Compact leafy growth",
        hi: "सघन पत्तेदार पौधा",
      },
      diseaseResistance: {
        en: "Tolerant to seasonal foliar blights",
        hi: "पत्ती झुलसा के प्रति सहनशील",
      },
      specialFeatures: {
        en: [
          "Early ready in 30 days for quick turnaround",
          "High fresh bundle weight reduces labor cost",
          "Rich aroma retained even after distance transit",
        ],
        hi: [
          "मात्र 30 दिनों में पहली कटाई तैयार",
          "प्रति गड्डी अधिक वजन जिससे ज्यादा मुनाफा",
          "दूर तक परिवहन के बाद भी खुशबू बरकरार",
        ],
      },
    },
    packagingSizes: ["100g", "250g", "500g", "1kg"],
    image: "/images/products/dhaniya-patta.png",
  },

  // 35. LEAFY GREEN (Amaranthus / Chaulai)
  {
    id: "leafy-green",
    slug: "leafy-green",
    name: {
      en: "Leafy Green",
      hi: "लीफी ग्रीन चौलाई (हरी चौलाई)",
    },
    scientificName: "Amaranthus viridis",
    categorySlug: "leafy-greens",
    categoryName: {
      en: "Leafy Greens",
      hi: "पत्तेदार सब्जियां",
    },
    cropType: "High-Biomass Selection",
    varietyCode: "DBTR Leafy Green",
    tagline: {
      en: "Fast-growing, iron-rich tender green amaranthus with multi-cutting potential in peak heat.",
      hi: "तेज बढ़ने वाली, आयरन से भरपूर कोमल हरी चौलाई, भीषण गर्मी में भी बहु-कटाई देने वाली।",
    },
    description: {
      en: "Leafy Green Amaranthus (Chaulai Saag) is a nutritious, heat-loving leafy vegetable. It features tender bright-green leaves and succulent stems that cook soft. Thrives under high summer temperatures when other greens fail.",
      hi: "लीफी ग्रीन चौलाई गर्मी के मौसम के लिए एक पौष्टिक और गुणकारी पत्तेदार सब्जी है। जब तेज धूप में अन्य सब्जियां सूखने लगती हैं, तब यह कोमल हरी चौलाई तेज गति से बढ़ती है और 20-25 दिनों में कटाई देती है।",
    },
    specs: {
      sowingSeason: {
        en: "Summer (Feb–May) & Rainy (June–July)",
        hi: "जायद (फरवरी-मई) एवं वर्षा (जून-जुलाई)",
      },
      maturityDays: "20–25 Days (First Cut)",
      fruitLengthOrWeight: "Erect plant, 30–40 cm height",
      fruitColor: {
        en: "Vibrant Bright Green",
        hi: "चमकदार हरा",
      },
      fruitShape: {
        en: "Ovate tender leaves with succulent stem",
        hi: "कोमल पत्ते, मुलायम डंठल",
      },
      plantHabit: {
        en: "Erect vigorous bush with rapid regrowth after each cut",
        hi: "सीधा पौधा, कटाई के बाद तेज फुटाव",
      },
      diseaseResistance: {
        en: "Extreme heat tolerance and disease resistance",
        hi: "अत्यधिक गर्मी व रोग प्रतिरोधी",
      },
      specialFeatures: {
        en: [
          "First harvest ready in just 20 days",
          "Rich in Iron, Calcium, and Vitamin A",
          "Allows 4–5 multiple cuts across the summer season",
        ],
        hi: [
          "मात्र 20 दिनों में पहली कटाई तैयार",
          "आयरन, कैल्शियम और विटामिन ए से भरपूर",
          "गर्मियों में 4 से 5 बार तक कटाई",
        ],
      },
    },
    packagingSizes: ["100g", "250g", "500g", "1kg"],
    image: "/images/products/leafy-green.png",
  },

  // 36. LEAFY RED (Amaranthus / Chaulai)
  {
    id: "leafy-red",
    slug: "leafy-red",
    name: {
      en: "Leafy Red",
      hi: "लीफी रेड चौलाई (लाल चौलाई)",
    },
    scientificName: "Amaranthus tricolor",
    categorySlug: "leafy-greens",
    categoryName: {
      en: "Leafy Greens",
      hi: "पत्तेदार सब्जियां",
    },
    cropType: "Anthocyanin-Rich Selection",
    varietyCode: "DBTR Leafy Red",
    tagline: {
      en: "Vibrant magenta-red amaranthus rich in antioxidants with tender succulent stems.",
      hi: "गहरा लाल-बैंगनी रंग, एंटीऑक्सीडेंट व आयरन से भरपूर स्वादिष्ट लाल चौलाई।",
    },
    description: {
      en: "Leafy Red Amaranthus features striking magenta-red leaves and tender succulent stems. Packed with natural anthocyanin antioxidants and dietary minerals, it commands a strong visual premium in vegetable bazars.",
      hi: "लीफी रेड चौलाई एक अत्यंत आकर्षक गहरे लाल-बैंगनी रंग की चौलाई किस्म है। इसमें प्राकृतिक एंटीऑक्सीडेंट और खनिज प्रचुर मात्रा में होते हैं। इसका सूप और साग बहुत स्वादिष्ट बनता है और मंडियों में तुरंत बिकती है।",
    },
    specs: {
      sowingSeason: {
        en: "Summer & Rainy",
        hi: "जायद एवं वर्षा",
      },
      maturityDays: "22–26 Days (First Cut)",
      fruitLengthOrWeight: "30–35 cm height",
      fruitColor: {
        en: "Striking Magenta Deep Red",
        hi: "आकर्षक गहरा लाल-बैंगनी",
      },
      fruitShape: {
        en: "Broad ovate red foliage",
        hi: "चौड़े लाल पत्ते",
      },
      plantHabit: {
        en: "Erect sturdy plant with profuse tender side shoots",
        hi: "सीधा पौधा, कोमल पार्श्व शाखाएं",
      },
      diseaseResistance: {
        en: "Tolerant to heat and drought",
        hi: "गर्मी एवं सूखा सहनशील",
      },
      specialFeatures: {
        en: [
          "Striking visual color commands premium retail bundle prices",
          "High anthocyanin and iron content",
          "Fast-regenerating multi-cut performance",
        ],
        hi: [
          "आकर्षक लाल रंग से मंडी में सबसे ऊंचा भाव",
          "एंटीऑक्सीडेंट और आयरन से भरपूर",
          "कटाई के बाद तेजी से दोबारा तैयार होने वाली",
        ],
      },
    },
    packagingSizes: ["100g", "250g", "500g", "1kg"],
    image: "/images/products/leafy-red.png",
  },

  // 37. SUPER NUTRI (Hybrid Bajra / Pearl Millet)
  {
    id: "super-nutri",
    slug: "super-nutri",
    name: {
      en: "Super Nutri",
      hi: "सुपर न्यूट्री (हाइब्रिड बाजरा)",
    },
    scientificName: "Pennisetum glaucum",
    categorySlug: "field-crops",
    categoryName: {
      en: "Field Crops / Bajra",
      hi: "फील्ड क्रॉप्स / बाजरा",
    },
    cropType: "Hybrid F1 Field Crop",
    varietyCode: "DBTR Super Nutri",
    tagline: {
      en: "High-tonnage dual-purpose hybrid pearl millet with bold grains, stay-green fodder, and drought tolerance.",
      hi: "मोटा दाना, हरा-भरा चारा, सूखा सहनशील और बंपर पैदावार वाला हाइब्रिड बाजरा।",
    },
    description: {
      en: "Super Nutri is DBTR's high-yielding hybrid pearl millet (Bajra). It features tall, sturdy stalks resistant to lodging, high productive tillering (4–6 tillers), long compact semi-cylindrical earheads, and bold greyish-yellow grains. The 'stay-green' trait keeps stover succulent and palatable for dairy cattle even after grain maturity.",
      hi: "सुपर न्यूट्री डीबीटीआर का एक बंपर पैदावार देने वाला हाइब्रिड बाजरा है। इसके पौधे मजबूत, गिरने के प्रति प्रतिरोधी, 4 से 6 फुटाव वाले और लंबे ठोस सिट्टे वाले होते हैं। इसके दाने मोटे और चमकदार होते हैं। दाना पकने के बाद भी इसके तने हरे रहते हैं, जिससे पशुओं के लिए पौष्टिक हरा चारा मिलता है।",
    },
    specs: {
      sowingSeason: {
        en: "Kharif (June–July) & Summer (Feb–March in irrigated belts)",
        hi: "खरीफ (जून-जुलाई) एवं जायद (फरवरी-मार्च)",
      },
      maturityDays: "80–85 Days",
      fruitLengthOrWeight: "Earhead Length: 28–32 cm, Bold Grains",
      fruitColor: {
        en: "Greyish-Yellow Bold Grains",
        hi: "चमकदार स्लेटी-पीला मोटा दाना",
      },
      fruitShape: {
        en: "Compact cylindrical semi-bristled earhead",
        hi: "ठोस, लंबा, बेलनाकार सिट्टा",
      },
      plantHabit: {
        en: "Tall (200–220 cm), thick sturdy stem with high tillering (4–6 productive tillers)",
        hi: "लंबा (200-220 सेमी), मोटा तना, 4-6 उत्पादक फुटाव",
      },
      diseaseResistance: {
        en: "High resistance to Downy Mildew (Green Ear Disease) and Smut",
        hi: "डाउनी मिल्ड्यू (जोगिया रोग) एवं कंडुआ रोग के प्रति उच्च प्रतिरोधी",
      },
      specialFeatures: {
        en: [
          "Dual-purpose: record grain tonnage plus high nutritive stay-green dry fodder",
          "Thick non-lodging stalk withstands high monsoon winds",
          "Exceptional drought resilience in rainfed zones",
        ],
        hi: [
          "दोहरा लाभ: बंपर अनाज पैदावार के साथ-साथ पशुओं के लिए पौष्टिक हरा चारा",
          "मजबूत तना जो तेज हवा और बारिश में गिरता नहीं",
          "कम पानी और सूखे में भी शानदार पैदावार",
        ],
      },
    },
    packagingSizes: ["1.5kg", "3kg", "5kg"],
    image: "/images/products/super-nutri.png",
    packRender: "/images/packaging/super-nutri-pack.png",
    isFeatured: true,
  },
];
