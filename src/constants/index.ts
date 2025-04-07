import {
  Banknote,
  BookOpen,
  Briefcase,
  ChartNoAxesCombined,
  Clock,
  Earth,
  Facebook,
  HandCoins,
  Instagram,
  MoveRight,
  Search,
  Shield,
  ShieldCheck,
  TrendingUp,
  Trophy,
  Twitter,
  Users
} from 'lucide-react';

export const LINKS = [
  {
    label: 'Services',
    href: '#services',
    submenu: []
  },
  {
    label: 'About Us',
    href: '#about',
    submenu: []
  },
  {
    label: 'Industry Expertise',
    href: '#industry-expertise',
    submenu: [
      { label: 'E-Commerce & Retail', href: '#' },
      { label: 'Entertainment', href: '#' },
      { label: 'Family Business', href: '#' },
      { label: 'Field Service & Engineering', href: '#' },
      { label: 'Healthcare', href: '#' },
      { label: 'Law', href: '#' },
      { label: 'Marketing and Advertising Agencies', href: '#' },
      { label: 'Private Equity', href: '#' },
      { label: 'Real Estate', href: '#' },
      { label: 'Staffing', href: '#' },
      { label: 'Technology', href: '#' }
    ]
  },
  {
    label: 'Resources',
    href: '#resources',
    submenu: []
  },
  {
    label: 'Solutions',
    href: '#solutions',
    submenu: []
  },
  {
    label: 'Pricing',
    href: '#pricing',
    submenu: []
  }
];

export const BEAMS = [
  { initialX: 600, translateX: 600, duration: 3, repeatDelay: 3, delay: 4 },
  {
    initialX: 100,
    translateX: 100,
    duration: 7,
    repeatDelay: 7,
    className: 'h-6'
  },
  { initialX: 400, translateX: 400, duration: 5, repeatDelay: 14, delay: 4 },
  {
    initialX: 800,
    translateX: 800,
    duration: 11,
    repeatDelay: 2,
    className: 'h-20'
  },
  {
    initialX: 1000,
    translateX: 1000,
    duration: 4,
    repeatDelay: 2,
    className: 'h-12'
  },
  {
    initialX: 1200,
    translateX: 1200,
    duration: 6,
    repeatDelay: 4,
    delay: 2,
    className: 'h-6'
  },
  { initialX: 1400, translateX: 1400, duration: 5, repeatDelay: 3, delay: 1 },
  { initialX: 1500, translateX: 1400, duration: 7, repeatDelay: 2, delay: 3 },
  {
    initialX: 1700,
    translateX: 1700,
    duration: 4,
    repeatDelay: 2,
    className: 'h-12'
  },
  {
    initialX: 1800,
    translateX: 1800,
    duration: 5,
    repeatDelay: 2,
    className: 'h-12'
  }
];

export const LOGOS = [
  { icon: '/logo/majlis-mocha.png' },
  { icon: '/logo/awad-of-properties.png' },
  { icon: '/logo/sur-consulting.png' },
  { icon: '/logo/hasana.jpg' }
];

export const SERVICES = [
  {
    icon: Briefcase,
    title: 'Accounting & Payroll',
    description: 'Accurate financial records and seamless payroll processing.'
  },
  {
    icon: Shield,
    title: 'Audit Defense',
    description: 'Expert representation against government audits, reducing tax and penalty liabilities.'
  },
  {
    icon: Banknote,
    title: 'Tax Services',
    description: 'Comprehensive tax filing and compliance support for local and federal regulations.'
  },
  {
    icon: ChartNoAxesCombined,
    title: 'Planning & Strategy',
    description: 'Strategic financial planning to minimize tax liabilities and support business growth.'
  }
];

export const ACHIEVEMENTS = [
  {
    icon: Trophy,
    number: 10,
    symbol: 'Years',
    title: 'Proven Track Record'
  },
  {
    icon: Earth,
    number: 98,
    symbol: '%',
    title: 'Nationwide clients'
  },
  {
    icon: HandCoins,
    number: 50,
    symbol: 'M+',
    title: 'Recovered in tax credits'
  },
  {
    icon: Search,
    number: 85,
    symbol: '%',
    title: 'Reduction in Tax Audits & Penalties'
  }
];

export const ABOUT_US_CONTENT = [
  'We take pride in helping entrepreneurs and small businesses navigate financial complexities with confidence. Our firm is committed to providing personalized financial solutions tailored to your needs. From bookkeeping and payroll to audit defense and tax planning, we empower our clients with strategies that optimize financial performance, ensure compliance, and minimize tax liability.',
  'With a track record of serving over 300 clients nationwide and securing over $5 million in tax credits and strategies, we are dedicated to driving financial success for businesses and individuals alike.',
  'Let us handle the numbers so you can focus on what matters most, growing your business with confidence.'
];

export const REASONS = [
  {
    title: 'Efficiency',
    description: 'Save time and resources by allowing our professionals to serve your needs.',
    icon: Clock
  },
  {
    title: 'Confidence',
    description: 'Gain confidence in your financial reports knowing they are reviewed and prepared by professionals.',
    icon: ShieldCheck
  },
  {
    title: 'Trust',
    description: 'Access to a trusted source to consult with on your organization.',
    icon: Users
  },
  {
    title: 'Growth',
    description: 'Reach new potential knowing you have the full support of our professionals.',
    icon: TrendingUp
  },
  {
    title: 'Compliance',
    description: 'Ensure compliance with local and federal agencies to avoid penalties.',
    icon: ShieldCheck
  },
  {
    title: 'Knowledge',
    description: 'Boost your understanding of accounting and finance to assist in your business decisions.',
    icon: BookOpen
  }
];

export const PRICING_PLANS = [
  {
    id: 1,
    title: 'Essential',
    price: '$750/month',
    features: [
      {
        id: 1,
        title: 'Perfect for Simple Financial Structures'
      },
      {
        id: 2,
        title: 'Industry-Best Software'
      },
      {
        id: 3,
        title: 'Financial Reports Anytime'
      }
    ],
    buttonText: 'Get started',
    buttonIcon: MoveRight
  },
  {
    id: 2,
    title: 'Growth',
    price: '$1250/month',
    features: [
      {
        title: 'For Established Companies',
        id: 1
      },
      {
        title: 'Accrual Accounting',
        id: 2
      },
      {
        title: 'Scalable with Quickbooks or NetSuite',
        id: 3
      }
    ],
    buttonText: 'Get started',
    buttonIcon: MoveRight,
    isHighlighted: true
  },
  {
    id: 3,
    title: 'Executive',
    price: 'Custom',
    features: [
      {
        title: 'For Established Companies',
        id: 1
      },
      {
        title: 'Accrual Accounting',
        id: 2
      },
      {
        title: 'Scalable with Quickbooks or NetSuite',
        id: 3
      }
    ],
    buttonText: 'Get started',
    buttonIcon: MoveRight
  }
];

export const SOCIALS = [
  { id: 1, href: '#', icon: Instagram },
  { id: 2, href: '#', icon: Facebook },
  { id: 3, href: '#', icon: Twitter }
];
