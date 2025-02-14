
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
  return (
    <div className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=2071&auto=format&fit=crop')] opacity-5 blur-2xl mix-blend-luminosity" />
      <div className="container relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-poppins font-semibold mb-16 text-center relative"
        >
          <span className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-xl" />
          <span className="relative bg-gradient-to-r from-[#FF6B6B] via-[#4ECDC4] to-[#375CE1] text-transparent bg-clip-text animate-gradient">
            Trusted by Our Innovators
          </span>
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 bg-black">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-teal-500/30 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-[#222222] p-6 rounded-xl border border-white/20 hover:border-white/30 transition-all">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                <div className="relative z-10">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-white/80 mb-4 group-hover:text-white/90 transition-colors duration-300">
                    {testimonial.content}
                  </p>
                  <div>
                    <p className="font-poppins font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
