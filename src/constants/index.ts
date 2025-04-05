import { Banknote, Briefcase, ChartNoAxesCombined, Earth, HandCoins, Search, Shield, Trophy } from "lucide-react";

export const NAVIGATION = [
  {
    label: "Services",
    href: "/services",
    submenu: [],
  },
  {
    label: "About Us",
    href: "/about",
    submenu: [],
  },
  {
    label: "Industry Expertise",
    href: "/industry-expertise",
    submenu: [
      { label: "E-Commerce & Retail", href: "/industry-expertise/e-commerce-retail" },
      { label: "Entertainment", href: "/industry-expertise/entertainment" },
      { label: "Family Business", href: "/industry-expertise/family-business" },
      { label: "Field Service & Engineering", href: "/industry-expertise/field-service-engineering" },
      { label: "Healthcare", href: "/industry-expertise/healthcare" },
      { label: "Law", href: "/industry-expertise/law" },
      { label: "Marketing and Advertising Agencies", href: "/industry-expertise/marketing-advertising" },
      { label: "Private Equity", href: "/industry-expertise/private-equity" },
      { label: "Real Estate", href: "/industry-expertise/real-estate" },
      { label: "Staffing", href: "/industry-expertise/staffing" },
      { label: "Technology", href: "/industry-expertise/technology" },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    submenu: [],
  },
  {
    label: "Solutions",
    href: "/solutions",
    submenu: [],
  },
  {
    label: "Pricing",
    href: "/pricing",
    submenu: [],
  },
];

export const BEAMS = [
  { initialX: 600, translateX: 600, duration: 3, repeatDelay: 3, delay: 4 },
  {
    initialX: 100,
    translateX: 100,
    duration: 7,
    repeatDelay: 7,
    className: "h-6",
  },
  { initialX: 400, translateX: 400, duration: 5, repeatDelay: 14, delay: 4 },
  {
    initialX: 800,
    translateX: 800,
    duration: 11,
    repeatDelay: 2,
    className: "h-20",
  },
  {
    initialX: 1000,
    translateX: 1000,
    duration: 4,
    repeatDelay: 2,
    className: "h-12",
  },
  {
    initialX: 1200,
    translateX: 1200,
    duration: 6,
    repeatDelay: 4,
    delay: 2,
    className: "h-6",
  },
  { initialX: 1400, translateX: 1400, duration: 5, repeatDelay: 3, delay: 1 },
  { initialX: 1500, translateX: 1400, duration: 7, repeatDelay: 2, delay: 3 },
  {
    initialX: 1700,
    translateX: 1700,
    duration: 4,
    repeatDelay: 2,
    className: "h-12",
  },
  {
    initialX: 1800,
    translateX: 1800,
    duration: 5,
    repeatDelay: 2,
    className: "h-12",
  },
];

export const LOGOS = [
  { icon: "/logo/majlis-mocha.png" },
  { icon: "/logo/awad-of-properties.png" },
  { icon: "/logo/sur-consulting.png" },
  { icon: "/logo/hasana.jpg" },
];

export const SERVICES = [
  {
    icon: Briefcase,
    title: "Accounting & Payroll",
    description: "Accurate financial records and seamless payroll processing.",
  },
  {
    icon: Shield,
    title: "Audit Defense",
    description:
      "Expert representation against government audits, reducing tax and penalty liabilities.",
  },
  {
    icon: Banknote,
    title: "Tax Services",
    description:
      "Comprehensive tax filing and compliance support for local and federal regulations.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Planning & Strategy",
    description:
      "Strategic financial planning to minimize tax liabilities and support business growth.",
  },
];

export const ACHIEVEMENTS = [
  {
    icon: Trophy,
    number: 10,
    symbol: "Years",
    title: "Proven Track Record",
  },
  {
    icon: Earth,
    number: 98,
    symbol: "%",
    title: "Nationwide clients",
  },
  {
    icon: HandCoins,
    number: 50,
    symbol: "M+",
    title: "Recovered in tax credits",
  },
  {
    icon: Search,
    number: 85,
    symbol: "%",
    title: "Reduction in Tax Audits & Penalties",
  },
];