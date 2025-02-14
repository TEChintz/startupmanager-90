
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const Privacy = () => {
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
              Privacy Policy
            </span>
          </h1>
          <p className="text-lg text-gray-400 mb-12">
            Last updated: March 15, 2024
          </p>

          <div className="space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
              <p className="text-gray-400">
                We collect information you provide directly to us, including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Name and contact information</li>
                <li>Account credentials</li>
                <li>Payment information</li>
                <li>Communication preferences</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">2. How We Use Your Information</h2>
              <p className="text-gray-400">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Provide and maintain our services</li>
                <li>Process your transactions</li>
                <li>Send you important updates</li>
                <li>Improve our services</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">3. Data Security</h2>
              <p className="text-gray-400">
                We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or destruction. However, no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">4. Your Rights</h2>
              <p className="text-gray-400">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to data processing</li>
              </ul>
            </section>
          </div>
        </motion.div>
      </div>
      <Footer />
    </main>
  );
};

export default Privacy;
