
import { Globe, Code, Building2, Film, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const services = [
  {
    icon: <Globe className="h-6 w-6 text-red-600" />,
    title: "Digital Marketing",
    description: "Comprehensive digital marketing solutions to boost your online presence",
    color: "bg-red-100",
  },
  {
    icon: <Code className="h-6 w-6 text-blue-600" />,
    title: "Web Development",
    description: "Custom web development solutions for your business needs",
    color: "bg-blue-100",
  },
  {
    icon: <Building2 className="h-6 w-6 text-purple-600" />,
    title: "Company Registration",
    description: "Professional business registration and auditing services",
    color: "bg-purple-100",
  },
  {
    icon: <Film className="h-6 w-6 text-green-600" />,
    title: "Content Creation",
    description: "Creative content solutions for your brand",
    color: "bg-green-100",
  },
];

export const ServicesSection = () => {
  return (
    <div className="py-20 bg-black">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-poppins font-semibold">
            <span className="bg-gradient-to-r from-[#FF6B6B] via-[#4ECDC4] to-[#375CE1] text-transparent bg-clip-text animate-gradient">
              Our Services
            </span>
          </h2>
          <Button asChild variant="outline" className="rounded-lg">
            <Link to="/services">
              See All Services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
        <div className="flex gap-6 animate-scroll">
          {services.concat(services).map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-none w-[300px] p-6 rounded-xl bg-[#222222] border border-white/10 hover:border-white/20 transition-shadow hover:shadow-md"
            >
              <div className={`h-12 w-12 ${service.color} rounded-full flex items-center justify-center mb-4`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-poppins font-semibold mb-2 text-white">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
