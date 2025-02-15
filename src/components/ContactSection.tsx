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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6 p-8 rounded-xl bg-white/5 border border-white/10"
    >
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">Send us a Message</h2>
        <p className="text-gray-400">We'll get back to you as soon as possible</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
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
          variant="default"
          className="w-full"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </motion.div>
  );
};
