
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { AuroraBackground } from "./ui/aurora-background";

export const HeroSection = () => {
  return (
    <AuroraBackground>
      <div className="space-y-8 text-center max-w-4xl mx-auto">
        <span className="px-3 py-1 text-sm font-medium bg-black/5 rounded-full">
          Launching something special? We're here to help
        </span>
        <h1 className="text-5xl md:text-7xl font-geist font-bold tracking-tight">
          Your Vision,{" "}
          <span className="font-serif italic font-normal">Our Expertise</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto font-geist">
          We help ambitious startups scale from zero to hero with our proven growth strategies and hands-on support.
        </p>
        <div className="flex gap-4 justify-center items-center">
          <Button size="lg" className="rounded-full">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" className="rounded-full">
            Learn More
          </Button>
        </div>
      </div>
    </AuroraBackground>
  );
};
