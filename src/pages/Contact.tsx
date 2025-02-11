
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Home, Info, Phone, ScrollText } from "lucide-react";

const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    name: "Services",
    link: "/services",
    icon: <ScrollText className="h-4 w-4" />,
  },
  {
    name: "About",
    link: "/about",
    icon: <Info className="h-4 w-4" />,
  },
  {
    name: "Contact",
    link: "/contact",
    icon: <Phone className="h-4 w-4" />,
  },
];

const Contact = () => {
  return (
    <main className="min-h-screen bg-white font-geist">
      <FloatingNav navItems={navItems} />
      <div className="container">
        <div className="max-w-3xl mx-auto text-center pt-20 pb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get in <span className="font-serif italic">Touch</span>
          </h1>
          <p className="text-lg text-gray-600">
            Ready to take your business to the next level? Let's discuss how we can help you achieve your goals.
          </p>
        </div>
      </div>
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Contact;
