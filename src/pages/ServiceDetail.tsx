
import { useLocation, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, Package, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

export default function ServiceDetail() {
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
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=2071&auto=format&fit=crop')] opacity-5 blur-2xl mix-blend-luminosity" />

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

        {/* Service Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className={`h-16 w-16 ${category.color} rounded-xl flex items-center justify-center`}>
              <div className={category.textColor}>{category.icon}</div>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">{service.name}</h1>
              <p className="text-gray-400">{category.title}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl p-6 border border-white/10 backdrop-blur-xl"
          >
            <p className="text-lg text-gray-300">{service.description}</p>
          </motion.div>
        </div>

        {/* Price Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 px-6 py-4 rounded-xl border border-white/10 backdrop-blur-xl">
            <Package className="h-5 w-5 text-purple-400" />
            <span className="text-xl font-semibold text-white">{service.price}</span>
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold mb-6 relative">
            <span className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-xl" />
            <span className="relative bg-gradient-to-r from-[#FF6B6B] via-[#4ECDC4] to-[#375CE1] text-transparent bg-clip-text">
              Features & Benefits
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {service.features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group relative"
              >
                <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-teal-500/30 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-6 rounded-xl bg-black border border-white/10 backdrop-blur-xl group-hover:border-white/20 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="h-2 w-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mt-2" />
                    <p className="text-gray-300 group-hover:text-white transition-colors">{feature}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Button asChild size="lg" className="rounded-lg group">
            <Link to="/contact">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Button>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}
