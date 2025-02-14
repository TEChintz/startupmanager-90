
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Careers = () => {
  return (
    <main className="min-h-screen bg-[#1A1F2C] text-white font-geist">
      <Header />
      <div className="container pt-32">
        <h1 className="text-4xl md:text-5xl font-semibold font-poppins text-[#375CE1] mb-6">
          Careers
        </h1>
        <p className="text-lg text-gray-400">
          Join our team and help shape the future of startup success.
        </p>
      </div>
      <Footer />
    </main>
  );
};

export default Careers;
