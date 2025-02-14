
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Terms = () => {
  return (
    <main className="min-h-screen bg-[#1A1F2C] text-white font-geist">
      <Header />
      <div className="container pt-32">
        <h1 className="text-4xl md:text-5xl font-semibold font-poppins text-[#375CE1] mb-6">
          Terms of Service
        </h1>
        <p className="text-lg text-gray-400">
          Our terms and conditions for using our services.
        </p>
      </div>
      <Footer />
    </main>
  );
};

export default Terms;
