import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Building2, Users, Globe, ArrowRight } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return <main className="min-h-screen bg-black text-white font-geist">
      <Header />
      <div className="pt-16 relative">        
        <div className="container relative py-20">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} className="text-center space-y-4">
              <span className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full text-white inline-block border border-white/10">
                About Us
              </span>
              <h1 className="text-4xl md:text-6xl font-bold relative">
                <span className="bg-gradient-to-r from-[#FF6B6B] via-[#4ECDC4] to-[#375CE1] text-transparent bg-clip-text animate-gradient">
                  Transforming <span className="bg-gradient-to-r from-[#FF6B6B] via-[#4ECDC4] to-[#375CE1] text-transparent bg-clip-text animate-gradient">Ideas</span> Into Reality
                </span>
              </h1>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                We're more than just a company – we're your partners in innovation and growth
              </p>
            </motion.div>
            
            <div className="space-y-32 mt-32">
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5
            }} className="relative group">
                <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-teal-500/30 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-12 rounded-3xl bg-[#222222] border border-white/20 hover:border-white/30 transition-all">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                  <div className="relative">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-6 bg-gradient-to-r from-[#FF6B6B] via-[#4ECDC4] to-[#375CE1] text-transparent bg-clip-text">Our Mission</h2>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      We're dedicated to empowering businesses with cutting-edge solutions that drive growth and innovation. 
                      Our mission is to transform challenges into opportunities and help our clients achieve extraordinary results.
                    </p>
                  </div>
                </div>
              </motion.div>

              <div className="space-y-12">
                <motion.h2 initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.5
              }} className="text-3xl md:text-4xl font-semibold text-center mb-16">
                  <span className="bg-gradient-to-r from-[#FF6B6B] via-[#4ECDC4] to-[#375CE1] text-transparent bg-clip-text">
                    Meet Our Team
                  </span>
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-8">
                  {[{
                  name: "Deepam Modi",
                  role: "Lead Developer",
                  description: "Technical architect with expertise in scalable solutions.",
                  initials: "DM"
                }, {
                  name: "Abhishek Chavan",
                  role: "Creative Director",
                  description: "Strategy lead focusing on comprehensive digital solutions.",
                  initials: "AC"
                }, {
                  name: "Rohit Kumar",
                  role: "Business Manager",
                  description: "Specializing in strategic partnerships and growth.",
                  initials: "RK"
                }].map((member, index) => <motion.div key={index} initial={{
                  opacity: 0,
                  y: 20
                }} whileInView={{
                  opacity: 1,
                  y: 0
                }} viewport={{
                  once: true
                }} transition={{
                  duration: 0.5,
                  delay: index * 0.1
                }} className="group relative">
                      <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-teal-500/30 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative p-8 rounded-xl bg-[#222222] border border-white/20 hover:border-white/30 transition-all text-center">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                        <div className="relative">
                          <Avatar className="w-24 h-24 mx-auto mb-6 border-2 border-purple-500/20">
                            <AvatarFallback className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 text-xl text-black">
                              {member.initials}
                            </AvatarFallback>
                          </Avatar>
                          <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
                            {member.name}
                          </h3>
                          <p className="text-purple-400 mb-4">{member.role}</p>
                          <p className="text-gray-400">{member.description}</p>
                        </div>
                      </div>
                    </motion.div>)}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.5
              }} className="group relative">
                  <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-teal-500/30 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative p-8 rounded-xl bg-[#222222] border border-white/20 hover:border-white/30 transition-all h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                    <div className="relative">
                      <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-[#FF6B6B] via-[#4ECDC4] to-[#375CE1] text-transparent bg-clip-text">Our Values</h3>
                      <ul className="space-y-6">
                        <li className="flex items-start gap-4">
                          <span className="text-purple-400 font-semibold">Innovation</span>
                          <p className="text-gray-400">Pushing boundaries with cutting-edge solutions.</p>
                        </li>
                        <li className="flex items-start gap-4">
                          <span className="text-purple-400 font-semibold">Excellence</span>
                          <p className="text-gray-400">Delivering the highest quality in everything.</p>
                        </li>
                        <li className="flex items-start gap-4">
                          <span className="text-purple-400 font-semibold">Integrity</span>
                          <p className="text-gray-400">Building trust through transparency.</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>

                <motion.div initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.5
              }} className="group relative">
                  <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-teal-500/30 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative p-8 rounded-xl bg-[#222222] border border-white/20 hover:border-white/30 transition-all h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                    <div className="relative">
                      <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-[#FF6B6B] via-[#4ECDC4] to-[#375CE1] text-transparent bg-clip-text">Our Approach</h3>
                      <p className="text-gray-400 leading-relaxed mb-8">
                        We believe in a collaborative approach, working closely with our clients to understand their unique needs 
                        and challenges. Our solutions are tailored to deliver measurable results and long-term success.
                      </p>
                      <Link to="/contact">
                        <Button className="group">
                          Get Started
                          <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>;
};

export default About;
