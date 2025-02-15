
import { useLocation, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, Package, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

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

  const additionalFeatures = {
    "Meta Ads - Social Media Advertising": {
      whatWeOffer: [
        "Custom audience targeting and segmentation",
        "Creative ad design and copywriting",
        "A/B testing of ad variants",
        "Regular performance optimization",
        "Monthly reporting and analytics",
        "Campaign strategy adjustments",
        "Competitor analysis",
        "Budget optimization"
      ],
      process: [
        "Initial consultation and goal setting",
        "Audience research and targeting setup",
        "Creative development and approval",
        "Campaign launch and monitoring",
        "Performance optimization",
        "Regular reporting and strategy updates"
      ],
      benefits: [
        "Increased brand awareness",
        "Higher engagement rates",
        "Better ROI on ad spend",
        "Detailed audience insights",
        "Improved targeting accuracy",
        "Consistent brand messaging"
      ]
    },
    // ... Add similar detailed information for other services
  };

  const serviceDetails = additionalFeatures[service.name as keyof typeof additionalFeatures] || {
    whatWeOffer: service.features,
    process: ["Initial consultation", "Strategy development", "Implementation", "Monitoring and optimization", "Regular reporting"],
    benefits: ["Improved performance", "Better ROI", "Expert guidance", "Time savings", "Professional results"]
  };

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

        {/* Service Header */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-white/10 text-sm font-medium text-white inline-block mb-6">
              {category.title}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#FF6B6B] via-[#4ECDC4] to-[#375CE1] text-transparent bg-clip-text animate-gradient">
                {service.name}
              </span>
            </h1>
            <p className="text-xl text-gray-400">{service.description}</p>
          </motion.div>

          {/* Price Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 p-8 rounded-xl border border-white/10 mb-16 text-center"
          >
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text mb-4">
              {service.price}
            </div>
            <Button asChild size="lg" className="rounded-lg">
              <Link to="/contact">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          {/* Service Details */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* What We Offer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-semibold mb-6">What We Offer</h2>
              <ul className="space-y-4">
                {serviceDetails.whatWeOffer.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 mt-1" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Our Process */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-semibold mb-6">Our Process</h2>
              <ul className="space-y-4">
                {serviceDetails.process.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="h-5 w-5 rounded-full bg-blue-400/20 text-blue-400 flex items-center justify-center flex-shrink-0 mt-1">
                      {idx + 1}
                    </div>
                    <span className="text-gray-300">{step}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-semibold mb-6">Benefits</h2>
              <ul className="space-y-4">
                {serviceDetails.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-purple-400 mt-2.5" />
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center bg-gradient-to-r from-purple-500/10 to-blue-500/10 p-8 rounded-xl border border-white/10"
          >
            <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
            <p className="text-gray-400 mb-6">
              Contact us today to learn more about how we can help your business grow
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
