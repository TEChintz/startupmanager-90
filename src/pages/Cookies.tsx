
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const Cookies = () => {
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
              Cookie Policy
            </span>
          </h1>
          <p className="text-lg text-gray-400 mb-12">
            Last updated: March 15, 2024
          </p>

          <div className="space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">1. What Are Cookies</h2>
              <p className="text-gray-400">
                Cookies are small text files that are placed on your computer or mobile device when you visit our website. They help us provide you with a better experience and allow certain features to work.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">2. Types of Cookies We Use</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium mb-2">Essential Cookies</h3>
                  <p className="text-gray-400">
                    These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Performance Cookies</h3>
                  <p className="text-gray-400">
                    These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Functionality Cookies</h3>
                  <p className="text-gray-400">
                    These cookies allow the website to remember choices you make and provide enhanced features.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">3. Managing Cookies</h2>
              <p className="text-gray-400">
                Most web browsers allow you to control cookies through their settings preferences. However, limiting cookies may affect the functionality of our website.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">4. Changes to This Policy</h2>
              <p className="text-gray-400">
                We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last updated" date.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
      <Footer />
    </main>
  );
};

export default Cookies;
