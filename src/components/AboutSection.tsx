import { Building2, Users, Globe } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export const AboutSection = () => {
  return <section className="py-20 bg-black text-white">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }} className="px-3 py-1 text-sm font-medium bg-purple-800/50 text-purple-200 rounded-full">
            Our Story
          </motion.span>
          
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.1
        }} className="text-3xl md:text-4xl font-poppins font-semibold mt-6 mb-4">
            <span className="bg-gradient-to-r from-[#FF6B6B] via-[#4ECDC4] to-[#375CE1] text-transparent bg-clip-text animate-gradient">
              Who We Are
            </span>
          </motion.h2>
          
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }} className="text-lg text-purple-200/80 mb-12">
            A passionate team dedicated to transforming visions into reality
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 bg-black">
            {[{
            icon: <Building2 className="w-12 h-12 mx-auto mb-4 text-purple-300 bg-transparent" />,
            title: "Our Story",
            description: "Founded with a vision to transform how businesses grow in the digital age."
          }, {
            icon: <Users className="w-12 h-12 mx-auto mb-4 text-purple-300" />,
            title: "Our Team",
            description: "A diverse group of experts passionate about driving your success."
          }, {
            icon: <Globe className="w-12 h-12 mx-auto mb-4 text-purple-300" />,
            title: "Our Reach",
            description: "Serving clients globally with innovative solutions and strategies."
          }].map((item, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.3 + index * 0.1
          }} className="p-8 rounded-2xl bg-purple-800/20 border border-purple-500/20 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg backdrop-blur-sm">
                {item.icon}
                <h3 className="text-xl font-poppins font-semibold mb-2 text-purple-200">{item.title}</h3>
                <p className="text-purple-200/80">{item.description}</p>
              </motion.div>)}
          </div>
          
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.6
        }}>
            <Link to="/about">
              <Button size="lg" className="rounded-full text-white bg-neutral-900 hover:bg-neutral-800">
                Learn More About Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>;
};