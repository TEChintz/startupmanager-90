
import { Github, Mail, Twitter } from "lucide-react";
import { Button } from "./ui/button";

export const Footer = () => {
  return (
    <footer className="w-full bg-zinc-50 dark:bg-zinc-900 py-12 border-t">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8 px-8 max-w-7xl mx-auto">
        <div className="space-y-3">
          <h4 className="text-xl font-bold">Company</h4>
          <nav className="flex flex-col space-y-3">
            <a href="/about" className="text-muted-foreground hover:text-primary">About Us</a>
            <a href="/services" className="text-muted-foreground hover:text-primary">Services</a>
            <a href="/careers" className="text-muted-foreground hover:text-primary">Careers</a>
          </nav>
        </div>

        <div className="space-y-3">
          <h4 className="text-xl font-bold">Resources</h4>
          <nav className="flex flex-col space-y-3">
            <a href="/blog" className="text-muted-foreground hover:text-primary">Blog</a>
            <a href="/docs" className="text-muted-foreground hover:text-primary">Documentation</a>
            <a href="/help" className="text-muted-foreground hover:text-primary">Help Center</a>
          </nav>
        </div>

        <div className="space-y-3">
          <h4 className="text-xl font-bold">Legal</h4>
          <nav className="flex flex-col space-y-3">
            <a href="/privacy" className="text-muted-foreground hover:text-primary">Privacy Policy</a>
            <a href="/terms" className="text-muted-foreground hover:text-primary">Terms of Service</a>
            <a href="/cookies" className="text-muted-foreground hover:text-primary">Cookie Policy</a>
          </nav>
        </div>

        <div className="space-y-3">
          <h4 className="text-xl font-bold">Connect</h4>
          <div className="flex space-x-4">
            <Button variant="ghost" size="icon">
              <Twitter className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Contact us at: hello@company.com
          </p>
        </div>
      </div>
      
      <div className="container mt-8 border-t pt-8 px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Company. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-4 md:mt-0">
            Made with ❤️ by Company Team
          </p>
        </div>
      </div>
    </footer>
  );
};
