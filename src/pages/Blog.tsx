
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { CalendarDays, Clock, User } from "lucide-react";

const blogPosts = [
  {
    title: "10 Essential Growth Strategies for Startups in 2024",
    excerpt: "Discover the key strategies that successful startups are using to scale their operations and achieve sustainable growth in today's competitive market.",
    author: "Sarah Johnson",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Growth",
    image: "https://images.unsplash.com/photo-1664575601711-67110e027b9b?q=80&w=2071&auto=format&fit=crop"
  },
  {
    title: "The Future of AI in Startup Operations",
    excerpt: "Explore how artificial intelligence is revolutionizing startup operations and what this means for the future of business automation.",
    author: "Michael Chen",
    date: "March 12, 2024",
    readTime: "7 min read",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Building a Strong Company Culture Remotely",
    excerpt: "Learn effective strategies for developing and maintaining a strong company culture in a remote-first work environment.",
    author: "Emily Roberts",
    date: "March 10, 2024",
    readTime: "6 min read",
    category: "Culture",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop"
  }
];

const Blog = () => {
  return (
    <main className="min-h-screen bg-black text-white font-geist">
      <Header />
      <div className="container pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-semibold font-poppins mb-6">
            <span className="bg-gradient-to-r from-[#FF6B6B] via-[#4ECDC4] to-[#375CE1] text-transparent bg-clip-text animate-gradient">
              Blog
            </span>
          </h1>
          <p className="text-lg text-gray-400 mb-12">
            Insights and updates from our team to help you grow your startup.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#222222] rounded-xl overflow-hidden border border-white/20 hover:border-white/30 transition-all duration-300"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 space-y-4">
                  <span className="text-sm font-medium px-3 py-1 rounded-full bg-white/10 text-white">
                    {post.category}
                  </span>
                  <h2 className="text-xl font-semibold text-white hover:text-purple-300 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 text-sm">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <CalendarDays className="w-4 h-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
      <Footer />
    </main>
  );
};

export default Blog;
