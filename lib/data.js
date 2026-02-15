export const skills = [
  { name: "Python", category: "Backend/AI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "FastAPI", category: "Backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
  { name: "NextJS", category: "Frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" },
  { name: "MongoDB", category: "Database", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "React", category: "Frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Javascript", category: "Language", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Django", category: "Backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
  { name: "PostgreSQL", category: "Database", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Pocketbase", category: "Backend", logo: "https://raw.githubusercontent.com/pocketbase/pocketbase/master/ui/public/images/logo.svg" },
  { name: "MySQL", category: "Database", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "NodeJS", category: "Runtime", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "ExpressJS", category: "Backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "Postman", category: "Testing", logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
  { name: "Linux", category: "OS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  { name: "AWS", category: "Cloud", logo: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg" },
  { name: "Jupyter Notebook", category: "Tools", logo: "https://upload.wikimedia.org/wikipedia/commons/3/38/Jupyter_logo.svg" },
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
    id: "04",
    title: "Product display mobile app",
    tagline: "Display various products using Fakestore open api.",
    description: "My first React-Native CLI project. I learnt file routing, api calls, state management in React Native through this project.",
    tech: ["React Native CLI", "FakeStore API"],
    images: ['/app1.jpeg', '/app2.jpeg', '/app3.jpeg'],
    link: "https://drive.google.com/file/d/1ag_uxdLuy4ZugVkqHI1_qhRT4lE2GIF3/view?usp=drive_link",
    github: "https://github.com/chiragRane-Projects/ecommerce_display.git",
    year: "2026",
    status: "Live",
    type: "Ecommerce",
    features: [
      {
        title: "Product display and filtering",
        description: "Scrolling view of products and filtering them on basis of their category."
      },
      {
        title: "Add to cart/favorite functionalities",
        description: "Products you like can be added to cart/favorite"
      }
    ],
    challenges: [
      {
        title: "Project setup",
        problem: "I was unable to get the exact command of how to initiate the product, once I got it took me few hours to understand project structure and existing files. It kinda gave a feel of flutter",
        solution: "The only solution for this was going through different youtube tutorial videos. Due to expo making things easier for app development in javascript environment, the usage of CLI is less."
      },
      {
        title: "Running the localhost version and getting a mobile preview",
        problem: "Once understanding the structure it was time to code, but while developing UI it is important to see what you are developing, on expo just run npm start and boom the app opens, but in CLI the case is different, you have to first connect your device to your system, build the app and then run. You can use device emulator using android studio, but you should have high spec system to do so.",
        solution: "The only solution for this was going through different youtube tutorial videos. Due to expo making things easier for app development in javascript environment, the usage of CLI is less."
      }
    ]
  },
  {
    id: "05",
    title: "Smart Logistics",
    tagline: "Supply Chain Intelligence System",
    description: "Smart Logistics is a logistics related project where stocks and orders are being created and on basis of past deliveries some forecastings are done.",
    tech: ["NextJS", "FastAPI", "Tailwind", "PostgreSQL", "SqlAlchemy", "ShadcnUI", "AWS", "AmazonQ"],
    images: ['/log1.png', '/log2.png', '/log3.png', '/log4.png'],
    link: "https://prologistics.vercel.app/",
    github: "https://github.com/chiragRane-Projects/inv_frontend.git",
    year: "2026",
    status: "Completed",
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
      {
        title: "Reorder Recommendation",
        description: "Get recommendations on when to reorder stock based on demand forecasting."
      }
    ],
    challenges: [
      {
        title: "Building models",
        problem: "Building models is not the ultimate goal, you need to train them and I think to get that accuracy was kind of a difficult task.",
        solution: "Models accuracy will increase when you add more and more of data. You need to create a python script to feed in large quantity of data, once done your ML model shall work well. I wouldnt say that it will give you 100% correct, but it'll be 80% accurate."
      },
      {
        title: "Deployment",
        problem: "This was the first time I deployed a python backend on cloud and literally it tested my patience but at the end everything went well.",
        solution: "You have to go through youtube videos, documentation, AI especially when you are a debutant for deploying backend services."
      },
      {
        title: "UI development",
        problem: "You complete the backend test it on Postman and you feel okay cool done, but when you come for the frontend part especially UI, thats something where I feel my hand is tight and I have to improve more. Fortunately for this project AI helped me.",
        solution: "I used AmazonQ for building UI, writing functionality like context etc I did myself but for interface I will be honest I used AI. But realizing this and seeing my dependancy on AI I have taken an oath to make my hand stronger for frontend and code by myself even if it requires me to understand/learn concepts from scratch."
      }
    ]
  },
  {
    id: "06",
    title: "CreditWise",
    tagline: "AI Powered Credit Score Analysis",
    description: "Creditwise is a platform where users get their credit score on basis of their expenditures and incomes.",
    tech: ["NextJS", "FastAPI", "Tailwind", "Shadcn"],
    images: ['/creditwise.png'],
    link: "https://creditwise-rouge.vercel.app/",
    github: "https://github.com/chiragRane-Projects/creditwise-frontend.git",
    year: "2026",
    status: "Live",
    type: "Fintech Software",
    features: [
      {
        title: "Credit Score Analysis",
        description: "On uploading a csv file of all statements, user gets an overview of savings and a creditscore"
      },
    ],
    challenges: [
      {
        title: "Fetching the creditscore",
        problem: "Everything was going well untill data extraction, but once I stepped into training models for getting accurate credit score that was a deal. But no issues, it took some time but in the end it got solved."
      },
    ]
  },
  {
    id: "07",
    title: "Stockflow",
    description: "Stockflow is an inventory management platform built for small sized grocery shops which can help the owners to manage sales, stocks efficiently.",
    tech: ["NextJS", "Javascript", "Mongoose", "Tailwind CSS", "ShadcnUI"],
    images: ['/stockflow1.png'],
    link: "https://stockflow-au.vercel.app/",
    github: "https://github.com/chiragRane-Projects/Stockflow.git",
    year: "2026",
    status: "Live",
    type: "Inventory Management Software",
    features: [
      {
        title: "RBAC",
        description: "Using jwt this system consists of secured role based auth.",
      },
      {
        title: "Inventory",
        description: "Basic CRUD operations with add ons of stock reorder reminder."
      },
      {
        title: "Orders",
        description: "Sales CRUD which helps to generate some analytics regarding business."
      },
      {
        title: "Cash Drawer",
        description: "Calculated closing cash on the basis of cash expenses throughout the day."
      },
      {
        title: "Reports",
        description: "Four types of reports get generated viz Sales report, Expenses report, Profit-Loss report, Stock report. Reports are generated using recharts."
      }
    ]
  },
  //   {
  //   id: "08",
  //   title: "OfficeWork",
  //   description: "Stockflow is an inventory management platform built for small sized grocery shops which can help the owners to manage sales, stocks efficiently.",
  //   tech: ["NextJS", "Javascript", "Mongoose", "Tailwind CSS", "ShadcnUI"],
  //   images: ['/stockflow1.png'],
  //   link: "https://stockflow-au.vercel.app/",
  //   github: "https://github.com/chiragRane-Projects/Stockflow.git",
  //   year: "2026",
  //   status: "Live",
  //   type: "Inventory Management Software",
  //   features: [
  //     {
  //       title: "RBAC",
  //       description: "Using jwt this system consists of secured role based auth.",
  //     },
  //     {
  //       title: "Inventory",
  //       description: "Basic CRUD operations with add ons of stock reorder reminder."
  //     },
  //     {
  //       title: "Orders",
  //       description: "Sales CRUD which helps to generate some analytics regarding business."
  //     },
  //     {
  //       title: "Cash Drawer",
  //       description: "Calculated closing cash on the basis of cash expenses throughout the day."
  //     },
  //     {
  //       title: "Reports",
  //       description: "Four types of reports get generated viz Sales report, Expenses report, Profit-Loss report, Stock report. Reports are generated using recharts."
  //     }
  //   ]
  // }
];