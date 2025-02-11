
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Contact = () => {
  return (
    <main className="min-h-screen bg-white font-geist">
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
