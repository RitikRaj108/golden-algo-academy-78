
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Award } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const scrollToRegistration = () => {
    const registrationSection = document.getElementById('registration');
    if (registrationSection) {
      registrationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-trading-blue pt-28 pb-24 md:pt-32 md:pb-32">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1640340434855-6084b1f4901c?ixlib=rb-4.0.3')] bg-cover bg-center opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="gradient-text">Master the Markets</span>
          </motion.h1>
          
          <motion.p 
            className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Stock, Futures & Options Education with personalized mentorship. Transform your trading approach with our professional algorithmic trading strategies.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <Button 
              className="bg-trading-gold hover:bg-trading-gold-light text-white px-8 py-6 text-lg font-medium transition-transform hover:scale-105"
              onClick={scrollToRegistration}
            >
              Start Your Trading Journey
            </Button>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              { icon: <TrendingUp size={24} />, text: "Stock Market Expertise" },
              { icon: <Users size={24} />, text: "Personalized Mentorship" },
              { icon: <Award size={24} />, text: "Algorithmic Trading" }
            ].map((item, index) => (
              <motion.div 
                key={item.text}
                className="flex items-center justify-center bg-white/5 backdrop-blur-sm p-4 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + (index * 0.2) }}
              >
                <div className="text-trading-gold mr-3">{item.icon}</div>
                <span className="text-white">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Trading Imagery Section */}
      <div className="container mx-auto px-4 mt-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "/lovable-uploads/777d3f54-b64f-4c97-a846-6a4280de94ac.png",
            "/lovable-uploads/ae8f5a7b-20bd-4e8c-8696-f94fc274c89f.png",
            "/lovable-uploads/2e7e53af-f626-4036-a1d9-a005894b8ad2.png",
            "/lovable-uploads/e89aa260-25d4-41cb-8353-fa0505594612.png"
          ].map((src, index) => (
            <motion.div 
              key={src}
              className="overflow-hidden rounded-lg h-40 md:h-64"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + (index * 0.2) }}
            >
              <img 
                src={src}
                alt={`Trading Image ${index + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
