
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Privacy = () => {
  return (
    <main className="min-h-screen bg-[#1A1F2C] text-white font-geist">
      <Header />
      <div className="container pt-32">
        <h1 className="text-4xl md:text-5xl font-semibold font-poppins text-[#375CE1] mb-6">
          Privacy Policy
        </h1>
        <p className="text-lg text-gray-400">
          Learn how we protect and handle your data.
        </p>
      </div>
      <Footer />
    </main>
  );
};

export default Privacy;
