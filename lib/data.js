export const skills = [
  { name: "Python", category: "Backend/AI", logo: "🐍"},
  { name: "FastAPI", category: "Backend", logo: "⚡"},
  { name: "NextJS", category: "Frontend", logo: "▲"},
  { name: "MongoDB", category: "Database", logo: "🍃"},
  { name: "React", category: "Frontend", logo: "⚛️"},
  { name: "Javascript", category: "Language", logo: "🟨"},
  { name: "Django", category: "Backend", logo: "🎸"},
  { name: "PostgreSQL", category: "Database", logo: "🐘"},
  { name: "Pocketbase", category: "Backend", logo: "📦"},
  { name: "MySQL", category: "Database", logo: "🐬"},
];

export const projects = [
  {
    id: "01",
    title: "Finoplex",
    tagline: "Master Your Personal Economy",
    description: "A comprehensive fintech platform designed to restructure personal finance. Built for scale, security, and absolute precision. It features real-time expense tracking, investment portfolio analysis, and automated budget generation using AI algorithms.",
    tech: ["NextJS", "FastAPI", "MongoDB"],
    images: ["/finoplex.png", "/fp2.png", '/fp3.png', '/fp4.png'], 
    link: "https://finoplex.vercel.app",
    github: "https://github.com/chiragRane-Projects/fintech_frontend", 
    year: "2025",
    status: "Live",
    type: "Fintech Platform",
    features: [
      {
        title: "Real-time Expense Tracking",
        description: "Monitor your spending patterns with live updates and categorized transactions."
      },
      {
        title: "AI Budget Generation",
        description: "Automated budget creation based on your spending habits and financial goals."
      },
      {
        title: "Investment Portfolio Analysis",
        description: "Track and analyze your investment performance with detailed insights."
      },
      {
        title: "Secure Authentication",
        description: "Multi-layer security with encrypted data storage and secure API endpoints."
      }
    ],
    challenges: [
      {
        title: "Real-time Data Synchronization",
        problem: "Ensuring all financial data updates in real-time across multiple devices without conflicts.",
        solution: "Implemented WebSocket connections with MongoDB change streams for instant data synchronization."
      },
      {
        title: "Security & Compliance",
        problem: "Handling sensitive financial data while maintaining strict security standards.",
        solution: "Used JWT authentication, data encryption, and followed PCI DSS compliance guidelines."
      }
    ]
  },
  {
    id: "02",
    title: "Fitverse Gym",
    tagline: "Your Universe Of Fitness",
    description: "This is a landing page for a brand new gym opening soon in Mumbai. It offers a variety a of exercises and a cafeteria. The site includes a class scheduler, trainer profiles, and a membership portal integrated with a payment gateway. Since its a client work, source code cannot be shared.",
    tech: ["React", "Framer Motion", "Tailwind"],
    images: ["/fitverse.png", "/fv2.png"],
    link: "https://fitversegym.com",
    github: "https://github.com/chirag/fitverse",
    year: "2025",
    status: "Live",
    type: "Landing Page",
    features: [
      {
        title: "Class Scheduler",
        description: "Interactive booking system for fitness classes with real-time availability."
      },
      {
        title: "Trainer Profiles",
        description: "Detailed profiles of certified trainers with specializations and schedules."
      },
      {
        title: "Membership Portal",
        description: "Complete membership management with payment gateway integration."
      },
      {
        title: "Responsive Design",
        description: "Fully responsive design optimized for all devices and screen sizes."
      }
    ],
    challenges: [
      {
        title: "Performance Optimization",
        problem: "Heavy animations and images were causing slow load times on mobile devices.",
        solution: "Implemented lazy loading, optimized images with Next.js Image component, and used Framer Motion's performance optimizations."
      },
      {
        title: "Cross-browser Compatibility",
        problem: "Ensuring consistent animations and layouts across different browsers.",
        solution: "Used CSS autoprefixer and tested extensively across browsers, implementing fallbacks for older versions."
      }
    ]
  },
  {
    id: "03",
    title: "Ikon Digital Marketing Agency",
    tagline: "Iconic Strategies for Iconic Brands",
    description: "Ikon is a digital marketing agency based in Malad, Mumbai. I have developed its landing page using React, NextJS, Tailwind, Framer-Motion and ShadcnUI. The landing page is minimal and clean helping it to give a professional look. It focuses on high-conversion design principles and fast load times. Since its a client work, source code cannot be shared.",
    tech: ["React", "Framer Motion", "Tailwind"],
    images: ["/ikon.png", "/ikon2.png"],
    link: "https://ikondigitalmarketingagency.co.in/",
    github: "#",
    year: "2026",
    status: "Live",
    type: "Agency Website",
    features: [
      {
        title: "High-Conversion Design",
        description: "Strategic placement of CTAs and optimized user flow for maximum conversions."
      },
      {
        title: "Fast Load Times",
        description: "Optimized performance with lazy loading and efficient code splitting."
      },
      {
        title: "Professional Aesthetics",
        description: "Clean, minimal design that reflects the agency's professional brand identity."
      },
      {
        title: "Mobile-First Approach",
        description: "Designed with mobile users in mind, ensuring perfect experience on all devices."
      }
    ],
    challenges: [
      {
        title: "Brand Identity Translation",
        problem: "Converting the agency's vision into a digital experience that resonates with their target audience.",
        solution: "Conducted extensive brand research and created multiple design iterations with client feedback loops."
      },
      {
        title: "SEO Optimization",
        problem: "Ensuring the site ranks well for digital marketing related keywords in Mumbai.",
        solution: "Implemented proper meta tags, structured data, and optimized content for local SEO."
      }
    ]
  },
  {
    id: "04",
    title: "Crossplayy Gaming Software",
    tagline: "Dombivli's best gaming arena",
    description: "Crossplayy software helps its owners manage their cafe sales and sessions. There are various features like Cash Drawer, Role Based Access, Session Segmentation, Profit and Loss Statements. This is a client work and hence the repository cannot be shared.",
    tech: ["NextJS", "Pocketbase", "Tailwind", "Shadcn"],
    images: ['/cp1.png', '/cp2.png', '/cp3.png'],
    link: "https://crossplayy.store/",
    github: "#",
    year: "2025",
    status: "Live",
    type: "Management Software",
    features: [
      {
        title: "Cash Drawer Management",
        description: "Complete cash flow tracking with opening/closing balance reconciliation."
      },
      {
        title: "Role-Based Access Control",
        description: "Different permission levels for managers, cashiers, and administrators."
      },
      {
        title: "Session Segmentation",
        description: "Track gaming sessions by time slots, games, and customer preferences."
      },
      {
        title: "P&L Statements",
        description: "Automated profit and loss calculations with detailed financial reports."
      }
    ],
    challenges: [
      {
        title: "Real-time Session Tracking",
        problem: "Managing multiple gaming stations simultaneously with accurate time tracking.",
        solution: "Implemented WebSocket connections for real-time updates and used Pocketbase's real-time subscriptions."
      },
      {
        title: "Offline Functionality",
        problem: "Ensuring the system works even when internet connectivity is poor.",
        solution: "Built offline-first architecture with local data caching and sync when connection is restored."
      }
    ]
  },
  {
    id: "05",
    title: "Smart Inventory",
    tagline: "Supply Chain Intelligence System",
    description: "Smart Inventory is a logistics related project where stocks and orders are being created and on basis of past deliveries some forecastings are done.",
    tech: ["NextJS", "NextJS API Routes", "FastAPI", "Tailwind", "Shadcn"],
    images: ['/scis1.png'],
    link: "https://scis-zeta.vercel.app/",
    github: "https://github.com/chiragRane-Projects/scis.git",
    year: "2026",
    status: "In Development",
    type: "Logistics Software",
    features: [
      {
        title: "Inventory Management",
        description: "Manage your inventories as per their warehouses, get low stock alerts"
      },
      {
        title: "Role-Based Access Control",
        description: "Different permission levels for admins, analyst and delivery boys"
      },
      {
        title: "Forecasting",
        description: "On the basis of previous deliveries forecasting such as delivery time will be made."
      },
    ],
    challenges: [
      {
        title: "No challenges",
        problem: "As of now since the project has begun, I have had no challenges but surely would be having since its a big scale project."
      },
    ]
  },
];