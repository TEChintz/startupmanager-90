
import { ContactSection } from "@/components/ContactSection";
import { AppointmentSection } from "@/components/AppointmentSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <main className="min-h-screen bg-black text-white font-geist">
      <Header />
      <div className="pt-16">
        <div className="relative">
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-purple-500/30 blur-[100px]" />
            <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-500/30 blur-[100px]" />
          </div>
          
          {/* Message Section */}
          <section className="relative py-20">
            <div className="container max-w-4xl mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
              >
                <span className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full inline-block border border-white/10 mb-4">
                  Contact Us
                </span>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-[#FF6B6B] via-[#4ECDC4] to-[#375CE1] text-transparent bg-clip-text">
                    Get in Touch
                  </span>
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
              </motion.div>
              <ContactSection />
            </div>
          </section>

          {/* Appointment Section */}
          <section className="relative py-20 bg-white/[0.02]">
            <div className="absolute inset-0">
              <div className="absolute top-1/2 right-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-teal-500/30 blur-[100px]" />
            </div>
            <div className="container max-w-4xl mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
              >
                <span className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full inline-block border border-white/10 mb-4">
                  Schedule Meeting
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-[#FF6B6B] via-[#4ECDC4] to-[#375CE1] text-transparent bg-clip-text">
                    Book an Appointment
                  </span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Choose a convenient time to discuss your project with our team.
                </p>
              </motion.div>
              <AppointmentSection />
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default Contact;
