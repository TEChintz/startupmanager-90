
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
      description: "We'll get back to you as soon as possible.",
    });
    
    // Reset form
    const form = e.target as HTMLFormElement;
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <div className="py-20 bg-black">
      <div className="container max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-poppins font-semibold text-white">
            Get In Touch
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
              className="rounded-lg bg-white/10 text-white border-white/20" 
            />
            <Input 
              name="email" 
              type="email" 
              required 
              placeholder="Email" 
              className="rounded-lg bg-white/10 text-white border-white/20" 
            />
          </div>
          <Input 
            name="subject" 
            required 
            placeholder="Subject" 
            className="rounded-lg bg-white/10 text-white border-white/20" 
          />
          <Textarea
            name="message"
            required
            placeholder="Your message"
            className="min-h-[150px] rounded-lg bg-white/10 text-white border-white/20"
          />
          <Button 
            type="submit" 
            size="lg" 
            disabled={isSubmitting} 
            className="w-full rounded-lg bg-white text-black hover:bg-white/90"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </motion.form>
      </div>
    </div>
  );
};
