
import { Monitor, Rocket, BarChart3, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const serviceDetails = [
  {
    icon: <Monitor className="h-8 w-8" />,
    title: "Product Strategy",
    description: "Define your product roadmap and go-to-market strategy",
    features: [
      "Market Analysis & Research",
      "Product Positioning",
      "Feature Prioritization",
      "Competitive Analysis"
    ]
  },
  {
    icon: <Rocket className="h-8 w-8" />,
    title: "Launch Support",
    description: "End-to-end launch planning and execution support",
    features: [
      "Launch Timeline Planning",
      "Marketing Strategy",
      "Press & PR Management",
      "Launch Event Coordination"
    ]
  },
  {
    icon: <BarChart3 className="h-8 w-8" />,
    title: "Growth Optimization",
    description: "Data-driven growth strategies and optimization",
    features: [
      "Analytics Setup",
      "Growth Experiments",
      "Conversion Optimization",
      "Performance Tracking"
    ]
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Team Building",
    description: "Build and scale high-performing teams",
    features: [
      "Talent Acquisition",
      "Team Structure Design",
      "Culture Development",
      "Performance Management"
    ]
  }
];

const Services = () => {
  return (
    <main className="min-h-screen bg-white font-geist">
      {/* Header */}
      <div className="container py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="font-serif italic">Services</span>
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            Comprehensive solutions to help your startup grow and succeed in today's competitive market.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container pb-20">
        <div className="grid md:grid-cols-2 gap-8">
          {serviceDetails.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-xl border border-gray-200 hover:border-gray-300 transition-all"
            >
              <div className="h-14 w-14 bg-black/5 rounded-full flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h2 className="text-2xl font-semibold mb-3">{service.title}</h2>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-black rounded-full" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Ready to transform your startup?
          </h3>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg" className="rounded-lg">
              <Link to="/contact">Get Started</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-lg">
              <Link to="/">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Services;
