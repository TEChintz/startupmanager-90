
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Building2, Users, Globe } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";

const About = () => {
  return (
    <main className="min-h-screen bg-black text-white font-geist">
      <Header />
      <div className="container pt-16">
        <div className="max-w-4xl mx-auto py-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-4"
          >
            <span className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full text-white inline-block border border-white/10">
              Our Story
            </span>
            <h1 className="text-4xl md:text-5xl font-bold relative">
              <span className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-xl" />
              <span className="relative">
                About <span className="bg-gradient-to-r from-[#FF6B6B] via-[#4ECDC4] to-[#375CE1] text-transparent bg-clip-text animate-gradient">Us</span>
              </span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              We're passionate about transforming businesses through innovative digital solutions
            </p>
          </motion.div>
          
          <div className="space-y-24 mt-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Building2 className="w-12 h-12 mb-4 text-purple-400" />,
                  title: "Our Story",
                  description: "Founded with a vision to transform how businesses grow in the digital age."
                },
                {
                  icon: <Users className="w-12 h-12 mb-4 text-purple-400" />,
                  title: "Our Team",
                  description: "A diverse group of experts passionate about driving your success."
                },
                {
                  icon: <Globe className="w-12 h-12 mb-4 text-purple-400" />,
                  title: "Our Reach",
                  description: "Serving clients globally with innovative solutions and strategies."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-teal-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all">
                    {item.icon}
                    <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-white/10 p-12 rounded-3xl"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Our Mission</h2>
              <p className="text-gray-400 leading-relaxed text-lg">
                We're dedicated to empowering businesses with cutting-edge solutions that drive growth and innovation. 
                Our mission is to transform challenges into opportunities and help our clients achieve extraordinary results.
              </p>
            </motion.div>

            <div className="py-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold mb-12"
              >
                <span className="bg-gradient-to-r from-[#FF6B6B] via-[#4ECDC4] to-[#375CE1] text-transparent bg-clip-text animate-gradient">
                  Meet Our Founders
                </span>
              </motion.h2>

              <div className="space-y-12">
                {[
                  {
                    name: "Deepam Modi",
                    role: "Lead Developer and Technical Architect",
                    description: "Lead Developer and Technical Architect with expertise in creating scalable solutions and implementing innovative technologies to drive business growth.",
                    initials: "DM"
                  },
                  {
                    name: "Abhishek Chavan",
                    role: "Creative Director and Strategy Lead",
                    description: "Creative Director and Strategy Lead focusing on user experience design and developing comprehensive digital strategies for client success.",
                    initials: "AC"
                  },
                  {
                    name: "Rohit Kumar",
                    role: "Business Development Manager",
                    description: "Business Development Manager specializing in market analysis and strategic partnerships, driving growth through innovative business solutions and client relationships.",
                    initials: "RK"
                  }
                ].map((founder, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-8 group relative"
                  >
                    <div className="absolute -inset-6 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    <Avatar className="w-20 h-20 border-2 border-purple-500/20">
                      <AvatarFallback className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 text-white">
                        {founder.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="relative">
                      <h3 className="text-2xl font-semibold mb-1 text-white">{founder.name}</h3>
                      <p className="text-purple-400 mb-2">{founder.role}</p>
                      <p className="text-gray-400 leading-relaxed">
                        {founder.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-6 bg-gradient-to-r from-purple-500/10 to-blue-500/10 p-8 rounded-2xl border border-white/10"
              >
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
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-6 bg-gradient-to-r from-purple-500/10 to-blue-500/10 p-8 rounded-2xl border border-white/10"
              >
                <h2 className="text-3xl font-bold text-white">Our Approach</h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  We believe in a collaborative approach, working closely with our clients to understand their unique needs 
                  and challenges. Our solutions are tailored to deliver measurable results and long-term success.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default About;
