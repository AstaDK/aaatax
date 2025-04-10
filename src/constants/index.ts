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
    href: '/#services',
    submenu: []
  },
  {
    label: 'About',
    href: '/#about',
    submenu: []
  },
  {
    label: 'Industry Expertise',
    href: '/#industry-expertise',
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
    href: '/resources',
    submenu: []
  },
  {
    label: 'Solutions',
    href: '/#solutions',
    submenu: []
  },
  {
    label: 'Pricing',
    href: '/#pricing',
    submenu: []
  },
  {
    label: 'Blog',
    href: '/blog',
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

export const SOLUTIONS = [
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

export const POSTS = [
  {
    id: '1',
    title: 'Understanding R&D Tax Credits',
    summary:
      'Learn how to maximize your R&D tax credits and reduce your tax liability. This comprehensive guide covers eligibility, documentation, and claiming process.',
    label: 'Tax Credit',
    author: 'John Smith',
    published: '9 Apr 2025',
    image: '/industry/p1.webp',
    content: [
      {
        id: 'section1',
        title: 'What is the R&D Tax Credit?',
        body: 'The Research and Development (R&D) tax credit is a federal tax incentive that rewards businesses for investing in innovation. It allows companies to claim a credit of up to 20% of qualified research expenses against their tax liability.'
      },
      {
        id: 'section2',
        title: 'Eligible Activities',
        body: 'To qualify for R&D tax credits, activities must meet the "four-part test" established by the IRS: technological in nature, eliminate uncertainty, process of experimentation, and technological process.'
      },
      {
        id: 'section3',
        title: 'Qualifying Expenses',
        body: 'Common qualifying expenses include wages for employees directly involved in R&D activities, supplies used in the R&D process, and contract research expenses. It also includes cloud computing costs and software development expenses.'
      },
      {
        id: 'section4',
        title: 'Documentation Requirements',
        body: 'Proper documentation is crucial for claiming R&D tax credits. This includes maintaining detailed records of R&D activities, time tracking, and documentation of the experimentation process.'
      },
      {
        id: 'section5',
        title: 'Claiming Process',
        body: 'To claim R&D tax credits, businesses must complete Form 6765 and attach it to their tax return. The IRS may request additional documentation during the review process.'
      }
    ]
  },
  {
    id: '2',
    title: 'Maximizing Your R&D Tax Credits',
    summary:
      'Discover strategies to optimize your R&D tax credits and maximize your tax savings. This guide covers advanced techniques and common pitfalls to avoid.',
    label: 'Optimization',
    author: 'Jane Doe',
    published: '9 Apr 2025',
    image: '/industry/p2.webp',
    content: [
      {
        id: 'section1',
        title: 'Strategic Planning',
        body: 'Proper planning is key to maximizing R&D tax credits. This includes identifying all eligible activities, tracking expenses accurately, and maintaining comprehensive documentation.'
      },
      {
        id: 'section2',
        title: 'Common Overlooked Expenses',
        body: 'Many businesses miss out on potential tax credits by overlooking eligible expenses such as cloud computing costs, software development tools, and certain administrative expenses.'
      },
      {
        id: 'section3',
        title: 'State Credits',
        body: "In addition to federal R&D tax credits, many states offer their own R&D tax incentives. It's important to consider both federal and state credits when planning your tax strategy."
      },
      {
        id: 'section4',
        title: 'Audit Preparation',
        body: 'Proper preparation for potential IRS audits is crucial. This includes maintaining detailed records, proper documentation, and understanding the documentation requirements.'
      }
    ]
  },
  {
    id: '3',
    title: 'R&D Tax Credits for Startups',
    summary:
      "Learn how startups can benefit from R&D tax credits, even if they haven't yet generated revenue. This guide covers special provisions for early-stage companies.",
    label: 'Startups',
    author: 'Robert Johnson',
    published: '9 Apr 2025',
    image: '/industry/p3.webp',
    content: [
      {
        id: 'section1',
        title: 'Special Provisions for Startups',
        body: "Startups can benefit from special provisions in the R&D tax credit program, including the ability to use credits against payroll taxes if they haven't yet generated revenue."
      },
      {
        id: 'section2',
        title: 'Eligibility for Startups',
        body: 'Startups are often eligible for R&D tax credits if they are engaged in developing new products, improving existing products, or developing new processes.'
      },
      {
        id: 'section3',
        title: 'Documentation for Startups',
        body: 'For startups, proper documentation is crucial. This includes maintaining records of development activities, time tracking, and documentation of the experimentation process.'
      },
      {
        id: 'section4',
        title: 'Common Mistakes to Avoid',
        body: 'Common mistakes startups make when claiming R&D tax credits include insufficient documentation, overlooking eligible expenses, and failing to properly track time.'
      }
    ]
  },
  {
    id: '4',
    title: 'R&D Tax Credits for Small Businesses',
    summary:
      'Small businesses can benefit significantly from R&D tax credits. Learn how to navigate the process and maximize your savings.',
    label: 'Small Business',
    author: 'Sarah Johnson',
    published: '9 Apr 2025',
    image: '/industry/p4.webp',
    content: [
      {
        id: 'section1',
        title: 'Small Business Eligibility',
        body: 'Small businesses with under 500 employees qualify for R&D tax credits. The process is streamlined to make it accessible for smaller companies.'
      },
      {
        id: 'section2',
        title: 'Common Expenses',
        body: 'For small businesses, common qualifying expenses include employee wages, software development costs, and contract research expenses.'
      },
      {
        id: 'section3',
        title: 'Documentation Tips',
        body: 'Maintaining proper documentation is crucial for small businesses. This includes time tracking, expense records, and project documentation.'
      },
      {
        id: 'section4',
        title: 'Claiming Process',
        body: 'Small businesses can claim R&D tax credits through their annual tax return. The process is simplified compared to larger corporations.'
      }
    ]
  },
  {
    id: '5',
    title: 'R&D Tax Credits for Manufacturing',
    summary:
      'Manufacturing companies have unique opportunities for R&D tax credits. Learn how to identify and claim eligible activities.',
    label: 'Manufacturing',
    author: 'Michael Brown',
    published: '9 Apr 2025',
    image: '/industry/p1.webp',
    content: [
      {
        id: 'section1',
        title: 'Manufacturing Eligibility',
        body: 'Manufacturing companies often qualify for R&D tax credits through process improvements, product development, and quality control innovations.'
      },
      {
        id: 'section2',
        title: 'Common Activities',
        body: 'Eligible activities include process optimization, product development, testing procedures, and quality control system improvements.'
      },
      {
        id: 'section3',
        title: 'Documentation Requirements',
        body: 'Manufacturing companies need to maintain detailed records of R&D activities, including time tracking, material costs, and testing documentation.'
      },
      {
        id: 'section4',
        title: 'Special Considerations',
        body: 'Manufacturing companies may need to consider additional factors such as international operations and supply chain impacts when claiming R&D tax credits.'
      }
    ]
  },
  {
    id: '6',
    title: 'R&D Tax Credits for Software Companies',
    summary:
      'Software development companies have significant opportunities for R&D tax credits. Learn how to identify and claim eligible activities.',
    label: 'Software',
    author: 'Emily Chen',
    published: '9 Apr 2025',
    image: '/industry/p2.webp',
    content: [
      {
        id: 'section1',
        title: 'Software Development Eligibility',
        body: 'Software companies can claim R&D tax credits for developing new software, improving existing products, and creating innovative solutions.'
      },
      {
        id: 'section2',
        title: 'Common Activities',
        body: 'Eligible activities include software development, quality assurance testing, user experience improvements, and system integration.'
      },
      {
        id: 'section3',
        title: 'Documentation Requirements',
        body: 'Software companies need to maintain detailed records of development activities, including time tracking, code changes, and testing documentation.'
      },
      {
        id: 'section4',
        title: 'Special Considerations',
        body: 'Software companies should consider factors such as cloud computing costs, open-source contributions, and international development teams when claiming R&D tax credits.'
      }
    ]
  }
];
