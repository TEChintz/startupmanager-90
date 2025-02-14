import { Star } from "lucide-react";
import { motion } from "framer-motion";
const testimonials = [{
  name: "Sarah Johnson",
  role: "CEO at TechStart",
  content: "StartUp Manager transformed our business. Their strategic guidance was invaluable.",
  rating: 5
}, {
  name: "Michael Chen",
  role: "Founder of GrowthX",
  content: "The best investment we made for our startup. Their team is exceptional.",
  rating: 5
}, {
  name: "Emily Davis",
  role: "CTO at InnovateLabs",
  content: "Their expertise in scaling startups is unmatched. Highly recommended!",
  rating: 5
}];
export const TestimonialsSection = () => {
  return <div className="py-20 bg-black">
      <div className="container">
        <motion.h2 initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5
      }} className="text-3xl md:text-4xl font-poppins font-semibold mb-16 text-center">
          <span className="bg-gradient-to-r from-[#FF6B6B] via-[#4ECDC4] to-[#375CE1] text-transparent bg-clip-text animate-gradient">
            Trusted by Our Innovators
          </span>
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 bg-black">
          {testimonials.map((testimonial, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="flex gap-1 mb-4">
                {Array.from({
              length: testimonial.rating
            }).map((_, i) => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.content}</p>
              <div>
                <p className="font-poppins font-semibold text-black">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </motion.div>)}
        </div>
      </div>
    </div>;
};