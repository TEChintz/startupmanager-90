
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO at TechStart",
    content: "StartUp Manager transformed our business. Their strategic guidance was invaluable.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Founder of GrowthX",
    content: "The best investment we made for our startup. Their team is exceptional.",
    rating: 5,
  },
  {
    name: "Emily Davis",
    role: "CTO at InnovateLabs",
    content: "Their expertise in scaling startups is unmatched. Highly recommended!",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-20 bg-black/5">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-geist font-bold mb-16 text-center">
          Trusted by <span className="font-serif italic">Innovators</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border border-gray-200"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.content}</p>
              <div>
                <p className="font-geist font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
