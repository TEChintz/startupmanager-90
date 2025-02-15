<lov-code>
import { useLocation, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, Package, ArrowRight, Check, Clock, Target, BarChart3, Shield, Users, PieChart, Rocket, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const serviceDetail = {
  "Meta Ads - Social Media Advertising": {
    hero: {
      title: "Meta Ads & Social Media Marketing",
      description: "Unlock the full potential of social media advertising with our comprehensive Meta Ads management service. We help businesses reach their target audience effectively across Facebook, Instagram, and other Meta platforms.",
      platforms: ["Facebook", "Instagram", "Messenger", "WhatsApp", "Audience Network"]
    },
    pricing: {
      starter: {
        price: "$499/month",
        features: [
          "Basic ad campaign setup",
          "2 ad creatives per month",
          "Monthly performance report",
          "Basic audience targeting",
          "Campaign optimization"
        ]
      },
      professional: {
        price: "$999/month",
        features: [
          "Advanced campaign setup",
          "5 ad creatives per month",
          "Bi-weekly performance reports",
          "Custom audience creation",
          "A/B testing",
          "Remarketing campaigns",
          "Competitor analysis"
        ]
      },
      enterprise: {
        price: "$1,999/month",
        features: [
          "Full-service campaign management",
          "Unlimited ad creatives",
          "Weekly performance reports",
          "Advanced audience targeting",
          "Comprehensive A/B testing",
          "Dynamic remarketing",
          "Cross-platform optimization",
          "Dedicated account manager",
          "Custom analytics dashboard"
        ]
      }
    },
    process: [
      {
        title: "Discovery & Strategy",
        description: "We begin by understanding your business goals, target audience, and current marketing efforts. Our team develops a customized strategy aligned with your objectives.",
        steps: [
          "Business goals analysis",
          "Target audience research",
          "Competitor analysis",
          "Channel selection",
          "Budget planning"
        ]
      },
      {
        title: "Campaign Setup",
        description: "Our experts set up your campaigns with precision, ensuring all technical aspects are optimized for maximum performance.",
        steps: [
          "Account structure optimization",
          "Tracking pixel implementation",
          "Custom audience creation",
          "Ad creative development",
          "Copy and messaging strategy"
        ]
      },
      {
        title: "Optimization & Management",
        description: "We continuously monitor and optimize your campaigns to ensure the best possible results.",
        steps: [
          "Daily performance monitoring",
          "Bid management",
          "Budget optimization",
          "A/B testing",
          "Creative optimization"
        ]
      },
      {
        title: "Reporting & Analysis",
        description: "Regular reporting keeps you informed of campaign performance and helps identify opportunities for improvement.",
        steps: [
          "Custom dashboard setup",
          "Regular performance reports",
          "ROI analysis",
          "Insights and recommendations",
          "Strategy refinement"
        ]
      }
    ],
    benefits: [
      {
        title: "Increased Brand Awareness",
        description: "Build a strong online presence and increase visibility among your target audience through strategic ad placement and content.",
        icon: Users
      },
      {
        title: "Better ROI",
        description: "Optimize your advertising spend with data-driven decisions and continuous campaign improvements.",
        icon: PieChart
      },
      {
        title: "Precise Targeting",
        description: "Reach exactly who you want with advanced audience targeting and segmentation capabilities.",
        icon: Target
      },
      {
        title: "Performance Tracking",
        description: "Get detailed insights into your campaign performance with comprehensive analytics and reporting.",
        icon: BarChart3
      },
      {
        title: "Quick Results",
        description: "See immediate impact with carefully crafted campaigns that start delivering results from day one.",
        icon: Rocket
      },
      {
        title: "Brand Protection",
        description: "Ensure your brand's reputation with careful ad placement and content monitoring.",
        icon: Shield
      }
    ],
    faq: [
      {
        question: "How long does it take to see results from Meta Ads?",
        answer: "While initial results can be seen within the first few days, we typically recommend a minimum 3-month commitment to fully optimize campaigns and achieve sustainable results. The timeline varies based on factors like budget, competition, and campaign objectives."
      },
      {
        question: "What budget do you recommend for Meta Ads?",
        answer: "We recommend starting with a minimum budget of $500/month for ad spend, plus management fees. This allows for proper testing and optimization while gathering meaningful data. The ideal budget depends on your industry, competition, and business goals."
      },
      {
        question: "How do you measure success?",
        answer: "We track various KPIs including ROAS (Return on Ad Spend), CPC (Cost per Click), CTR (Click-Through Rate), conversion rates, and engagement metrics. Success metrics are tailored to your specific business goals and campaign objectives."
      },
      {
        question: "Can you work with my existing ad accounts?",
        answer: "Yes, we can work with your existing Meta Ads accounts. We'll perform a comprehensive audit and optimize the account structure before launching new campaigns."
      }
    ],
    caseStudies: [
      {
        title: "E-commerce Success Story",
        metrics: [
          "300% increase in ROAS",
          "50% reduction in CPA",
          "2x increase in conversion rate"
        ],
        description: "Helped an e-commerce client achieve record sales through targeted Meta Ads campaigns and strategic audience segmentation."
      },
      {
        title: "Local Business Growth",
        metrics: [
          "5x increase in qualified leads",
          "40% decrease in cost per lead",
          "200% increase in store visits"
        ],
        description: "Assisted a local business in expanding their customer base through location-based targeting and custom audience creation."
      }
    ]
  },
  "Google Ads - Search & Display": {
    hero: {
      title: "Google Ads Search & Display Marketing",
      description: "Drive targeted traffic and increase conversions with our comprehensive Google Ads management service. We specialize in both Search and Display campaigns to maximize your reach and ROI.",
      platforms: ["Google Search", "Google Display Network", "Google Shopping", "YouTube Ads", "Gmail Ads"]
    },
    pricing: {
      starter: {
        price: "$599/month",
        features: [
          "Campaign setup and optimization",
          "Keyword research and targeting",
          "Ad copy creation (2 versions)",
          "Monthly performance reports",
          "Basic conversion tracking",
          "Regular bid adjustments"
        ]
      },
      professional: {
        price: "$1,199/month",
        features: [
          "Advanced campaign management",
          "Extensive keyword research",
          "Ad copy creation (4 versions)",
          "Bi-weekly performance reports",
          "Advanced conversion tracking",
          "Competitor analysis",
          "Landing page recommendations",
          "A/B testing",
          "Remarketing campaigns"
        ]
      },
      enterprise: {
        price: "$2,499/month",
        features: [
          "Full-service campaign management",
          "Comprehensive keyword strategy",
          "Unlimited ad variations",
          "Weekly performance reports",
          "Custom conversion tracking",
          "In-depth competitor analysis",
          "Landing page optimization",
          "Dynamic remarketing",
          "Script automation",
          "Dedicated account manager"
        ]
      }
    },
    process: [
      {
        title: "Account Analysis & Strategy",
        description: "We begin with a comprehensive analysis of your existing account or create a new strategy from scratch.",
        steps: [
          "Historical performance review",
          "Competitor landscape analysis",
          "Keyword opportunity identification",
          "Budget planning",
          "Campaign structure development"
        ]
      },
      {
        title: "Campaign Development",
        description: "Our team builds highly-targeted campaigns designed to reach your ideal customers.",
        steps: [
          "Keyword research and selection",
          "Ad group structuring",
          "Ad copy creation",
          "Extension setup",
          "Landing page alignment"
        ]
      },
      {
        title: "Performance Optimization",
        description: "Continuous optimization to improve campaign performance and ROI.",
        steps: [
          "Bid management",
          "Quality score improvement",
          "Search term analysis",
          "Negative keyword refinement",
          "Ad schedule optimization"
        ]
      },
      {
        title: "Tracking & Reporting",
        description: "Comprehensive tracking and reporting to measure success and identify opportunities.",
        steps: [
          "Conversion tracking setup",
          "Custom report creation",
          "Performance analysis",
          "ROI calculation",
          "Strategy adjustments"
        ]
      }
    ],
    benefits: [
      {
        title: "Immediate Results",
        description: "Start generating leads and sales as soon as your campaigns go live with instant visibility on Google.",
        icon: Rocket
      },
      {
        title: "Precise Targeting",
        description: "Reach customers actively searching for your products or services with intent-based targeting.",
        icon: Target
      },
      {
        title: "Measurable ROI",
        description: "Track every click, conversion, and dollar spent with comprehensive analytics and reporting.",
        icon: PieChart
      },
      {
        title: "Market Insights",
        description: "Gain valuable insights about your market, competitors, and customer behavior.",
        icon: BarChart3
      },
      {
        title: "Brand Protection",
        description: "Maintain brand safety with carefully monitored placements and negative keyword management.",
        icon: Shield
      },
      {
        title: "Scalable Growth",
        description: "Easily scale your campaigns as your business grows and new opportunities arise.",
        icon: Users
      }
    ],
    faq: [
      {
        question: "How long does it take to see results from Google Ads?",
        answer: "Results can be seen immediately after campaigns go live, but optimization typically takes 2-3 months to achieve optimal performance. Initial results vary based on factors like competition, budget, and industry."
      },
      {
        question: "What budget should I allocate for Google Ads?",
        answer: "We recommend a minimum ad spend of $1,000/month for search campaigns and $1,500/month for combined search and display campaigns. The ideal budget depends on your industry, competition, and business goals."
      },
      {
        question: "How do you track campaign success?",
        answer: "We track multiple metrics including clicks, impressions, CTR, conversion rate, cost per conversion, and ROAS. We set up comprehensive conversion tracking and provide regular reports with detailed analytics."
      },
      {
        question: "Do you offer landing page optimization?",
        answer: "Yes, our professional and enterprise plans include landing page recommendations and optimization to improve conversion rates and campaign performance."
      }
    ],
    caseStudies: [
      {
        title: "B2B Software Company",
        metrics: [
          "450% increase in qualified leads",
          "65% reduction in cost per acquisition",
          "89% improvement in conversion rate"
        ],
        description: "Transformed a struggling Google Ads account into a lead generation powerhouse through strategic keyword targeting and landing page optimization."
      },
      {
        title: "E-commerce Growth",
        metrics: [
          "280% increase in ROAS",
          "42% reduction in CPC",
          "3.5x increase in conversion value"
        ],
        description: "Helped an e-commerce client scale their Google Shopping and Search campaigns to achieve record-breaking sales."
      }
    ]
  },
  "SEO - Search Engine Optimization": {
    hero: {
      title: "Search Engine Optimization",
      description: "Boost your organic search visibility and drive sustainable traffic growth with our comprehensive SEO services. We combine technical expertise with content strategy to improve your search rankings.",
      platforms: ["Google", "Bing", "Local Search", "Mobile Search", "Voice Search"]
    },
    pricing: {
      starter: {
        price: "$799/month",
        features: [
          "Technical SEO audit",
          "Keyword research",
          "On-page optimization",
          "Monthly reporting",
          "Basic link building",
          "Content recommendations"
        ]
      },
      professional: {
        price: "$1,499/month",
        features: [
          "Advanced technical SEO",
          "Comprehensive keyword strategy",
          "Content creation & optimization",
          "Link building campaign",
          "Local SEO optimization",
          "Competitor analysis",
          "Schema markup implementation",
          "Mobile optimization",
          "Weekly reporting"
        ]
      },
      enterprise: {
        price: "$2,999/month",
        features: [
          "Enterprise-level SEO strategy",
          "Custom content creation",
          "Advanced link building",
          "International SEO",
          "E-commerce optimization",
          "CRO implementation",
          "Technical consulting",
          "Priority support",
          "Custom reporting dashboard"
        ]
      }
    },
    process: [
      {
        title: "Technical Audit & Strategy",
        description: "Comprehensive analysis of your website's technical health and SEO potential.",
        steps: [
          "Site structure analysis",
          "Technical SEO audit",
          "Competitor research",
          "Keyword opportunity analysis",
          "Strategy development"
        ]
      },
      {
        title: "On-Page Optimization",
        description: "Optimize your website's content and structure for better search visibility.",
        steps: [
          "Content optimization",
          "Meta data enhancement",
          "Internal linking strategy",
          "Schema markup implementation",
          "Site speed optimization"
        ]
      },
      {
        title: "Content Development",
        description: "Create and optimize content that ranks and converts.",
        steps: [
          "Content gap analysis",
          "Topic research",
          "Content creation",
          "Existing content optimization",
          "Content promotion"
        ]
      },
      {
        title: "Off-Page SEO",
        description: "Build authority and improve rankings through off-page techniques.",
        steps: [
          "Link building strategy",
          "Digital PR",
          "Social signals",
          "Brand mentions",
          "Local citation building"
        ]
      }
    ],
    benefits: [
      {
        title: "Sustainable Growth",
        description: "Build long-term organic traffic that continues to grow over time.",
        icon: Rocket
      },
      {
        title: "Higher ROI",
        description: "Generate consistent organic traffic without paying for each click.",
        icon: PieChart
      },
      {
        title: "Brand Authority",
        description: "Establish your brand as an authority in your industry.",
        icon: Shield
      },
      {
        title: "Better User Experience",
        description: "Improve your website's usability and conversion potential.",
        icon: Users
      },
      {
        title: "Competitive Edge",
        description: "Stay ahead of competitors in search results.",
        icon: Target
      },
      {
        title: "Data-Driven Results",
        description: "Make informed decisions based on comprehensive analytics.",
        icon: BarChart3
      }
    ],
    faq: [
      {
        question: "How long does it take to see results from SEO?",
        answer: "SEO is a long-term strategy, typically taking 4-6 months to see significant results. However, some improvements can be seen within the first few months of implementation."
      },
      {
        question: "Do you guarantee first page rankings?",
        answer: "We don't guarantee specific rankings as search engines constantly update their algorithms. However, we follow best practices and have a proven track record of improving search visibility."
      },
      {
        question: "What types of reporting do you provide?",
        answer: "We provide detailed monthly reports including rankings, organic traffic, conversions, and technical improvements. Our enterprise clients receive custom dashboards with real-time data."
      },
      {
        question: "Do you follow Google's guidelines?",
        answer: "Yes, we strictly adhere to Google's webmaster guidelines and employ only white-hat SEO techniques to ensure sustainable, long-term results."
      }
    ],
    caseStudies: [
      {
        title: "Healthcare Provider",
        metrics: [
          "325% increase in organic traffic",
          "185% increase in leads",
          "Top 3 rankings for 50+ keywords"
        ],
        description: "Transformed the online presence of a healthcare provider through comprehensive SEO strategy and content optimization."
      },
      {
        title: "E-commerce Success",
        metrics: [
          "450% increase in organic revenue",
          "200+ first page rankings",
          "68% increase in conversion rate"
        ],
        description: "Helped an e-commerce site achieve record organic traffic and sales through technical SEO and content optimization."
      }
    ]
  },
  "Frontend Development": {
    hero: {
      title: "Frontend Development Services",
      description: "Create stunning, responsive, and high-performance web applications with our expert frontend development services. We combine modern technologies with best practices to deliver exceptional user experiences.",
      platforms: ["React", "Vue.js", "Next.js", "TypeScript", "TailwindCSS"]
    },
    pricing: {
      starter: {
        price: "$2,999/project",
        features: [
          "Single page website",
          "Responsive design",
          "Basic animations",
          "Contact form integration",
          "Basic SEO optimization",
          "Cross-browser compatibility",
          "3 rounds of revisions"
        ]
      },
      professional: {
        price: "$5,999/project",
        features: [
          "Multi-page web application",
          "Advanced responsive design",
          "Complex animations",
          "API integration",
          "Performance optimization",
          "Advanced SEO setup",
          "User authentication",
          "CMS integration",
          "5 rounds of revisions"
        ]
      },
      enterprise: {
        price: "Custom Quote",
        features: [
          "Enterprise-scale application",
          "Custom feature development",
          "Advanced state management",
          "Complex integrations",
          "High-performance optimization",
          "CI/CD setup",
          "Testing automation",
          "Custom admin dashboard",
          "Unlimited revisions"
        ]
      }
    },
    process: [
      {
        title: "Discovery & Planning",
        description: "We begin by understanding your business needs and planning the technical architecture.",
        steps: [
          "Requirements gathering",
          "Technical specification",
          "UI/UX planning",
          "Technology stack selection",
          "Project timeline creation"
        ]
      },
      {
        title: "Design & Prototyping",
        description: "Create visual designs and interactive prototypes for your application.",
        steps: [
          "Wireframe creation",
          "UI design",
          "Component architecture",
          "Prototype development",
          "Design system setup"
        ]
      },
      {
        title: "Development & Testing",
        description: "Build and test your application with attention to detail and quality.",
        steps: [
          "Component development",
          "Integration implementation",
          "Responsive testing",
          "Performance optimization",
          "Cross-browser testing"
        ]
      },
      {
        title: "Deployment & Support",
        description: "Launch your application and provide ongoing support and maintenance.",
        steps: [
          "Production deployment",
          "Performance monitoring",
          "Bug fixes",
          "Feature updates",
          "Ongoing maintenance"
        ]
      }
    ],
    benefits: [
      {
        title: "Modern Technology",
        description: "Leverage the latest frontend technologies and frameworks for optimal performance.",
        icon: Rocket
      },
      {
        title: "Responsive Design",
        description: "Ensure your application works perfectly across all devices and screen sizes.",
        icon: Users
      },
      {
        title: "Performance First",
        description: "Optimize for speed and performance to provide the best user experience.",
        icon: BarChart3
      },
      {
        title: "Scalable Architecture",
        description: "Build with scalability in mind to support your future growth.",
        icon: Target
      },
      {
        title: "Security Focus",
        description: "Implement security best practices to protect your application and users.",
        icon: Shield
      },
      {
        title: "Analytics Integration",
        description: "Track user behavior and application performance with detailed analytics.",
        icon: PieChart
      }
    ],
    faq: [
      {
        question: "How long does it take to develop a frontend application?",
        answer: "Development time varies based on complexity. A simple website typically takes 4-6 weeks, while complex applications can take 3-6 months or more. We'll provide a detailed timeline during the discovery phase."
      },
      {
        question: "Do you provide ongoing maintenance?",
        answer: "Yes, we offer various maintenance packages to keep your application up-to-date, secure, and performing optimally. This includes regular updates, bug fixes, and feature enhancements."
      },
      {
        question: "Can you work with our existing design team?",
        answer: "Absolutely! We can collaborate with your internal teams or other agencies. We're experienced in working with design handoffs from various tools like Figma, Adobe XD, or Sketch."
      },
      {
        question: "What technologies do you use?",
        answer: "We specialize in modern JavaScript frameworks like React, Vue.js, and Next.js, along with TypeScript for type safety. We also use modern CSS frameworks like Tailwind CSS for styling."
      }
    ],
    caseStudies: [
      {
        title: "E-commerce Platform Redesign",
        metrics: [
          "45% increase in conversion rate",
          "65% improvement in page load speed",
          "32% reduction in bounce rate"
        ],
        description: "Completely redesigned and rebuilt an e-commerce platform using React and Next.js, resulting in significantly improved performance and user engagement."
      },
      {
        title: "SaaS Dashboard Development",
        metrics: [
          "89% positive user feedback",
          "3x faster data loading",
          "50% reduction in support tickets"
        ],
        description: "Developed a complex SaaS dashboard with real-time data visualization and advanced filtering capabilities."
      }
    ]
  },
  "Backend Development": {
    hero: {
      title: "Backend Development Services",
      description: "Build robust, scalable, and secure backend systems that power your applications. Our backend development services ensure your data and business logic are handled efficiently and reliably.",
      platforms: ["Node.js", "Python", "Java", "AWS", "Azure", "Docker"]
    },
    pricing: {
      starter: {
        price: "$3,999/project",
        features: [
          "Basic API development",
          "Database setup",
          "User authentication",
          "Basic admin panel",
          "API documentation",
          "Security implementation",
          "3 months support"
        ]
      },
      professional: {
        price: "$7,999/project",
        features: [
          "Advanced API development",
          "Complex database architecture",
          "OAuth integration",
          "Advanced admin dashboard",
          "Automated testing",
          "CI/CD pipeline",
          "Performance monitoring",
          "6 months support"
        ]
      },
      enterprise: {
        price: "Custom Quote",
        features: [
          "Microservices architecture",
          "Custom scalability solutions",
          "High availability setup",
          "Load balancing",
          "Advanced security measures",
          "24/7 monitoring",
          "Disaster recovery",
          "1 year support"
        ]
      }
    },
    process: [
      {
        title: "Architecture Planning",
        description: "Design a robust and scalable backend architecture that meets your needs.",
        steps: [
          "Requirements analysis",
          "System architecture design",
          "Database schema planning",
          "API endpoint mapping",
          "Security planning"
        ]
      },
      {
        title: "Development & Integration",
        description: "Build secure and efficient backend systems with proper integration points.",
        steps: [
          "Database implementation",
          "API development",
          "Authentication setup",
          "Third-party integrations",
          "Testing framework setup"
        ]
      },
      {
        title: "Testing & Security",
        description: "Ensure your backend is secure, reliable, and performs well under load.",
        steps: [
          "Unit testing",
          "Integration testing",
          "Security testing",
          "Load testing",
          "Performance optimization"
        ]
      },
      {
        title: "Deployment & Monitoring",
        description: "Deploy your backend and set up proper monitoring and maintenance.",
        steps: [
          "Production deployment",
          "Monitoring setup",
          "Logging implementation",
          "Backup configuration",
          "Documentation completion"
        ]
      }
    ],
    benefits: [
      {
        title: "Scalable Systems",
        description: "Build backends that can handle growth and increasing loads efficiently.",
        icon: Rocket
      },
      {
        title: "Data Security",
        description: "Implement robust security measures to protect sensitive data.",
        icon: Shield
      },
      {
        title: "High Performance",
        description: "Optimize for speed and efficiency in data processing and delivery.",
        icon: BarChart3
      },
      {
        title: "Reliable Infrastructure",
        description: "Create stable and reliable systems with proper error handling.",
        icon: Target
      },
      {
        title: "Easy Integration",
        description: "Build APIs that are easy to integrate with other systems.",
        icon: Users
      },
      {
        title: "Clear Documentation",
        description: "Provide comprehensive documentation for all backend systems.",
        icon: PieChart
      }
    ],
    faq: [
      {
        question: "How do you ensure data security?",
        answer: "We implement industry-standard security practices including encryption, secure authentication, regular security audits, and compliance with data protection regulations."
      },
      {
        question: "Can you handle large-scale applications?",
        answer: "Yes, we design backends with scalability in mind, using microservices architecture, load balancing, and efficient database design to handle high traffic and data volumes."
      },
      {
        question: "What about maintenance and updates?",
        answer: "We provide ongoing maintenance packages that include regular updates, security patches, performance monitoring, and technical support."
      },
      {
        question: "Do you provide API documentation?",
        answer: "Yes, we provide comprehensive API documentation using tools like Swagger/OpenAPI, including detailed endpoint descriptions, request/response examples, and integration guides."
      }
    ],
    caseStudies: [
      {
        title: "Payment Processing System",
        metrics: [
          "99.99% uptime achieved",
          "150ms average response time",
          "100,000+ transactions per day"
        ],
        description: "Developed a highly reliable payment processing backend system handling millions of dollars in transactions monthly."
      },
      {
        title: "Social Platform API",
        metrics: [
          "5 million+ API requests daily",
          "50ms average response time",
          "95% reduction in server costs"
        ],
        description: "Built a scalable API system for a social media platform, handling millions of users and real-time updates."
      }
    ]
  },
  "Full Stack Development": {
    hero: {
      title: "Full Stack Development Services",
      description: "End-to-end web application development combining powerful backends with beautiful frontends. We deliver complete solutions that perfectly align with your business needs.",
      platforms: ["MERN Stack", "MEAN Stack", "Python/Django", "Ruby on Rails", "Cloud Platforms"]
    },
    pricing: {
      starter: {
        price: "$5,999/project",
        features: [
          "Full stack web application",
          "Responsive frontend",
          "RESTful API backend",
          "Database integration",
          "User authentication",
          "Basic admin panel",
          "3 months support"
        ]
      },
      professional: {
        price: "$12,999/project",
        features: [
          "Advanced web application",
          "Complex frontend features",
          "Scalable backend architecture",
          "Advanced database design",
          "OAuth & social login",
          "Advanced admin dashboard",
          "API documentation",
          "6 months support"
        ]
      },
      enterprise: {
        price: "Custom Quote",
        features: [
          "Enterprise-grade application",
          "Custom feature development",
          "Microservices architecture",
          "High availability setup",
          "Advanced security features",
          "Custom integrations",
          "Complete documentation",
          "1 year support"
        ]
      }
    },
    process: [
      {
        title: "Planning & Architecture",
        description: "Comprehensive planning for both frontend and backend systems.",
        steps: [
          "Requirements gathering",
          "System architecture design",
          "Technology stack selection",
          "Database design",
          "UI/UX planning"
        ]
      },
      {
        title: "Frontend Development",
        description: "Build an engaging and responsive user interface.",
        steps: [
          "UI component development",
          "State management setup",
          "API integration",
          "Responsive design",
          "Performance optimization"
        ]
      },
      {
        title: "Backend Development",
        description: "Create a robust and scalable backend system.",
        steps: [
          "API development",
          "Database implementation",
          "Authentication system",
          "Business logic coding",
          "Security implementation"
        ]
      },
      {
        title: "Integration & Deployment",
        description: "Bring everything together and deploy to production.",
        steps: [
          "System integration",
          "Testing & QA",
          "Production deployment",
          "Monitoring setup",
          "Documentation"
        ]
      }
    ],
    benefits: [
      {
        title: "Complete Solution",
        description: "Get everything you need in one package, from frontend to backend.",
        icon: Package
      },
      {
        title: "Seamless Integration",
        description: "Perfect harmony between frontend and backend systems.",
        icon: Target
      },
      {
        title: "Optimized Performance",
        description: "End-to-end optimization for the best possible performance.",
        icon: BarChart3
      },
      {
        title: "Scalable Architecture",
        description: "Built to grow with your business needs.",
        icon: Rocket
      },
      {
        title: "Comprehensive Security",
        description: "Security best practices implemented at all levels.",
        icon: Shield
      },
      {
        title: "Single Point of Contact",
        description: "One team handling all aspects of development.",
        icon: Users
      }
    ],
    faq: [
      {
        question: "How long does full stack development take?",
        answer: "Project timelines vary based on complexity. Simple applications typically take 2-3 months, while complex enterprise solutions can take 6-12 months or more."
      },
      {
        question: "What technology stack do you recommend?",
        answer: "We recommend stacks based on your specific needs, scalability requirements, and team expertise. Popular choices include MERN (MongoDB, Express, React, Node.js) and MEAN (MongoDB, Express, Angular, Node.js) stacks."
      },
      {
        question: "Do you provide source code and documentation?",
        answer: "Yes, you receive full ownership of the source code and comprehensive documentation including setup guides, API documentation, and maintenance instructions."
      },
      {
        question: "Can you take over an existing project?",
        answer: "Yes, we can take over existing projects. We'll start with a thorough code review and gradually implement improvements while maintaining functionality."
      }
    ],
    caseStudies: [
      {
        title: "E-learning Platform",
        metrics: [
          "100,000+ active users",
          "99.9% system availability",
          "40% reduction in loading times"
        ],
        description: "Built a comprehensive e-learning platform with video streaming, interactive quizzes, and real-time progress tracking."
      },
      {
        title: "Real Estate Management System",
        metrics: [
          "500+ properties managed",
          "85% process automation",
          "60% reduction in manual work"
        ],
        description: "Developed a full-featured real estate management system with property listing, tenant management, and payment processing."
      }
    ]
  },
  "Wix Development": {
    hero: {
      title: "Professional Wix Development Services",
      description: "Transform your Wix website into a powerful business tool with our expert Wix development services. We combine Wix's intuitive platform with custom solutions to create unique, high-performing websites.",
      platforms: ["Wix", "Velo by Wix", "Wix Apps", "Custom Integrations", "Mobile Optimization"]
    },
    pricing: {
      starter: {
        price: "$999/project",
        features: [
          "Custom Wix design implementation",
          "Mobile responsiveness",
          "Basic animations",
          "Contact forms setup",
          "Social media integration",
          "Basic SEO setup",
          "2 rounds of revisions"
        ]
      },
      professional: {
        price: "$2,499/project",
        features: [
          "Advanced Wix customization",
          "Custom animations",
          "Dynamic pages",
          "Database collections",
          "E-commerce setup",
          "Advanced SEO optimization",
          "Custom forms & workflows",
          "Payment integration",
          "4 rounds of revisions"
        ]
      },
      enterprise: {
        price: "Custom Quote",
        features: [
          "Complex Wix applications",
          "Custom Velo development",
          "Advanced integrations",
          "Custom API development",
          "Multiple language support",
          "Advanced e-commerce features",
