import { Monitor, Rocket, BarChart3, Users, Globe, Code, Palette, Building2, Film, Share2, Package, Home, ScrollText, Info, Phone } from "lucide-react";
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
import { motion } from "framer-motion";

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

const ServiceCard = ({ category }: { category: typeof serviceCategories[0] }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          whileHover={{ scale: 1.02, translateY: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="p-8 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg hover:border-white/20 transition-all group cursor-pointer relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className={`h-16 w-16 ${category.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative z-10`}>
            <div className={category.textColor}>{category.icon}</div>
          </div>
          <h2 className="text-2xl font-semibold mb-4 text-white relative z-10">{category.title}</h2>
          <p className="text-gray-400 mb-4 relative z-10">{category.description}</p>
          <ul className="space-y-3 relative z-10">
            {category.services.map((service, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <div className="h-1.5 w-1.5 bg-gray-500 rounded-full" />
                <span className="text-gray-400">{service.name}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </DialogTrigger>
      <DialogContent className="max-w-4xl h-[90vh] p-0 gap-0 bg-[#1a1a1a] border border-white/20">
        <DialogHeader className="px-6 py-4 border-b border-white/10">
          <DialogTitle className="text-white">{category.title}</DialogTitle>
          <DialogDescription>{category.description}</DialogDescription>
        </DialogHeader>
        <div className="flex h-[calc(90vh-85px)]">
          <div className="w-72 border-r border-white/10 p-6 bg-black/50">
            <div className={`h-14 w-14 ${category.color} rounded-xl flex items-center justify-center mb-4`}>
              <div className={category.textColor}>{category.icon}</div>
            </div>
            <div className="space-y-2">
              {category.services.map((service, idx) => (
                <div 
                  key={idx}
                  className="px-3 py-2 rounded-lg text-sm hover:bg-white/5 transition-all cursor-pointer text-white"
                >
                  {service.name}
                </div>
              ))}
            </div>
          </div>
          
          <ScrollArea className="flex-1">
            <div className="p-6 space-y-6">
              {category.services.map((service, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  key={idx}
                  className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl border border-white/10 overflow-hidden backdrop-blur-lg"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4 mb-6">
                      <div>
                        <h3 className="text-xl font-semibold text-white">
                          {service.name}
                        </h3>
                        <p className="mt-2 text-gray-400">
                          {service.description}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                        <Package className="h-4 w-4 text-purple-400" />
                        <span className="text-sm font-semibold text-white">
                          {service.price}
                        </span>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-medium text-white">Features & Benefits</h4>
                      <div className="grid gap-3">
                        {service.features.map((feature, featureIdx) => (
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: featureIdx * 0.1 }}
                            key={featureIdx}
                            className="flex items-center gap-3 text-gray-400"
                          >
                            <div className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                            <span className="text-sm">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="px-6 py-4 bg-white/5 flex justify-end">
                    <Button asChild className="rounded-lg">
                      <Link to="/contact">Get Started</Link>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const Services = () => {
  return (
    <main className="min-h-screen bg-black text-white font-geist relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=2071&auto=format&fit=crop')] opacity-5 blur-2xl" />
      <Header />
      <div className="container py-20 relative">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
              <span className="bg-gradient-to-r from-[#FF6B6B] via-[#4ECDC4] to-[#375CE1] text-transparent bg-clip-text animate-gradient">
                Our Services
              </span>
            </h1>
            <p className="text-lg text-gray-400 mb-12">
              Comprehensive solutions to help your startup grow and succeed in today's competitive market
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container pb-20 relative">
        <div className="grid md:grid-cols-2 gap-8">
          {serviceCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard category={category} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-poppins font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-[#FF6B6B] via-[#4ECDC4] to-[#375CE1] text-transparent bg-clip-text animate-gradient">
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
                className="p-6 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg hover:border-white/20 transition-all hover:shadow-lg relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="h-12 w-12 bg-white/5 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Package className="h-6 w-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{pack.title}</h3>
                  <p className="text-gray-400 mb-4">{pack.description}</p>
                  <div className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">{pack.price}</div>
                  <ul className="space-y-3">
                    {pack.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 bg-purple-400 rounded-full" />
                        <span className="text-sm text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
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
          className="mt-20 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
            Ready to transform your startup?
          </h3>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg" className="rounded-lg">
              <Link to="/contact">Get Started</Link>
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
