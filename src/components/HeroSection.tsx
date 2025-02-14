
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { AuroraBackground } from "./ui/aurora-background";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return <div className="min-h-screen bg-black">
      <div className="space-y-8 text-center max-w-4xl mx-auto pt-32 pb-20">
        <motion.span initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }} className="px-3 py-1 text-sm font-medium bg-white/5 rounded-full inline-block text-white">
          Launching something special? We're here to help
        </motion.span>
        
        <motion.h1 initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 0.2
      }} className="text-5xl md:text-7xl font-poppins font-semibold tracking-tight">
          {" "}
          <span className="bg-gradient-to-r from-[#FF6B6B] via-[#4ECDC4] to-[#375CE1] text-transparent bg-clip-text animate-gradient">Your Startup Manager</span>
        </motion.h1>
        
        <motion.p initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 0.4
      }} className="text-xl text-gray-400 max-w-2xl mx-auto font-geist">
          We help ambitious startups scale from zero to hero with our proven growth strategies and hands-on support.
        </motion.p>
        
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 0.6
      }} className="flex gap-4 justify-center items-center">
          <Button asChild size="lg" className="rounded-full">
            <Link to="/contact">Get Started <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full">
            <Link to="/about">Learn More</Link>
          </Button>
        </motion.div>
      </div>
    </div>;
};
