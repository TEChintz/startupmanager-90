
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const Terms = () => {
  return (
    <main className="min-h-screen bg-black text-white font-geist">
      <Header />
      <div className="container pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-semibold font-poppins mb-6">
            <span className="bg-gradient-to-r from-[#FF6B6B] via-[#4ECDC4] to-[#375CE1] text-transparent bg-clip-text animate-gradient">
              Terms of Service
            </span>
          </h1>
          <p className="text-lg text-gray-400 mb-12">
            Last updated: March 15, 2024
          </p>

          <div className="space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
              <p className="text-gray-400">
                By accessing and using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">2. Use License</h2>
              <p className="text-gray-400">
                We grant you a limited, non-exclusive, non-transferable license to use our services for your personal or business purposes, subject to these terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">3. User Obligations</h2>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Maintain accurate account information</li>
                <li>Protect your account credentials</li>
                <li>Comply with all applicable laws</li>
                <li>Use services responsibly</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">4. Service Modifications</h2>
              <p className="text-gray-400">
                We reserve the right to modify or discontinue our services at any time, with or without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">5. Termination</h2>
              <p className="text-gray-400">
                We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms of Service.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
      <Footer />
    </main>
  );
};

export default Terms;
