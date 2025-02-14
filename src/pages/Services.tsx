import { Monitor, Rocket, BarChart3, Users, Globe, Code, Palette, Building2, Film, Share2, Package, Home, ScrollText, Info, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    name: "Services",
    link: "/services",
    icon: <ScrollText className="h-4 w-4" />,
  },
  {
    name: "About",
    link: "/about",
    icon: <Info className="h-4 w-4" />,
  },
  {
    name: "Contact",
    link: "/contact",
    icon: <Phone className="h-4 w-4" />,
  },
];

const serviceCategories = [
  {
    title: "Digital Marketing",
    icon: <Globe className="h-8 w-8" />,
    color: "bg-red-100",
    textColor: "text-red-600",
    description: "Comprehensive digital marketing solutions to boost your online presence",
    services: [
      {
        name: "Meta Ads - Social Media Advertising",
        description: "Strategic advertising campaigns across Facebook, Instagram, and other Meta platforms to reach your target audience effectively.",
        price: "Starting from $499/month",
        features: [
          "Campaign Strategy Development",
          "Audience Targeting",
          "Ad Creative Design",
          "Performance Monitoring",
          "ROI Optimization"
        ]
      },
      {
        name: "Google Ads - Search & Display",
        description: "Results-driven Google advertising campaigns to increase visibility and drive conversions.",
        price: "Starting from $599/month",
        features: [
          "Keyword Research",
          "Ad Copy Creation",
          "Display Network Campaigns",
          "Conversion Tracking",
          "Budget Management"
        ]
      },
      {
        name: "SEO - Search Engine Optimization",
        description: "Comprehensive SEO services to improve your website's search engine rankings.",
        price: "Starting from $799/month",
        features: [
          "On-page Optimization",
          "Technical SEO Audit",
          "Content Strategy",
          "Link Building",
          "Performance Analytics"
        ]
      }
    ]
  },
  {
    title: "Web Development",
    icon: <Code className="h-8 w-8" />,
    color: "bg-blue-100",
    textColor: "text-blue-600",
    description: "Custom web development solutions for your business needs",
    services: [
      {
        name: "Wix/Shopify Development",
        description: "Professional development services for Wix and Shopify platforms.",
        price: "Starting from $999",
        features: [
          "Custom Theme Development",
          "E-commerce Setup",
          "Payment Integration",
          "Mobile Optimization",
          "Performance Tuning"
        ]
      },
      {
        name: "Full Stack Custom Site",
        description: "End-to-end custom website development tailored to your requirements.",
        price: "Starting from $2,499",
        features: [
          "Custom Design",
          "Frontend Development",
          "Backend Integration",
          "Database Setup",
          "API Development"
        ]
      },
      {
        name: "UI/UX Design",
        description: "User-centered design services to create engaging digital experiences.",
        price: "Starting from $799",
        features: [
          "User Research",
          "Wireframing",
          "Prototyping",
          "Visual Design",
          "Usability Testing"
        ]
      }
    ]
  },
  {
    title: "Company Registration & Auditing",
    icon: <Building2 className="h-8 w-8" />,
    color: "bg-purple-100",
    textColor: "text-purple-600",
    description: "Professional business registration and auditing services",
    services: [
      {
        name: "Company Registration",
        description: "Complete assistance with company registration and documentation.",
        price: "Starting from $399",
        features: [
          "Business Structure Planning",
          "Documentation Preparation",
          "Legal Compliance",
          "Registration Process",
          "Post-registration Support"
        ]
      },
      {
        name: "Yearly Compliances",
        description: "Comprehensive compliance management services.",
        price: "$299/year",
        features: [
          "Annual Returns Filing",
          "Statutory Compliance",
          "Tax Compliance",
          "Regulatory Updates",
          "Documentation Management"
        ]
      },
      {
        name: "Auditing Services",
        description: "Thorough auditing services for business transparency.",
        price: "Starting from $899",
        features: [
          "Financial Audits",
          "Internal Controls Review",
          "Risk Assessment",
          "Compliance Audits",
          "Report Generation"
        ]
      }
    ]
  },
  {
    title: "Content Creation & Management",
    icon: <Film className="h-8 w-8" />,
    color: "bg-green-100",
    textColor: "text-green-600",
    description: "Creative content solutions for your brand",
    services: [
      {
        name: "Content Creation",
        description: "High-quality content creation services for various platforms.",
        price: "Starting from $299/month",
        features: [
          "Blog Writing",
          "Social Media Content",
          "Copywriting",
          "Email Marketing Content",
          "Brand Storytelling"
        ]
      },
      {
        name: "Professional Video Editing",
        description: "Expert video editing services for engaging content.",
        price: "Starting from $199/video",
        features: [
          "Video Editing",
          "Motion Graphics",
          "Color Grading",
          "Sound Design",
          "Format Optimization"
        ]
      },
      {
        name: "Social Media Management",
        description: "Comprehensive social media management services.",
        price: "Starting from $499/month",
        features: [
          "Content Calendar",
          "Post Scheduling",
          "Community Management",
          "Analytics Reporting",
          "Engagement Strategy"
        ]
      }
    ]
  }
];

const comboPacks = [
  {
    title: "Complete Takeover",
    description: "Full service management for your startup",
    price: "Custom Quote",
    features: ["All Digital Marketing Services", "Web Development", "Content Creation", "Company Management"]
  },
  {
    title: "Medium Takeover",
    description: "Essential services for growing businesses",
    price: "Custom Quote",
    features: ["Selected Marketing Services", "Basic Web Presence", "Content Support", "Compliance Management"]
  },
  {
    title: "Minimal Takeover",
    description: "Core services to get you started",
    price: "Custom Quote",
    features: ["Basic Marketing Setup", "Website Template", "Basic Content", "Registration Support"]
  }
];

const GlowingBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -inset-[10px] opacity-50">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-purple-500/30 blur-[100px]" />
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-500/30 blur-[100px]" />
        <div className="absolute top-1/2 right-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-teal-500/30 blur-[100px]" />
      </div>
    </div>
  );
};

const ServiceCard = ({ category }: { category: typeof serviceCategories[0] }) => {
  const navigate = useNavigate();
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["0 1", "1.2 1"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);

  return (
    <div className="space-y-6">
      <motion.div
        ref={cardRef}
        style={{ opacity, y }}
        className="group relative"
      >
        <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-500/50 via-blue-500/50 to-teal-500/50 rounded-xl blur group-hover:blur-md transition-all duration-500" />
        
        <div className="relative p-8 rounded-xl bg-black border border-white/10 backdrop-blur-xl hover:border-white/20 transition-all">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
          
          <div className="relative mb-6">
            <div className={`h-16 w-16 ${category.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 relative z-10`}>
              <div className={`${category.textColor} transform group-hover:rotate-12 transition-transform duration-500`}>
                {category.icon}
              </div>
            </div>
            <div className="absolute inset-0 bg-white/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
          </div>

          <h2 className="text-2xl font-semibold mb-4 text-white relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
            {category.title}
          </h2>
          <p className="text-gray-400 mb-4 relative z-10 group-hover:text-gray-300 transition-colors duration-300">
            {category.description}
          </p>
        </div>
      </motion.div>

      <div className="grid gap-4">
        {category.services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="group relative cursor-pointer"
            onClick={() => navigate(`/services/${category.title.toLowerCase().replace(/\s+/g, '-')}/${service.name.toLowerCase().replace(/\s+/g, '-')}`, {
              state: { service, category }
            })}
          >
            <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-teal-500/30 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative p-4 rounded-lg bg-black border border-white/10 backdrop-blur-xl group-hover:border-white/20 transition-all">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="font-medium text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
                    {service.name}
                  </h3>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 text-gray-400 transform group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  
  return (
    <main className="min-h-screen bg-black text-white font-geist relative overflow-hidden">
      <GlowingBackground />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=2071&auto=format&fit=crop')] opacity-5 blur-2xl mix-blend-luminosity" />
      <Header />
      
      <div className="container py-20 relative" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-white/10 text-sm font-medium text-white inline-block mb-6">
            Transform Your Business
          </span>
          <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-6 relative">
            <span className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-xl" />
            <span className="relative bg-gradient-to-r from-[#FF6B6B] via-[#4ECDC4] to-[#375CE1] text-transparent bg-clip-text animate-gradient">
              Our Services
            </span>
          </h1>
          <p className="text-lg text-gray-400 mb-12">
            Comprehensive solutions to help your startup grow and succeed in today's competitive market
          </p>
        </motion.div>
      </div>

      <div className="container pb-20 relative">
        <div className="grid md:grid-cols-2 gap-8">
          {serviceCategories.map((category, index) => (
            <ServiceCard key={index} category={category} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-poppins font-bold text-center mb-12 relative">
            <span className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-xl" />
            <span className="relative bg-gradient-to-r from-[#FF6B6B] via-[#4ECDC4] to-[#375CE1] text-transparent bg-clip-text animate-gradient">
              All Services Combo Packs
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {comboPacks.map((pack, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-teal-500/30 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-6 rounded-xl bg-black border border-white/10 backdrop-blur-xl hover:border-white/20 transition-all">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                  <div className="relative z-10">
                    <div className="h-12 w-12 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Package className="h-6 w-6 text-purple-400 transform group-hover:rotate-12 transition-transform duration-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
                      {pack.title}
                    </h3>
                    <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
                      {pack.description}
                    </p>
                    <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                      {pack.price}
                    </div>
                    <ul className="space-y-3">
                      {pack.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center gap-2"
                        >
                          <div className="h-1.5 w-1.5 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full" />
                          <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 text-center relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-xl" />
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white relative">
            Ready to transform your startup?
          </h3>
          <div className="flex gap-4 justify-center relative">
            <Button asChild size="lg" className="rounded-lg group">
              <Link to="/contact">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-lg">
              <Link to="/">Learn More</Link>
            </Button>
          </div>
        </motion.div>
      </div>
      <Footer />
    </main>
  );
};

export default Services;
