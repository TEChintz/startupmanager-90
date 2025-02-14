
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Cookies = () => {
  return (
    <main className="min-h-screen bg-black text-white font-geist">
      <Header />
      <div className="container pt-32">
        <h1 className="text-4xl md:text-5xl font-semibold font-poppins text-[#375CE1] mb-6">
          Cookie Policy
        </h1>
        <p className="text-lg text-gray-400">
          Understanding how we use cookies on our website.
        </p>
      </div>
      <Footer />
    </main>
  );
};

export default Cookies;
