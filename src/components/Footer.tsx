
import { Github, Mail, Twitter } from "lucide-react";
import { Button } from "./ui/button";

export const Footer = () => {
  return (
    <footer className="w-full relative py-12 overflow-hidden">
      {/* Background with multi-layered gradient effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-purple-800/20 to-indigo-900/20" />
        <div className="absolute inset-0 bg-[linear-gradient(60deg,#abecd6_0%,#fbed96_100%)] opacity-30" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_40%,transparent_100%)]" />
      </div>
      
      <div className="relative">
        <div className="container grid grid-cols-1 md:grid-cols-4 gap-8 px-8 max-w-7xl mx-auto">
          <div className="space-y-3">
            <h4 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400">
              StartUP Manager
            </h4>
            <nav className="flex flex-col space-y-3">
              <a href="/about" className="text-gray-700 hover:text-purple-600 transition-colors">About Us</a>
              <a href="/services" className="text-gray-700 hover:text-purple-600 transition-colors">Services</a>
              <a href="/careers" className="text-gray-700 hover:text-purple-600 transition-colors">Careers</a>
            </nav>
          </div>

          <div className="space-y-3">
            <h4 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400">
              Resources
            </h4>
            <nav className="flex flex-col space-y-3">
              <a href="/blog" className="text-gray-700 hover:text-purple-600 transition-colors">Blog</a>
              <a href="/docs" className="text-gray-700 hover:text-purple-600 transition-colors">Documentation</a>
              <a href="/help" className="text-gray-700 hover:text-purple-600 transition-colors">Help Center</a>
            </nav>
          </div>

          <div className="space-y-3">
            <h4 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400">
              Legal
            </h4>
            <nav className="flex flex-col space-y-3">
              <a href="/privacy" className="text-gray-700 hover:text-purple-600 transition-colors">Privacy Policy</a>
              <a href="/terms" className="text-gray-700 hover:text-purple-600 transition-colors">Terms of Service</a>
              <a href="/cookies" className="text-gray-700 hover:text-purple-600 transition-colors">Cookie Policy</a>
            </nav>
          </div>

          <div className="space-y-3">
            <h4 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400">
              Connect
            </h4>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-purple-100/50 transition-colors">
                <Twitter className="h-5 w-5 text-indigo-600" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-purple-100/50 transition-colors">
                <Github className="h-5 w-5 text-indigo-600" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-purple-100/50 transition-colors">
                <Mail className="h-5 w-5 text-indigo-600" />
              </Button>
            </div>
            <p className="text-sm text-gray-700">
              Contact us at: hello@startupmanager.com
            </p>
          </div>
        </div>
        
        <div className="container mt-8 pt-8 px-8 max-w-7xl mx-auto border-t border-purple-200/30">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-700">
              © 2024 StartUP Manager. All rights reserved.
            </p>
            <p className="text-sm text-gray-700 mt-4 md:mt-0">
              Made with ❤️ by StartUP Manager Team
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
