
import { Monitor, Rocket, BarChart3, Users, Globe, Code, Palette, Building2, Film, Share2, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const serviceCategories = [
  {
    title: "Digital Marketing",
    icon: <Globe className="h-8 w-8" />,
    color: "bg-red-100",
    textColor: "text-red-600",
    services: [
      "Meta Ads - Social Media Advertising",
      "Google Ads - Search & Display",
      "SEO - Search Engine Optimization"
    ]
  },
  {
    title: "Web Development",
    icon: <Code className="h-8 w-8" />,
    color: "bg-blue-100",
    textColor: "text-blue-600",
    services: [
      "Wix/Shopify Development",
      "Full Stack Custom Site",
      "UI/UX Design"
    ]
  },
  {
    title: "Company Registration & Auditing",
    icon: <Building2 className="h-8 w-8" />,
    color: "bg-purple-100",
    textColor: "text-purple-600",
    services: [
      "Company Registration",
      "Yearly Compliances",
      "Auditing Services"
    ]
  },
  {
    title: "Content Creation & Management",
    icon: <Film className="h-8 w-8" />,
    color: "bg-green-100",
    textColor: "text-green-600",
    services: [
      "Content Creation",
      "Professional Video Editing",
      "Social Media Management"
    ]
  }
];

const comboPacks = [
  {
    title: "Complete Takeover",
    description: "Full service management for your startup",
    price: "Custom Quote",
    features: ["All Digital Marketing Services", "Web Development", "Content Creation", "Company Management"]
  },
  {
    title: "Medium Takeover",
    description: "Essential services for growing businesses",
    price: "Custom Quote",
    features: ["Selected Marketing Services", "Basic Web Presence", "Content Support", "Compliance Management"]
  },
  {
    title: "Minimal Takeover",
    description: "Core services to get you started",
    price: "Custom Quote",
    features: ["Basic Marketing Setup", "Website Template", "Basic Content", "Registration Support"]
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
            Comprehensive solutions to help your startup grow and succeed in today's competitive market
          </p>
        </div>
      </div>

      {/* Service Categories */}
      <div className="container pb-20">
        <div className="grid md:grid-cols-2 gap-8">
          {serviceCategories.map((category, index) => (
            <div
              key={index}
              className="p-8 rounded-xl border border-gray-200 hover:border-gray-300 transition-all group"
            >
              <div className={`h-16 w-16 ${category.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <div className={category.textColor}>{category.icon}</div>
              </div>
              <h2 className="text-2xl font-semibold mb-4">{category.title}</h2>
              <ul className="space-y-3">
                {category.services.map((service, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 bg-gray-400 rounded-full" />
                    <span className="text-gray-600">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Combo Packs */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            All Services <span className="font-serif italic">Combo Packs</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {comboPacks.map((pack, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-gray-200 hover:border-gray-300 transition-all hover:shadow-lg"
              >
                <div className="h-12 w-12 bg-black/5 rounded-full flex items-center justify-center mb-4">
                  <Package className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{pack.title}</h3>
                <p className="text-gray-600 mb-4">{pack.description}</p>
                <div className="text-2xl font-bold mb-4">{pack.price}</div>
                <ul className="space-y-3">
                  {pack.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 bg-black rounded-full" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
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
