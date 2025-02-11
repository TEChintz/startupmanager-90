
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Footer } from "@/components/Footer";
import { Home, Info, Phone, ScrollText } from "lucide-react";
import { Building2, Users, Globe } from "lucide-react";

const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    name: "Services",
    link: "/services",
    icon: <ScrollText className="h-4 w-4" />,
  },
  {
    name: "About",
    link: "/about",
    icon: <Info className="h-4 w-4" />,
  },
  {
    name: "Contact",
    link: "/contact",
    icon: <Phone className="h-4 w-4" />,
  },
];

const About = () => {
  return (
    <main className="min-h-screen bg-white font-geist">
      <FloatingNav navItems={navItems} />
      <div className="container">
        <div className="max-w-4xl mx-auto py-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            About <span className="font-serif italic">Us</span>
          </h1>
          
          <div className="space-y-12 mt-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <Building2 className="w-12 h-12 mx-auto mb-4 text-purple-600" />
                <h3 className="text-xl font-semibold mb-2">Our Story</h3>
                <p className="text-gray-600">Founded with a vision to transform how businesses grow in the digital age.</p>
              </div>
              
              <div className="text-center p-6">
                <Users className="w-12 h-12 mx-auto mb-4 text-purple-600" />
                <h3 className="text-xl font-semibold mb-2">Our Team</h3>
                <p className="text-gray-600">A diverse group of experts passionate about driving your success.</p>
              </div>
              
              <div className="text-center p-6">
                <Globe className="w-12 h-12 mx-auto mb-4 text-purple-600" />
                <h3 className="text-xl font-semibold mb-2">Our Reach</h3>
                <p className="text-gray-600">Serving clients globally with innovative solutions and strategies.</p>
              </div>
            </div>

            <div className="bg-purple-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                We're dedicated to empowering businesses with cutting-edge solutions that drive growth and innovation. 
                Our mission is to transform challenges into opportunities and help our clients achieve extraordinary results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Values</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">Innovation:</span>
                    <span className="text-gray-600">Constantly pushing boundaries to deliver cutting-edge solutions.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">Excellence:</span>
                    <span className="text-gray-600">Committed to delivering the highest quality in everything we do.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">Integrity:</span>
                    <span className="text-gray-600">Building trust through transparency and honest relationships.</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
                <p className="text-gray-600 leading-relaxed">
                  We believe in a collaborative approach, working closely with our clients to understand their unique needs 
                  and challenges. Our solutions are tailored to deliver measurable results and long-term success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default About;
