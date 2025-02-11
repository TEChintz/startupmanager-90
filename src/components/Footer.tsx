
import { Github, Mail, Twitter } from "lucide-react";
import { Button } from "./ui/button";
import { AuroraBackground } from "./ui/aurora-background";

export const Footer = () => {
  return (
    <footer className="w-full relative py-12">
      <AuroraBackground
        className="absolute inset-0 !h-full"
        showRadialGradient={false}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-black/50" />
      </AuroraBackground>
      
      <div className="relative">
        <div className="container grid grid-cols-1 md:grid-cols-4 gap-8 px-8 max-w-7xl mx-auto">
          <div className="space-y-3">
            <h4 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-purple-300 to-purple-200">
              StartUP Manager
            </h4>
            <nav className="flex flex-col space-y-3">
              <a href="/about" className="text-purple-100 hover:text-purple-300 transition-colors">About Us</a>
              <a href="/services" className="text-purple-100 hover:text-purple-300 transition-colors">Services</a>
              <a href="/careers" className="text-purple-100 hover:text-purple-300 transition-colors">Careers</a>
            </nav>
          </div>

          <div className="space-y-3">
            <h4 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-purple-300 to-purple-200">
              Resources
            </h4>
            <nav className="flex flex-col space-y-3">
              <a href="/blog" className="text-purple-100 hover:text-purple-300 transition-colors">Blog</a>
              <a href="/docs" className="text-purple-100 hover:text-purple-300 transition-colors">Documentation</a>
              <a href="/help" className="text-purple-100 hover:text-purple-300 transition-colors">Help Center</a>
            </nav>
          </div>

          <div className="space-y-3">
            <h4 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-purple-300 to-purple-200">
              Legal
            </h4>
            <nav className="flex flex-col space-y-3">
              <a href="/privacy" className="text-purple-100 hover:text-purple-300 transition-colors">Privacy Policy</a>
              <a href="/terms" className="text-purple-100 hover:text-purple-300 transition-colors">Terms of Service</a>
              <a href="/cookies" className="text-purple-100 hover:text-purple-300 transition-colors">Cookie Policy</a>
            </nav>
          </div>

          <div className="space-y-3">
            <h4 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-purple-300 to-purple-200">
              Connect
            </h4>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-purple-800/50 transition-colors">
                <Twitter className="h-5 w-5 text-purple-200" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-purple-800/50 transition-colors">
                <Github className="h-5 w-5 text-purple-200" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-purple-800/50 transition-colors">
                <Mail className="h-5 w-5 text-purple-200" />
              </Button>
            </div>
            <p className="text-sm text-purple-200">
              Contact us at: hello@startupmanager.com
            </p>
          </div>
        </div>
        
        <div className="container mt-8 pt-8 px-8 max-w-7xl mx-auto border-t border-purple-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-purple-200">
              © 2024 StartUP Manager. All rights reserved.
            </p>
            <p className="text-sm text-purple-200 mt-4 md:mt-0">
              Made with ❤️ by StartUP Manager Team
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
