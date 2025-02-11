
import { Globe, Code, Building2, Film, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Digital Marketing",
    description: "Comprehensive digital marketing solutions to boost your online presence",
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "Web Development",
    description: "Custom web development solutions for your business needs",
  },
  {
    icon: <Building2 className="h-6 w-6" />,
    title: "Company Registration",
    description: "Professional business registration and auditing services",
  },
  {
    icon: <Film className="h-6 w-6" />,
    title: "Content Creation",
    description: "Creative content solutions for your brand",
  },
];

export const ServicesSection = () => {
  return (
    <div className="py-20 overflow-hidden">
      <div className="container">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-geist font-bold">
            Our <span className="font-serif italic">Services</span>
          </h2>
          <Button asChild variant="outline" className="rounded-lg">
            <Link to="/services">
              See All Services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="flex gap-6 animate-scroll">
          {services.concat(services).map((service, index) => (
            <div
              key={index}
              className="flex-none w-[300px] p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-12 w-12 bg-black/5 rounded-full flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-geist font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
