
import { Github, Mail, Twitter } from "lucide-react";
import { Button } from "./ui/button";
import { AuroraBackground } from "./ui/aurora-background";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="w-full relative py-16">
      <AuroraBackground className="absolute inset-0 !h-full" showRadialGradient={false}>
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 to-black/95" />
      </AuroraBackground>
      
      <div className="relative">
        <div className="container grid grid-cols-1 md:grid-cols-4 gap-12 px-8 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h4 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">StartUp Manager</h4>
            <p className="text-gray-400 leading-relaxed">
              Transforming ideas into successful businesses through innovative solutions and strategic guidance.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-xl font-semibold text-white">Resources</h4>
            <nav className="flex flex-col space-y-3">
              <a href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</a>
              <a href="/docs" className="text-gray-400 hover:text-white transition-colors">Documentation</a>
              <a href="/help" className="text-gray-400 hover:text-white transition-colors">Help Center</a>
            </nav>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-xl font-semibold text-white">Legal</h4>
            <nav className="flex flex-col space-y-3">
              <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="/cookies" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
            </nav>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-xl font-semibold text-white">Connect</h4>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/10">
                <Twitter className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/10">
                <Github className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/10">
                <Mail className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
              </Button>
            </div>
            <p className="text-sm text-gray-400">
              Contact us at: <a href="mailto:hello@startupmanager.com" className="hover:text-white transition-colors">hello@startupmanager.com</a>
            </p>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="container mt-12 pt-8 px-8 max-w-7xl mx-auto border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">© 2025 StartUp Manager. All rights reserved.</p>
            <p className="text-sm mt-4 md:mt-0 text-gray-400">Made with ❤️ by StartUp Manager Team</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
