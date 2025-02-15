
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer comprehensive startup management services including business strategy, product development, marketing, and growth consulting."
    },
    {
      question: "How long does it typically take to see results?",
      answer: "While every startup is unique, our clients typically start seeing measurable results within 3-6 months of implementing our strategies."
    },
    {
      question: "Do you work with early-stage startups?",
      answer: "Yes, we work with startups at all stages, from idea validation to growth and scaling phases."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We have expertise across various industries including tech, e-commerce, healthcare, and fintech, but our strategies can be adapted to any industry."
    },
    {
      question: "How do you charge for your services?",
      answer: "We offer flexible pricing models based on your needs, from project-based fees to monthly retainers. Contact us for a customized quote."
    }
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-purple-500/30 blur-[100px]" />
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-500/30 blur-[100px]" />
      </div>
      
      <div className="container relative max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full inline-block border border-white/10 mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold font-poppins mb-4 relative">
            <span className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-xl" />
            <span className="relative bg-gradient-to-r from-[#FF6B6B] via-[#4ECDC4] to-[#375CE1] text-transparent bg-clip-text animate-gradient">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Find answers to common questions about our services and how we can help your startup grow.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="group relative rounded-lg border border-white/10 bg-white/5 px-4"
              >
                <AccordionTrigger className="text-left py-4 text-white hover:text-white/90 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-gray-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
