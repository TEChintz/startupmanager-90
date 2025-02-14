
import { useLocation, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, Package, ArrowRight, Globe, Code, Building2, Film } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case "Globe":
      return <Globe className="h-8 w-8" />;
    case "Code":
      return <Code className="h-8 w-8" />;
    case "Building2":
      return <Building2 className="h-8 w-8" />;
    case "Film":
      return <Film className="h-8 w-8" />;
    default:
      return <Package className="h-8 w-8" />;
  }
};

export default function ServiceDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const { category } = location.state || {};

  if (!category) {
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

  const getCategoryImage = (title: string) => {
    switch (title) {
      case "Digital Marketing":
        return "https://images.unsplash.com/photo-1605810230434-7631ac76ec81";
      case "Web Development":
        return "https://images.unsplash.com/photo-1461749280684-dccba630e2f6";
      case "Company Registration & Auditing":
        return "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952";
      case "Content Creation & Management":
        return "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d";
      default:
        return "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7";
    }
  };

  return (
    <main className="min-h-screen bg-black text-white font-geist relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-50">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-purple-500/30 blur-[100px]" />
          <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-500/30 blur-[100px]" />
          <div className="absolute top-1/2 right-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-teal-500/30 blur-[100px]" />
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black" />
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${getCategoryImage(category.title)})` }}
      />

      <Header />

      <div className="container py-20 relative">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 group"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Services
        </motion.button>

        {/* Category Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center mb-6">
            <div className={`h-20 w-20 ${category.color} rounded-2xl flex items-center justify-center`}>
              <div className={category.textColor}>
                {getIconComponent(category.iconName)}
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{category.title}</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">{category.description}</p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {category.services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative"
            >
              <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-teal-500/30 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-6 rounded-xl bg-black border border-white/10 backdrop-blur-xl group-hover:border-white/20 transition-all h-full flex flex-col">
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
                    {service.name}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>

                <div className="mt-auto space-y-6">
                  <div className="flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 px-4 py-2 rounded-lg">
                    <Package className="h-4 w-4 text-purple-400" />
                    <span className="text-lg font-medium text-white">{service.price}</span>
                  </div>

                  <div className="space-y-2">
                    {service.features.map((feature, featureIdx) => (
                      <div 
                        key={featureIdx}
                        className="flex items-start gap-2"
                      >
                        <div className="h-2 w-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mt-2" />
                        <span className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    className="w-full rounded-lg group relative overflow-hidden"
                    asChild
                  >
                    <Link to="/contact">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
