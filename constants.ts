import { GraduationCap, BookOpen, Users, Trophy } from 'lucide-react';

export const SCHOOL_INFO = {
  name: "GPS Academy",
  hindiName: "जी. पी. एस. अकादमी",
  // Using the thumbnail endpoint is often more reliable for embedding than the export=view endpoint
  logo: "https://drive.google.com/thumbnail?id=19SQRMkk1l-XODKllhFrI6g_4yxBjbmT4&sz=w1000",
  motto: "Tamaso Ma Jyotirgamaya",
  mottoTranslation: "Lead me from darkness to light",
  email: "gpsacademy25@gmail.com",
  phone1: "+91 85420 29379",
  phone2: "+91 98389 27626",
  phone3: "+91 92357 04965",
  address: "Kotwa Chauraha Near Prince Palace, Kaisa Road, Deoria - 274405 (U.P)",
  established: "2010" // Assumed for design purposes
};

// ==========================================
// DOCUMENT LINKS (PDFs)
// ==========================================
// 1. Upload your PDF to Google Drive
// 2. Share as "Anyone with link"
// 3. Paste the link below.
export const DOCUMENTS = {
  brochure: "", // e.g. "https://drive.google.com/file/d/YOUR_ID/view?usp=sharing"
  feeStructure: "", // e.g. "https://drive.google.com/file/d/YOUR_ID/view?usp=sharing"
};

// ==========================================
// DAILY NOTICE BOARD UPDATE CONFIGURATION
// ==========================================
// To update notices without changing code:
// 1. Create a Google Sheet with headers: Date, Title, IsNew
// 2. Go to File -> Share -> Publish to web
// 3. Select "Sheet1" (or your sheet name) and "Comma-separated values (.csv)"
// 4. Copy the link and paste it below inside the quotes.
// Example: "https://docs.google.com/spreadsheets/d/e/2PACX-1vT.../pub?output=csv"
export const NOTICE_SHEET_URL: string = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSacEAZlnT753R4uAtRejbNFSgHweLkgeAmZQIjOdJ81b_XawR2VeEV3Pw0fYGZ_UeEsW7o7xj3PiN8/pub?gid=0&single=true&output=csv"; 

// Centralized Image Manager
// To replace images, upload to Google Drive, make public, and use the ID link format:
// https://drive.google.com/uc?export=view&id=YOUR_FILE_ID
export const IMAGES = {
  // Main Hero Banner
  heroBanner: "https://drive.google.com/thumbnail?id=10J2IeGD98B_vtpOviizCdwcMqZoFq15M&sz=w1920",
  
  // Home Page Introduction Images
  homeIntro1: "https://drive.google.com/thumbnail?id=1VoILINzXbkpkOOFxEnnm745UuVqzeRFV&sz=w1000",
  homeIntro2: "https://drive.google.com/thumbnail?id=1nkDz4IErWRavQg3bppejzPZ74Z1zc4wt&sz=w1000",
  
  // Principal Image for About Page
  principal: "https://drive.google.com/thumbnail?id=1rvmmMbAK7sVreZLQfc_hwrgblzXP79O_&sz=w1000",
  
  // Gallery Strip Images
  gallery: [
    "https://drive.google.com/thumbnail?id=11OuM39Qy1Dxx9KPmAYezIgp4Up4Ps92D&sz=w800",
    "https://drive.google.com/thumbnail?id=16s8Pv-NyabnH2Y3Kk44aXm8aEOh50Ec_&sz=w800",
    "https://drive.google.com/thumbnail?id=16uQ2ikJBGzFMh5Lx3z7J9Ev8eY2J2Uxu&sz=w800",
    "https://drive.google.com/thumbnail?id=1783gdFBb-G36IIjrQQmA6oXSnxBzhHym&sz=w800",
    "https://drive.google.com/thumbnail?id=1CJydpg9vLL8Zb7ByCXgOayA8ffAjeZlv&sz=w800",
    "https://drive.google.com/thumbnail?id=1EUuBp8jhrMteWGp5xWexG90iAvi9BYe1&sz=w800",
    "https://drive.google.com/thumbnail?id=1IKoJBBU7TxILwTj7BoUh8NnBVV4wPV10&sz=w800",
    "https://drive.google.com/thumbnail?id=1LeVSgy6-fB0_Ei_X9TS-IP9oGXR39CwQ&sz=w800",
    "https://drive.google.com/thumbnail?id=1OS8BAMPo8RU28yOXHIT_B06vehlR7kUg&sz=w800",
    "https://drive.google.com/thumbnail?id=1PmNSt2mZ01zmJOsLokrimanvl7eYu9iV&sz=w800",
    "https://drive.google.com/thumbnail?id=1Uks8PRHkWpzTXgW_m7Dh51_5tc6MAQi3&sz=w800",
    "https://drive.google.com/thumbnail?id=1VI6zXTW0y_aC7-LK67NeAxrav11U60VH&sz=w800",
    "https://drive.google.com/thumbnail?id=1VoILINzXbkpkOOFxEnnm745UuVqzeRFV&sz=w800",
    "https://drive.google.com/thumbnail?id=1_MXIGnaZbKqSqfmN8SFf2HnwP50tQGV-&sz=w800",
    "https://drive.google.com/thumbnail?id=1dVqn9DKnQQuEQxg3rUu_se7gInV_k_U-&sz=w800",
    "https://drive.google.com/thumbnail?id=1dyevfk5NooFoTrWjB9PG0C7hbPa4mxai&sz=w800",
    "https://drive.google.com/thumbnail?id=1ityW1KOMhKYB804pt3MDlmDjKj0iVYni&sz=w800",
    "https://drive.google.com/thumbnail?id=1lQ7rX5KiMug08OqqAPU6QN4iBuOHrr0z&sz=w800",
    "https://drive.google.com/thumbnail?id=1nkDz4IErWRavQg3bppejzPZ74Z1zc4wt&sz=w800",
    "https://drive.google.com/thumbnail?id=1p2RUxJh29X_Lj4K_bbjLeNooRfbSI6Gl&sz=w800",
    "https://drive.google.com/thumbnail?id=1rCqx6HBgJ44443d-Lu2FJBbfpR5gFk89&sz=w800",
    "https://drive.google.com/thumbnail?id=1tSNAGZ_RPrEvmDHMP_LczUVjLKLUMnX4&sz=w800",
    "https://drive.google.com/thumbnail?id=1tgrOYaMzfk4Vx4IS5roAx0dBwvgZs-wu&sz=w800",
    "https://drive.google.com/thumbnail?id=1tmWjnjRQ8STsOAHg39wxA0e2VuhzR9jp&sz=w800",
    "https://drive.google.com/thumbnail?id=1ya1bRlF9XSMqXKSHEZiEfo8KLHS76WW7&sz=w800"
  ]
};

export const NAVIGATION_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Academics', path: '/academics' },
  { name: 'Admissions', path: '/admissions' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

export const FEATURES = [
  {
    title: "Holistic Education",
    description: "Balancing academic excellence with physical, emotional, and social development.",
    icon: GraduationCap,
  },
  {
    title: "Modern Facilities",
    description: "State-of-the-art computer labs, smart classrooms, and science laboratories.",
    icon: BookOpen,
  },
  {
    title: "Expert Faculty",
    description: "Dedicated mentors committed to nurturing every student's potential.",
    icon: Users,
  },
  {
    title: "Student Success",
    description: "A proven track record of academic achievement and extracurricular excellence.",
    icon: Trophy,
  },
];

export const NOTICES = [
  { id: 1, date: "Feb 15, 2025", title: "Admissions Open for 2026-27 Session", isNew: true },
  { id: 2, date: "Oct 10, 2023", title: "Science Exhibition Winners Announced", isNew: false },
  { id: 3, date: "Sep 28, 2023", title: "Parent-Teacher Meeting Scheduled", isNew: false },
];