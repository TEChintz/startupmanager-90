
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { AboutSection } from "@/components/AboutSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { FAQSection } from "@/components/FAQSection";
import { ContactCTA } from "@/components/ContactCTA";

const Index = () => {
  return (
    <main className="min-h-screen bg-black text-white font-geist">
      <Header />
      <div className="pt-16">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactCTA />
        <Footer />
      </div>
    </main>
  );
};

export default Index;
