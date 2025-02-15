
import { ContactSection } from "@/components/ContactSection";
import { AppointmentSection } from "@/components/AppointmentSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const Contact = () => {
  return (
    <main className="min-h-screen bg-black text-white font-geist">
      <Header />
      <div className="pt-16">
        <div className="container max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-[#FF6B6B] via-[#4ECDC4] to-[#375CE1] text-transparent bg-clip-text">
              Get in Touch
            </span>
          </h1>
          <div className="grid md:grid-cols-2 gap-12">
            <ContactSection />
            <AppointmentSection />
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default Contact;
