
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";

const Careers = () => {
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Application submitted!",
      description: "We'll review your application and get back to you soon.",
    });
    (e.target as HTMLFormElement).reset();
  };

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
          <h1 className="text-4xl md:text-5xl font-semibold font-poppins text-white mb-6">
            <span className="bg-gradient-to-r from-[#FF6B6B] via-[#4ECDC4] to-[#375CE1] text-transparent bg-clip-text animate-gradient">
              Join Our Team
            </span>
          </h1>
          <p className="text-lg text-gray-400 mb-12">
            Help shape the future of startup success. Submit your application below.
          </p>

          <div className="bg-[#222222] border border-white/20 rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="fullName" className="text-sm font-medium text-gray-300">
                    Full Name *
                  </label>
                  <Input
                    id="fullName"
                    required
                    className="bg-white/10 border-white/20 text-white"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="dob" className="text-sm font-medium text-gray-300">
                    Date of Birth *
                  </label>
                  <Input
                    id="dob"
                    type="date"
                    required
                    className="bg-white/10 border-white/20 text-white"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    className="bg-white/10 border-white/20 text-white"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-300">
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    className="bg-white/10 border-white/20 text-white"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="resume" className="text-sm font-medium text-gray-300">
                  Resume/CV *
                </label>
                <Input
                  id="resume"
                  type="file"
                  required
                  accept=".pdf,.doc,.docx"
                  className="bg-white/10 border-white/20 text-white"
                />
                <p className="text-xs text-gray-400">Accepted formats: PDF, DOC, DOCX</p>
              </div>

              <div className="space-y-2">
                <label htmlFor="coverLetter" className="text-sm font-medium text-gray-300">
                  Cover Letter *
                </label>
                <Textarea
                  id="coverLetter"
                  required
                  className="min-h-[150px] bg-white/10 border-white/20 text-white"
                  placeholder="Tell us why you'd like to join our team..."
                />
              </div>

              <Button type="submit" className="w-full">
                Submit Application
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
      <Footer />
    </main>
  );
};

export default Careers;
