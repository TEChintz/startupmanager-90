
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "./ui/use-toast";
import { useState } from "react";
import { motion } from "framer-motion";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you as soon as possible."
    });

    // Reset form
    const form = e.target as HTMLFormElement;
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <div className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=2071&auto=format&fit=crop')] opacity-5 blur-2xl mix-blend-luminosity" />
      <div className="container max-w-4xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-poppins font-semibold relative">
            <span className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-xl" />
            <span className="relative bg-gradient-to-r from-[#FF6B6B] via-[#4ECDC4] to-[#375CE1] text-transparent bg-clip-text animate-gradient">
              Get In Touch
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <Input
              name="name"
              required
              placeholder="Name"
              className="rounded-lg text-white border-white/20 bg-white/5 backdrop-blur-xl focus:border-white/30 transition-colors"
            />
            <Input
              name="email"
              type="email"
              required
              placeholder="Email"
              className="rounded-lg text-white border-white/20 bg-white/5 backdrop-blur-xl focus:border-white/30 transition-colors"
            />
          </div>
          <Input
            name="subject"
            required
            placeholder="Subject"
            className="rounded-lg text-white border-white/20 bg-white/5 backdrop-blur-xl focus:border-white/30 transition-colors"
          />
          <Textarea
            name="message"
            required
            placeholder="Your message"
            className="min-h-[150px] rounded-lg text-white border-white/20 bg-white/5 backdrop-blur-xl focus:border-white/30 transition-colors"
          />
          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="w-full rounded-lg relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/50 via-blue-500/50 to-teal-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur" />
            <span className="relative">
              {isSubmitting ? "Sending..." : "Send Message"}
            </span>
          </Button>
        </motion.form>
      </div>
    </div>
  );
};
