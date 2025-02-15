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
  }
};

export default function SubServiceDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const { service, category } = location.state || {};

  if (!service || !category) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Header />
        <div className="container py-20 text-center">
          <h1 className="text-2xl mb-4">Service not found</h1>
          <Button asChild variant="outline">
            <Link to="/services">Back to Services</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const details = serviceDetail[service.name as keyof typeof serviceDetail];

  return (
    <main className="min-h-screen bg-black text-white font-geist">
      <Header />
      
      <div className="container py-20">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 group"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to {category.title}
        </motion.button>

        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-white/10 text-sm font-medium text-white inline-block mb-6">
              {category.title}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#FF6B6B] via-[#4ECDC4] to-[#375CE1] text-transparent bg-clip-text animate-gradient">
                {details?.hero.title || service.name}
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              {details?.hero.description || service.description}
            </p>
            {details?.hero.platforms && (
              <div className="flex flex-wrap justify-center gap-4">
                {details.hero.platforms.map((platform, idx) => (
                  <span key={idx} className="px-4 py-2 rounded-full bg-white/5 text-sm font-medium text-white border border-white/10">
                    {platform}
                  </span>
                ))}
              </div>
            )}
          </motion.div>

          {/* Pricing Cards */}
          {details?.pricing && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid md:grid-cols-3 gap-8 mb-32"
            >
              {Object.entries(details.pricing).map(([tier, data], idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-teal-500/30 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative p-8 rounded-xl bg-black border border-white/10 h-full flex flex-col">
                    <div className="mb-8">
                      <h3 className="text-2xl font-semibold mb-4 capitalize">{tier}</h3>
                      <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text mb-6">
                        {data.price}
                      </div>
                      <div className="space-y-4">
                        {data.features.map((feature, featureIdx) => (
                          <div key={featureIdx} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-green-400 shrink-0 mt-1" />
                            <span className="text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <Button 
                      className="mt-auto w-full rounded-lg"
                      asChild
                    >
                      <Link to="/contact">
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* Process Section */}
          {details?.process && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-32"
            >
              <h2 className="text-3xl font-bold mb-16 text-center">Our Process</h2>
              <div className="space-y-16">
                {details.process.map((phase, idx) => (
                  <div key={idx} className="relative">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                      <div className="md:w-1/3">
                        <h3 className="text-2xl font-semibold mb-4">{phase.title}</h3>
                        <p className="text-gray-400">{phase.description}</p>
                      </div>
                      <div className="md:w-2/3 space-y-4">
                        {phase.steps.map((step, stepIdx) => (
                          <div key={stepIdx} className="flex items-start gap-3 bg-white/5 p-4 rounded-lg">
                            <div className="h-6 w-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                              {stepIdx + 1}
                            </div>
                            <span className="text-gray-300">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Benefits Section */}
          {details?.benefits && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-32"
            >
              <h2 className="text-3xl font-bold mb-16 text-center">Benefits</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {details.benefits.map((benefit, idx) => (
                  <div key={idx} className="p-6 rounded-xl bg-white/5 border border-white/10">
                    <benefit.icon className="w-8 h-8 text-purple-400 mb-4" />
                    <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                    <p className="text-gray-400">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Case Studies Section */}
          {details?.caseStudies && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mb-32"
            >
              <h2 className="text-3xl font-bold mb-16 text-center">Success Stories</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {details.caseStudies.map((study, idx) => (
                  <div key={idx} className="p-8 rounded-xl bg-white/5 border border-white/10">
                    <h3 className="text-2xl font-semibold mb-6">{study.title}</h3>
                    <div className="space-y-4 mb-6">
                      {study.metrics.map((metric, metricIdx) => (
                        <div key={metricIdx} className="flex items-center gap-3">
                          <BarChart3 className="w-5 h-5 text-green-400" />
                          <span className="text-gray-300">{metric}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-gray-400">{study.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* FAQ Section */}
          {details?.faq && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mb-32"
            >
              <h2 className="text-3xl font-bold mb-16 text-center">Frequently Asked Questions</h2>
              <div className="space-y-8">
                {details.faq.map((item, idx) => (
                  <div key={idx} className="p-8 rounded-xl bg-white/5 border border-white/10">
                    <h3 className="text-xl font-semibold mb-4 flex items-start gap-3">
                      <AlertCircle className="w-6 h-6 text-purple-400 shrink-0" />
                      {item.question}
                    </h3>
                    <p className="text-gray-400">{item.answer}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-center bg-gradient-to-r from-purple-500/10 to-blue-500/10 p-12 rounded-xl border border-white/10"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Transform your business with our expert {service.name} services. Contact us today to discuss your project and see how we can help you achieve your goals.
            </p>
            <Button asChild size="lg" className="rounded-lg">
              <Link to="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
