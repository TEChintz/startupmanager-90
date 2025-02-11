
import { Building2, Users, Globe } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export const AboutSection = () => {
  return (
    <section className="py-20 bg-purple-50/50">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <span className="px-3 py-1 text-sm font-medium bg-black/5 rounded-full">
            Our Story
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-6 mb-4">
            Who We <span className="font-serif italic">Are</span>
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            A passionate team dedicated to transforming visions into reality
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="p-8 rounded-2xl bg-white border border-purple-100 hover:border-purple-200 transition-colors shadow-sm hover:shadow-md">
              <Building2 className="w-12 h-12 mx-auto mb-4 text-purple-600" />
              <h3 className="text-xl font-semibold mb-2">Our Story</h3>
              <p className="text-gray-600">Founded with a vision to transform how businesses grow in the digital age.</p>
            </div>
            
            <div className="p-8 rounded-2xl bg-white border border-purple-100 hover:border-purple-200 transition-colors shadow-sm hover:shadow-md">
              <Users className="w-12 h-12 mx-auto mb-4 text-purple-600" />
              <h3 className="text-xl font-semibold mb-2">Our Team</h3>
              <p className="text-gray-600">A diverse group of experts passionate about driving your success.</p>
            </div>
            
            <div className="p-8 rounded-2xl bg-white border border-purple-100 hover:border-purple-200 transition-colors shadow-sm hover:shadow-md">
              <Globe className="w-12 h-12 mx-auto mb-4 text-purple-600" />
              <h3 className="text-xl font-semibold mb-2">Our Reach</h3>
              <p className="text-gray-600">Serving clients globally with innovative solutions and strategies.</p>
            </div>
          </div>
          
          <Link to="/about">
            <Button size="lg" className="rounded-full bg-purple-600 hover:bg-purple-700">
              Learn More About Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
