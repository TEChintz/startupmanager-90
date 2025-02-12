
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const Contact = () => {
  return (
    <main className="min-h-screen bg-black text-white font-geist">
      <Header />
      <div className="pt-16">
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
};

export default Contact;
