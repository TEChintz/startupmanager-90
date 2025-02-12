
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { AuroraBackground } from "./ui/aurora-background";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <AuroraBackground>
      <div className="space-y-8 text-center max-w-4xl mx-auto">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="px-3 py-1 text-sm font-medium bg-black/5 rounded-full inline-block"
        >
          Launching something special? We're here to help
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl font-geist font-bold tracking-tight"
        >
          Your{" "}
          <span 
            className="bg-gradient-to-r from-black via-[#375CE1] to-black text-transparent bg-clip-text"
          >
            Startup Manager
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl text-gray-600 max-w-2xl mx-auto font-geist"
        >
          We help ambitious startups scale from zero to hero with our proven growth strategies and hands-on support.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex gap-4 justify-center items-center"
        >
          <Button size="lg" className="rounded-full">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" className="rounded-full">
            Learn More
          </Button>
        </motion.div>
      </div>
    </AuroraBackground>
  );
};
