
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const HelpCenter = () => {
  return (
    <main className="min-h-screen bg-black text-white font-geist">
      <Header />
      <div className="container pt-32">
        <h1 className="text-4xl md:text-5xl font-semibold font-poppins text-[#375CE1] mb-6">
          Help Center
        </h1>
        <p className="text-lg text-gray-400">
          Find answers to common questions and get support.
        </p>
      </div>
      <Footer />
    </main>
  );
};

export default HelpCenter;
