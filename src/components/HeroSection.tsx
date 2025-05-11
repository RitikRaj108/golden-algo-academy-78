
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Award } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-trading-blue pt-28 pb-24 md:pt-32 md:pb-32">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3')] bg-cover bg-center opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="bg-trading-gold/20 text-trading-gold px-4 py-2 rounded-full text-sm font-medium mb-6 inline-block">
            Registration Closes Soon
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Master <span className="gradient-text">Algorithmic Trading</span> For Consistent Profits
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of successful traders who have transformed their trading approach with our professional algo-trading strategies and education program.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button className="bg-trading-gold hover:bg-trading-gold-light text-white px-8 py-6 text-lg font-medium animate-pulse-glow">
              Start Your Trading Journey
            </Button>
            <Button variant="outline" className="border-trading-gold text-trading-gold hover:bg-trading-gold/10 px-8 py-6 text-lg font-medium">
              Watch Demo
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="flex items-center justify-center bg-white/5 backdrop-blur-sm p-4 rounded-lg">
              <TrendingUp className="text-trading-gold mr-3" size={24} />
              <span className="text-white">High-Profit Strategies</span>
            </div>
            <div className="flex items-center justify-center bg-white/5 backdrop-blur-sm p-4 rounded-lg">
              <Users className="text-trading-gold mr-3" size={24} />
              <span className="text-white">Expert Community</span>
            </div>
            <div className="flex items-center justify-center bg-white/5 backdrop-blur-sm p-4 rounded-lg">
              <Award className="text-trading-gold mr-3" size={24} />
              <span className="text-white">Proven Results</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
