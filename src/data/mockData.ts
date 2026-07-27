import type { ServiceItem, GalleryItem, FAQItem, Testimonial } from '../types';

export const PHONE_NUMBER_PRIMARY = "+919716479938";
export const PHONE_NUMBER_SECONDARY = "+917011548995";
export const WHATSAPP_NUMBER = "919716479938";
export const EMAIL_ADDRESS = "Batrasanjeev939@gmail.com";
export const OFFICE_ADDRESS = "H89A Dilshad Garden, Near Pummy Sweet, New Delhi - 110095";
export const OPENING_HOURS = "Mon To Sat: 10:00 AM to 10:00 PM | Sun: 12:00 PM to 7:00 PM";
export const PARTY_NAME = "Shri Sanjeev Batra & Party";
export const BASE_PRICE = "₹11,000/-";

// Duration tags removed as per user instruction
export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "mata-ki-chowki",
    title: "Bhagwati Jagran Chowki",
    hindiTitle: "भगवती जागरण चौकी",
    description: "Holy bhajan & aarti program with grand Bhawan decoration, professional singers, sound system, and Prasad distribution.",
    fullDetails: "Mata Ki Chowki is a sacred devotional program dedicated to Goddess Durga. Led by Shri Sanjeev Batra & Party, the event features soul-stirring bhents, divine bhawans, live dholak, organ, sound setup, and grand Chunri & Aarti ceremonies.",
    price: "Comprehensive Package",
    popular: true,
    image: "https://jagranchowki.in/wp-content/uploads/2024/02/bhagwati-jagran-500x500-1.webp",
    features: [
      "Special Female & Male Bhajan Singer",
      "Attractive Mata Ka Darbar & Bhawan",
      "High Quality JBL/RCF Sound Setup",
      "Live Dholak, Pad & Keyboard Orchestra",
      "Jyoti Prachand & Kanya Pujan Ceremony",
      "Pushp Varsha (Flower Shower) & Grand Aarti"
    ]
  },
  {
    id: "bhagwati-jagran",
    title: "Full Night Bhagwati Jagran",
    hindiTitle: "श्रीमद् भगवती जागरण",
    description: "Full night non-stop devotional vigil with divine bhents, live Jhankiyan (Ganesh, Shiv Parvati, Hanuman, Radha Krishna), and Tara Rani Katha.",
    fullDetails: "Full night spiritual event running from dusk to dawn. Includes Akhand Jyoti, continuous Mata Bhents by renowned artists, spectacular live costume Jhankis, and concluding with Tara Rani Katha and Kanya Pujan at dawn.",
    price: "Full Night Event",
    popular: true,
    image: "https://jagranchowki.in/wp-content/uploads/2024/07/new-phto.png",
    features: [
      "Full Night Renowned Singer Team",
      "5 to 7 Live Divine Jhankis",
      "Akhand Jyoti & Grand Temple Bhawan",
      "Professional Lighting & Fog Machine",
      "Tara Rani Ki Katha & Halwa Chana Prasad",
      "Complete Musical Band & Instruments"
    ]
  },
  {
    id: "sunderkand-paath",
    title: "Balaji Sunder Kand",
    hindiTitle: "बालाजी सुन्दरकाण्ड पाठ",
    description: "Melodious recital of Ramcharitmanas Sunderkand with musical Hanuman Chalisa, Bajrang Baan, and Hanuman Ji Aarti.",
    fullDetails: "Invoke the supreme blessings of Lord Hanuman with our traditional Sunderkand Paath. Conducted with pure devotion, harmonium, dholak, and rhythmic repetitive chanting that fills your home or venue with positive divine vibes.",
    price: "Spiritual Recital",
    image: "https://jagranchowki.in/wp-content/uploads/2024/02/process-aws.webp",
    features: [
      "Experienced Pandit & Vocal Artists",
      "Musical Sunderkand Recital",
      "Hanuman Chalisa & Bajrang Baan",
      "Special Chola & Bhog Setup",
      "Sound System & Microphones Included",
      "Divine Atmosphere & Negative Energy Cleansing"
    ]
  },
  {
    id: "sai-sandhya",
    title: "Sai Sandhya",
    hindiTitle: "साईं संध्या एवं भजन",
    description: "Soulful Sai Baba bhajan sandhya with Kakad Aarti, Palki Yatra setup, and divine atmosphere of Shirdi Dham.",
    fullDetails: "Experience the bliss of Sai Darbar with Shri Sanjeev Batra & Party. Includes melodious Sai bhajans, divine Palki decoration, live Kakad Aarti, and Dhoop Aarti.",
    price: "Complete Darbar Setup",
    image: "https://jagranchowki.in/wp-content/uploads/2024/02/channels4_profile.jpg",
    features: [
      "Specialist Sai Bhajan Singers",
      "Shirdi Sai Darbar & Palki Decor",
      "Live Dhoop Aarti & Chanting",
      "Sai Baba Vastra & Flower Garland Setup",
      "Complete Orchestra & Sound",
      "Distribution of Udi & Mahaprasad"
    ]
  },
  {
    id: "khatu-shyam",
    title: "Khatu Shyam Bhajan",
    hindiTitle: "खाटू श्याम भजन संध्या (फूलों की होली)",
    description: "Enchanting Khatu Shyam Kirtan with Phoolon Ki Holi, Itra Varsha, grand Shringar Darbar, and Chhappan Bhog.",
    fullDetails: "Celebrate Shyam Baba's divine glory with mesmerizing Khatu Shyam bhajans, organic rose petal Phoolon Ki Holi, fragrant Itra shower, and regal Shringar setup.",
    price: "Grand Kirtan Offer",
    popular: true,
    image: "https://jagranchowki.in/wp-content/uploads/2024/02/Shri-Khatu-shyamji-puja.jpg",
    features: [
      "Famous Shyam Bhajan Vocalists",
      "Exclusive Khatu Shyam Shringar Bhawan",
      "Phoolon Ki Holi & Organic Flower Shower",
      "Itra (Perfume) Spray & Fog Effect",
      "Chhappan Bhog Display Setup",
      "Akhand Jot & Morchhatra Vandan"
    ]
  },
  {
    id: "ladies-sangeet",
    title: "Orchestra & Ladies Sangeet",
    hindiTitle: "लेडीज संगीत एवं ढोल ऑर्केस्ट्रा",
    description: "Traditional marriage sangeet, wedding dholak groups, female anchors, traditional Punjabi & Rajasthani folk dance, and devotional opening.",
    fullDetails: "Make your wedding celebrations unforgettable with traditional ladies sangeet songs, professional female dholak players, energetic anchors, and devotional Ganesh Vandana start.",
    price: "Musical Ceremony",
    image: "https://jagranchowki.in/wp-content/uploads/2024/02/Ladies-Sangeet-Songs.jpg",
    features: [
      "Female Dholak & Vocal Performers",
      "Interactive Wedding Anchor & Choreography",
      "Ganesh Vandana & Mata Bhent Opening",
      "Traditional Dhol & Boliyan",
      "High-power DJ/Sound System",
      "Customized Playlist for Family"
    ]
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  // Real YouTube Performance Videos from jagranchowki.in/gallery/
  {
    id: "yt-1",
    title: "Chowki By Sanjeev Batra And Party",
    category: "video",
    type: "video",
    url: "https://www.youtube.com/embed/bJMSNncshgo",
    thumbnail: "https://img.youtube.com/vi/bJMSNncshgo/hqdefault.jpg",
    description: "Live Mata Ki Chowki devotional bhajan performance by Sanjeev Batra & Party."
  },
  {
    id: "yt-2",
    title: "Radha Krishna Jhanki Performance",
    category: "video",
    type: "video",
    url: "https://www.youtube.com/embed/-WRgFiPICU4",
    thumbnail: "https://img.youtube.com/vi/-WRgFiPICU4/hqdefault.jpg",
    description: "Spectacular live costume Radha Krishna Raas Jhanki."
  },
  {
    id: "yt-3",
    title: "Radha Ashtami Special Bhajan",
    category: "video",
    type: "video",
    url: "https://www.youtube.com/embed/YSi8sYTARIM",
    thumbnail: "https://img.youtube.com/vi/YSi8sYTARIM/hqdefault.jpg",
    description: "Special Radha Ashtami devotional kirtan program."
  },
  {
    id: "yt-4",
    title: "Mata Ka Jagran Highlights",
    category: "video",
    type: "video",
    url: "https://www.youtube.com/embed/0pFGBq4u9Hs",
    thumbnail: "https://img.youtube.com/vi/0pFGBq4u9Hs/hqdefault.jpg",
    description: "Full night Bhagwati Jagran stage & singer highlights."
  },
  {
    id: "yt-5",
    title: "Mata Ki Chowki Live Singing",
    category: "video",
    type: "video",
    url: "https://www.youtube.com/embed/Stjb36e3kOo",
    thumbnail: "https://img.youtube.com/vi/Stjb36e3kOo/hqdefault.jpg",
    description: "Soul-stirring bhents performed by Shri Sanjeev Batra."
  },
  {
    id: "yt-6",
    title: "Devotional Chowki & Aarti",
    category: "video",
    type: "video",
    url: "https://www.youtube.com/embed/NxeEnOuoUfI",
    thumbnail: "https://img.youtube.com/vi/NxeEnOuoUfI/hqdefault.jpg",
    description: "Grand Chunri & Aarti ceremony during Chowki."
  },

  // Real Uploaded Event Photos from jagranchowki.in/gallery/
  {
    id: "real-1",
    title: "Mata Ki Chowki Bhawan Stage",
    category: "chowki",
    type: "image",
    url: "https://jagranchowki.in/wp-content/uploads/2024/02/IMG-20190110-WA0002-773x1030.jpg",
    thumbnail: "https://jagranchowki.in/wp-content/uploads/2024/02/IMG-20190110-WA0002-495x400.jpg",
    description: "Real photo of Mata Ki Chowki Bhawan decor by Sanjeev Batra & Party."
  },
  {
    id: "real-2",
    title: "Mata Ka Darbar Lighting & Flowers",
    category: "chowki",
    type: "image",
    url: "https://jagranchowki.in/wp-content/uploads/2024/02/IMG-20210112-WA0003-1030x579.jpg",
    thumbnail: "https://jagranchowki.in/wp-content/uploads/2024/02/IMG-20210112-WA0003-495x400.jpg",
    description: "Illuminated floral Darbar for evening Chowki program."
  },
  {
    id: "real-3",
    title: "Bhagwati Jagran Stage Setup",
    category: "jagran",
    type: "image",
    url: "https://jagranchowki.in/wp-content/uploads/2024/02/IMG-20231125-WA0033-1030x773.jpg",
    thumbnail: "https://jagranchowki.in/wp-content/uploads/2024/02/IMG-20231125-WA0033-495x400.jpg",
    description: "Grand stage arrangement for full night Bhagwati Jagran."
  },
  {
    id: "real-4",
    title: "Akhand Jyoti Prachand",
    category: "jagran",
    type: "image",
    url: "https://jagranchowki.in/wp-content/uploads/2024/02/IMG-20231125-WA0035-1030x773.jpg",
    thumbnail: "https://jagranchowki.in/wp-content/uploads/2024/02/IMG-20231125-WA0035-495x400.jpg",
    description: "Sacred Akhand Jyoti lighting at the start of Jagran."
  },
  {
    id: "real-5",
    title: "Live Mahakali Jhanki Performance",
    category: "jhanki",
    type: "image",
    url: "https://jagranchowki.in/wp-content/uploads/2024/02/IMG-20231125-WA0045-686x1030.jpg",
    thumbnail: "https://jagranchowki.in/wp-content/uploads/2024/02/IMG-20231125-WA0045-495x400.jpg",
    description: "Real stage performance of Mahakali Jhanki."
  },
  {
    id: "real-6",
    title: "Radha Krishna Raas Jhanki",
    category: "jhanki",
    type: "image",
    url: "https://jagranchowki.in/wp-content/uploads/2024/02/IMG-20231223-WA0033-1030x775.jpg",
    thumbnail: "https://jagranchowki.in/wp-content/uploads/2024/02/IMG-20231223-WA0033-495x400.jpg",
    description: "Beautiful costume Jhanki of Shri Radha Krishna."
  },
  {
    id: "real-7",
    title: "Mata Ki Chowki Singer Team",
    category: "chowki",
    type: "image",
    url: "https://jagranchowki.in/wp-content/uploads/2024/02/IMG-20231225-WA0020-579x1030.jpg",
    thumbnail: "https://jagranchowki.in/wp-content/uploads/2024/02/IMG-20231225-WA0020-495x400.jpg",
    description: "Sanjeev Batra & lead singers performing live bhents."
  },
  {
    id: "real-8",
    title: "Khatu Shyam Phoolon Ki Holi",
    category: "khatu",
    type: "image",
    url: "https://jagranchowki.in/wp-content/uploads/2024/02/IMG-20240104-WA0009-1030x464.jpg",
    thumbnail: "https://jagranchowki.in/wp-content/uploads/2024/02/IMG-20240104-WA0009-495x400.jpg",
    description: "Organic flower petal shower during Shyam Baba Kirtan."
  },
  {
    id: "real-9",
    title: "Shirdi Sai Sandhya Darbar",
    category: "sai",
    type: "image",
    url: "https://jagranchowki.in/wp-content/uploads/2024/02/IMG-20240115-WA0052-1030x773.jpg",
    thumbnail: "https://jagranchowki.in/wp-content/uploads/2024/02/IMG-20240115-WA0052-495x400.jpg",
    description: "Shirdi Sai Baba Palki & Darbar flower arrangement."
  },
  {
    id: "real-10",
    title: "Sunderkand Paath Chanting Group",
    category: "sunderkand",
    type: "image",
    url: "https://jagranchowki.in/wp-content/uploads/2024/05/IMG20240419194534-1030x773.jpg",
    thumbnail: "https://jagranchowki.in/wp-content/uploads/2024/05/IMG20240419194534-495x400.jpg",
    description: "Musical Balaji Sunderkand recitation."
  },
  {
    id: "real-11",
    title: "Grand Chunri & Aarti Ceremony",
    category: "chowki",
    type: "image",
    url: "https://jagranchowki.in/wp-content/uploads/2024/05/IMG-20240525-WA0015-1030x773.jpg",
    thumbnail: "https://jagranchowki.in/wp-content/uploads/2024/05/IMG-20240525-WA0015-495x400.jpg",
    description: "Offering red Chunri and performing grand Aarti."
  },
  {
    id: "real-12",
    title: "Full Night Jagran Orchestra",
    category: "jagran",
    type: "image",
    url: "https://jagranchowki.in/wp-content/uploads/2024/05/IMG-20240525-WA0014-1030x579.jpg",
    thumbnail: "https://jagranchowki.in/wp-content/uploads/2024/05/IMG-20240525-WA0014-495x400.jpg",
    description: "Live Dholak, Pad, and keyboard orchestra setup."
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "t1",
    name: "Ramesh Sharma",
    location: "Rohini, New Delhi",
    eventType: "Mata Ki Chowki",
    rating: 5,
    date: "12 Oct 2024",
    comment: "Sanjeev Batra ji and his team created an enchanting divine atmosphere at our home. The Bhawan decoration was magnificent, and the singers sang with pure devotion. Everyone was spellbound!"
  },
  {
    id: "t2",
    name: "Sunita Agarwal",
    location: "Sector 62, Noida",
    eventType: "Bhagwati Jagran",
    rating: 5,
    date: "25 Nov 2024",
    comment: "We booked Sanjeev Batra & Party and were blown away by the quality of sound, singers, and Jhankis. Highly professional, punctual, and spiritual party in Delhi NCR!"
  },
  {
    id: "t3",
    name: "Vikram Malhotra",
    location: "DLF Phase 3, Gurgaon",
    eventType: "Khatu Shyam Bhajan Sandhya",
    rating: 5,
    date: "04 Jan 2025",
    comment: "The Phoolon ki Holi and Itra shower during Shyam Baba bhajan was unmatched. Sanjeev Batra & Party made our family function truly blessed."
  },
  {
    id: "t4",
    name: "Anil Gupta",
    location: "Indirapuram, Ghaziabad",
    eventType: "Balaji Sunderkand Paath",
    rating: 5,
    date: "18 Feb 2025",
    comment: "Punctual, energetic, and deeply devotional Sunderkand recitation. The musical tempo kept all 150 guests engaged till Hanuman Aarti."
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    category: "Pricing & Booking",
    question: "What is included in the Mata Ki Chowki package?",
    answer: "Our Mata Ki Chowki package includes professional male/female lead singers, full live musical team (Dholak, Keyboard/Pad), high-power sound system, attractive Mata Ka Bhawan stage decor, Jyoti Prachand setup, and Pushp Varsha flower shower."
  },
  {
    category: "Pricing & Booking",
    question: "How far in advance should we book Sanjeev Batra & Party?",
    answer: "We recommend booking at least 1 to 2 weeks in advance, especially during Navratri, wedding seasons, and weekend dates to guarantee availability."
  },
  {
    category: "Services & Setup",
    question: "Do you provide Jhanki performances during Jagran or Chowki?",
    answer: "Yes! We provide live costume Jhankis including Radha Krishna Raas, Shiv Parvati Tandav, Shri Ram Darbar, Lord Hanuman, Mahakali, and Krishna Sudama Leela with professional stage artists and special smoke/fog effects."
  },
  {
    category: "Coverage Area",
    question: "Which areas do you serve?",
    answer: "We cover Delhi NCR (Dilshad Garden, Rohini, South Delhi, Noida, Gurgaon, Ghaziabad, Faridabad) and travel all across North India."
  },
  {
    category: "Customization",
    question: "Can we customize the Bhawan flowers and sound system size?",
    answer: "Absolutely! Contact us directly on WhatsApp or Call (+91 97164 79938) to customize sound wattage, add extra singers, add fresh imported flower decor, or request additional Jhankis."
  }
];
