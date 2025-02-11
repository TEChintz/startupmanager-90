
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
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Contact;
