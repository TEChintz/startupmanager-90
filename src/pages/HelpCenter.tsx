
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Search, Phone, Mail, MessageCircle, BookOpen, LifeBuoy, FileQuestion } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const HelpCenter = () => {
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
              Help Center
            </span>
          </h1>
          <p className="text-lg text-gray-400 mb-8">
            Find answers to common questions or get in touch with our support team.
          </p>

          <div className="relative mb-12">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder="Search for help..."
              className="pl-10 bg-white/10 border-white/20 text-white"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#222222] p-6 rounded-xl border border-white/20 text-center"
            >
              <Phone className="h-8 w-8 mx-auto mb-4 text-purple-300" />
              <h3 className="text-xl font-semibold mb-2">Phone Support</h3>
              <p className="text-gray-400 mb-4">Available Mon-Fri, 9am-5pm EST</p>
              <Button variant="outline" className="w-full">
                Call Us
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#222222] p-6 rounded-xl border border-white/20 text-center"
            >
              <Mail className="h-8 w-8 mx-auto mb-4 text-purple-300" />
              <h3 className="text-xl font-semibold mb-2">Email Support</h3>
              <p className="text-gray-400 mb-4">24/7 Response Time</p>
              <Button variant="outline" className="w-full">
                Email Us
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-[#222222] p-6 rounded-xl border border-white/20 text-center"
            >
              <MessageCircle className="h-8 w-8 mx-auto mb-4 text-purple-300" />
              <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
              <p className="text-gray-400 mb-4">Available 24/7</p>
              <Button variant="outline" className="w-full">
                Start Chat
              </Button>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-[#222222] p-6 rounded-xl border border-white/20"
            >
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <BookOpen className="h-6 w-6" />
                Popular Articles
              </h2>
              <ul className="space-y-3">
                <li className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Getting Started Guide
                </li>
                <li className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Account Settings
                </li>
                <li className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Billing & Subscriptions
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-[#222222] p-6 rounded-xl border border-white/20"
            >
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <FileQuestion className="h-6 w-6" />
                FAQs
              </h2>
              <ul className="space-y-3">
                <li className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  How do I reset my password?
                </li>
                <li className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  What payment methods do you accept?
                </li>
                <li className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  How can I cancel my subscription?
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

export default HelpCenter;
