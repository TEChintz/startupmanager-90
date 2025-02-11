
import { Github, Mail, Twitter } from "lucide-react";
import { Button } from "./ui/button";

export const Footer = () => {
  return (
    <footer className="w-full relative py-12 overflow-hidden">
      {/* Background with gradient and aurora effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50 to-purple-100 opacity-90" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      <div className="absolute inset-0" style={{
        backgroundImage: "radial-gradient(circle at center, rgba(155, 135, 245, 0.05) 0%, transparent 100%)",
        animation: "aurora 60s linear infinite",
      }} />
      
      <div className="relative">
        <div className="container grid grid-cols-1 md:grid-cols-4 gap-8 px-8 max-w-7xl mx-auto">
          <div className="space-y-3">
            <h4 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-900">
              StartUP Manager
            </h4>
            <nav className="flex flex-col space-y-3">
              <a href="/about" className="text-gray-600 hover:text-purple-700 transition-colors">About Us</a>
              <a href="/services" className="text-gray-600 hover:text-purple-700 transition-colors">Services</a>
              <a href="/careers" className="text-gray-600 hover:text-purple-700 transition-colors">Careers</a>
            </nav>
          </div>

          <div className="space-y-3">
            <h4 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-900">
              Resources
            </h4>
            <nav className="flex flex-col space-y-3">
              <a href="/blog" className="text-gray-600 hover:text-purple-700 transition-colors">Blog</a>
              <a href="/docs" className="text-gray-600 hover:text-purple-700 transition-colors">Documentation</a>
              <a href="/help" className="text-gray-600 hover:text-purple-700 transition-colors">Help Center</a>
            </nav>
          </div>

          <div className="space-y-3">
            <h4 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-900">
              Legal
            </h4>
            <nav className="flex flex-col space-y-3">
              <a href="/privacy" className="text-gray-600 hover:text-purple-700 transition-colors">Privacy Policy</a>
              <a href="/terms" className="text-gray-600 hover:text-purple-700 transition-colors">Terms of Service</a>
              <a href="/cookies" className="text-gray-600 hover:text-purple-700 transition-colors">Cookie Policy</a>
            </nav>
          </div>

          <div className="space-y-3">
            <h4 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-900">
              Connect
            </h4>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-purple-100 transition-colors">
                <Twitter className="h-5 w-5 text-purple-600" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-purple-100 transition-colors">
                <Github className="h-5 w-5 text-purple-600" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-purple-100 transition-colors">
                <Mail className="h-5 w-5 text-purple-600" />
              </Button>
            </div>
            <p className="text-sm text-gray-600">
              Contact us at: hello@startupmanager.com
            </p>
          </div>
        </div>
        
        <div className="container mt-8 pt-8 px-8 max-w-7xl mx-auto border-t border-purple-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">
              © 2024 StartUP Manager. All rights reserved.
            </p>
            <p className="text-sm text-gray-600 mt-4 md:mt-0">
              Made with ❤️ by StartUP Manager Team
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
