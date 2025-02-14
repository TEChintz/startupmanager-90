
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Documentation = () => {
  return (
    <main className="min-h-screen bg-black text-white font-geist">
      <Header />
      <div className="container pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-semibold font-poppins mb-6">
            <span className="bg-gradient-to-r from-[#FF6B6B] via-[#4ECDC4] to-[#375CE1] text-transparent bg-clip-text animate-gradient">
              Documentation
            </span>
          </h1>
          <p className="text-lg text-gray-400 mb-8">
            Everything you need to know about our services and how to use them effectively.
          </p>

          <div className="relative mb-12">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder="Search documentation..."
              className="pl-10 bg-white/10 border-white/20 text-white"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#222222] p-6 rounded-xl border border-white/20"
            >
              <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
              <ul className="space-y-3">
                <li className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Introduction to Our Platform
                </li>
                <li className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Quick Start Guide
                </li>
                <li className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Basic Concepts
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#222222] p-6 rounded-xl border border-white/20"
            >
              <h2 className="text-2xl font-semibold mb-4">Core Features</h2>
              <ul className="space-y-3">
                <li className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  User Management
                </li>
                <li className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Analytics & Reporting
                </li>
                <li className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Integration Guide
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-[#222222] p-6 rounded-xl border border-white/20"
            >
              <h2 className="text-2xl font-semibold mb-4">Advanced Topics</h2>
              <ul className="space-y-3">
                <li className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  API Documentation
                </li>
                <li className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Security Best Practices
                </li>
                <li className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Performance Optimization
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-[#222222] p-6 rounded-xl border border-white/20"
            >
              <h2 className="text-2xl font-semibold mb-4">Resources</h2>
              <ul className="space-y-3">
                <li className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  FAQs
                </li>
                <li className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Tutorials & Guides
                </li>
                <li className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Community Forums
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </main>
  );
};

export default Documentation;
