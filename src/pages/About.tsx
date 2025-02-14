import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Building2, Users, Globe } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
const About = () => {
  return <main className="min-h-screen bg-black text-white font-geist">
      <Header />
      <div className="container pt-16">
        <div className="max-w-4xl mx-auto py-20">
          <div className="text-center space-y-4">
            <span className="px-3 py-1 text-sm font-medium bg-purple-50 text-purple-600 rounded-full">
              Our Story
            </span>
            <h1 className="text-4xl md:text-5xl font-bold">
              About <span className="poppins">Us</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We're passionate about transforming businesses through innovative digital solutions
            </p>
          </div>
          
          <div className="space-y-16 mt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group p-8 rounded-2xl bg-[#222222] border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg">
                <Building2 className="w-12 h-12 mb-4 text-purple-400" />
                <h3 className="text-xl font-semibold mb-2 text-white">Our Story</h3>
                <p className="text-gray-400">Founded with a vision to transform how businesses grow in the digital age.</p>
              </div>
              
              <div className="group p-8 rounded-2xl bg-[#222222] border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg">
                <Users className="w-12 h-12 mb-4 text-purple-400" />
                <h3 className="text-xl font-semibold mb-2 text-white">Our Team</h3>
                <p className="text-gray-400">A diverse group of experts passionate about driving your success.</p>
              </div>
              
              <div className="group p-8 rounded-2xl bg-[#222222] border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg">
                <Globe className="w-12 h-12 mb-4 text-purple-400" />
                <h3 className="text-xl font-semibold mb-2 text-white">Our Reach</h3>
                <p className="text-gray-400">Serving clients globally with innovative solutions and strategies.</p>
              </div>
            </div>

            <div className="bg-black border border-white/10 p-12 rounded-3xl">
              <h2 className="text-3xl font-bold mb-6 text-white">Our Mission</h2>
              <p className="text-gray-400 leading-relaxed text-lg">
                We're dedicated to empowering businesses with cutting-edge solutions that drive growth and innovation. 
                Our mission is to transform challenges into opportunities and help our clients achieve extraordinary results.
              </p>
            </div>

            <div className="py-16 bg-black text-white rounded-3xl px-12">
              <h2 className="text-4xl font-poppins font-bold mb-6 text-[#375CE1]">Meet Our Founders</h2>
              <p className="text-lg mb-12 max-w-3xl text-white/80">
                Our team of skilled professionals is dedicated to delivering excellence in every project. 
                With expertise in digital marketing, content creation, design, development, and business solutions, 
                we ensure your success is our top priority.
              </p>

              <div className="space-y-12">
                <div className="flex items-start gap-8">
                  <Avatar className="w-20 h-20 ring-4 ring-purple-400/20">
                    <AvatarFallback className="bg-purple-800 text-purple-200">DM</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2 text-white">Deepam Modi</h3>
                    <p className="text-lg leading-relaxed text-white">
                      Lead Developer and Technical Architect with expertise in creating scalable solutions
                      and implementing innovative technologies to drive business growth.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-8">
                  <Avatar className="w-20 h-20 ring-4 ring-purple-400/20">
                    <AvatarFallback className="bg-purple-800 text-purple-200">AC</AvatarFallback>
                  </Avatar>
                  <div className="bg-transparent">
                    <h3 className="text-2xl font-semibold mb-2 text-white">Abhishek Chavan</h3>
                    <p className="text-lg leading-relaxed text-white">
                      Creative Director and Strategy Lead focusing on user experience design and
                      developing comprehensive digital strategies for client success.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-8">
                  <Avatar className="w-20 h-20 ring-4 ring-purple-400/20">
                    <AvatarFallback className="bg-purple-800 text-purple-200">RK</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2 text-white">Rohit Kumar</h3>
                    <p className="text-lg leading-relaxed text-white">
                      Business Development Manager specializing in market analysis and strategic partnerships,
                      driving growth through innovative business solutions and client relationships.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6 bg-[#222222] border border-white/10 p-8 rounded-2xl">
                <h2 className="text-3xl font-bold text-white">Our Values</h2>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <span className="text-purple-400 font-semibold text-lg">Innovation</span>
                    <p className="text-gray-400">Constantly pushing boundaries to deliver cutting-edge solutions.</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-purple-400 font-semibold text-lg">Excellence</span>
                    <p className="text-gray-400">Committed to delivering the highest quality in everything we do.</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-purple-400 font-semibold text-lg">Integrity</span>
                    <p className="text-gray-400">Building trust through transparency and honest relationships.</p>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-6 bg-[#222222] border border-white/10 p-8 rounded-2xl">
                <h2 className="text-3xl font-bold text-white">Our Approach</h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  We believe in a collaborative approach, working closely with our clients to understand their unique needs 
                  and challenges. Our solutions are tailored to deliver measurable results and long-term success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>;
};
export default About;