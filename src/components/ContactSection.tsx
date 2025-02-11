
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "./ui/use-toast";
import { useState } from "react";

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
    <div className="py-20">
      <div className="container max-w-4xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Input name="name" required placeholder="Name" className="rounded-lg" />
            <Input name="email" type="email" required placeholder="Email" className="rounded-lg" />
          </div>
          <Input name="subject" required placeholder="Subject" className="rounded-lg" />
          <Textarea
            name="message"
            required
            placeholder="Your message"
            className="min-h-[150px] rounded-lg"
          />
          <Button type="submit" size="lg" disabled={isSubmitting} className="w-full rounded-lg">
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </div>
  );
};
